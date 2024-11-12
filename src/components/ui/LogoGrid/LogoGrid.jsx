import React from 'react';
import './LogoGrid.scss';
import Container from '../utils/Container/Container';

const LogoGrid = ({ children }) => {
  return (
    <Container theme={'ruis'} size={'extra-large'} background={true}>
      <div className="LogoGrid_container">{children}</div>
    </Container>
  );
};

export default LogoGrid;
