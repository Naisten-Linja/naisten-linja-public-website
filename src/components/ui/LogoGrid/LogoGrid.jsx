import React from 'react';
import './LogoGrid.scss';
import Container from '../utils/Container/Container';

const LogoGrid = ({ title, children }) => {
  return (
    <Container theme={'ruis-300'} size={'extra-large'} background={true}>
      <div className="LogoGrid_container">
        <h2 className="LogoGrid_title">{title}</h2>
        <div className="LogoGrid_logos">{children}</div>
      </div>
    </Container>
  );
};

export default LogoGrid;
