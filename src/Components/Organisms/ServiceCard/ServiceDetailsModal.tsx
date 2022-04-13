import { Avatar, Modal, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

import ClosingIcon from './ClosingIcon';
import ServiceCardActions from './ServiceCardActions';
import ServiceCardContent from './ServiceCardContent';
import { serviceData } from '../../PagesBody/LandingPage/LandingPage';

const containerStyles = {
  width: '38.75rem',
  height: 'fit-content',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  borderRadius: '1rem',
  padding: '1.875rem',
};

const ServiceDetailsModal = (prop: {
  openDetails: boolean;
  handleCloseDetails: () => void;
  serviceObject: serviceData;
  handleOpen: () => void;
}) => {
  // TODO: find solution to put different type than for image
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [imgUrl, setImgUrl] = useState<any | null>(null);

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
      <Box sx={containerStyles}>
        <ClosingIcon handleCloseDetails={prop.handleCloseDetails} />
        <ServiceCardContent
          serviceObject={prop.serviceObject}
          className="modal-service"
        />
        <Stack flexDirection="row" sx={{ paddingTop: '2.5rem' }}>
          <Avatar
            sx={{
              height: '9.375rem',
              width: '9.375rem',
              margin: '0 1.25rem',
              alignSelf: 'center',
            }}
            src={imgUrl}
            alt={prop.serviceObject.therapist.therapistAltText}
          />
          <Stack>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              fontSize="1rem"
            >
              {`Terapeuta:  ${prop.serviceObject.therapist.firstname} ${prop.serviceObject.therapist.surname}`}
            </Typography>
            <Typography
              paragraph
              color="text.secondary"
              gutterBottom
              variant="subtitle2"
              component="div"
              align="justify"
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
