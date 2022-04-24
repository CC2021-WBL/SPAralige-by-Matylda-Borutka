import { Box } from '@mui/material';

type HeaderPropTypes = {
  text: string;
};
const YourAccoundHeader = (prop: HeaderPropTypes) => {
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
};
export default YourAccoundHeader;
