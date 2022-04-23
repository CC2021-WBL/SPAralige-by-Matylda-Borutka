import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import BannerLG from '../../../Assets/bannerLG.png';
import Lines from '../../../Assets/Lines.png';

function MainGraphic() {
  const { t } = useTranslation('landingPage');
  return (
    <Box>
      <Grid container height={'100%'}>
        <Grid item>
          <Box position="absolute" marginTop={29} marginRight={2}>
            {' '}
            <Box
              component="img"
              sx={{
                marginTop: 3,

                height: '100%',
                width: '100%',
              }}
              alt="vawy lines"
              src={Lines}
            />
          </Box>
        </Grid>
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
            {t('title')}
          </Typography>
          <Button
            sx={{ borderRadius: '50px', padding: '15px' }}
            variant="contained"
            disableElevation
            component={Link}
            to={'/services'}
            tabIndex={0}
            aria-label="Services Catalogue"
          >
            {t('subtitle')}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainGraphic;
