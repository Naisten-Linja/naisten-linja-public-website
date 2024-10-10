import React from 'react';
import PersonIntroductionGrid from '../../ui/PersonIntroduction/PersonIntroductionGrid';
import PersonIntroductionCard from '../../ui/PersonIntroduction/PersonIntroductionCard';
import Container from '../../ui/utils/Container/Container';

const ContentfulPersonIntroductionGrid = ({ content }) => {
  const personIntroductions = content.personIntroductions;
  console.log('personIntroduction', personIntroductions);
  return (
    <Container>
      <div>
        <h2>Person introduction grid</h2>
      </div>
      <PersonIntroductionGrid>
        {personIntroductions?.map((person, index) => (
          <PersonIntroductionCard key={index} {...person} />
        ))}
      </PersonIntroductionGrid>
    </Container>
  );
};

export default ContentfulPersonIntroductionGrid;
