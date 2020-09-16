import React from 'react';
import '../../../scss/grid.scss';
import './contentfulForm.scss';
import axios from 'axios';

var config = {
  headers: { 'Access-Control-Allow-Origin': '*' },
};

const OpenLetter = ({ content }) => {
  axios
    .post(
      `https://naistenlinja-services-dev.netlify.app/api/online-letter/start`,
      config,
    )
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  return (
    <section>
      <div className="OpenLetter Form layout-container">
        <div className="row align-items-center">
          <form id="open-letter">
            <input type="hidden" name="accessKey" value="---" />
            <input type="hidden" name="accessPassword" value="---" />
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
            <label htmlFor="content">Content</label>
            <textarea name="content"></textarea>
          </form>
        </div>
      </div>
    </section>
  );
};

const Form = ({ content }) => {
  switch (content.formName) {
    case 'Open Letter':
      return <OpenLetter content={content} />;
    case 'Quiz: Equal Relationship':
      return <div>WIP</div>;
    default:
      return null;
  }
};

export default Form;
