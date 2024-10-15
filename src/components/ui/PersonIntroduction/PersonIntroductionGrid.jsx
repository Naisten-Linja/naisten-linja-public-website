import React from 'react';
import './PersonIntroduction.scss';
const PersonIntroductionGrid = ({ title, children }) => {
  return (
    <div className="PersonIntroductionGrid_container">
      {title && <h2>{title}</h2>}
      <div className="person-introduction-grid">{children}</div>
    </div>
  );
};

export default PersonIntroductionGrid;
