import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
// import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';
import BlogFormCatto from '@/app/components/Forms/BlogFormCatto';
// import ContactFormCatto from '@/app/components/Forms/ContactFormCatto';
import PagesListFormCatto from '@/app/components/Forms/PagesListFormCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Blog Create',
  description: 'Chris Catto Blog Create a Blog Post',
};

export default function Page() {
  return (
    <div className="flex h-full flex-col flex-nowrap ">
      <JumbotronCattoFlexible
        title="Pages List Form"
        description="This needs to be altered to an ADMIN role page & it is a form that can create an entry in the Blog Pages table (need to decide the table name)"
      />
      <PagesListFormCatto />
    </div>
  );
}
