import React from 'react';

const YoutubeIcon = ({
  color = 'currentColor',
  width = 16,
  height = 16,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={true}
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24,0C10.7,0,0,10.7,0,24s10.7,24,24,24s24-10.7,24-24S37.3,0,24,0z M34,15.7c1.1,0.3,2,1.2,2.3,2.3 c0.5,2,0.5,6.3,0.5,6.3s0,4.3-0.5,6.3c-0.3,1.1-1.2,2-2.3,2.3c-2,0.5-10,0.5-10,0.5s-8,0-10-0.5c-1.1-0.3-2-1.2-2.3-2.3 c-0.5-2.1-0.5-6.3-0.5-6.3s0-4.3,0.5-6.3c0.3-1.1,1.2-2,2.3-2.3c2-0.5,10-0.5,10-0.5S32,15.2,34,15.7z"
      />
      <path fill={color} d="M21.6,28.8v-8l6.4,4L21.6,28.8z" />
    </svg>
  );
};

export default YoutubeIcon;
