import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ServiceCard from '../../Organisms/ServiceCard/ServiceCard';
import { serviceDataType } from '../../../Types/dbDataTypes';

export default function LandingGrid(prop: {
  serviceObjectArray: serviceDataType[];
  uid: string | null;
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        {Array.from(prop.serviceObjectArray)
          .sort(() => 0.5 - Math.random())
          .slice(0, 4)
          .map((object, index) => (
            <Grid item xs={12} sm={12} md={6} key={index}>
              <ServiceCard serviceObject={object} uid={prop.uid} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
