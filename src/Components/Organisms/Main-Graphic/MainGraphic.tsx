import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import { height } from '@mui/system';

import BannerLG from '../Main-Graphic/bannerLG.png';

function MainGraphic() {
  return (
    <Box>
      <Grid
        item
        md={12}
        sx={{
          marginTop: 5,
          backgroundImage: `url(${BannerLG})`,
          backgroundSize: '60%',
          backgroundRepeat: 'no-repeat',
          height: 513,
          width: '100%',
        }}
      >
        <Grid container spacing={1} height={'100%'}>
          <Grid item md={7}></Grid>
          <Grid item sx={{ margin: 'auto', textAlign: 'center' }}>
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
      </Grid>
    </Box>
  );
}

export default MainGraphic;
