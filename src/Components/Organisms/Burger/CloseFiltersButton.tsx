import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Stack } from '@mui/material';

type propType = {
  handleClose: () => void;
};

function CloseFiltersButton(prop: propType) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        marginTop: '1.5625rem',
      }}
    >
      <Button
        variant="text"
        disableElevation={true}
        onClick={prop.handleClose}
        startIcon={<ArrowBackIcon />}
      >
        schowaj filtry
      </Button>
    </Stack>
  );
}

export default CloseFiltersButton;
