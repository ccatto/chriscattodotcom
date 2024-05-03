import { Metadata } from 'next';
import ContactCompleteCatto from '@/app/components/Forms/ContactCompleteCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Contact me Completed',
  description: 'Please feel free to contact myself Chris Catto.',
};

const page = () => {
  return (
    <div className="min-h-[calc(100vh-27rem)]">
      <ContactCompleteCatto />
    </div>
  );
};
export default page;
