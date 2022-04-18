import { Box } from '@mui/system';
import { Button, Stack } from '@mui/material';

type FormCardPropTypes = {
  title: string;
  name: string;
};
const FormCard = (prop: FormCardPropTypes) => {
  return (
    <>
      <Box component="h6" color="rgba(0,0,0,.38)">
        {prop.title}
      </Box>
      <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Box>{prop.name}</Box>
        <Button>zmień</Button>
      </Stack>
    </>
  );
};

export default FormCard;
