import React, { useState, useCallback } from 'react';
import axios from 'axios';

import { FullPageLoader } from '../../loader';
import { SERVICE_API_URL } from '../../../constants';

const axiosConfig = {
  headers: { 'Content-Type': 'application/json' },
};

const ReadLetterForm = ({ content }) => {
  const [openLetterContent, setOpenLetterContent] = useState(null);

  return (
    <>
      {!openLetterContent && (
        <AccessKeyAndPasswordForm setOpenLetterContent={setOpenLetterContent} />
      )}
      {openLetterContent && (
        <LetterContent openLetterContent={openLetterContent} />
      )}
    </>
  );
};

export default ReadLetterForm;

const LetterContent = ({ openLetterContent }) => {
  return (
    <>
      <h2>Our response</h2>
      {openLetterContent.replyContent ? (
        <div className="OpenLetterForm__letter-content-wrapper">
          <p>
            Date: {new Date(openLetterContent.replyUpdated).toLocaleString()}
          </p>
          {openLetterContent.replyContent}
        </div>
      ) : (
        <div className="OpenLetterForm__success-message">
          There is no response to your message yet.
        </div>
      )}

      <h2>Your letter</h2>
      <div className="OpenLetterForm__letter-content-wrapper">
        <p>Date: {new Date(openLetterContent.created).toLocaleString()}</p>
        <h2>{openLetterContent.title}</h2>
        {openLetterContent.content}
      </div>

      <button className="button" onClick={() => window.location.reload()}>
        Close letter
      </button>
    </>
  );
};

const AccessKeyAndPasswordForm = ({ setOpenLetterContent }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [accessKey, setAccessKey] = useState('');
  const [accessPassword, setAccessPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const readOpenLetter = useCallback(
    async (e) => {
      e.preventDefault();
      setErrorMessage(null);
      if (!accessKey.trim()) {
        setErrorMessage('Please provide the access key.');
        return;
      }
      if (!accessPassword) {
        setErrorMessage('Please provide the access password.');
        return;
      }
      setIsLoading(true);

      try {
        const response = await axios.post(
          `${SERVICE_API_URL}/online-letter/read`,
          { accessKey: accessKey, accessPassword: accessPassword },
          axiosConfig,
        );
        setOpenLetterContent(response.data.data);
      } catch (err) {
        if (err.response.status === 403) {
          setErrorMessage(
            'Looks like you have entered the wrong access key and password. Please try again.',
          );
        } else {
          setErrorMessage(
            'There was an error while fetching your message. Please contact our staff for support!',
          );
        }
      } finally {
        setIsLoading(false);
      }
    },
    [accessKey, accessPassword],
  );

  return (
    <form
      className="ReadLetterForm"
      onSubmit={readOpenLetter}
      autocomplete="off"
    >
      {errorMessage && (
        <p className="OpenLetterForm__error-message">{errorMessage}</p>
      )}
      <div className="OpenLetterForm__credentials">
        <div className="OpenLetterForm__credential">
          <label htmlFor="accessKey">Access key</label>
          <input
            onChange={(e) => setAccessKey(e.target.value)}
            type="text"
            name="accessKey"
            required
          />
        </div>
        <div className="OpenLetterForm__credential">
          <label htmlFor="accessPassword">Access password</label>
          <input
            onChange={(e) => setAccessPassword(e.target.value)}
            type="password"
            name="accessPassword"
            required
          />
        </div>
      </div>
      {isLoading && <FullPageLoader />}
      <button className="button" onClick={() => window.location.reload()}>
        Cancel
      </button>
      <input className="button" type="submit" value="Read your letter" />
    </form>
  );
};
