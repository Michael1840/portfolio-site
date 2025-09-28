const ColumnContainer = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return <div className={`mt-5 ${className ?? ''}`}>{children}</div>;
};

export default ColumnContainer;
