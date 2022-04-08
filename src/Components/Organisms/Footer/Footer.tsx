import { Container, Grid, Link, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ backgroundColor: 'primary.main' }}
      style={{ padding: '0rem 1rem', margin: '0' }}
    >
      <Container
        maxWidth="lg"
        style={{ padding: '0', margin: '0 auto', flexGrow: '1' }}
        // padding oraz margin nie dzialaja w srodku sx{}
      >
        <Stack
          bgcolor="primary.main"
          flexDirection="row"
          height="266px"
          // style={{ border: ' 10px solid orange', margin: '0', padding: '0' }}
        >
          <Grid item className="left-side" style={{ padding: '1rem 0' }}>
            <Link
              href="https://github.com/orgs/CC2021-WBL/people"
              color={'white'}
              underline="none"
            >
              DevsOnTheWaves <br /> @2022
            </Link>
          </Grid>
          <Grid
            container
            className="right-side"
            flexDirection="column"
            alignItems="flex-end"
            justifyContent="space-around"
            whiteSpace="nowrap"
          >
            <Link
              href="https://github.com/orgs/CC2021-WBL/people"
              color={'#fff'}
              underline="none"
            >
              O nas
            </Link>
            <Link
              href="https://github.com/orgs/CC2021-WBL/people"
              color={'#fff'}
              underline="none"
            >
              FAQ
            </Link>
            <Link
              href="https://github.com/orgs/CC2021-WBL/people"
              color={'#fff'}
              underline="none"
            >
              Warunki korzystania z serwisu
            </Link>

            <Link
              href="https://github.com/orgs/CC2021-WBL/people"
              color={'#fff'}
              underline="none"
            >
              Polityka prywatności
            </Link>
          </Grid>
        </Stack>
      </Container>
    </Container>
  );
};

export default Footer;
