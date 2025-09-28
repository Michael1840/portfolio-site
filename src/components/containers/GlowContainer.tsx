const GlowContainer = ({
  isBlue,
  className,
  asset,
  isPhone,
}: {
  isBlue: boolean;
  className?: string;
  asset: string;
  isPhone: boolean;
}) => {
  let color = 'drop-shadow-[0_0_100px_var(--color-accentBlue-20)]';
  let shadow = 'hover:drop-shadow-[0_0_100px_var(--color-accentBlue-40)]';

  if (!isBlue) {
    color = 'drop-shadow-[0_0_100px_var(--color-accentPink-20)]';
    shadow = 'hover:drop-shadow-[0_0_100px_var(--color-accentPink-40)]';
  }

  return (
    <div
      className={`${
        isPhone ? '' : 'flex'
      } justify-items-center bg-transparent items-center lg:w-1/3 xl:w-2/6 md:w-1/2 rounded-2xl aspect-square ${
        className ?? ''
      }`}
    >
      <clipPath className={``}>
        <img
          src={asset}
          className={`${
            isPhone ? 'h-full' : 'w-full'
          } object-contain ${color} ${shadow} drop-shadow-2xl transition-all duration-500 `}
        />
      </clipPath>
    </div>

    // <div
    //   className={`justify-items-center items-center w-full lg:w-1/3 xl:w-2/6 md:w-1/2 rounded-2xl bg-container border border-borderTertiary aspect-square ${color} ${shadow} transition-all duration-500  ${
    //     className ?? ''
    //   }`}
    // >

    // </div>
  );
};

export default GlowContainer;
