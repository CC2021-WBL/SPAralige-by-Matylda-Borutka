import { Box, Grid, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';

import ContactFormModal from '../../Organisms/ContactFormModal/ContactFormModal';
import GraphicAbout from '../../../Assets/graphic-aboutUS.png';

const textStyles = {
  paddingRight: { xs: 0, sm: 10 },
};
const dataStyles = {
  border: '0.0625rem',
  borderStyle: 'solid',
  borderRadius: '0.5rem',
  borderColor: '#999999',
};

const AboutPage = () => {
  const [contactFormModalOpen, setContactFormModalOpen] = useState('closed');
  return (
    <main>
      <Grid container>
        <Grid item xs={12} md={7} marginRight={2}>
          <Box>
            <Typography
              paddingTop={8}
              variant="h2"
              sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}
            >
              Gabinet SPAralige
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: '1.5rem', md: '3rem' } }}
            >
              by Matylda Borutka
            </Typography>
            <Typography paddingTop={2} sx={textStyles} variant="body1">
              Gabinet Sparalige działa już do wielu lat. Od momentu założenia
              zadbaliśmy o kondycję tysięcy naszych klientów.{' '}
            </Typography>
            <Typography paddingTop={2} sx={textStyles} variant="body1">
              Naszą ambicją bylo zawsze tworzyć relaksujący klimat i bezpieczną
              przestrzeń w której łatwo się zrelaksować i zregenerować.
            </Typography>
            <Typography paddingTop={2} sx={textStyles} variant="body1">
              Specjalizujemy się w głębokich masażach, terapii manualnej. W 2020
              rozszerzyliśmy naszą ofertę o autorskie zabiegi regenerujące ciało
              i duszę.{' '}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            height: { xs: '50%', md: '100%' },
            width: { xs: '50%', md: '100%' },
          }}
        >
          <Box
            sx={{
              marginLeft: '20%',
              height: { xs: '50%', md: '100%' },
              width: { xs: '50%', md: '100%' },
            }}
            component="img"
            alt="exercising woman"
            src={GraphicAbout}
          />
        </Grid>
        <Grid container marginTop={2} sx={{ justifyContent: 'center' }}>
          <Grid
            margin={1}
            md={4}
            xs={12}
            item
            sx={dataStyles}
            padding={3}
            textAlign={'center'}
          >
            <Typography sx={{ fontSize: '1.25rem' }}>Adres: </Typography>
            <Typography>Sparalige by Matylda Borutka</Typography>
            <Typography> ul. Tęczowa 12/13</Typography>
            <Typography> 55-555 Zielona</Typography>
          </Grid>
          <Grid
            margin={1}
            xs={12}
            md={3}
            item
            sx={dataStyles}
            padding={3}
            textAlign={'center'}
          >
            <Typography sx={{ fontSize: '1.25rem' }}>
              Dane kontaktowe:{' '}
            </Typography>
            <Typography>mail@matyldab.pl</Typography>
            <Typography> tel: 555 555 555</Typography>
            <Typography>
              <Button
                variant="outlined"
                onClick={() => {
                  setContactFormModalOpen('open');
                }}
                aria-label="Contact Form"
                sx={{ marginTop: '0.625rem' }}
              >
                Napisz do nas
              </Button>
            </Typography>
          </Grid>
          <Grid
            margin={1}
            xs={12}
            md={4}
            item
            sx={dataStyles}
            padding={3}
            textAlign={'center'}
          >
            <Typography sx={{ fontSize: '1.25rem' }}>Dane Firmy:</Typography>
            <Typography>NIP: 555 5555 5555 555</Typography>
            <Typography>REGON: 666 6666 666</Typography>
            <Typography>KRS: 000024994</Typography>
          </Grid>
        </Grid>
      </Grid>
      {contactFormModalOpen == 'open' && (
        <ContactFormModal
          open
          handleClose={() => {
            setContactFormModalOpen('closed');
          }}
        />
      )}
    </main>
  );
};

export default AboutPage;
