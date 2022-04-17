export const paperStyle = {
  width: 60,
  '@media screen and (min-width: 970px)': {
    width: 150,
    height: 215,
    padding: 4,
    borderRadius: 4,
  },
};
export const hourButtonStyle = {
  width: 100,
  height: 32,
  padding: 4,
  borderRadius: 4,
  marginTop: 2,
  marginBottom: 2,
};
export const hourButtonTitleStyle = {
  width: 180,
  height: 32,
  padding: 4,
  borderRadius: 4,
  marginTop: 2,
  marginBottom: 2,
};

export const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 1168,
  height: '90vh',
  maxHeight: 1012,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
};

export const stackStyle = {
  border: 'none',
  alignItems: 'center',
};
