import { Button } from '@mui/material';
import { ReactNode } from 'react';

// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   button: {
//     minWidth: '2.5rem',
//     maxWidth: '2.5rem',
//     height: '2.5rem',
//     background: '#FFFFFF',
//     color: '#00000094',
//     borderRadius: '50%',
//     boxShadow: 'none',
//     '&:active, &:hover, &:focus': {
//       background: '#01579B',
//       color: '#FFFFFF',
//       border: '0.0625rem solid #82B1FF',
//     },
//     '&.active': {
//       color: 'red',
//     },
//   },
// });

const LanguageButton = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick: () => void;
  className?: any;
}) => {
  // const classes = useStyles();
  return (
    <Button
      // className={
      //   classes.button
      //   // i18n.language === 'pl' ? 'active' : '',
      // }
      className={className}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default LanguageButton;
