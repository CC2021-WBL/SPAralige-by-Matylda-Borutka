import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import { height } from '@mui/system';

import BannerLG from '../Main-Graphic/bannerLG.png';

function MainGraphic() {
  return (
    <Box>
      <Grid container height={'100%'}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            marginTop: 5,
            backgroundImage: `url(${BannerLG})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            height: 513,
          }}
        ></Grid>
        <Grid item md={5} xs={12} sx={{ margin: 'auto', textAlign: 'center' }}>
          <Typography
            sx={{ color: 'primary.main' }}
            paddingBottom={2}
            variant="h2"
          >
            Zadbaj o siebie
          </Typography>
          <Button variant="contained" disableElevation>
            Znajdź idealny zabieg
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainGraphic;
