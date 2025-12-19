import React from 'react';
import FAQ from '../FAQ/FAQ';
import './FAQGroup.scss';
import Container from '../utils/Container/Container';

const FAQGroup = ({ faqs, title }) => {
  return (
    <Container size={'large'}>
      <div className="FAQGroup_container">
        {title && <h2 className="FAQGroup_title">{title}</h2>}
        <div className="FAQGroup_list">
          {faqs?.map((faq, idx) => (
            // eslint-disable-next-line react/jsx-pascal-case
            <FAQ
              key={idx}
              question={faq.question}
              answer={faq.answer}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FAQGroup;
