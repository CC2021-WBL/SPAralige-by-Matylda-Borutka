import { Box } from '@mui/system';
import { Modal, Typography } from '@mui/material';

const containerStyles = {
  width: '700px',
  height: '85vh',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  borderRadius: '1rem',
};

const ServiceDetailsModal = (prop: {
  openDetails: boolean;
  handleCloseDetails: () => void;
}) => {
  return (
    <Modal
      open={prop.openDetails}
      onClose={prop.handleCloseDetails}
      aria-labelledby="modal-service-details"
      aria-describedby="modal-more-service-data"
    >
      <Box sx={containerStyles}>
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
