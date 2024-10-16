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
  size,
}) => {
  console.log('paragraphText', paragraphText);

  return (
    <Container theme={theme} background={background} size={size}>
      <div className="Paragraph_container">
        {title && <h2 className="Paragraph_title">{title}</h2>}
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
