import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Background from '../../background/background';

import './contentfulDonationForm.scss';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51HcTSZIlFmfjuTJdc1LqP1HwrXGmDrHnvgpn8z7IGeul9XwvLf7S48yUqtxEE9xInitQZnVO5O0Zp3oh5rIESkaK00P1xuk6se',
);

const donationTypeIds = {
  monthly_5: 'price_1IOdXkIlFmfjuTJdQSlllipR',
  monthly_10: 'price_1HcTt7IlFmfjuTJde501tSxX',
  monthly_20: 'price_1IOdXkIlFmfjuTJdQwb3HeGt',
};

const donationLabels = {
  monthly_5: '5€ / month',
  monthly_10: '10€ / month',
  monthly_20: '20€ / month',
};

const DonationForm = ({ content }) => {
  const stripe = useStripe();
  const { title, description } = content;

  const checkout = (donationType) => () => {
    if (stripe) {
      stripe
        .redirectToCheckout({
          lineItems: [{ price: donationTypeIds[donationType], quantity: 1 }],
          mode: 'subscription',
          /*
           * Do not rely on the redirect to the successUrl for fulfilling
           * purchases, customers may not always reach the success_url after
           * a successful payment.
           * Instead use one of the strategies described in
           * https://stripe.com/docs/payments/checkout/fulfill-orders
           */
          successUrl: 'http://naisten-linja.netlify.app/donation-successful',
          cancelUrl: 'http://naisten-linja.netlify.app/donation-cancelled',
        })
        .then(function (result) {
          if (result.error) {
            /*
             * If `redirectToCheckout` fails due to a browser or network
             * error, display the localized error message to your customer.
             */
            console.log('ERROR', result.error.message);
          }
        });
    }
  };

  return (
    <div className="DonationForm">
      <h1>{title}</h1>
      {description && (
        <div className="DonationForm__description">
          {description.description}
        </div>
      )}
      <div className="DonationForm__donation-image" />
      <div className="DonationForm__amount-list">
        {Object.keys(donationTypeIds).map((donationType, idx) => (
          <button
            onClick={checkout(donationType)}
            key={idx}
            className="DonationForm__amount"
          >
            {donationLabels[donationType]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DonationForm;
