const GradientButton = ({
  title,
  onClick,
  isLoading = false,
}: {
  title: string;
  onClick: Function;
  isLoading?: boolean;
}) => {
  if (isLoading) {
    return (
      <button
        type="button"
        className="flex flex-row rounded-lg bg-gradient-to-r from-accentBlue to-accentPink py-1.5 px-8 mt-5 shadow-accentBlue hover:shadow-2xl hover:scale-105 transition-all transition-discrete"
        disabled
      >
        <svg
          className="mr-3 h-5 w-5 animate-spin"
          viewBox="0 0 24 24"
          fill="none" // Important: set fill to none
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ADD THIS PATH: Defines a spinning arc (a common loader design) */}
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor" // Use current color for easy styling
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Processing...
      </button>
    );
  }

  return (
    <button
      type="submit"
      onClick={() => onClick()}
      className="rounded-lg bg-gradient-to-r from-accentBlue to-accentPink py-1.5 px-8 mt-5 shadow-accentBlue hover:shadow-2xl hover:scale-105 transition-all transition-discrete"
    >
      {title}
    </button>
  );
};

export default GradientButton;
