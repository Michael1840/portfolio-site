const FailureMessage = ({ onDismiss }: { onDismiss: Function }) => (
  // Updated Background and Border to Error/Warning Colors
  // bg-[#4B2020] (Dark Red/Amber) and border-[#B91C1C] (Red)
  <div className="flex flex-col p-4 rounded-lg bg-[#341b2a] border border-[#FF6467]">
    {/* Left Side: Exclamation Icon and Text */}
    <div className="flex items-start justify-between">
      {/* Exclamation Mark Icon */}
      <div className="flex items-center space-x-3">
        <img className="w-5 h-5 text-[#ff0000]" src="/close.svg" />

        {/* Text */}
        <span className="text-[#ffc9c9] text-base font-medium">
          Failed to send email! Please check your content and try again.
        </span>
      </div>

      <button
        onClick={() => onDismiss()}
        className="text-[#ffc9c9] hover:text-white transition duration-150"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>

    {/* Right Side: Close Button (X) - Remains the same */}
    <div className="flex items-start space-x-3">
      <ol className="flex flex-col ml-12 mt-2 space-y-1 list-disc">
        <li className="text-sm font-normal list-item">
          Your email address must be valid.
        </li>
        <li className="text-sm font-normal list-item">
          Make sure all required fields are filled.
        </li>
      </ol>
    </div>
  </div>
);

export default FailureMessage;
