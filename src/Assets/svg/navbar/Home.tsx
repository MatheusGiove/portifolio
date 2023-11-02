const Home = ({ color, className }: {color: string, className: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512 512"
    >
      <path
        d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z"
        fill={color}
      />
    </svg>
  );
};

export default Home;
