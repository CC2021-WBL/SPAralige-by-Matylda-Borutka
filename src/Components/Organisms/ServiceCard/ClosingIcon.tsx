import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Stack } from '@mui/material';

function ClosingIcon(prop: { handleCloseDetails: () => void }) {
  return (
    <Stack direction="row" justifyContent="flex-end">
      <IconButton
        sx={{
          display: 'flex',
          width: 'fit-content',
          justifyContent: 'flex-end',
        }}
        onClick={prop.handleCloseDetails}
      >
        <CloseIcon />
      </IconButton>
    </Stack>
  );
}

export default ClosingIcon;
