import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Stack, Typography } from '@mui/material';

type propType = {
  handleClose: () => void;
};

function CloseFiltersButton(prop: propType) {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      sx={{
        marginTop: '1.5625rem',
        marginRight: '2.0625rem',
        marginBottom: '2.1875rem',
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
