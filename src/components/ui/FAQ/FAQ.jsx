import React, { useState } from 'react';
import './FAQ.scss';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES } from '@contentful/rich-text-types';
import { Link } from 'gatsby';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { GrDownload } from 'react-icons/gr';
import { FaPlus, FaMinus } from 'react-icons/fa6';

// Helper function to extract plain text from Contentful rich text
const extractPlainText = (richTextContent) => {
  if (!richTextContent?.raw) return '';

  try {
    const parsed =
      typeof richTextContent.raw === 'string'
        ? JSON.parse(richTextContent.raw)
        : richTextContent.raw;

    const extractText = (node) => {
      if (!node) return '';

      if (node.nodeType === 'text') {
        return node.value || '';
      }

      if (node.content && Array.isArray(node.content)) {
        return node.content.map(extractText).join('');
      }

      return '';
    };

    return extractText(parsed).trim();
  } catch (e) {
    console.error('Error extracting plain text from rich text:', e);
    return '';
  }
};

const FAQ = ({ question, answer, idx = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Create a content object that renderRichText expects
  // If answer.raw is a string (JSON), use it directly; otherwise stringify it
  const richTextContent = answer?.raw
    ? {
        raw:
          typeof answer.raw === 'string'
            ? answer.raw
            : JSON.stringify(answer.raw),
        references: answer?.references || [],
      }
    : null;

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
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a href={node.data.uri} className="inline-link">
            {children}
          </a>
        );
      },
    },
  };

  // Generate JSON-LD schema for this FAQ item
  const answerText = richTextContent ? extractPlainText(richTextContent) : '';

  const faqSchema =
    question && answerText
      ? {
          '@context': 'https://schema.org',
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answerText,
          },
        }
      : null;

  return (
    <div className={`FAQ_container ${isExpanded ? 'is-expanded' : ''}`}>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <button
        className="FAQ_question"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={`faq-answer-${
          question ? question.replace(/\s+/g, '-').toLowerCase() : idx
        }`}
      >
        <span className="FAQ_question-text">{question}</span>
        <span className="FAQ_icon">
          {isExpanded ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {isExpanded && richTextContent && (
        <div
          id={`faq-answer-${
            question ? question.replace(/\s+/g, '-').toLowerCase() : idx
          }`}
          className="FAQ_answer"
          aria-hidden={!isExpanded}
        >
          {renderRichText(richTextContent, options)}
        </div>
      )}
    </div>
  );
};

export default FAQ;
