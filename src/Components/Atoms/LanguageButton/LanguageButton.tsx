import { Button } from '@mui/material';
import { ReactNode } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  button: {
    minWidth: '2.5rem',
    maxWidth: '2.5rem',
    height: '2.5rem',
    background: '#FFFFFF',
    color: '#00000094',
    borderRadius: '50%',
    boxShadow: 'none',
    '&:active, &:hover, &:focus': {
      background: '#01579B',
      color: '#FFFFFF',
      border: '0.0625rem solid #82B1FF',
    },
  },
});

const LanguageButton = ({ children }: { children: ReactNode }) => {
  const classes = useStyles();
  return (
    <Button className={classes.button} variant="contained">
      {children}
    </Button>
  );
};
export default LanguageButton;
