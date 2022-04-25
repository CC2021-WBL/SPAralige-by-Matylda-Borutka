import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';

const styles = {
  zIndex: 1000,
  position: 'fixed',
  right: '3%',
  bottom: '2vh',
  transform: 'rotate(180deg)',
  '@media screen and (min-width: 1280px)': {
    right: 'calc((100vw - 1150px) / 2)',
  },
  '@media screen and (min-width: 1300px)': {
    right: 'calc((100vw - 1150px) / 3)',
  },
};

const ScrollButton = (prop: { showBelow: number | boolean }) => {
  const [show, setShow] = useState(prop.showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > prop.showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (prop.showBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });
  const handleClick = () => {
    window['scrollTo']({ top: 0, behavior: 'smooth' });
  };
  return (
    <Box>
      {show && (
        <IconButton onClick={handleClick} sx={styles}>
          <ExpandCircleDownRoundedIcon
            sx={{ fontSize: '3rem', opacity: '0.5' }}
          />
        </IconButton>
      )}
    </Box>
  );
};

export default ScrollButton;
