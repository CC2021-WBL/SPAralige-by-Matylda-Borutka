import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// import { favicon } from '../../../../public/';

function MainGraphic() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundImage: 'url(https://source.unsplash.com/random/1024x768?sky)',
        backgroundRepeat: 'no-repeat',
        height: 500,
      }}
    >
      lalalay
      <Button variant="contained">Znajdź idealny zabieg</Button>
    </Box>
  );
}

export default MainGraphic;
