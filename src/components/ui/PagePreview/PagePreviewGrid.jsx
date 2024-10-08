import React from 'react';
import './PagePreview.scss';
import Container from '../utils/Container/Container';
const PagePreviewGrid = ({ children }) => {
  return (
    <Container>
      <div className="page-preview-grid">{children}</div>
    </Container>
  );
};

export default PagePreviewGrid;
