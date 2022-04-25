import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useEffect, useState } from 'react';

import BookingModal from '../BookingModal/BookingModal';
import ServiceCardActions from './ServiceCardActions';
import ServiceCardContent from './ServiceCardContent';
import ServiceDetailsModal from './ServiceDetailsModal';
import i18n from '../../../i18n';
import { cardStyles } from './ServiceCardStyles';
import { serviceDataType } from '../../../Types/dbDataTypes';

const ServiceCard = (prop: {
  serviceObject: serviceDataType;
  className?: string;
  uid: string | null;
}) => {
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
      <Card sx={cardStyles}>
        <CardMedia
          component="img"
          height="210"
          image={imgUrl}
          alt={prop.serviceObject.altText2[i18n.language]}
        />
        <ServiceCardContent serviceObject={prop.serviceObject} />
        <ServiceCardActions
          className="service-card"
          handleOpenDetails={handleOpenDetails}
          handleOpen={handleOpen}
        />
      </Card>
      <ServiceDetailsModal
        handleCloseDetails={handleCloseDetails}
        openDetails={openDetails}
        serviceObject={prop.serviceObject}
        handleOpen={handleOpen}
      />
      <BookingModal
        open={open}
        handleClose={handleClose}
        serviceObject={prop.serviceObject}
        uid={prop.uid}
      />
    </>
  );
};

export default ServiceCard;
