import CookieConsent from 'react-cookie-consent';
import { padding } from '@mui/system';

const CookiesBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Akceptuję ciasteczka"
      cookieName="Ciasteczko"
      style={{ background: '#1565c0' }}
      buttonStyle={{
        borderRadius: '50px',
        color: '#4e503b',
        fontSize: '13px',
        padding: '10px',
      }}
      expires={150}
    >
      Ta strona używa ciasteczek abyśmy mogli zapewnic Ci treści dostosowane do
      Twoich potrzeb{' '}
    </CookieConsent>
  );
};

export default CookiesBanner;
