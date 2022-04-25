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
        borderRadius: '3.125rem',
        color: '#565656',
        fontSize: '0.8125rem',
        padding: '0.625rem',
        background: '#dddddd',
      }}
      location="bottom"
      buttonText="Akceptuj ciasteczka"
      cookieName="Ciasteczko"
      style={{ background: '#1565c0' }}
      buttonStyle={{
        borderRadius: '3.125rem',
        color: '#4e503b',
        fontSize: '0.8125rem',
        padding: '0.625rem',
      }}
      expires={150}
    >
      Ta strona używa ciasteczek abyśmy mogli zapewnic Ci treści dostosowane do
      Twoich potrzeb{' '}
    </CookieConsent>
  );
};

export default CookiesBanner;
