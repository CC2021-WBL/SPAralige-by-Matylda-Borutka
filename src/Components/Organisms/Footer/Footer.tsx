import { Container, Grid, Link, Stack } from '@mui/material';

const Footer = () => {
  const mediaXM = {
    '@media screen and (max-width: 600px)': {
      fontSize: '14px',
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
        height="276px"
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
                fontSize: '12px',
              },
            }}
            target="_blank"
          >
            DevsOnTheWaves <br /> @2022
          </Link>
          <Grid item></Grid>
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
          >
            Polityka prywatności
          </Link>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Footer;
