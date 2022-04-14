import { Avatar, Modal, Stack, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

import ClosingIcon from './ClosingIcon';
import ServiceCardActions from './ServiceCardActions';
import ServiceCardContent from './ServiceCardContent';
import {
  avatarStyles,
  modalContainerStyles,
  modalShortBioStyles,
} from './ServiceCardStyles';
import { serviceData } from '../../PagesBody/LandingPage/LandingPage';

const ServiceDetailsModal = (prop: {
  openDetails: boolean;
  handleCloseDetails: () => void;
  serviceObject: serviceData;
  handleOpen: () => void;
}) => {
  // TODO: find solution to put different type than for image
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [imgUrl, setImgUrl] = useState<any | null>(null);
  const matchesMedia = useMediaQuery('(min-width:800px)');

  useEffect(() => {
    const getTherapistImg = async () => {
      try {
        const response = await fetch(
          prop.serviceObject.therapist.therapistImage,
        );
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
      } catch (error) {
        console.log(error);
      }
    };
    getTherapistImg();
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
          {matchesMedia && (
            <Avatar
              sx={avatarStyles}
              src={imgUrl}
              alt={prop.serviceObject.therapist.therapistAltText}
            />
          )}
          <Stack>
            <Typography
              variant="subtitle2"
              component="div"
              fontSize="1rem"
              sx={{ padding: '0.3125rem' }}
            >
              {`Terapeuta:  ${prop.serviceObject.therapist.firstname} ${prop.serviceObject.therapist.surname}`}
            </Typography>
            <Typography
              paragraph
              color="text.secondary"
              gutterBottom
              variant="subtitle2"
              component="div"
              sx={modalShortBioStyles}
            >
              {prop.serviceObject.therapist.shortBio}
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
