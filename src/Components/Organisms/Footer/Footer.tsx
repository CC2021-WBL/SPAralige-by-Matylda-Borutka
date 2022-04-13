import { Container, Grid, Link, Stack } from '@mui/material';

const Footer = () => {
  const mediaXM = {
    '@media screen and (max-width: 600px)': {
      fontSize: '0.875rem',
    },
  };
  return (
    <Container
      maxWidth={false}
      className="footer"
      sx={{ backgroundColor: 'primary.main' }}
    >
      <Stack
        flexDirection="row"
        height="17.25rem"
        className="wrapper"
        maxWidth="lg"
        sx={{ padding: '0 0rem', margin: '0 auto' }}
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
        </Grid>
        <Grid
          container
          className="rightSide"
          flexDirection="column"
          justifyContent="space-between"
          sx={{ marginBottom: '2rem', textAlign: 'right', padding: '1rem 0' }}
        >
          <Link
            href="https://github.com/orgs/CC2021-WBL/people"
            color={'primary.contrastText'}
            underline="none"
            variant="body1"
            sx={mediaXM}
            target="_blank"
            tabIndex={0}
            aria-label="about us"
          >
            O nas
            {/* TODO: router link to about us*/}
          </Link>
          <Link
            href="https://github.com/orgs/CC2021-WBL/people"
            color={'primary.contrastText'}
            underline="none"
            variant="body1"
            sx={mediaXM}
            target="_blank"
            tabIndex={0}
            aria-label="frequently asked questions"
          >
            FAQ
          </Link>
          <Link
            href="https://github.com/orgs/CC2021-WBL/people"
            color={'primary.contrastText'}
            underline="none"
            variant="body1"
            sx={mediaXM}
            target="_blank"
            tabIndex={0}
            aria-label="term and conditions"
          >
            Warunki korzystania z serwisu
          </Link>
          <Link
            href="https://github.com/orgs/CC2021-WBL/people"
            color={'primary.contrastText'}
            underline="none"
            variant="body1"
            sx={mediaXM}
            target="_blank"
            tabIndex={0}
            aria-label="privacy policy"
          >
            Polityka prywatności
          </Link>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Footer;
