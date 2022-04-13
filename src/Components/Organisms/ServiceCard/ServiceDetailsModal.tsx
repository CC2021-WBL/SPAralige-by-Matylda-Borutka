import { Box } from '@mui/system';
import { Modal } from '@mui/material';

import ClosingIcon from './ClosingIcon';
import ServiceCardContent from './ServiceCardContent';
import { serviceData } from '../../PagesBody/LandingPage/LandingPage';

const containerStyles = {
  width: '620px',
  height: '85vh',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  borderRadius: '1rem',
  padding: '30px',
};

const ServiceDetailsModal = (prop: {
  openDetails: boolean;
  handleCloseDetails: () => void;
  serviceObject: serviceData;
}) => {
  return (
    <Modal
      open={prop.openDetails}
      onClose={prop.handleCloseDetails}
      aria-labelledby="modal-service-details"
      aria-describedby="modal-more-service-data"
    >
      <Box sx={containerStyles}>
        <ClosingIcon handleCloseDetails={prop.handleCloseDetails} />
        <ServiceCardContent
          serviceObject={prop.serviceObject}
          className="modal-service-title"
        />
      </Box>
    </Modal>
  );
};

export default ServiceDetailsModal;
