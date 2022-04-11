import CreateIcon from '@mui/icons-material/Create';
import { Button, CardActions } from '@mui/material';

const btnStyles = {
  borderRadius: '3.125rem',
  minWidth: '12.5rem',
  paddingTop: '0.5625rem',
  '@media screen and (min-width: 450px)': {
    '&:first-child': {
      marginRight: '0.5rem',
    },
  },
};

type actionsProps = {
  handleOpenDetails: () => void;
  handleOpen: () => void;
};

const ServiceCardActions = (prop: actionsProps) => {
  return (
    <CardActions
      disableSpacing
      sx={{
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '0.625rem',
        '@media screen and (min-width: 600px)': {
          justifyContent: 'flex-end',
        },
      }}
    >
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
