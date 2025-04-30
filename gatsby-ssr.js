import React from 'react';
import { withPrefix } from 'gatsby';

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setHeadComponents([
    <meta
      key="facebook-domain-verification"
      name="facebook-domain-verification"
      content="8lnrf1d0ch8i4fqblko7e0iibhafpc"
    />,
  ]);
  setPostBodyComponents([
    <script
      key="ninchat"
      src="https://ninchat.com/customer/naistenlinja/init.js"
      charSet="UTF-8"
      type="text/javascript"
    />,
    <script src="https://lahjoita.naistenlinja.fi/libs.iraiser.eu/libs/payment/frame/1.5/IRaiserFrame.js" />,
  ]);
};
