import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Typography } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{ height: '80px', m: 0, p: 0, justifyContent: 'center' }}
    >
      <Toolbar variant="regular">
        <IconButton
          className="IconButton"
          edge="start"
          aria-label="menu"
          sx={{ mr: 1, color: 'white' }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          textAlign="center"
          sx={{ width: '100%', userSelect: 'none' }}
        >
          SPARALIGE
        </Typography>
        <IconButton sx={{ ml: 2, color: 'white' }}>
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
