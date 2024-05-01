import { Metadata } from 'next';
import ContactFormCatto from '@/app/components/Forms/ContactFormCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Contact me',
  description: 'Please feel free to contact myself Chris Catto.',
};

const page = () => {
  return (
    <div className="min-h-[calc(100vh-27rem)]">
      <ContactFormCatto />
    </div>
  );
};
export default page;
