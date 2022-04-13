import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import { Modal } from '@mui/material';
import { useEffect, useState } from 'react';

import ServiceCardActions from './ServiceCardActions';
import ServiceCardContent from './ServiceCardContent';
import ServiceDetailsModal from './ServiceDetailsModal';
import { serviceData } from '../../PagesBody/LandingPage/LandingPage';

const ServiceCard = (prop: { serviceObject: serviceData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openDetails, setOpenDetails] = useState(false);
  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  // TODO: find solution to put different type than for image
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [imgUrl, setImgUrl] = useState<any | null>(null);

  useEffect(() => {
    const getImg = async () => {
      try {
        const response = await fetch(prop.serviceObject.image);
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
    getImg();
  }, []);
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="210"
          image={imgUrl}
          alt={prop.serviceObject.altText}
        />
        <ServiceCardContent serviceObject={prop.serviceObject} />
        <ServiceCardActions
          handleOpenDetails={handleOpenDetails}
          handleOpen={handleOpen}
        />
      </Card>
      <ServiceDetailsModal
        handleCloseDetails={handleCloseDetails}
        openDetails={openDetails}
        serviceObject={prop.serviceObject}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box />
      </Modal>
    </>
  );
};

export default ServiceCard;
