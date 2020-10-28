import React, { useState } from 'react';
import '../../../scss/grid.scss';
import './contentfulForm.scss';
import axios from 'axios';

const axiosConfig = {
  headers: { 'Access-Control-Allow-Origin': '*' },
};

const OpenLetter = ({ content }) => {
  const [expandOpenLetterStart, setExpandOpenLetterStart] = useState(false);
  const [expandOpenLetterRead, setExpandOpenLetterRead] = useState(false);
  const [accessKey, setAccessKey] = useState('');
  const [accessPassword, setAccessPassword] = useState('');
  const [openLetterTitle, setOpenLetterTitle] = useState('');
  const [openLetterContent, setOpenLetterContent] = useState('');
  const [openLetterCreated, setOpenLetterCreated] = useState('');
  const [openLetterReplyContent, setOpenLetterReplyContent] = useState('');
  const [openLetterReplyLastUpdate, setOpenLetterReplyLastUpdate] = useState(
    '',
  );

  const [loadingError, setLoadingError] = useState('');
  const [sendError, setSendError] = useState('');
  const [sendConfirmation, setSendConfirmation] = useState(false);

  const startOpenLetter = () => {
    axios
      .post(
        `https://naistenlinja-services-dev.herokuapp.com/api/online-letter/start`,
        {},
        axiosConfig,
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setAccessKey(response.data.data.accessKey);
        setAccessPassword(response.data.data.accessPassword);
        setExpandOpenLetterStart(true);
      })
      .catch(function (error) {
        setLoadingError(error);
      });
  };

  const sendOpenLetter = () => {
    axios
      .post(
        `https://naistenlinja-services-dev.herokuapp.com/api/online-letter/send`,
        {
          accessKey: accessKey,
          accessPassword: accessPassword,
          title: openLetterTitle,
          content: openLetterContent,
        },
        axiosConfig,
      )
      .then(function (response) {
        // handle success
        console.log(response);
        if (response.data.data.success) {
          setSendConfirmation(true);
        } else {
          setSendError('Server error');
        }
      })
      .catch(function (error) {
        setSendError(error);
      });
  };

  const readOpenLetter = () => {
    axios
      .post(
        `https://naistenlinja-services-dev.herokuapp.com/api/online-letter/read`,
        {
          accessKey: accessKey,
          accessPassword: accessPassword,
        },
        axiosConfig,
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setOpenLetterTitle(response.data.data.title);
        setOpenLetterContent(response.data.data.content);
        setOpenLetterCreated(response.data.data.created);
        setOpenLetterReplyContent(response.data.data.replyContent);
        setOpenLetterReplyLastUpdate(response.data.data.replyUpdated);
      })
      .catch(function (error) {
        setLoadingError(error);
      });
  };

  return (
    <section>
      {!expandOpenLetterStart && !expandOpenLetterRead && (
        <div>
          <button
            onClick={() => {
              startOpenLetter();
            }}
          >
            Write a letter
          </button>
          <button
            onClick={() => {
              setExpandOpenLetterRead(true);
            }}
          >
            Read a letter
          </button>
        </div>
      )}

      {expandOpenLetterStart ? (
        <div className="OpenLetter Form layout-container">
          <div className="row align-items-center">
            {loadingError.length === 0 ? (
              <form id="open-letter">
                <input type="hidden" name="accessKey" value={accessKey} />
                <input
                  type="hidden"
                  name="accessPassword"
                  value={accessPassword}
                />
                <div>
                  Access Key: {accessKey}
                  <br />
                  Access Password: {accessPassword}
                  <br />
                  Please remember to save those!
                </div>
                <label htmlFor="title">Title</label>
                <input
                  onChange={(event) => {
                    setOpenLetterTitle(event.target.value);
                  }}
                  type="text"
                  name="title"
                />
                <label htmlFor="content">Content</label>
                <textarea
                  onChange={(event) => {
                    setOpenLetterContent(event.target.value);
                  }}
                  name="content"
                ></textarea>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    sendOpenLetter();
                  }}
                >
                  Submit
                </button>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                >
                  Reset
                </button>
                {sendConfirmation ? <div>Yay!</div> : ''}
              </form>
            ) : (
              <div>Error while loading the access key and password</div>
            )}
          </div>
        </div>
      ) : (
        ''
      )}

      {expandOpenLetterRead ? (
        <div className="OpenLetter Form layout-container">
          <div className="row align-items-center">
            <form id="read-open-letter">
              <label htmlFor="accessKey">Access Key:</label>
              <input
                onChange={(event) => {
                  setAccessKey(event.target.value);
                }}
                type="text"
                name="accessKey"
              />
              <label htmlFor="accessPassword">Access Password:</label>
              <input
                onChange={(event) => {
                  setAccessPassword(event.target.value);
                }}
                type="text"
                name="accessPassword"
              />
              <button
                onClick={(event) => {
                  event.preventDefault();
                  readOpenLetter();
                }}
              >
                Submit
              </button>
            </form>
            {openLetterCreated ? (
              <div>
                Title: {openLetterTitle}
                <br />
                Content: {openLetterContent}
                <br />
                Created: {openLetterCreated}
                <br />
                {openLetterReplyLastUpdate !== null ? (
                  <>
                    Reply: {openLetterReplyContent}
                    <br />
                    Reply date: {openLetterReplyLastUpdate}
                    <br />
                  </>
                ) : (
                  <>No reply yet</>
                )}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

const GiveFeedback = () => {
  const [loadingError, setLoadingError] = useState('');
  const [sendError, setSendError] = useState('');
  const [sendConfirmation, setSendConfirmation] = useState(false);

  const sendFeedback = () => {
    const form = document.getElementById('feedback');
    var obj = {};
    var elements = form.querySelectorAll('input, select, textarea');
    for (var i = 0; i < elements.length; ++i) {
      var element = elements[i];
      var name = element.name;
      var value = element.value;

      if (name) {
        obj[name] = value;
      }
    }

    const qs = Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join('&');

    console.log(qs);

    axios
      .post(
        `https://docs.google.com/forms/d/e/1FAIpQLScLB10sGsHiBY5ELwwi5Xbg8ZZ0p80Qy39BKeEq9hVyWBXXgA/formResponse/`,
        obj,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(function (response) {
        // handle success
        console.log(response);
        if (response.data.data.success) {
          setSendConfirmation(true);
        } else {
          setSendError('Server error');
        }
      })
      .catch(function (error) {
        setSendError(error);
      });
  };

  return (
    <div className="Feedback Form layout-container">
      <form id="feedback">
        <fieldset>
          <label>
            <input
              type="checkbox"
              name="entry.145862167"
              value="Puhelinpalvelua"
            />{' '}
            Phone
          </label>
          <label>
            <input type="checkbox" name="entry.145862167" value="Nettisivuja" />{' '}
            Website
          </label>
          <label>
            <input
              type="checkbox"
              name="entry.145862167"
              value="Ryhmätoimintaa"
            />{' '}
            Groupwork
          </label>
          <label>
            <input type="checkbox" name="entry.145862167" value="Muuta" /> Other
          </label>
        </fieldset>
        <label>
          Name:
          <input type="text" name="entry.1655903181" />
        </label>
        <label>
          Email:
          <input type="text" name="entry.1616391029" />
        </label>
        <label>
          Title:
          <input type="text" name="entry.1122848238" />
        </label>
        <label>
          Message:
          <textarea name="entry.886725065"></textarea>
        </label>
        <button
          onClick={(event) => {
            event.preventDefault();
            sendFeedback();
          }}
        >
          Submit
        </button>
      </form>
      {sendConfirmation ? <div>Yay!</div> : ''}
    </div>
  );
};

const Form = ({ content }) => {
  switch (content.formName) {
    case 'Open Letter':
      return <OpenLetter content={content} />;
    case 'Quiz: Equal Relationship':
      return <div>WIP</div>;
    case 'Give Feedback':
      return <GiveFeedback content={content} />;
    default:
      return null;
  }
};

export default Form;
