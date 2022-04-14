import CreateIcon from '@mui/icons-material/Create';
import { Button, CardActions } from '@mui/material';

import { btnStyles, btnsPosition } from './ServiceCardStyles';

export type actionsProps = {
  handleOpenDetails: () => void;
  handleOpen: () => void;
  className: string;
};

const ServiceCardActions = (prop: actionsProps) => {
  return (
    <CardActions className={prop.className} disableSpacing sx={btnsPosition}>
      {prop.className !== 'modal-service-details' && (
        <Button
          aria-label="more details"
          size="medium"
          sx={btnStyles}
          onClick={() => {
            prop.handleOpenDetails();
          }}
        >
          Więcej Szczegółów
        </Button>
      )}
      <Button
        aria-label="make reservation"
        variant="contained"
        disableElevation
        size="medium"
        startIcon={
          <CreateIcon fontSize="small" sx={{ marginBottom: '0.25rem' }} />
        }
        sx={btnStyles}
        onClick={() => {
          prop.handleOpen();
        }}
      >
        Rezerwuj Zabieg
      </Button>
    </CardActions>
  );
};

export default ServiceCardActions;
