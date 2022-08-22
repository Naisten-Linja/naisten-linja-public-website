import React from 'react';
import { Link } from 'gatsby';
import Background from '../../background/background';

import './contentfulBlogPost.scss';

const ContentfulBlogPostPreview = ({ content }) => {
  const {
    slug,
    blogPostTitle,
    blogPostDate,
    blogPostDescription,
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
        <div className="BlogPost layout-container">
          <div className="row">
            <img className="cover-image" src={coverImage.file.url} alt={coverImage.title} />
          </div>
          <div>
            <h2>
              <strong>{blogPostTitle}</strong>
            </h2>
            <p>
              <em>{new Date(blogPostDate).toLocaleDateString('fi-FI')}</em>
            </p>
            <p>{blogPostDescription}</p>
            <p>
              <Link
                className="block-link"
                to={`/${slug}`}
              >
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default ContentfulBlogPostPreview;
