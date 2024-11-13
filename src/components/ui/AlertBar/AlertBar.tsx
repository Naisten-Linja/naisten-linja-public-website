import React from 'react';
import Container from '../utils/Container/Container';
import './AlertBar.scss';
import { Link } from 'gatsby';

const AlertBar = ({ alertText, alertLink }) => {
  return (
    <Container theme={'alert'} background={true} size={'large'}>
      {alertLink ? (
        <Link to={`/${alertLink}`}>
          <p className="AlertBar_container_link">{alertText}</p>
        </Link>
      ) : (
        <p className="AlertBar_container">{alertText}</p>
      )}
    </Container>
  );
};

export default AlertBar;
