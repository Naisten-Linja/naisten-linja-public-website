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
    <div className="BlogPost">
      <div className="card">
        <div className="card__header">
            <img src={coverImage.file.url} alt={coverImage.title} />
        </div>
        <div className="card__body">
          <h2>{blogPostTitle}</h2>
          <p>{blogPostDescription}</p>
        </div>
        <div className="card__footer">
          <em>{new Date(blogPostDate).toLocaleDateString('fi-FI')}</em>
          <Link to={`/${slug}`}> Read more</Link>
        </div>
      </div>
    </div>
    // <div className="border-radius">
    //   <Background
    //     color={blogPostBackgroundColor}
    //     backgroundStyle={blogPostBackgroundStyle}
    //     textColor={blogPostTextColor}
    //   >
    //     <div className="BlogPost layout-container">
    //       <div className="row">
    //         <img
    //           className="cover-image"
    //           src={coverImage.file.url}
    //           alt={coverImage.title}
    //         />
    //       </div>
    //       <div>
    //         <h2>
    //           <strong>{blogPostTitle}</strong>
    //         </h2>
    //         <p>
    //           <em>{new Date(blogPostDate).toLocaleDateString('fi-FI')}</em>
    //         </p>
    //         <p>{blogPostDescription}</p>
    //         <p>
    //           <Link className="block-link" to={`/${slug}`}></Link>
    //         </p>
    //       </div>
    //     </div>
    //   </Background>
    // </div>
  );
};

export default ContentfulBlogPostCard;
