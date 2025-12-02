const ArrowDown = ({ fill, stroke, className, width, height }) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || "24"}
        height={height || "24"}
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <circle cx="12" cy="12" r="10" />
        <path d="M16 12l-4 4-4-4M12 8v7" />
      </svg>
    </div>
  );
};

export default ArrowDown;

