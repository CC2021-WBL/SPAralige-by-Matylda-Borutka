import { Container, Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Page() {
  const { t, i18n } = useTranslation('common');

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      className="App"
      style={{
        zIndex: 111,
        position: 'absolute',
        color: 'black',
        marginTop: '200px',
      }}
    >
      <div className="App-header">
        <button type="button" onClick={() => changeLanguage('pl')}>
          pl
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          en
        </button>
      </div>
      <div>{t('test2')}</div>
    </div>
  );
}

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
      <Page />
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
            Polityka prywatności
          </Link>
        </Stack>
      </Container>
    </Container>
  );
};

export default Footer;
