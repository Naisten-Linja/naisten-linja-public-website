import React from 'react';
import PersonIntroductionGrid from '../../ui/PersonIntroduction/PersonIntroductionGrid';
import PersonIntroductionCard from '../../ui/PersonIntroduction/PersonIntroductionCard';
import Container from '../../ui/utils/Container/Container';

const ContentfulPersonIntroductionGrid = ({ content }) => {
  const personIntroductions = content.personIntroductions;

  return (
    <Container theme={'white'} size={'large'} background={true}>
      <PersonIntroductionGrid title={content.title}>
        {personIntroductions?.map((person, index) => (
          <PersonIntroductionCard key={index} {...person} />
        ))}
      </PersonIntroductionGrid>
    </Container>
  );
};

export default ContentfulPersonIntroductionGrid;
