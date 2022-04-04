import { AppBar, Box, Container } from '@mui/material';

import FooterStyled from './Components/Organisms/FooterStyled';
import MainWrapper from './Components/Layout/MainWrapper';
import ResponsiveGrid from './Components/Layout/ResponsiveGrid';

function App() {
  return (
    <div className="App">
      <MainWrapper>
        <Box sx={{ height: 80 }}>
          <AppBar sx={{ height: 80 }} />
        </Box>
        <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
          <ResponsiveGrid></ResponsiveGrid>
          <h1 style={{ textAlign: 'center' }}>SPAralige od Matylde</h1>
        </Container>
        <FooterStyled />
      </MainWrapper>
    </div>
  );
}

export default App;
