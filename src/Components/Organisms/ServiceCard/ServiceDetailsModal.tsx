import { Avatar, Modal, Stack, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import ClosingIcon from './ClosingIcon';
import ServiceCardActions from './ServiceCardActions';
import ServiceCardContent from './ServiceCardContent';
import {
  avatarStyles,
  modalContainerStyles,
  modalShortBioStyles,
} from './ServiceCardStyles';
import { db } from '../../../Firebase/firebase';
import { serviceDataType, therapistTypes } from '../../../Types/dbDataTypes';

const ServiceDetailsModal = (prop: {
  openDetails: boolean;
  handleCloseDetails: () => void;
  serviceObject: serviceDataType;
  handleOpen: () => void;
}) => {
  // TODO: find solution to put different type than for image
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [imgUrl, setImgUrl] = useState<any | null>(null);
  const [therapistObject, setTherapistObject] = useState<therapistTypes | null>(
    null,
  );
  const matchesMedia = useMediaQuery('(min-width:650px)');

  useEffect(() => {
    const getTherapistObject = async () => {
      const therapistsRef = doc(
        db,
        'therapists',
        prop.serviceObject.therapist.id,
      );
      try {
        const snapshot = await getDoc(therapistsRef);
        if (!snapshot) {
          throw new Error();
        } else {
          const therapist = snapshot.data() as therapistTypes;
          setTherapistObject(therapist);
          const response = await fetch(therapist.therapistImage);
          if (!response.ok) {
            throw new Error();
          } else {
            const imageBlob = await response.blob();
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = () => {
              const base64data = reader.result;
              setImgUrl(base64data);
            };
          }
        }
      } catch (error) {
        alert('Oops, coś poszło nie tak, spróbuj jescze raz');
      }
    };
    getTherapistObject();
  }, []);

  return (
    <Modal
      open={prop.openDetails}
      onClose={prop.handleCloseDetails}
      aria-labelledby="modal-service-details"
      aria-describedby="modal-more-service-data"
    >
      <Box sx={modalContainerStyles}>
        <ClosingIcon handleCloseDetails={prop.handleCloseDetails} />
        <ServiceCardContent
          serviceObject={prop.serviceObject}
          className="modal-service"
        />
        <Stack
          flexDirection={{ sm: 'column', lg: 'row' }}
          sx={{
            paddingTop: '2rem',
            '@media screen and (max-width: 1200px)': {
              paddingTop: '0',
            },
          }}
        >
          {matchesMedia && therapistObject && (
            <Avatar
              sx={avatarStyles}
              src={imgUrl}
              alt={therapistObject.therapistAltText}
            />
          )}
          <Stack>
            <Typography
              variant="subtitle2"
              component="div"
              fontSize="1rem"
              sx={{ padding: '0.3125rem' }}
            >
              {therapistObject &&
                `Terapeuta:  ${therapistObject.firstname} ${therapistObject.surname}`}
            </Typography>
            <Typography
              paragraph
              color="text.secondary"
              gutterBottom
              variant="subtitle2"
              component="div"
              sx={modalShortBioStyles}
            >
              {therapistObject && therapistObject.shortBio}
            </Typography>
          </Stack>
        </Stack>
        <ServiceCardActions
          className="modal-service-details"
          handleOpen={prop.handleOpen}
          handleOpenDetails={() => console.log()}
        />
      </Box>
    </Modal>
  );
};

export default ServiceDetailsModal;
