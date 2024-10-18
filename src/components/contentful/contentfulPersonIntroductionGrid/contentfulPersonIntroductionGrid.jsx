import React from 'react';
import PersonIntroductionGrid from '../../ui/PersonIntroduction/PersonIntroductionGrid';
import PersonIntroductionCard from '../../ui/PersonIntroduction/PersonIntroductionCard';

const ContentfulPersonIntroductionGrid = ({ content }) => {
  const personIntroductions = content.personIntroductions;

  return (
    <PersonIntroductionGrid title={content.title}>
      {personIntroductions?.map((person, index) => (
        <PersonIntroductionCard key={index} {...person} />
      ))}
    </PersonIntroductionGrid>
  );
};

export default ContentfulPersonIntroductionGrid;
