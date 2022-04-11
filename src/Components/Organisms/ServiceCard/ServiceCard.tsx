import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CreateIcon from '@mui/icons-material/Create';
import { Box } from '@mui/system';
import { Modal } from '@mui/material';
import { useEffect, useState } from 'react';

import ServiceCardContent from './ServiceCardContent';
import ServiceDetailsModal from './ServiceDetailsModal';
import { serviceData } from '../../PagesBody/LandingPage/LandingPage';

const btnStyles = {
  borderRadius: '3.125rem',
  minWidth: '12.5rem',
  paddingTop: '0.5625rem',
  '@media screen and (min-width: 450px)': {
    '&:first-of-type': {
      marginRight: '0.5rem',
    },
  },
};

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
        <CardActions disableSpacing>
          <Button
            aria-label="more details"
            size="medium"
            sx={{ ...btnStyles }}
            onClick={() => {
              handleOpenDetails();
            }}
          >
            Więcej Szczegółów
          </Button>
          <Button
            aria-label="make reservation"
            variant="contained"
            disableElevation
            size="medium"
            startIcon={
              <CreateIcon fontSize="small" sx={{ marginBottom: '4px' }} />
            }
            sx={{ ...btnStyles }}
            onClick={() => {
              handleOpen();
            }}
          >
            Rezerwuj Zabieg
          </Button>
        </CardActions>
      </Card>
      <ServiceDetailsModal
        handleCloseDetails={handleCloseDetails}
        openDetails={openDetails}
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
