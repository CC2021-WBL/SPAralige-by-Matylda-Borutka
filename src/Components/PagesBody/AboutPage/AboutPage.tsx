import { Typography } from '@mui/material';

import LanguageButton from '../../Atoms/LanguageButton/LanguageButton';
import TextCard from '../../Organisms/TextCard/TextCard';

const AboutPage = () => {
  return (
    <main>
      <h1>Tu będą informacje o nas</h1>
      {/*textCard and buttons are here just for test*/}
      <LanguageButton>
        <Typography variant="body1">PL PL</Typography>
      </LanguageButton>
      <LanguageButton>
        <Typography variant="body1">EN</Typography>
      </LanguageButton>

      <TextCard />
    </main>
  );
};

export default AboutPage;
