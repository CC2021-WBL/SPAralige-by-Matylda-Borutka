import { Box, Stack, TextField } from '@mui/material';
import FormTitle from '../../Organisms/Form/FormTitle';

const ReservationsPage = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: '#FFFFFF',
        width: '31.25rem',
        height: '40.813rem',
        padding: ['2.5rem', '2.125rem'],
        '@media screen and (max-width: 600px)': {
          width: '19.625rem',
          padding: ['2.5rem', '2.125rem'],
        },
      }}
    >
      <Stack spacing={'1.4375rem'}>
        <form action="">
          <FormTitle
            aria-label="Sign in to SPAralige"
            text1="Stwórz konto"
            text2="Uzupełnij formularz aby założyć konto"
          />

          <TextField id="outlined-name" label="Imię" value={name} />
          <TextField id="outlined-name" label="Email" value={name} />
          <TextField id="outlined-name" label="Hasło" value={name} />
          <TextField id="outlined-name" label="Powtórz hasło" value={name} />
        </form>
      </Stack>
    </Box>
  );
};

export default ReservationsPage;
