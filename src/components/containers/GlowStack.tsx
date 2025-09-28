const GlowStack = () => {
  return (
    <div
      className="relative mx-auto my-25 "
      style={{
        width: 'min(60vw, 300px)',
        height: 'min(60vw, 300px)',
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-container border border-borderTertiary aspect-square" />
        <div
          className="absolute inset-0 blur-xl opacity-15 rounded-2xl bg-accentPink border border-borderTertiary aspect-square -z-1 animate-pulse"
          style={{ animationDuration: '10s' }}
        />
      </div>
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-container border border-borderTertiary aspect-square rotate-20 -z-2" />
        <div className="absolute inset-0 blur-xl opacity-15 rounded-2xl bg-accentBlue border border-borderTertiary aspect-square -z-3 rotate-20" />
      </div>
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-container border border-borderTertiary aspect-square -z-4 rotate-40" />
        <div className="absolute inset-0 blur-2xl opacity-15 rounded-2xl bg-accentPink border border-borderTertiary aspect-square -z-5 rotate-40" />
      </div>
    </div>
  );
};

export default GlowStack;
