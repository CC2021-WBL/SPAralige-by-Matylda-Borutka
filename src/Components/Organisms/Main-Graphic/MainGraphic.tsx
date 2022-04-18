import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';

import BannerLG from '../Main-Graphic/bannerLG.png';
import Lines from '../../../Assets/Lines.png';

function MainGraphic() {
  return (
    <Box>
      <Grid container height={'100%'}>
        <Box position="absolute" marginTop={29}>
          {' '}
          <Box
            component="img"
            sx={{
              marginTop: 3,

              height: '100%',
              width: '100%',
            }}
            alt="relaxed woman."
            src={Lines}
          />
        </Box>
        <Grid item xs={12} md={7}>
          <Box
            component="img"
            sx={{
              marginTop: 3,

              height: '100%',
              width: '100%',
            }}
            alt="relaxed woman."
            src={BannerLG}
          />
        </Grid>

        <Grid item md={5} xs={12} sx={{ margin: 'auto', textAlign: 'center' }}>
          <Typography
            sx={{ color: 'primary.main' }}
            paddingBottom={2}
            variant="h2"
          >
            Zadbaj o siebie
          </Typography>
          <Button variant="contained" disableElevation href="services">
            Znajdź idealny zabieg
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainGraphic;
