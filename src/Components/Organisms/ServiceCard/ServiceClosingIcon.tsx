import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

function ServiceClosingIcon(prop: { handleCloseDetails: () => void }) {
  return (
    <IconButton
      aria-label="close modal"
      sx={{
        display: 'inline-flex',
        width: 'fit-content',
        alignSelf: 'flex-end',
        position: 'absolute',
        right: '0.3125rem',
        top: '0.3125rem',
      }}
      onClick={prop.handleCloseDetails}
    >
      <CloseIcon />
    </IconButton>
  );
}

export default ServiceClosingIcon;
