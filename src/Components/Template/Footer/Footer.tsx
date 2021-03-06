import { Container, Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Container
      maxWidth={false}
      className="footer"
      disableGutters
      sx={{
        backgroundColor: 'primary.main',
        marginTop: '2rem',
        zIndex: '100',
      }}
    >
      <Container
        className="wrapper"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          height: '12rem',
        }}
      >
        <Stack
          flexDirection="column"
          className="leftSide"
          justifyContent="space-between"
          sx={{ padding: '1rem 0' }}
        >
          <Link
            href="https://github.com/orgs/CC2021-WBL/people"
            color="primary.contrastText"
            underline="none"
            variant="subtitle2"
            tabIndex={0}
            sx={{
              '@media screen and (max-width: 600px)': {
                fontSize: '0.75rem',
              },
            }}
            target="_blank"
            aria-label="link to Devs On The Waves"
          >
            DevsOnTheWaves <br /> @2022
          </Link>
        </Stack>
        <Stack
          className="rightSide"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="space-between"
          sx={{ padding: '1rem 0' }}
        >
          <Link
            component={RouterLink}
            to="/about"
            color="primary.contrastText"
            underline="none"
            variant="body1"
            tabIndex={0}
            aria-label="about us"
          >
            O nas
          </Link>
          <Link
            href="https://github.com/orgs/CC2021-WBL/"
            color="primary.contrastText"
            underline="none"
            variant="body1"
            target="_blank"
            tabIndex={0}
            aria-label="frequently asked questions"
          >
            FAQ
          </Link>
          <Link
            href="https://github.com/orgs/CC2021-WBL/"
            color="primary.contrastText"
            underline="none"
            variant="body1"
            target="_blank"
            tabIndex={0}
            aria-label="term and conditions"
          >
            Warunki korzystania z serwisu
          </Link>
          <Link
            href="https://github.com/orgs/CC2021-WBL/"
            color="primary.contrastText"
            underline="none"
            variant="body1"
            target="_blank"
            tabIndex={0}
            aria-label="privacy policy"
          >
            Polityka prywatno??ci
          </Link>
        </Stack>
      </Container>
    </Container>
  );
};

export default Footer;
