import ColumnContainer from '../containers/ColumnContainer';

const HeadingText = ({
  title,
  subtitle,
  size = 'text-5xl',
}: {
  title: string;
  subtitle: string;
  size?: string;
}) => {
  return (
    <ColumnContainer>
      <h1 className={`text-white font-extrabold ${size} mt-5 font-montserrat`}>
        {title}
      </h1>
      <h1 className={`font-extrabold ${size} mt-2 font-montserrat`}>
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-accentPink">
          {subtitle}
        </span>
      </h1>
    </ColumnContainer>
  );
};

export default HeadingText;
