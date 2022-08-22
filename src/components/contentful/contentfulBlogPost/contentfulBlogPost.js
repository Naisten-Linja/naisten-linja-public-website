import React from 'react';
import Background from '../../background/background';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './contentfulBlogPost.scss';

const options = {
  renderMark: {
  },
  renderNode: {
    [BLOCKS.TABLE]: (node, children) => (
      <table>
        <tbody>{children}</tbody>
      </table>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
    [BLOCKS.TABLE_CELL]: (node, children) => <td>{children}</td>,
    [BLOCKS.EMBEDDED_ENTRY]: ({data}) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      // if (data.target.sys.contentType.sys.id === "codeBlock") {
      //   return (
      //     <pre>
      //       <code>{data.target.code}</code>
      //     </pre>
      //   );
      // }

      // if (data.target.sys.contentType.sys.id === "videoEmbed") {
      //   return (
      //     <iframe
      //       src={data.target.embedUrl}
      //       height="100%"
      //       width="100%"
      //       frameBorder="0"
      //       scrolling="no"
      //       title={node.data.target.title}
      //       allowFullScreen={true}
      //     />
      //   );
      // }
      console.log("[BLOCKS.EMBEDDED_ENTRY]", data.target.sys.contentType)
    },
    [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
      console.log("[BLOCKS.EMBEDDED_ASSET]", data.target.sys)
      // return (
      //   <div className="image-col">
      //     <img
      //       src={`https://${data.target.file.url}`}
      //       height={data.target.file.details.image.height}
      //       width={data.target.file.details.image.width}
      //       alt={data.target.description}
      //     />
      //   </div>
      // );
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
        <div className="BlogPost layout-container">
          <div className="row">
            <img src={coverImage.file.url} alt={coverImage.title} />
          </div>
          <div>
            <h2>
              <strong>{blogPostTitle}</strong>
            </h2>
            <p>
              <em>{new Date(blogPostDate).toLocaleDateString('fi-FI')}</em>
            </p>
            { documentToReactComponents(JSON.parse(blogPostContent.raw)) }
          </div>
        </div>
      </div>
    </Background>
  );
};

export default ContentfulBlogPost;
