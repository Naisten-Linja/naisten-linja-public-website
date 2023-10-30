import React from 'react';
import Background from '../../background/background';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import ContentfulVideo from '../contentfulVideo/contentfulVideo';

import './contentfulBlogPost.scss';

const options = {
  renderMark: {},
  renderNode: {
    [BLOCKS.TABLE]: (node, children) => (
      <table>
        <tbody>{children}</tbody>
      </table>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => <th>{children}</th>,
    [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
    [BLOCKS.TABLE_CELL]: (node, children) => <td>{children}</td>,
    [BLOCKS.EMBEDDED_ENTRY]: ({ data }) => {
      if (data.target.__typename === 'ContentfulVideo') {
        return <ContentfulVideo content={data.target} />;
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
      return (
        <img
          className="BlogPost__image"
          src={`https://${data.target.file.url}`}
          alt={data.target.description}
        />
      );
    },
  },
};

const ContentfulBlogPost = ({ content }) => {
  const {
    blogPostTitle,
    blogPostDate,
    blogPostContent,
    blogPostBackgroundStyle,
    blogPostBackgroundColor,
    blogPostTextColor,
    coverImage,
  } = content;

  return (
    <Background
      color={blogPostBackgroundColor}
      backgroundStyle={blogPostBackgroundStyle}
      textColor={blogPostTextColor}
    >
      <div className="full-width-section">
        <div
          className="BlogPost layout-container"
          style={{ padding: '2em 1em' }}
        >
          <div className="row cover-image">
            <img src={coverImage?.file.url ?? ""} alt={coverImage?.title ?? ""} />
          </div>
          <div>
            <h2>
              <strong>{blogPostTitle}</strong>
            </h2>
            <p>
              <em>{new Date(blogPostDate).toLocaleDateString('fi-FI')}</em>
            </p>
            {renderRichText(blogPostContent, options)}
          </div>
        </div>
      </div>
    </Background>
  );
};

export default ContentfulBlogPost;
