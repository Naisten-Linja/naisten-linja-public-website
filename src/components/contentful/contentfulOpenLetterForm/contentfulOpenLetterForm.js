import React, { useState } from 'react';
import axios from 'axios';
import TextareaAutosize from 'react-textarea-autosize';

import ReadLetterForm from './readLetterForm';
import WriteLetterForm from './writeLetterForm';

import './contentfulOpenLetterForm.scss';

const axiosConfig = {
  headers: { 'Access-Control-Allow-Origin': '*' },
};

const OpenLetterForm = ({ content }) => {
  const {
    writeALetterButtonText,
    readYourLetterButtonText,
    title,
    description,
  } = content;

  const [expandOpenLetterStart, setExpandOpenLetterStart] = useState(false);
  const [expandOpenLetterRead, setExpandOpenLetterRead] = useState(false);
  const [accessKey, setAccessKey] = useState('');
  const [accessPassword, setAccessPassword] = useState('');

  const [loadingError, setLoadingError] = useState('');

  const startOpenLetter = () => {
    axios
      .post(
        `https://naistenlinja-services-dev.herokuapp.com/api/online-letter/start`,
        {},
        axiosConfig,
      )
      .then(function (response) {
        // handle success
        setAccessKey(response.data.data.accessKey);
        setAccessPassword(response.data.data.accessPassword);
        setExpandOpenLetterStart(true);
      })
      .catch(function (error) {
        setLoadingError(error);
      });
  };

  return (
    <section className="OpenLetterForm full-width-section">
      <div className="layout-container">
        <h1>{title}</h1>
        {!expandOpenLetterStart && !expandOpenLetterRead && (
          <>
            {description && (
              <div
                className="ContentBox__content"
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.html,
                }}
              />
            )}
            <button className="button" onClick={startOpenLetter}>
              Write a new letter
            </button>
            <button
              className="button"
              onClick={() => {
                setExpandOpenLetterRead(true);
              }}
            >
              Read your response
            </button>
          </>
        )}

        {expandOpenLetterStart && accessKey && accessPassword && (
          <WriteLetterForm
            accessKey={accessKey}
            accessPassword={accessPassword}
          />
        )}

        {expandOpenLetterRead && <ReadLetterForm content={content} />}
      </div>
    </section>
  );
};

export default OpenLetterForm;
