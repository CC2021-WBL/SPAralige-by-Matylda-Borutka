import BlockIcon from '@mui/icons-material/Block';
import { Container, Typography } from '@mui/material';

const Stop = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'calc(100vh - 18.75rem)',
        justifyContent: 'space-around',
      }}
    >
      <BlockIcon sx={{ fontSize: '9.375rem', color: '#1976d2' }} />
      <Typography
        sx={{
          fontSize: '2rem',
          textAlign: 'center',
        }}
        variant="h3"
      >
        Zaloguj się żeby wyświetlić odpowiednie dane
      </Typography>
    </Container>
  );
};

export default Stop;
