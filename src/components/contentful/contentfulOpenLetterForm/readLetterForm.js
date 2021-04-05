import React, { useState, useCallback } from 'react';
import axios from 'axios';

import { FullPageLoader } from '../../loader';
import { SERVICE_API_URL } from '../../../constants';
import { translations } from './translations';

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
  const t = translations.en;

  return (
    <>
      <h2>{t['openLetterForm.ourResponse']}</h2>
      {openLetterContent.replyContent ? (
        <div className="OpenLetterForm__letter-content-wrapper">
          <p>
            {t['openLetterForm.date']}:{' '}
            {new Date(openLetterContent.replyUpdated).toLocaleString()}
          </p>
          {openLetterContent.replyContent}
        </div>
      ) : (
        <div className="OpenLetterForm__success-message">
          {t['openLetterForm.noResponse']}
        </div>
      )}

      <h2>{t['openLetterForm.yourLetter']}</h2>
      <div className="OpenLetterForm__letter-content-wrapper">
        <p>
          {t['openLetterForm.date']}:{' '}
          {new Date(openLetterContent.created).toLocaleString()}
        </p>
        <h2>{openLetterContent.title}</h2>
        {openLetterContent.content}
      </div>

      <button className="button" onClick={() => window.location.reload()}>
        {t['openLetterForm.closeLetter']}
      </button>
    </>
  );
};

const AccessKeyAndPasswordForm = ({ setOpenLetterContent }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [accessKey, setAccessKey] = useState('');
  const [accessPassword, setAccessPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const t = translations.en;

  const readOpenLetter = useCallback(
    async (e) => {
      e.preventDefault();
      setErrorMessage(null);
      if (!accessKey.trim()) {
        setErrorMessage(t['openLetterForm.error.accessKeyMissing']);
        return;
      }
      if (!accessPassword) {
        setErrorMessage(t['openLetterForm.error.accessPasswordMissing']);
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
          setErrorMessage(t['openLetterForm.error.wrongCredentials']);
        } else {
          setErrorMessage(t['openLetterForm.error.failedToFetchLetter']);
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
        <p
          className="OpenLetterForm__error-message"
          dangerouslySetInnerHTML={{ __html: errorMessage }}
        />
      )}

      <div className="OpenLetterForm__credentials">
        <div className="OpenLetterForm__credential">
          <label htmlFor="accessKey">{t['openLetterForm.accessKey']}</label>
          <input
            onChange={(e) => setAccessKey(e.target.value)}
            type="text"
            name="accessKey"
            required
          />
        </div>
        <div className="OpenLetterForm__credential">
          <label htmlFor="accessPassword">
            {t['openLetterForm.accessPassword']}
          </label>
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
        {t['openLetterForm.button.cancel']}
      </button>
      <input
        className="button"
        type="submit"
        value={t['openLetterForm.button.readResponse']}
      />
    </form>
  );
};
