import React from 'react';

import FAQGroup from '../../ui/FAQGroup/FAQGroup';

const ContentfulFAQGroup = ({ content }) => {
  const { content: faqs = [] } = content;

  console.log(content);
  // Map the Contentful data structure to the FAQ component props
  const mappedFaqs = faqs?.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return <FAQGroup title={content.title} faqs={mappedFaqs} />;
};

export default ContentfulFAQGroup;
