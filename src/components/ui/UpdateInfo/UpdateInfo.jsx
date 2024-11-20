import React from 'react';
import Container from '../utils/Container/Container';
import './UpdateInfo.scss';

const UpdateInfo = ({ updatedAt }) => {
  return (
    <Container theme={'update-info'} background={false} size={'medium'}>
      <p className="UpdateInfo_container">Päivitetty viimeksi {updatedAt}</p>
    </Container>
  );
};

export default UpdateInfo;
