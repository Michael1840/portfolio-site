import FlexContainer from '../containers/FlexContainer';

const DotTextContainer = ({
  color,
  title,
  className,
}: {
  title: string;
  color: string;
  className?: string;
}) => {
  return (
    <FlexContainer className={`items-center ${className ?? ''}`}>
      <div
        className={`${color} p-1 rounded-full w-3 h-3 mr-2 animate-pulse`}
      ></div>{' '}
      <span className="font-light text-xs">{title.toUpperCase()}</span>
    </FlexContainer>
  );
};

export default DotTextContainer;
