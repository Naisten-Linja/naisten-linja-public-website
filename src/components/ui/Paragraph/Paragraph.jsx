import React from 'react';
import './Paragraph.scss';
import Container from '../utils/Container/Container';

const Paragraph = ({
  title,
  paragraphText,
  backgroundColor,
  cta,
  background,
  theme,
}) => {
  console.log('paragraphText', paragraphText);

  return (
    <Container theme={'laventeli'} background={true} size={'medium'}>
      <div className="Paragraph_container">
        <h2 className="Paragraph_title">{title}</h2>
        {paragraphText && (
          <div
            dangerouslySetInnerHTML={{
              __html: paragraphText,
            }}
          />
        )}
      </div>
    </Container>
  );
};

export default Paragraph;
