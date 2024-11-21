import React from 'react';
import Container from '../utils/Container/Container';
import './AlertBar.scss';
import { Link } from 'gatsby';
// import { IoArrowForwardSharp } from 'react-icons/io5';

const AlertBar = ({ alertText, alertLink }) => {
  return (
    <Container theme={'alert'} background={true} size={'xx-large'}>
      {alertLink ? (
        <Link to={`/${alertLink}`} className="AlertBar_link_wrapper">
          <p className="AlertBar_container_link">{alertText}</p>
          {/* <IoArrowForwardSharp /> */}
        </Link>
      ) : (
        <p className="AlertBar_container">{alertText}</p>
      )}
    </Container>
  );
};

export default AlertBar;
