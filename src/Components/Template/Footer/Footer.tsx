// import LanguageDetector from 'i18next-browser-languagedetector';

import { Container, Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';

import LanguageButton from '../../Atoms/LanguageButton/LanguageButton';

const useStyles = makeStyles({
  button: {
    minWidth: '2.5rem',
    maxWidth: '2.5rem',
    height: '2.5rem',
    background: '#FFFFFF',
    color: '#00000094',
    borderRadius: '50%',
    boxShadow: 'none',
    border: '0.0625rem solid #FFFFFF',
  },
  active: {
    background: '#01579B',
    color: '#FFFFFF',
    border: '0.0625rem solid #82B1FF',
  },
});
const Footer = () => {
  const { t, i18n } = useTranslation('navFooter');
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      className="footer"
      disableGutters
      sx={{
        backgroundColor: 'primary.main',
        marginTop: '1.5rem',
      }}
    >
      <Container
        className="wrapper"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          height: '17.25rem',
        }}
      >
        <Stack
          flexDirection="column"
          className="leftSide"
          justifyContent="space-around"
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
            {
              <>
                <LanguageButton
                  onClick={() => {
                    changeLanguage('pl');
                  }}
                  className={
                    i18n.language === 'pl'
                      ? `${classes.active} ${classes.button}`
                      : classes.button
                  }
                >
                  PL
                </LanguageButton>
                <LanguageButton
                  onClick={() => {
                    changeLanguage('en');
                  }}
                  className={
                    i18n.language === 'en'
                      ? `${classes.active} ${classes.button}`
                      : classes.button
                  }
                >
                  EN
                </LanguageButton>
              </>
            }
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
            tabIndex={0}
            aria-label="about us"
          >
            {t('footer.about')}
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
            {t('footer.terms')}
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
            {t('footer.privacy')}
          </Link>
        </Stack>
      </Container>
    </Container>
  );
};

export default Footer;
