import {
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footer: {
    padding: '0',
    margin: '0',
    outline: '1px solid red',
  },
  langButton: {
    padding: '0',
    margin: '0 0rem',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      className={classes.footer}
      sx={{ backgroundColor: 'primary.main' }}
    >
      <Stack
        bgcolor="primary.main"
        flexDirection="row"
        height="266px"
        className="wrapper"
        maxWidth="lg"
        sx={{ padding: '0 1rem', margin: '0 auto', flexGrow: '1' }}
      >
        <Grid
          container
          flexDirection="column"
          className="leftSide"
          justifyContent="space-between"
          sx={{ padding: '1rem 0' }}
        >
          <Link
            href="https://github.com/orgs/CC2021-WBL/people"
            color="white"
            underline="none"
            target="_blank"
          >
            <Typography variant="subtitle1">
              DevsOnTheWaves <br /> @2022
            </Typography>
          </Link>
          <Grid item sx={{ border: '2px dotted grey' }}>
            <Button variant="contained" className={classes.langButton}>
              P
            </Button>
            <Button variant="contained" className={classes.langButton}>
              E
            </Button>
            Mock container
          </Grid>
        </Grid>
        <Grid
          container
          className="rightSide"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="space-around"
          // whiteSpace="nowrap"
          sx={{ marginBottom: '2rem', textAlign: 'right' }}
        >
          <Link
            href="https://github.com/orgs/CC2021-WBL/people"
            color={'#fff'}
            underline="none"
            variant="h6"
            target="_blank"
          >
            O nas
          </Link>
          <Link
            href="https://github.com/orgs/CC2021-WBL/people"
            color={'#fff'}
            underline="none"
            variant="h6"
            target="_blank"
          >
            FAQ
          </Link>
          <Link
            href="https://github.com/orgs/CC2021-WBL/people"
            color={'#fff'}
            underline="none"
            variant="h6"
            target="_blank"
          >
            Warunki korzystania z serwisu
          </Link>
          <Link
            href="https://github.com/orgs/CC2021-WBL/people"
            color={'#fff'}
            underline="none"
            variant="h6"
            target="_blank"
          >
            Polityka prywatności
          </Link>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Footer;
