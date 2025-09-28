const PageSection = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col md:flex-col lg:flex-row w-full gap-x-16 gap-y-20 ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  );
};

export default PageSection;
