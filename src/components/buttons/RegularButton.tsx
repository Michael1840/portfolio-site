const RegularButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: Function;
}) => {
  return (
    <button
      onClick={() => onClick}
      className="rounded-lg bg-container py-1.5 px-8 border border-borderTertiary mt-5 shadow-borderTertiary hover:shadow-2xl hover:bg-buttonHover hover:scale-105 transition-all transition-discrete"
    >
      {title}
    </button>
  );
};

export default RegularButton;
