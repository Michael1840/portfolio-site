import OutlineButton from '../../components/buttons/OutlineButton';
import ColumnContainer from '../../components/containers/ColumnContainer';
import GlowContainer from '../../components/containers/GlowContainer';
import RowContainer from '../../components/containers/RowContainer';
import DotTextContainer from '../../components/custom/DotTextContainer';

const ShowcaseItem = ({
  isRight,
  isPhone = true,
  title,
  name,
  description,
  buttonText,
  asset,
}: {
  isRight: boolean;
  isPhone?: boolean;
  title: string;
  name: string;
  description: string;
  buttonText: string;
  asset: string;
}) => {
  return (
    <RowContainer
      gap="xl:gap-30 lg:gap-20 md:gap-10 gap-10"
      className="items-center"
    >
      <GlowContainer
        isPhone={isPhone}
        asset={asset}
        isBlue={!isRight}
        className={`${isRight ? 'md:order-3 sm:order-1' : 'order-1'} `}
      />
      <ColumnContainer
        className={`flex flex-col flex-2 gap-5 items-start ${
          isRight ? 'md:order-2 sm:order-2' : 'order-2'
        }`}
      >
        <DotTextContainer
          title={title}
          color={!isRight ? 'bg-accentBlue' : 'bg-accentPink'}
        />
        <h1 className={`text-white font-extrabold text-5xl font-montserrat`}>
          {name}
        </h1>
        <p className="justify-self-center md:justify-self-start">
          {description}
        </p>
        <OutlineButton title={buttonText} onClick={() => {}} />
      </ColumnContainer>
      <div
        className={`hidden md:flex flex-1 ${
          isRight ? 'md:order-1 sm:order-3' : 'order-3'
        }`}
      />
    </RowContainer>
  );
};

export default ShowcaseItem;
