import React, { useState, useCallback } from 'react';
import axios from 'axios';
import TextareaAutosize from 'react-textarea-autosize';

import { SERVICE_API_URL } from '../../../constants';
import { FullPageLoader } from '../../loader';
import { translations } from './translations';

import '../../../scss/grid.scss';
import './contentfulOpenLetterForm.scss';

const WriteLetterForm = ({ letterKey, accessPassword, language }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLetterSent, setIsLetterSent] = useState(false);
  const [openLetterTitle, setOpenLetterTitle] = useState('');
  const [openLetterContent, setOpenLetterContent] = useState('');
  const [openLetterEmail, setOpenLetterEmail] = useState('');

  const t = translations[language] ?? translations.fi;

  const sendOpenLetter = useCallback(
    (e) => {
      e.preventDefault();
      setIsLoading(true);
      setErrorMessage(null);
      if (!openLetterTitle.trim()) {
        return setErrorMessage(t['openLetterForm.error.subjectMissing']);
      }
      if (!openLetterContent.trim()) {
        return setErrorMessage(t['openLetterForm.error.contentMissing']);
      }
      axios
        .post(`${SERVICE_API_URL}/online-letter/send`, {
          accessKey: letterKey,
          accessPassword,
          title: openLetterTitle,
          content: openLetterContent,
          email: openLetterEmail.trim(),
        })
        .then(function (response) {
          setIsLetterSent(true);
        })
        .catch(function (error) {
          setErrorMessage(t['openLetterForm.error.sendingFailed']);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [
      letterKey,
      accessPassword,
      openLetterTitle,
      openLetterContent,
      openLetterEmail,
      t,
    ],
  );

  const updateLetterTitle = (e) => setOpenLetterTitle(e.target.value);
  const updateLetterContent = (e) => setOpenLetterContent(e.target.value);
  const updateLetterEmail = (e) => setOpenLetterEmail(e.target.value);

  if (errorMessage) {
    // Using dangerouslySetInnerHTML due to some error messages contains links to the feedback form.
    // TODO: once we switch to a proper translations library, this should be replaced with variables and message template instead.
    return (
      <p
        className="OpenLetterForm__error-message"
        dangerouslySetInnerHTML={{ __html: errorMessage }}
      />
    );
  }

  if (isLetterSent) {
    return (
      <>
        <div className="OpenLetterForm__success-message">
          {t['openLetterForm.letterSent']}
          <br />
          {t['openLetterForm.recordCredentialsReminder']}
        </div>

        <div className="OpenLetterForm__credentials">
          <div className="OpenLetterForm__credential">
            <label htmlFor="letterKey">{t['openLetterForm.letterKey']}</label>
            <input
              className="access-credential-value"
              type="text"
              id="letterKey"
              name="letterKey"
              value={letterKey}
              disabled
            />
          </div>

          <div className="OpenLetterForm__credential">
            <label htmlFor="accessPassword">
              {t['openLetterForm.accessPassword']}
            </label>
            <input
              className="access-credential-value"
              type="text"
              name="accessPassword"
              value={accessPassword}
              disabled
            />
          </div>
        </div>

        <button className="button" onClick={() => window.location.reload()}>
          {t['openLetterForm.button.credentialsRecorded']}
        </button>
      </>
    );
  }

  return (
    <form
      className="WriteLetterForm"
      onSubmit={sendOpenLetter}
      autocomplete="off"
    >
      {isLoading && <FullPageLoader />}
      <div className="OpenLetterForm__credentials">
        <div className="OpenLetterForm__credential">
          <label htmlFor="letterKey">{t['openLetterForm.letterKey']}</label>
          <input
            className="access-credential-value"
            type="text"
            name="letterKey"
            value={letterKey}
            disabled
          />
        </div>

        <div className="OpenLetterForm__credential">
          <label htmlFor="accessPassword">
            {t['openLetterForm.accessPassword']}
          </label>
          <input
            className="access-credential-value"
            type="text"
            name="accessPassword"
            value={accessPassword}
            disabled
          />
        </div>

        <div className="OpenLetterForm__credentials-notice">
          {t['openLetterForm.recordCredentialsReminder']}
        </div>
      </div>

      <label htmlFor="title">{t['openLetterForm.subject']}</label>
      <input onChange={updateLetterTitle} type="text" name="title" required />

      <label htmlFor="content">{t['openLetterForm.content']}</label>
      <TextareaAutosize
        onChange={updateLetterContent}
        minRows={5}
        name="content"
        required
      />

      <label htmlFor="email">{t['openLetterForm.email']}</label>
      <input onChange={updateLetterEmail} type="email" name="email" />
      <div className="OpenLetterForm__email-notice">
        {t['openLetterForm.emailNotice']}
      </div>

      <button className="button" onClick={() => window.location.reload()}>
        {t['openLetterForm.button.cancel']}
      </button>
      <button className="button" type="submit">
        {t['openLetterForm.button.send']}
      </button>
    </form>
  );
};

export default WriteLetterForm;
