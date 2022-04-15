import { Container, Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import LanguageButton from '../../Atoms/LanguageButton/LanguageButton';

const Footer = () => {
  return (
    <Container
      maxWidth={false}
      className="footer"
      sx={{ backgroundColor: 'primary.main', margin: '24px' }}
    >
      <Stack
        flexDirection="row"
        height="17.25rem"
        justifyContent="space-between"
        className="wrapper"
        maxWidth="lg"
        sx={{ padding: '0 0rem', margin: '0 auto' }}
      >
        <Stack
          flexDirection="column"
          className="leftSide"
          justifyContent="space-between"
          sx={{ padding: '1rem 0 25px 0' }}
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
          <Container
            sx={{
              display: 'flex',
              gap: '0.625rem',
              padding: 0,
              '@media screen and (min-width: 600px)': {
                padding: 0,
              },
            }}
          >
            <LanguageButton>PL</LanguageButton>
            <LanguageButton>EN</LanguageButton>
          </Container>
        </Stack>
        <Stack
          className="rightSide"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="space-between"
          sx={{ marginBottom: '2rem', padding: '1rem 0' }}
        >
          <Link
            component={RouterLink}
            to="/about"
            color="primary.contrastText"
            underline="none"
            variant="body1"
            target="_blank"
            tabIndex={0}
            aria-label="about us"
          >
            O nas
          </Link>
          <Link
            component={RouterLink}
            to="https://github.com/orgs/CC2021-WBL/people"
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
            href="https://github.com/orgs/CC2021-WBL/people"
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
            href="https://github.com/orgs/CC2021-WBL/people"
            color="primary.contrastText"
            underline="none"
            variant="body1"
            target="_blank"
            tabIndex={0}
            aria-label="privacy policy"
          >
            Polityka prywatności
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
