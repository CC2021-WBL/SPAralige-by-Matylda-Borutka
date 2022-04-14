// ServiceCard

export const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: 'fit-content',
  '@media screen and (min-width: 900px)': {
    height: '28.125rem',
  },
};

// ServiceCardContent

export const contentContainerStyles = {
  '&.modal-service': {
    padding: '0.3125rem',
    '@media screen and (min-width: 1200px)': {
      fontSize: '2rem',
    },
  },
};

export const contentTextStyles = {
  '@media screen and (min-width: 900px)': {
    maxHeight: '80px',
    overflow: 'hidden',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      height: '40px',
      bottom: '0',
      right: '0',
      width: '100%',
      background:
        'linear-gradient(0deg, white, rgba(255, 255, 255, 0.6)) no-repeat',
    },
    '&.modal-service': {
      maxHeight: 'none',
      '&::before': {
        content: '""',
        height: '0px',
      },
    },
  },
};

// ServiceCardActions

export const btnStyles = {
  borderRadius: '3.125rem',
  minWidth: '12.5rem',
  paddingTop: '0.5625rem',
};

export const btnsPosition = {
  marginTop: 'auto',
  justifyContent: 'flex-end',
  '@media screen and (max-width: 600px)': {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '0.625rem',
    gap: '0.625rem',
  },
  '&.modal-service-details': {
    justifyContent: 'center',
    padding: '0 2.125rem',
  },
};

// Service Card Modal

export const modalContainerStyles = {
  maxWidth: '41.75rem',
  width: '80%',
  height: 'fit-content',
  maxHeight: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  borderRadius: '1rem',
  padding: '1.875rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '0.3125rem',
  '@media screen and (max-width: 800px)': {
    padding: '1rem',
  },
};

export const avatarStyles = {
  height: '9.375rem',
  width: '9.375rem',
  margin: '0 1.25rem',
  alignSelf: 'center',
  '@media screen and (max-width: 1200px)': {
    height: '7.1875rem',
    width: '7.1875rem',
    margin: '1rem 0 1.5rem',
  },
};

export const modalShortBioStyles = {
  maxHeight: '9.375rem',
  overflow: 'auto',
  padding: '0.3125rem',
};
