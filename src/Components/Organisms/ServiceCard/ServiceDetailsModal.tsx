import { Box } from '@mui/system';
import { Modal, Typography } from '@mui/material';

const ServiceDetailsModal = (prop: {
  openDetails: boolean;
  handleCloseDetails: () => void;
}) => {
  return (
    <Modal
      open={prop.openDetails}
      onClose={prop.handleCloseDetails}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          MODAL MOCK DETAILS
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          MODAL MOCK DETAILS
        </Typography>
      </Box>
    </Modal>
  );
};

export default ServiceDetailsModal;
