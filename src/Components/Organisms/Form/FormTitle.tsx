import { Box, Typography } from '@mui/material';

interface TextInFormTitle {
  text1: string;
  text2: string;
}

function FormTitle({ text1, text2 }: TextInFormTitle) {
  return (
    <Box
      sx={{
        height: '4.75rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        sx={{
          height: '2rem',
          fontSize: '1.4375rem',
        }}
        variant="h5"
      >
        {text1}
      </Typography>
      <Typography
        sx={{
          height: '1.313rem',
          fontSize: '15px',
        }}
        variant="subtitle1"
      >
        {text2}
      </Typography>
    </Box>
  );
}

export default FormTitle;
