import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';

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

const ServiceCard = () => {
  const classes = useStyles();

  const service = {
    name: 'Masaż Gorącymi Kamieniami',
    description:
      'Odpręż się chłopie, to tutaj znajdziesz ukojenie. Zapomnij o troskach, zapomnij o brzemieniu.. Połóż się i nie myśl o niczym. Odpocznij,',
    price: 150,
    duration: 1.5,
    imageUrl: require('../../../Assets/massage.jpg'),
    altText: 'massage with stones',
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="210"
        image={service.imageUrl}
        alt={service.altText}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {service.name}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Stack
            spacing={0.8}
            direction="row"
            className={classes.durationAndPrice}
          >
            <AccessTimeIcon sx={{ color: 'text.disabled' }} />
            <Typography
              variant="subtitle2"
              component="div"
              color="text.disabled"
            >
              {`${service.duration} h`}
            </Typography>
          </Stack>
          <Stack
            spacing={0.4}
            direction="row"
            className={classes.durationAndPrice}
          >
            <AttachMoneyIcon sx={{ color: 'text.disabled' }} />
            <Typography
              variant="subtitle2"
              component="div"
              color="text.disabled"
            >
              {`${service.price} zł`}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {service.description}
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
            console.log('clicked');
          }}
        >
          Rezerwuj Zabieg
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
