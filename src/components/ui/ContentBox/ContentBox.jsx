import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './ContentBox.scss';
import { Link } from 'gatsby';

const ContentBox = ({
  title,
  content,
  linkToCustomUrl,
  linkToInternalPage,
}) => {
  console.log('linkToInternalPage: ', linkToInternalPage);

  //   const isLink = linkToCustomUrl || linkToInternalPage;

  return (
    <div className="ContentBox_container">
      {linkToInternalPage ? (
        <Link className="ContentBox__title" to={`/${linkToInternalPage.slug}`}>
          {title}
        </Link>
      ) : (
        <a href={linkToCustomUrl}>
          <div className="ContentBox__title">{title}</div>
        </a>
      )}
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
