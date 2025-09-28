const FlexContainer = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return <div className={`flex ${className ?? ''}`}>{children}</div>;
};

export default FlexContainer;
