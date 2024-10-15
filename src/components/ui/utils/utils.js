import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { CiChat1 } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';

export const findIcon = (iconKey) => {
  switch (iconKey) {
    case 'puhelin':
      return <BsFillTelephoneFill />;
    case 'chat':
      return <CiChat1 />;
    case 'sydän':
      return <FaHeart />;
    default:
      return;
  }
};
