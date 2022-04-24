import { Box } from '@mui/material';

type HeaderPropTypes = {
  text: string;
};
const Header = (prop: HeaderPropTypes) => {
  return (
    <Box className="headerText" component="h6" sx={HeaderStyle}>
      {prop.text}
    </Box>
  );
};
const HeaderStyle = {
  fontSize: '20px',
  color: '#616161',
  margin: '0',
  background: 'rgba(200,200,200,0.1)',
};
export default Header;
