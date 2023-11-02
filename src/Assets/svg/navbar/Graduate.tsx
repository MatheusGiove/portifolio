const Graduate = ({ color, className }: {color: string, className: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M256 370.43L96 279v98.42l160 88.88 160-88.88V279l-160 91.43z"
      />
      <path
        fill={color}
        d="M512.25 192L256 45.57-.25 192 256 338.43l208-118.86V384h48V192.14l.25-.14z"
      />
    </svg>
  );
};

export default Graduate;
