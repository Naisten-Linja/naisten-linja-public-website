import React, { useState } from 'react';
import { Link } from 'gatsby';

import './cookieBanner.scss';

const translations = {
  fi: {
    message:
      'Tämä sivusto käyttää evästeitä toimiakseen. Jatkamalla selaamista hyväksyt evästeiden käytön.',
    consent: 'Hyväksyn ',
    privacyPolicy: 'Yksityisyyskäytäntö',
  },
};

const privacyPolicyLink = '/yksityisyyskaytanto';

export const CookieBanner = () => {
  const consentCookie = getConsentCookie();
  const [isConsented, setIsConsented] = useState(consentCookie === 'true');

  const consent = () => {
    setIsConsented(true);
    // Keep the consent cookie for 150 days
    setConsentCookie('true', 150);
  };

  // Don't render on server side or if cookie is already consented
  if (typeof window === 'undefined' || isConsented) {
    return null;
  }

  const t = translations.fi;
  return (
    <div className="cookie-banner">
      <div className="layout-container">
        <p>
          {t.message}{' '}
          <Link className="cookie-banner__privacy-link" to={privacyPolicyLink}>
            {t.privacyPolicy}
          </Link>
        </p>
        <button className="cookie-banner__consent-button" onClick={consent}>
          {t.consent}
        </button>
      </div>
    </div>
  );
};

const COOKIE_NAME = 'ConsentCookie';

export function getConsentCookie() {
  if (typeof window === 'undefined') {
    return '';
  }
  const name = COOKIE_NAME + '=';
  const decodedCookie = decodeURIComponent(window.document.cookie);
  const ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    const c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function setConsentCookie(cvalue, exdays) {
  if (typeof window === 'undefined') {
    return;
  }
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  window.document.cookie =
    COOKIE_NAME + '=' + cvalue + ';' + expires + ';path=/';
}
