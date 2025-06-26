import React from 'react';
import './ContentBox.scss';
import { Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES } from '@contentful/rich-text-types';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { GrDownload } from 'react-icons/gr';

const ContentBox = ({
  title,
  content,
  image,
  linkToCustomUrl,
  linkToInternalPage,
  showImages,
}) => {
  const options = {
    renderMark: {},
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        return (
          <Link href={'/' + node.data.target?.slug} className="inline-link">
            <IoArrowForwardSharp /> {node.content[0].value}
          </Link>
        );
      },
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        return (
          <a href={node.data.target?.file.url} className="inline-link">
            <GrDownload />
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
            {showImages && image && (
              <img src={image.file.url + '?fm=webp&q=90&h=300'} alt={''} />
            )}
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
            <IoArrowForwardSharp />
          </Link>
        ) : linkToCustomUrl ? (
          <a href={linkToCustomUrl} className="ContentBox__title">
            {title}
            <LiaExternalLinkAltSolid />
          </a>
        ) : (
          <div className="ContentBox__title_nolink">{title}</div>
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
