import React from "react";

const List = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512 512"
    >
      <path
        fill="#edf1f7"
        stroke="#edf1f7"
        stroke-linejoin="round"
        stroke-width="48"
        d="M144 144h320M144 256h320M144 368h320"
      />
      <path
        fill="#edf1f7"
        stroke="#edf1f7"
        stroke-linecap="square"
        stroke-linejoin="round"
        stroke-width="32"
        d="M64 128h32v32H64zM64 240h32v32H64zM64 352h32v32H64z"
      />
    </svg>
  );
};

export default List;
