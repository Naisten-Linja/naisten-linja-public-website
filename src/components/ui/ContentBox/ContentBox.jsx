import React from 'react';
import './ContentBox.scss';
import { Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES } from '@contentful/rich-text-types';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';

const ContentBox = ({
  title,
  content,
  image,
  linkToCustomUrl,
  linkToInternalPage,
  showImages,
}) => {
  console.log('showImages: ', showImages);

  console.log(content);
  //   const isLink = linkToCustomUrl || linkToInternalPage;

  const options = {
    renderMark: {},
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        return (
          <Link href={'/' + node.data.target?.slug} className="inline-link">
            <FaArrowRight /> {node.content[0].value}
          </Link>
        );
      },
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        return (
          <a href={node.data.target?.file.url} className="inline-link">
            <FaDownload />
            {node.content[0].value}
          </a>
        );
      },
    },
  };

  return (
    <div className="ContentBox_container">
      <div>
        {!showImages ? (
          ''
        ) : (
          <div className="ContentBox__image">
            {showImages && image && <img src={image.file.url} alt={''} />}
            {showImages && !image && (
              <img src={'/images/placeholder.png'} alt="" />
            )}
          </div>
        )}
        {linkToInternalPage ? (
          <Link
            className="ContentBox__title"
            to={`/${linkToInternalPage.slug}`}
          >
            {title}
            <FaArrowRight />
          </Link>
        ) : linkToCustomUrl ? (
          <a href={linkToCustomUrl} className="ContentBox__title">
            {title}
            <FaExternalLinkAlt />
          </a>
        ) : (
          <div className="ContentBox__title">{title}</div>
        )}
      </div>
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
