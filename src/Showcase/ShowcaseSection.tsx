import PageContainer from '../components/containers/PageContainer';
import PageSection from '../components/containers/PageSection';
import HeadingText from '../components/custom/HeadingText';
import ShowcaseItem from './items/ShowcaseItem';

const ShowcaseSection = () => {
  return (
    <PageSection className="xl:px-50 lg:px-40 sm:p-25 p-5 animate-in fade-in duration-1000">
      <PageContainer>
        <HeadingText title="Selected" subtitle="Work" />
        <p className="mt-5 md:w-1/2 sm:w-full mb-20">
          A curated collection of projects that showcase my passion for creating
          exceptional digital experiences.
        </p>
        <div className="flex flex-col gap-40">
          <ShowcaseItem
            asset="/ucalibrate-device.png"
            title="mobile app"
            isRight={false}
            name="uCalibrate"
            buttonText="Showcase"
            description="Giving farmers the ease of mind knowing that their chemical usage is easily calibrated using mathematical equations. This app, built with Flutter, empowers farmers."
          />
          <ShowcaseItem
            asset="/pb-device.png"
            title="Web Application"
            isRight={true}
            isPhone={false}
            name="Phoenix Blue"
            buttonText="Showcase"
            description="Say goodbye to tedious paperwork. This web app streamlines the process of filling out insurance forms, making it fast, intuitive, paper-free and hassle-free for everyday consultants."
          />
          <ShowcaseItem
            asset="/aid-device.png"
            title="mobile app"
            isRight={false}
            name="AI Diagnostics"
            buttonText="Showcase"
            description="AI Diagnostics offers a revolutionary approach to health screening with an AI-powered digital stethoscope and mobile application. Their mission is to make preliminary health screening accessible and affordable for everyone, helping healthcare providers identify patients who may require further testing."
          />
          <ShowcaseItem
            asset="/pbe-device.png"
            title="mobile app"
            isRight={true}
            name="PBE Projects"
            buttonText="Showcase"
            description="AI Diagnostics offers a revolutionary approach to health screening with an AI-powered digital stethoscope and mobile application. Their mission is to make preliminary health screening accessible and affordable for everyone, helping healthcare providers identify patients who may require further testing."
          />
          <ShowcaseItem
            asset="/recruiters-device.png"
            title="mobile app"
            isRight={false}
            name="Recruiter's SA"
            buttonText="Showcase"
            description="Recruiters SA is a streamlined management tool designed for promoters and managers. It simplifies the process of scheduling and managing promotional activities by allowing promoters to apply for available timeslots, which can then be easily approved or denied by managers. Once scheduled, promoters can be tracked in real-time while they work, ensuring accountability and smooth coordination. Whether you're organizing events or managing shifts, Recruiters SA offers an efficient solution for staffing and time management."
          />
        </div>
      </PageContainer>
    </PageSection>
  );
};

export default ShowcaseSection;
