import React from 'react';
import { useStripe } from '@stripe/react-stripe-js';

import {
  STRIPE_PRODUCT_MONTHLY_DONATION_10,
  STRIPE_PRODUCT_MONTHLY_DONATION_20,
  STRIPE_PRODUCT_MONTHLY_DONATION_50,
} from '../../../constants';

import './contentfulDonationForm.scss';

const donationTypeIds = {
  monthly_10: STRIPE_PRODUCT_MONTHLY_DONATION_10,
  monthly_20: STRIPE_PRODUCT_MONTHLY_DONATION_20,
  monthly_50: STRIPE_PRODUCT_MONTHLY_DONATION_50,
};

const donationLabels = {
  monthly_10: '10€/kk',
  monthly_20: '20€/kk',
  monthly_50: '50€/kk',
};

const DonationForm = ({ content }) => {
  const stripe = useStripe();
  const { title, description } = content;

  const checkout = (donationType) => () => {
    // During `gatsby build`, the `window` object is undefined.
    // `window` is only available during run time.
    if (stripe && typeof window !== undefined) {
      const { location } = window;
      const baseUrl = `${location.protocol}//${location.hostname}`;
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
          // TODO: this is not a good solution, since the donation successful and donation cancelled page are always reachable by entering the URL.
          successUrl: `${baseUrl}/donation-successful`,
          cancelUrl: `${baseUrl}/donation-cancelled`,
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
