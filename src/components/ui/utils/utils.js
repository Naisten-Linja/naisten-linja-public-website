import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import {
  IoCalendarClear,
  IoCall,
  IoChatbox,
  IoHeartSharp,
} from 'react-icons/io5';

export const findIcon = (iconKey) => {
  switch (iconKey) {
    case 'puhelin':
      return <IoCall />;
    case 'chat':
      return <IoChatbox />;
    case 'sydän':
      return <IoHeartSharp />;
    case 'kalenteri':
      return <IoCalendarClear />;
    default:
      return;
  }
};
