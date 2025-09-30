// gatsby-browser.js
export const onRouteUpdate = () => {
  if (typeof window === 'undefined') return;

  // Ensure the placeholder <a href="...#iraiser_native"> is already in the DOM
  const link = document.querySelector('a[href*="#iraiser_native"]');
  if (!link) return;

  // Manually trigger a window load event so iRaiser re-initializes
  const event = new Event('load');
  window.dispatchEvent(event);
};
