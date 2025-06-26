import React from 'react';
import './PersonIntroduction.scss';
import Container from '../utils/Container/Container';
const PersonIntroductionGrid = ({ title, children, listView, ingress }) => {
  return (
    <Container theme={'white'} size={'large'} background={true}>
      <div className="PersonIntroductionGrid_container">
        {title && <h2>{title}</h2>}
        {ingress && (
          <div
            dangerouslySetInnerHTML={{
              __html: ingress.childMarkdownRemark.html,
            }}
          />
        )}
        <div className={`person-introduction-grid ${listView && 'listView'}`}>
          {children}
        </div>
      </div>
    </Container>
  );
};

export default PersonIntroductionGrid;
