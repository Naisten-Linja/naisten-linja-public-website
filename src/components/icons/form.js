import React from 'react';

const FormIcon = ({
  color = 'currentColor',
  width = 16,
  height = 16,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={true}
      {...props}
    >
      <g>
        <path
          d="M5,7v42h34v-6h6V1H11v6H5z M37,47H7V9h4h19v7h7v27V47z M32,10.414L35.586,14H32V10.414z M13,3h30v38h-4V14.586L31.414,7H13
		V3z"
        />
        <rect x="11" y="20" width="22" height="2" />
        <rect x="11" y="26" width="22" height="2" />
        <rect x="11" y="32" width="22" height="2" />
        <rect x="11" y="40" width="9" height="2" />
        <rect x="24" y="40" width="9" height="2" />
        <rect x="18" y="14" width="8" height="2" />
      </g>
    </svg>
  );
};

export default FormIcon;
