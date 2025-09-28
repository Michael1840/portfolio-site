import { useEffect, useState } from 'react';
import ColumnContainer from '../components/containers/ColumnContainer';
import PageContainer from '../components/containers/PageContainer';
import PageSection from '../components/containers/PageSection';
import RowContainer from '../components/containers/RowContainer';
import HeadingText from '../components/custom/HeadingText';
import TextInput from '../components/fields/TextInput';
import TextInputArea from '../components/fields/TextInputArea';
import GradientButton from '../components/buttons/GradientButton';
import { useForm, ValidationError } from '@formspree/react';
import SuccessMessage from '../components/messages/SuccessMessage';
import FailureMessage from '../components/messages/FailureMessage';

const ContactSection = () => {
  const [state, handleSubmit] = useForm('mqayeyon');
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    fullname: '',
    company: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (state.succeeded) {
      setIsMounted(true);
      requestAnimationFrame(() => setIsVisible(true));

      const timer1 = setTimeout(() => setIsVisible(false), 2000); // start fade-out
      const timer2 = setTimeout(() => setIsMounted(false), 2500); // unmount after fade-out

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (state.errors) {
      setIsMounted(true);
      requestAnimationFrame(() => setIsVisible(true));

      const timer1 = setTimeout(() => setIsVisible(false), 2000);
      const timer2 = setTimeout(() => setIsMounted(false), 2500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [state.errors]);

  return (
    <div>
      <PageSection className="flex flex-wrap sm:gap-y-0 xl:px-50 lg:px-40 sm:px-25 p-15">
        <PageContainer className="md:py-10 sm:py-10 justify-center items-center duration-1000">
          <HeadingText title="Get In" subtitle="Contact with Me" />
          <p className="font-light text-m mt-5">
            Send me a message and I will get back to you as soon as possible.
            I’d love to hear about your project or passion.
          </p>
          <RowContainer className="mt-8">
            <button
              onClick={() =>
                window.open('https://github.com/Michael1840', '_blank')
              }
              className="cursor-pointer hover:scale-105 hover:shadow-[0_0_50px_var(--color-accentPink-40)] transition-all duration-300 rounded-full"
            >
              <img src="/Github.svg" className="w-12" />
            </button>
            <button
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/michael-kiggen-b9022625b/',
                  '_blank'
                )
              }
              className="cursor-pointer hover:scale-105 hover:shadow-[0_0_50px_var(--color-accentBlue-40)] transition-all duration-300 rounded-sm"
            >
              <img src="/LinkedIn.svg" className="w-12" />
            </button>
          </RowContainer>
        </PageContainer>
        <PageContainer className="md:py-10 sm:py-10 justify-center items-center duration-1000">
          <ColumnContainer>
            <form
              className="flex flex-col justify-end"
              onSubmit={handleSubmit}
              method="POST"
            >
              <TextInput
                name="fullname"
                onChange={handleChange}
                title="FULL NAME *"
                placeholder="Your full name"
                value={formData.fullname}
              />
              <ValidationError
                prefix="Full Name"
                field="fullname"
                errors={state.errors}
              />
              <TextInput
                name="company"
                onChange={handleChange}
                title="COMPANY"
                placeholder="Your companies name"
                value={formData.company}
              />
              <ValidationError
                prefix="Company"
                field="company"
                errors={state.errors}
              />
              <TextInput
                name="email"
                onChange={handleChange}
                title="EMAIL *"
                placeholder="Your email address"
                value={formData.email}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <TextInputArea
                name="message"
                onChange={handleChange}
                title="MESSAGE *"
                placeholder="Tell me about your project, timeline, and any specific requirements..."
                value={formData.message}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div className="flex justify-end">
                <GradientButton
                  title="Send Message"
                  onClick={() => {}}
                  isLoading={state.submitting}
                />
              </div>
            </form>
          </ColumnContainer>
        </PageContainer>
      </PageSection>
      {isMounted && (
        <div
          className={`fixed bottom-10 left-10 right-10 z-50 transition-all duration-500 ease-in-out
      ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-[calc(100%+2.5rem)] opacity-0'
      }
    `}
        >
          {state.succeeded && (
            <SuccessMessage onDismiss={() => setIsVisible(false)} />
          )}
          {state.errors && (
            <FailureMessage onDismiss={() => setIsVisible(false)} />
          )}
        </div>
      )}
    </div>
  );
};

export default ContactSection;
