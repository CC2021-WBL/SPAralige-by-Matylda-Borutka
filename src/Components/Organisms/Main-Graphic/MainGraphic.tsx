import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Paper, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

// import { favicon } from '../../../../public/';

function MainGraphic() {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random/?sky)',
        backgroundRepeat: 'no-repeat',
        height: 600,
        width: '100%',
      }}
    >
      <Grid container spacing={1} height={'100%'}>
        <Grid item md={6}></Grid>
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
    </Box>
  );
}

export default MainGraphic;
