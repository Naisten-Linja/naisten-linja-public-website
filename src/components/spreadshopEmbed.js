import React, { useEffect } from 'react';

export const SpreadshopEmbed = ({ shopId }) => {
  useEffect(() => {
    // Guard against SSR / non-browser environments
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return undefined;
    }

    // Set global config
    window.spread_shop_config = {
      shopName: shopId,
      locale: 'fi_FI',
      prefix: `https://${shopId}.myspreadshop.fi`,
      baseId: 'myShop',
    };

    // Load the Spreadshop script
    const script = document.createElement('script');
    script.src = `https://${shopId}.myspreadshop.fi/shopfiles/shopclient/shopclient.nocache.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [shopId]);

  return (
    <div id="myShop">
      <a href={`https://${shopId}.myspreadistenlinja`}>{shopId}</a>
    </div>
  );
};
