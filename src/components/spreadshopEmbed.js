import React, { useEffect } from 'react';
export const SpreadshopEmbed = (props) => {
  const shopId = props.shopId;
  useEffect(() => {
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
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="myShop">
      <a href={`https://${shopId}.myspreadistenlinja`}>{shopId}</a>
    </div>
  );
};
