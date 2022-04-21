import { Button } from '@mui/material';
import { useState } from 'react';

import ContactFormModal from '../../Organisms/ContactFormModal/ContactFormModal';
import TextCard from '../../Organisms/TextCard/TextCard';

const AboutPage = () => {
  const [contactFormModalOpen, setContactFormModalOpen] = useState('closed');
  return (
    <main>
      <h1>Tu będą informacje o nas</h1>
      <TextCard />
      <Button
        variant="contained"
        onClick={() => {
          setContactFormModalOpen('open');
        }}
        aria-label="Contact Form"
      >
        CONTACT FORM
      </Button>
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
