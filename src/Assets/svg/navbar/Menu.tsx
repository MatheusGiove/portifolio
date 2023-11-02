import React from "react";

export const Menu = ({ className }: {className: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512 512"
    >
      <path
        fill="#edf1f7"
        stroke="#edf1f7"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="32"
        d="M80 160h352M80 256h352M80 352h352"
      />
    </svg>
  );
};

export default Menu;
