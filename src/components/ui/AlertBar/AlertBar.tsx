import React from 'react';
import Container from '../utils/Container/Container';
import './AlertBar.scss';
import { Link } from 'gatsby';

const AlertBar = ({ alertText, alertLink }) => {
  return (
    <Container
      theme={'black'}
      background={true}
      size={'medium'}
      style={'padding: "1rem 1rem"'}
    >
      <Link to={`/${alertLink}`}>
        <p className="AlertBar_container">{alertText}</p>
      </Link>
    </Container>
  );
};

export default AlertBar;
