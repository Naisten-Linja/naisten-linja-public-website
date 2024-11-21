import React from 'react';
import './PagePreview.scss';
import Container from '../utils/Container/Container';
const PagePreviewGrid = ({ title, children, ingress, button }) => {
  return (
    <Container theme={''} size={'large'} background={false}>
      <div className="PagePreviewGrid_container">
        {title && <h2>{title}</h2>}
        {ingress && <div dangerouslySetInnerHTML={{ __html: ingress }} />}
        <div className="page-preview-grid">{children}</div>
      </div>
      {button && button}
    </Container>
  );
};

export default PagePreviewGrid;
