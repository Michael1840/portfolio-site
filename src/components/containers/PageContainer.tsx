const PageContainer = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <div className={`flex-1 items-center justify-center ${className ?? ''}`}>
      {children}
    </div>
  );
};

export default PageContainer;
