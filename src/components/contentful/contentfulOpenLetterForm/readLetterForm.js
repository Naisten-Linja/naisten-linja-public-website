import React, { useState, useCallback } from 'react';
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { FullPageLoader } from '../../loader';
import { SERVICE_API_URL } from '../../../constants';
import { translations } from './translations';
import ContentfulGoogleFormsIframe from '../contentfulGoogleFormsIframe/contentfulGoogleFormsIframe';

const axiosConfig = {
  headers: { 'Content-Type': 'application/json' },
};

const richTextRenderingOptions = {
  renderMark: {},
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: ({ data }) => {
      if (data?.target?.internal?.type === 'ContentfulGoogleFormsIframe') {
        return <ContentfulGoogleFormsIframe content={data.target} />;
      }
    },
  },
};

const ReadLetterForm = ({ content, language }) => {
  const [openLetterContent, setOpenLetterContent] = useState(null);

  const hasReply =
    openLetterContent !== null && openLetterContent.replyContent !== null;

  return (
    <>
      {!openLetterContent && (
        <AccessKeyAndPasswordForm
          setOpenLetterContent={setOpenLetterContent}
          language={language}
        />
      )}
      {openLetterContent && (
        <LetterContent
          openLetterContent={openLetterContent}
          language={language}
        />
      )}
      {hasReply && content.contentAfterReceivingReply && (
        <div className="OpenLetterForm__content-after-reply">
          {renderRichText(
            content.contentAfterReceivingReply,
            richTextRenderingOptions,
          )}
        </div>
      )}
    </>
  );
};

export default ReadLetterForm;

const LetterContent = ({ openLetterContent, language }) => {
  const t = translations[language] ?? translations.fi;

  return (
    <>
      <h2>{t['openLetterForm.ourResponse']}</h2>
      {openLetterContent.replyContent ? (
        <div className="OpenLetterForm__letter-content-wrapper">
          <p>
            {t['openLetterForm.date']}:{' '}
            {new Date(openLetterContent.replyUpdated).toLocaleString()}
          </p>
          <MDEditor.Markdown
            source={openLetterContent.replyContent}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]],
            }}
            className="OpenLetterForm__letter-content-mdeditor"
          />
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
        {t['openLetterForm.button.closeLetter']}
      </button>
    </>
  );
};

const AccessKeyAndPasswordForm = ({ setOpenLetterContent, language }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [letterKey, setLetterKey] = useState('');
  const [accessPassword, setAccessPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const t = translations[language] ?? translations.fi;

  const readOpenLetter = useCallback(
    async (e) => {
      e.preventDefault();
      setErrorMessage(null);
      if (!letterKey.trim()) {
        setErrorMessage(t['openLetterForm.error.letterKeyMissing']);
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
          { accessKey: letterKey, accessPassword: accessPassword },
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
    [letterKey, accessPassword, setOpenLetterContent, t],
  );

  return (
    <form
      className="ReadLetterForm"
      onSubmit={readOpenLetter}
      autoComplete="off"
    >
      {/* Using dangerouslySetInnerHTML due to some error messages contains links to the feedback form. */}
      {/* TODO: once we switch to a proper translations library, this should be replaced with variables and message template instead.*/}
      {errorMessage && (
        <p
          className="OpenLetterForm__error-message"
          dangerouslySetInnerHTML={{ __html: errorMessage }}
        />
      )}

      <div className="OpenLetterForm__credentials">
        <div className="OpenLetterForm__credential">
          <label htmlFor="letterKey">{t['openLetterForm.letterKey']}</label>
          <input
            onChange={(e) => setLetterKey(e.target.value)}
            type="text"
            id="letterKey"
            name="letterKey"
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
            id="accessPassword"
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
