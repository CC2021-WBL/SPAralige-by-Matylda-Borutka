import CookieConsent from 'react-cookie-consent';

const CookiesBanner = () => {
  return (
    <CookieConsent
      enableDeclineButton
      onDecline={() => {
        alert('Twoje ciasteczka nie będą zapisywane!');
      }}
      declineButtonText="Odrzuć ciasteczka"
      declineButtonStyle={{
        borderRadius: '50px',
        color: '#ffffff',
        fontSize: '13px',
        padding: '10px',
        background: '#ba68c8',
      }}
      location="bottom"
      buttonText="Akceptuj ciasteczka"
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
