import React from 'react';
import './Paragraph.scss';
import Container from '../utils/Container/Container';

const Paragraph = ({
  title,
  paragraphText,
  button,
  background,
  theme,
  size,
}) => {
  console.log('paragraphText', paragraphText);

  return (
    <Container theme={theme} background={background} size={size}>
      <div className={`Paragraph_container ${!background ? theme : 'white'}`}>
        {title && <h2 className="Paragraph_title">{title}</h2>}
        {paragraphText && (
          <div
            className="paragraphText"
            dangerouslySetInnerHTML={{
              __html: paragraphText,
            }}
          />
        )}
        {button && button}
      </div>
    </Container>
  );
};

export default Paragraph;
