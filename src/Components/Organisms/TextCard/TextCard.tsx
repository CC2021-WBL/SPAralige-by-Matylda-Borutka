import Card from '@mui/material/Card';
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid #00000061',
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
  const { t } = useTranslation('landingPage');
  return (
    <Card className={classes.card} elevation={0}>
      <CardHeader
        title="Sparalige By Matylda Borutka"
        titleTypographyProps={{
          fontSize: 20,
        }}
        className={classes.title}
      />

      <CardContent>
        <Typography variant="subtitle2">{t('aboutUs.text')}</Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          variant="outlined"
          role="link"
          title="aaa@wp.pl"
          href="mailto:aaa@wp.pl"
        >
          {t('buttons.mail')}
        </Button>

        <Button
          variant="outlined"
          role="link"
          title="+48666-666-666"
          href="tel:+48666666666"
        >
          {t('buttons.phone')}
        </Button>
      </CardActions>
    </Card>
  );
};

export default TextCard;
