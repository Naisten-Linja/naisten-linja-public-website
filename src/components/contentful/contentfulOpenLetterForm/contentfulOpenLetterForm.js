import React, { useState } from 'react';
import axios from 'axios';
import TextareaAutosize from 'react-textarea-autosize';

import ReadLetterForm from './readLetterForm';
import WriteLetterForm from './writeLetterForm';
import { translations } from './translations';

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
    defaultLanguage,
  } = content;

  const [language, setLanguage] = useState(defaultLanguage);
  const [expandOpenLetterStart, setExpandOpenLetterStart] = useState(false);
  const [expandOpenLetterRead, setExpandOpenLetterRead] = useState(false);
  const [accessKey, setAccessKey] = useState('');
  const [accessPassword, setAccessPassword] = useState('');
  const [loadingError, setLoadingError] = useState('');

  const t = translations[language] ?? translations.fi;

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
              {t['openLetterForm.button.writeANewLetter']}
            </button>
            <button
              className="button"
              onClick={() => {
                setExpandOpenLetterRead(true);
              }}
            >
              {t['openLetterForm.button.readResponse']}
            </button>
          </>
        )}

        {expandOpenLetterStart && accessKey && accessPassword && (
          <WriteLetterForm
            accessKey={accessKey}
            accessPassword={accessPassword}
            language={language}
          />
        )}

        {expandOpenLetterRead && (
          <ReadLetterForm content={content} language={language} />
        )}
      </div>
    </section>
  );
};

export default OpenLetterForm;
