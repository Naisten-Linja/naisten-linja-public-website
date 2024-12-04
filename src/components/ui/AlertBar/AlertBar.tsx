import React from 'react';
import Container from '../utils/Container/Container';
import './AlertBar.scss';
import { Link } from 'gatsby';
import { IoArrowForwardSharp } from 'react-icons/io5';

const AlertBar = ({ alertText, alertLink }) => {
  return (
    <div className="AlertBar_container">
      {alertLink ? (
        <>
          <Link to={`/${alertLink}`} className="AlertBar_link">
            <p className="AlertBar_content">
              {alertText} <IoArrowForwardSharp />
            </p>
          </Link>
          <Link
            aria-hidden={true}
            to={`/${alertLink}`}
            className="AlertBar_link"
          >
            <p className="AlertBar_content">
              {alertText} <IoArrowForwardSharp />
            </p>
          </Link>
          <Link
            aria-hidden={true}
            to={`/${alertLink}`}
            className="AlertBar_link"
          >
            <p className="AlertBar_content">
              {alertText} <IoArrowForwardSharp />
            </p>
          </Link>
          <Link
            aria-hidden={true}
            to={`/${alertLink}`}
            className="AlertBar_link"
          >
            <p className="AlertBar_content">
              {alertText} <IoArrowForwardSharp />
            </p>
          </Link>
        </>
      ) : (
        <p className="AlertBar_text">{alertText}</p>
      )}
    </div>
  );
};

export default AlertBar;
