import React from 'react';
import {
  IoCalendarClear,
  IoCall,
  IoChatbox,
  IoHeartSharp,
} from 'react-icons/io5';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from 'react-icons/fa';
import { FaDownload, FaThreads, FaX, FaYoutube } from 'react-icons/fa6';

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
    case 'ulkoinen-linkki':
      return <FaExternalLinkAlt />;
    case 'nuoli-oikea':
      return <FaArrowRight />;
    case 'nuoli-vasen':
      return <FaArrowLeft />;
    case 'lataa':
      return <FaDownload />;
    case 'nuoli-ylös-ympyrä':
      return <BsArrowUpCircleFill />;
    case 'instagram':
      return <FaInstagram />;
    case 'facebook':
      return <FaFacebook />;
    case 'threads':
      return <FaThreads />;
    case 'linkedin':
      return <FaLinkedin />;
    case 'youtube':
      return <FaYoutube />;
    case 'tiktok':
      return <FaTiktok />;
    case 'x':
      return <FaX />;
    default:
      return;
  }
};
