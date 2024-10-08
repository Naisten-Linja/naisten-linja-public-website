import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import './Paragraph.scss';
import Container from '../utils/Container/Container';

const Paragraph = ({
  title,
  paragraphContent,
  backgroundColor,
  cta,
  background,
}) => {
  console.log('paragraphContent', paragraphContent);

  return (
    <Container backgroundColor="#ffbf80" background={background}>
      <div className="Paragraph_container">
        <h2 className="Paragraph_title">{title}</h2>
        {paragraphContent && (
          <div
            dangerouslySetInnerHTML={{
              __html: paragraphContent,
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
