import React from 'react';
import Container from '../utils/Container/Container';

const UpdateInfo = ({ updatedAt }) => {
  return (
    <Container theme={''} background={false} size={'large'}>
      <p>Päivitetty viimeksi {updatedAt}</p>
    </Container>
  );
};

export default UpdateInfo;
