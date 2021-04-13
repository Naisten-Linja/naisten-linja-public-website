import React from 'react';
const TwitterIcon = ({
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
        d="M24,0C10.7,0,0,10.7,0,24s10.7,24,24,24s24-10.7,24-24S37.3,0,24,0z M23.3,20.3l-0.1-0.8 c-0.2-2.2,1.2-4.1,3.3-4.9c0.8-0.3,2.1-0.3,2.9-0.1c0.3,0.1,1,0.4,1.4,0.7l0.8,0.6l0.9-0.3c0.5-0.2,1.2-0.4,1.5-0.6 c0.3-0.2,0.5-0.2,0.5-0.2c0,0.3-0.6,1.3-1.1,1.8c-0.7,0.8-0.5,0.8,0.9,0.3c0.9-0.3,0.9-0.3,0.7,0c-0.1,0.2-0.6,0.8-1.2,1.3 c-0.9,0.9-1,1-1,1.8c0,1.2-0.6,3.7-1.1,5.1c-1.1,2.6-3.3,5.2-5.6,6.6c-3.2,1.9-7.4,2.4-11,1.3C14,32.6,12,31.7,12,31.5 c0-0.1,0.6-0.1,1.4-0.1c1.6,0,3.2-0.5,4.5-1.3l0.9-0.5l-1-0.4c-1.5-0.5-2.8-1.7-3.1-2.8C14.6,26,14.6,26,15.6,26h1l-0.8-0.4 c-1-0.5-1.9-1.3-2.3-2.2c-0.3-0.6-0.7-2.2-0.6-2.3c0-0.1,0.4,0.1,0.8,0.2c1.2,0.4,1.3,0.3,0.6-0.4c-1.3-1.3-1.6-3.2-1-5l0.3-0.8 l1.1,1.1c2.3,2.2,4.9,3.5,8,3.9L23.3,20.3z"
      />
    </svg>
  );
};

export default TwitterIcon;
