import React, { useState, useCallback } from 'react';
import axios from 'axios';
import TextareaAutosize from 'react-textarea-autosize';

import { SERVICE_API_URL } from '../../../constants';
import { FullPageLoader } from '../../loader';

import ReadLetterForm from './readLetterForm';

import '../../../scss/grid.scss';
import './contentfulOpenLetterForm.scss';

const WriteLetterForm = ({ accessKey, accessPassword }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLetterSent, setIsLetterSent] = useState(false);
  const [openLetterTitle, setOpenLetterTitle] = useState('');
  const [openLetterContent, setOpenLetterContent] = useState('');

  const sendOpenLetter = useCallback(
    (e) => {
      e.preventDefault();
      setIsLoading(true);
      setErrorMessage(null);
      if (!openLetterTitle.trim()) {
        return setErrorMessage("Please provide the letter's subject");
      }
      if (!openLetterContent.trim()) {
        return setErrorMessage('Your letter content is missing');
      }
      axios
        .post(`${SERVICE_API_URL}/online-letter/send`, {
          accessKey,
          accessPassword,
          title: openLetterTitle,
          content: openLetterContent,
        })
        .then(function (response) {
          setIsLetterSent(true);
        })
        .catch(function (error) {
          setErrorMessage(
            'There was an issue with sending your leter. Please refresh this page and try again, or contact our staff for support!',
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [accessKey, accessPassword, openLetterTitle, openLetterContent],
  );

  const updateLetterTitle = (e) => setOpenLetterTitle(e.target.value);
  const updateLetterContent = (e) => setOpenLetterContent(e.target.value);

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  if (isLetterSent) {
    return (
      <>
        <div className="OpenLetterForm__success-message">
          Your message has been sent!
          <br />
          Please make sure you have written these credentials down in order to
          read your letter later.
        </div>

        <div className="OpenLetterForm__credentials">
          <div className="OpenLetterForm__credential">
            <label htmlFor="accessKey">Access key</label>
            <input
              className="access-credential-value"
              type="text"
              name="accessKey"
              value={accessKey}
              disabled
            />
          </div>

          <div className="OpenLetterForm__credential">
            <label htmlFor="accessPassword">Access passsword</label>
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
          Done
        </button>
      </>
    );
  }

  return (
    <form className="WriteLetterForm" onSubmit={sendOpenLetter}>
      {isLoading && <FullPageLoader />}
      <div className="OpenLetterForm__credentials">
        <div className="OpenLetterForm__credential">
          <label htmlFor="accessKey">Access key</label>
          <input
            className="access-credential-value"
            type="text"
            name="accessKey"
            value={accessKey}
            disabled
          />
        </div>

        <div className="OpenLetterForm__credential">
          <label htmlFor="accessPassword">Access passsword</label>
          <input
            className="access-credential-value"
            type="text"
            name="accessPassword"
            value={accessPassword}
            disabled
          />
        </div>

        <div className="OpenLetterForm__credentials-notice">
          Please remember to write down your access key and password in order to
          read the message later
        </div>
      </div>

      <label htmlFor="title">Subject</label>
      <input onChange={updateLetterTitle} type="text" name="title" required />

      <label htmlFor="content">Content</label>
      <TextareaAutosize
        onChange={updateLetterContent}
        minRows={5}
        name="content"
        required
      />

      <button className="button" type="submit">
        Send
      </button>
    </form>
  );
};

export default WriteLetterForm;
