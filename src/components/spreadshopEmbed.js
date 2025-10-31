import React, { useEffect } from 'react';
export const SpreadshopEmbed = () => {
  useEffect(() => {
    // Set global config
    window.spread_shop_config = {
      shopName: 'naistenlinja',
      locale: 'fi_FI',
      prefix: 'https://naistenlinja.myspreadshop.fi',
      baseId: 'myShop',
    };

    // Load the Spreadshop script
    const script = document.createElement('script');
    script.src =
      'https://naistenlinja.myspreadshop.fi/shopfiles/shopclient/shopclient.nocache.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="myShop">
      <a href="https://naistenlinja.myspreadistenlinja"></a>
    </div>
  );
};
