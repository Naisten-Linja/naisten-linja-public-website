import React from 'react';
import './ContentBox.scss';
import { Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES } from '@contentful/rich-text-types';
import { FaArrowRight } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';

const ContentBox = ({
  title,
  content,
  linkToCustomUrl,
  linkToInternalPage,
}) => {
  console.log('linkToInternalPage: ', linkToInternalPage);

  console.log(content);
  //   const isLink = linkToCustomUrl || linkToInternalPage;

  const options = {
    renderMark: {},
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        return (
          <Link href={node.data.target?.slug} className="inline-link">
            <FaArrowRight /> {node.content[0].value}
          </Link>
        );
      },
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        return (
          <a href={node.data.target?.file.url} className="inline-link">
            <FaDownload />
            {node.data.target.title}
          </a>
        );
      },
    },
  };

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
          {content.raw &&
            content.references &&
            renderRichText(content, options)}
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
