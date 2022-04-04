import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';

const ServiceCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="210"
        image={require('../../../Assets/massage.jpg')}
        alt="massage with stones"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Masaż Gorącymi Kamieniami
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Odpręż się chłopie, to tutaj znajdziesz ukojenie. Zapomnij o troskach,
          zapomnij o brzemieniu.. Połóż się i nie myśl o niczym. Odpocznij,
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          size="medium"
          sx={{ borderRadius: 50, minWidth: 200, paddingTop: '9px' }}
          onClick={() => {
            console.log('clicked');
          }}
        >
          Więcej Szczegółów
        </Button>
        <Button
          variant="contained"
          size="medium"
          startIcon={<CreateIcon fontSize="small" />}
          sx={{
            borderRadius: 50,
            minWidth: 200,
            paddingTop: '9px',
          }}
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
