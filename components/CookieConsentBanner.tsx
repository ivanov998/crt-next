import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('cookie_consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAgree = () => {
    Cookies.set('cookie_consent', 'accepted', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      id='cb-cookie-banner'
      className='alert alert-dark text-center mb-0 position-fixed bottom-0 w-100 py-4 rounded-0 shadow-lg border-0 border-top'
      role='alert'
    >
      🍪 This website uses cookies to ensure you get the best experience on our
      website. Learn more about&nbsp;
      <a href='https://www.cookiesandyou.com/' target='blank'>
        cookies here!
      </a>
      <button
        type='button'
        className='btn btn-primary btn-sm ms-3'
        onClick={handleAgree}
      >
        I Got It
      </button>
    </div>
  );
};

export default CookieConsentBanner;
