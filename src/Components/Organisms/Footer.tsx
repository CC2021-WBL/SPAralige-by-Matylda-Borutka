import { makeStyles } from '@mui/material';

import FooterStyled from './FooterStyled';

const useStyles = makeStyles({
  footFirst: {
    background: 'violet',
    '&:hover': { background: 'blue' },
  },
  footSecond: {
    fontSize: '20px',
    color: 'green',
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <FooterStyled>
      <div className={classes.footFirst}>FooterFooter</div>
      <div className={classes.footSecond}>
        <div>O nas</div>
        <div>FAQ</div>
        <div>Warunki korzystania z serwisu</div>
        <div>Polityka prywatności</div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
