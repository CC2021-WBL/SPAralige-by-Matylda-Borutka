import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const useStyles = makeStyles({
  open: {
    transform: 'scale(1, 1)',
    background: 'grey',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  closed: {
    transform: 'scale(1, 0)',
    position: 'absolute',
  },
});

const NavBar = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleHandler = () => {
    setMenuOpen(!menuOpen);
  };

  // let domNode = useClickOutside(() => {
  //   setMenuOpen(false);
  // });
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
          sx={{ mr: 1, color: 'primary.contrastText' }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="primary.contrastText"
          component="div"
          textAlign="center"
          sx={{ width: '100%', userSelect: 'none' }}
        >
          SPARALIGE
        </Typography>
        <div
          onClick={toggleHandler}
          onKeyPress={() => console.log('keyDown')}
          role="button"
          tabIndex={0}
        >
          <IconButton sx={{ ml: 2, color: 'primary.contrastText' }}>
            <MoreVertIcon />
          </IconButton>
          <div className={menuOpen ? classes.open : classes.closed}>
            <div>tutaj</div>
            <div>bedzie</div>
            <div>menu</div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
