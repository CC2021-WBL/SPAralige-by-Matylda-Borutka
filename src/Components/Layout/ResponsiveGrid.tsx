import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ServiceCard from '../Organisms/ServiceCard/ServiceCard';
import { serviceData } from '../Pages/LandingPage/LandingPage';

export default function ResponsiveGrid(prop: { serviceObject: serviceData }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>
            <ServiceCard serviceObject={prop.serviceObject} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
