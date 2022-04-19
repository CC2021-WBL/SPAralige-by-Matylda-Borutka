import { Box, Grid, Typography } from '@mui/material';

import GraphicAbout from '../../../Assets/graphic-aboutUS.png';

const AboutPage = () => {
  return (
    <main>
      <Grid container>
        <Grid item xs={12} md={7} marginRight={2}>
          {' '}
          <Box>
            <Typography variant="h2">Gabinet SPAralige</Typography>
            <Typography variant="h3">by Matylda Borutka</Typography>
            <Typography variant="body1">
              Gabinet Sparalige działa już do wielu lat. Od momentu założenia
              zadbaliśmy o kondycje tysięcy naszych klientów.{' '}
            </Typography>
            <Typography variant="body1">
              Naszą ambicją bylo awsze tworzyc relaksujący klimat i bezpieczną
              przestrzeń w której łatwo się zrelaksować i zregenerować ..{' '}
            </Typography>
            <Typography variant="body1">
              Specjalizujemy się w głębokich masażach, terapii manualnej. W 2020
              rozszerzyliśmy naszą ofertę o autorskie zabiegi regenerujace ciało
              i duszę.{' '}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            sx={{
              marginTop: 3,

              height: '100%',
              width: '100%',
            }}
            alt="relaxed woman."
            src={GraphicAbout}
          />
        </Grid>
      </Grid>
    </main>
  );
};

export default AboutPage;
