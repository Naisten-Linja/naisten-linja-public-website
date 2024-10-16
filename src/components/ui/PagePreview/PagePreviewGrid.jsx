import React from 'react';
import './PagePreview.scss';
import Container from '../utils/Container/Container';
const PagePreviewGrid = ({ title, children }) => {
  return (
    <Container theme={''} size={'large'} background={false}>
      <div className="PagePreviewGrid_container">
        {title && <h2>{title}</h2>}
        <div className="page-preview-grid">{children}</div>
      </div>
    </Container>
  );
};

export default PagePreviewGrid;
