import React from 'react';
import './PersonIntroduction.scss';
import Container from '../utils/Container/Container';
const PersonIntroductionGrid = ({ children }) => {
  return (
    <Container>
      <div className="person-introduction-grid">{children}</div>
    </Container>
  );
};

export default PersonIntroductionGrid;
