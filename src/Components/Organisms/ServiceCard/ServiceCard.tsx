import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Modal, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';

import { serviceData } from '../../PagesBody/LandingPage/LandingPage';

const useStyles = makeStyles({
  btnsPosition: {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    '@media screen and (min-width: 600px)': {
      justifyContent: 'flex-end',
    },
  },
  btnStyles: {
    borderRadius: 50,
    minWidth: 200,
    paddingTop: 9,
    '@media screen and (min-width: 450px)': {
      '&:first-child': {
        marginRight: 8,
      },
    },
  },
  durationAndPrice: {
    alignItems: 'center',
    paddingBottom: 10,
  },
});

const ServiceCard = (prop: { serviceObject: serviceData }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // TODO: find solution to put different type than for imgUrl
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
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {prop.serviceObject.name}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Stack
              spacing={0.8}
              direction="row"
              className={classes.durationAndPrice}
            >
              <AccessTimeIcon
                sx={{ color: 'text.disabled' }}
                aria-hidden="true"
              />
              <Typography
                variant="subtitle2"
                component="div"
                color="text.disabled"
              >
                {`${prop.serviceObject.duration} h`}
              </Typography>
            </Stack>
            <Stack
              spacing={0.4}
              direction="row"
              className={classes.durationAndPrice}
            >
              <AttachMoneyIcon
                sx={{ color: 'text.disabled' }}
                aria-hidden="true"
              />
              <Typography
                variant="subtitle2"
                component="div"
                color="text.disabled"
              >
                {`${prop.serviceObject.price} zł`}
              </Typography>
            </Stack>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {prop.serviceObject.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.btnsPosition} disableSpacing>
          <Button
            aria-label="more details"
            size="medium"
            className={classes.btnStyles}
            onClick={() => {
              console.log('clicked');
            }}
          >
            Więcej Szczegółów
          </Button>
          <Button
            aria-label="make reservation"
            variant="contained"
            disableElevation
            size="medium"
            startIcon={<CreateIcon fontSize="small" />}
            className={classes.btnStyles}
            onClick={() => {
              handleOpen();
            }}
          >
            Rezerwuj Zabieg
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            MODAL MOCK
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            MODAL MOCK
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ServiceCard;
