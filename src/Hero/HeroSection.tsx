import GradientButton from '../components/buttons/GradientButton';
import OutlineButton from '../components/buttons/OutlineButton';
import RegularButton from '../components/buttons/RegularButton';
import ColumnContainer from '../components/containers/ColumnContainer';
import GlowStack from '../components/containers/GlowStack';
import PageContainer from '../components/containers/PageContainer';
import PageSection from '../components/containers/PageSection';
import RowContainer from '../components/containers/RowContainer';
import DotTextContainer from '../components/custom/DotTextContainer';
import HeadingText from '../components/custom/HeadingText';

const HeroSection = () => {
  return (
    <div>
      <PageSection className="xl:px-50 lg:px-40 md:p-25 p-5 justify-center items-center duration-1000">
        {/* LEFT SIDE */}
        <PageContainer className="flex ">
          <div>
            <DotTextContainer
              title="currently employed"
              color="bg-accentOrange"
            />
            <HeadingText
              title="Full Stack"
              subtitle="Developer"
              size="text-6xl"
            />
            <ColumnContainer>
              <h2 className="font-medium text-2xl">& UI/UX Designer</h2>
              <p className="font-light text-m mt-5">
                Crafting beautiful, performant mobile applications with Flutter.
                Passionate about creating seamless user flow that engage and
                impress.
              </p>
            </ColumnContainer>
            <RowContainer>
              <RegularButton title="Flutter" onClick={() => {}} />
              <RegularButton title="React" onClick={() => {}} />
              <RegularButton title="Django" onClick={() => {}} />
              <RegularButton title="Figma" onClick={() => {}} />
            </RowContainer>
            <RowContainer>
              <GradientButton title="Download CV" onClick={() => {}} />
              <OutlineButton title="View Projects" onClick={() => {}} />
            </RowContainer>
          </div>
        </PageContainer>

        {/* RIGHT SIDE */}
        <PageContainer className="flex animate-in duration-1000">
          <GlowStack />
        </PageContainer>
      </PageSection>

      {/* MOUSE ICON */}
      <PageSection className="justify-center items-center ">
        <ColumnContainer className="flex flex-col items-center justify-center text-center">
          <p className="font-light text-m">Scroll to explore</p>
          <img
            src="/mouse.svg"
            className="w-10 h-10 mt-5 animate-bounce"
            style={{ animationDuration: '1.5s' }}
          />
        </ColumnContainer>
      </PageSection>
    </div>
  );
};

export default HeroSection;
