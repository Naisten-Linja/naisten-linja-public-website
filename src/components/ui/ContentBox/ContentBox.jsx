import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ContentBox = ({
  content,
  title,
  linkToCustomUrl,
  linkToInternalPage,
}) => {
  //   const isLink = linkToCustomUrl || linkToInternalPage;

  return (
    <div className="">
      {title && <div className="ContentBox__title"> {title} </div>}
      {content && (
        <div className="ContentBox__content">
          {documentToReactComponents(JSON.parse(content.raw, null, 2))}
        </div>
      )}
      {/* <a
      linkToCustomUrl={linkToCustomUrl}
      linkToInternalPage={linkToInternalPage}
      title={title}
      /> */}
    </div>
  );
};

export default ContentBox;
