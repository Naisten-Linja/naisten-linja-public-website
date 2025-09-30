// gatsby-browser.js
const IRASER_SRC =
  'https://lahjoita.naistenlinja.fi/libs.iraiser.eu/libs/payment/frame/1.5/IRaiserFrame.js';

export const onRouteUpdate = () => {
  const link = document.querySelector('a[href*="#iraiser_native"]');
  if (!link) return; // only inject if placeholder is present

  // remove existing script if already there
  const old = document.querySelector(`script[src^="${IRASER_SRC}"]`);
  if (old) old.remove();

  const script = document.createElement('script');
  script.src = IRASER_SRC;
  document.head.appendChild(script);
};
