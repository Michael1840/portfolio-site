const SuccessMessage = ({ onDismiss }: { onDismiss: Function }) => (
  <div className="flex items-center justify-between p-4 rounded-lg bg-[#11312E] border border-[#009170]">
    {/* Left Side: Checkmark and Text */}
    <div className="flex items-center space-x-2">
      {/* Checkmark Icon (Simulated with text/SVG or using a library icon) */}
      <svg
        className="w-5 h-5 text-[#00E5A8]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>

      {/* Text */}
      <span className="text-white text-base font-medium">
        Email sent successfully
      </span>
    </div>

    {/* Right Side: Close Button (X) */}
    <button
      onClick={() => onDismiss()}
      className="text-gray-400 hover:text-white transition duration-150"
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
);

export default SuccessMessage;
