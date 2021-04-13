import React from 'react';
import { withPrefix } from 'gatsby';

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="ninchat"
      src="https://ninchat.com/customer/naistenlinja/init.js"
      charSet="UTF-8"
      type="text/javascript"
    />,
  ]);
};
