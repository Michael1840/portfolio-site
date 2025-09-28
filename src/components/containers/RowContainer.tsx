const RowContainer = ({
  children,
  gap = 'gap-4',
  className,
}: {
  children: any;
  gap?: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-wrap ${gap} mt-5 ${className ?? ''}`}>
      {children}
    </div>
  );
};

export default RowContainer;
