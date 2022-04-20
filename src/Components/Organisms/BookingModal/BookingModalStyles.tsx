export const headerTypographyStyle = {
  '@media screen and (min-width: 600px)': {
    fontSize: '1.75rem',
  },
};

export const paperStyle = {
  width: 60,
  height: 120,
  '@media screen and (min-width: 600px)': {
    width: 95,
    height: 140,
    padding: 4,
    borderRadius: 4,
  },
  '@media screen and (min-width: 970px)': {
    width: 140,
    height: 140,
    padding: 4,
    borderRadius: 4,
  },
};
export const hourButtonStyle = {
  width: 60,
  height: 23,
  padding: 2,
  borderRadius: 4,
  '@media screen and (min-width: 600px)': {
    width: 80,
    padding: 3,
    height: 32,
  },
};
export const hourButtonTitleStyle = {
  width: 120,
  height: 23,
  padding: 2,
  borderRadius: 4,
  '@media screen and (min-width: 600px)': {
    width: 180,
    padding: 3,
  },
};
export const hourButtonTypographyStyle = {
  fontSize: '0.875rem',
  '@media screen and (min-width: 600px)': {
    fontSize: '1rem',
  },
};

export const bookingContainerStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 1168,
  height: 'fit-content',
  overflow: 'auto',
  maxHeight: 'calc(100vh - 1.25rem)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
};

export const stackStyle = {
  border: 'none',
  alignItems: 'center',
  gap: '0.1875rem',
  '@media screen and (min-width: 600px)': {
    gap: '0.3125rem',
  },
};

// Reservation box and stack

export const modalResTypographyStyle = {
  fontSize: '1rem',
  '@media screen and (min-width: 600px)': {
    fontSize: '1.5rem',
  },
};
