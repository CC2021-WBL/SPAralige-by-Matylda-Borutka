import Card from '@mui/material/Card';
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  title: {
    lineHeight: '2rem',
  },

  cardActions: {
    justifyContent: 'center',
    marginBottom: '1rem',
    gap: '0.5rem',
  },
});

const TextCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title="Sparalige By Matylda Borutka"
        titleTypographyProps={{
          fontSize: 20,
        }}
        className={classes.title}
      />

      <CardContent>
        <Typography variant="subtitle2">
          Nazywam się Matylda Borutka, założyłam własny gabinet 7 lat temu.
          Sparalige to miejsce wyciszenia i, relaksacji i regeneracji fizycznej
          i psychicznej. Stawiamy na indywidualne podejście i głębokie
          rozpoznanie problemu pacjenta. Nie wiesz od czego zacząć? Skontaktuj
          się ze mną, doradzę:
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          variant="outlined"
          role="link"
          title="aaa@wp.pl"
          href="mailto:aaa@wp.pl"
        >
          Napisz maila
        </Button>

        <Button
          variant="outlined"
          role="link"
          title="+48666-666-666"
          href="tel:+48666666666"
        >
          Zadzwoń
        </Button>
      </CardActions>
    </Card>
  );
};

export default TextCard;
