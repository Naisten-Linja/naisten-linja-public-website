import React from 'react';

const FacebookIcon = ({
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
        d="M24,0C10.7,0,0,10.7,0,24s10.7,24,24,24s24-10.7,24-24S37.3,0,24,0z M26.5,25.1v13.1h-5.4V25.1h-2.7v-4.5h2.7 v-2.7c0-3.7,1.5-5.9,5.9-5.9h3.6v4.5h-2.3c-1.7,0-1.8,0.6-1.8,1.8l0,2.3h4.1l-0.5,4.5H26.5z"
      />
    </svg>
  );
};

export default FacebookIcon;
