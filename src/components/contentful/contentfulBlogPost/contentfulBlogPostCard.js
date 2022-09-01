import React from 'react';
import { Link } from 'gatsby';
import Background from '../../background/background';
import './contentfulBlogPost.scss';

const ContentfulBlogPostCard = ({ content }) => {
  const {
    slug,
    blogPostTitle,
    blogPostDate,
    blogPostDescription,
    coverImage,
    blogPostBackgroundColor,
    blogPostBackgroundStyle,
    blogPostTextColor,
  } = content;

  return (
    <div className="BlogPost card-layout">
      <div className="card">
        <Background
          color={blogPostBackgroundColor}
          backgroundStyle={'none'}
          textColor={blogPostTextColor}
        >
          <div className="card__header">
            <img src={coverImage.file.url} alt={coverImage.title} />
          </div>
        </Background>
        <div className="card__body">
          <h2>
            <strong>{blogPostTitle}</strong>
          </h2>
          <small>
            <em>{new Date(blogPostDate).toLocaleDateString('fi-FI')}</em>
          </small>
          <p>{blogPostDescription}</p>
          <Link className="block-link" to={`/${slug}`}></Link>
        </div>
      </div>
    </div>
  );
};

export default ContentfulBlogPostCard;
