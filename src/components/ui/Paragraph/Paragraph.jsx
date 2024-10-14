import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import './Paragraph.scss';
import Container from '../utils/Container/Container';

const Paragraph = ({
  title,
  paragraphText,
  backgroundColor,
  cta,
  background,
}) => {
  console.log('paragraphText', paragraphText);

  return (
    <Container backgroundColor="#ffbf80" background={background}>
      <div className="Paragraph_container">
        <h2 className="Paragraph_title">{title}</h2>
        {paragraphText && (
          <div
            dangerouslySetInnerHTML={{
              __html: paragraphText,
            }}
          />
        )}
        {/* <div>
        {paragraphContent &&
          documentToReactComponents(JSON.parse(paragraphContent.raw, null, 2))}
      </div> */}
      </div>
    </Container>
  );
};

export default Paragraph;
