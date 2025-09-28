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
  const color = isBlue
    ? 'drop-shadow-[0_0_100px_var(--color-accentBlue-20)]'
    : 'drop-shadow-[0_0_100px_var(--color-accentPink-20)]';
  const shadow = isBlue
    ? 'hover:drop-shadow-[0_0_100px_var(--color-accentBlue-40)]'
    : 'hover:drop-shadow-[0_0_100px_var(--color-accentPink-40)]';

  return (
    <div
      className={`${
        isPhone ? 'block' : 'flex'
      } justify-center bg-transparent items-center lg:w-2/5 xl:w-1/3 md:w-1/2 rounded-2xl aspect-square ${
        className ?? ''
      }`}
    >
        <img
          src={asset}
          className={`${
            isPhone ? 'h-full w-full' : 'w-full'
          } object-contain ${color} ${shadow} drop-shadow-2xl transition-all duration-500 `}
        />
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
