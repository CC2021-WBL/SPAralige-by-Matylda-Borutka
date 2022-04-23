import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';

const CookiesBanner = () => {
  const { t } = useTranslation('other');
  return (
    <CookieConsent
      enableDeclineButton
      onDecline={() => {
        alert(t('alert'));
      }}
      declineButtonText={t('deleteCookies')}
      declineButtonStyle={{
        borderRadius: '3.125rem',
        color: '#565656',
        fontSize: '0.8125rem',
        padding: '0.625rem',
        background: '#dddddd',
      }}
      location="bottom"
      buttonText={t('acceptCookies')}
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
      {t('cookie')}
    </CookieConsent>
  );
};

export default CookiesBanner;
