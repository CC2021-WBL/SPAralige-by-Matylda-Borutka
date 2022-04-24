import { ExpandLess } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';

const styles = {
  zIndex: 1000,
  position: 'fixed',
  bottom: '2vh',
  bgColor: '#DCDCDC',
  right: '5%',
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
    <div className="dupa">
      {show && (
        <IconButton onClick={handleClick} sx={styles}>
          <ExpandLess />
        </IconButton>
      )}
    </div>
  );
};

export default ScrollButton;
