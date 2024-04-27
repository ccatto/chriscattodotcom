import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Code Next.js Overview',
  description: 'Chris Catto Next.js Overview',
};

const overview = () => {
  // let codeBlock = '<script>\n    alert( \'Hello, world!\' );\n</script>';

  return (
    <>
      <div className="flex h-screen w-full flex-col flex-nowrap ">
        <div className="flex-[20]">
          <JumbotronCattoFlexible
            title="Next.js Overview"
            description="Next.js Overview."
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-white ring-2 ring-gray-300 dark:bg-black dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Next.js Fundamentals
          </h2>
          {/* <SyntaxHighlightingReactCatto codeString={codeBlock} /> */}
          <ul className="list-inside list-disc space-y-1 indent-4">
            <li>Built in Optimizations such as image & script optimizations for improved UX</li>
            <li>
              Dynamic HTML Streaming: instantly stream UI from the server integrated with the app router.
            </li>
            <li>
              React Server Components: add components with out sending additional client side js. This feature is hear to stay.
            </li>
            <li>
              Data Fetching: react components async & await our data; supports both server & client data fetching.
            </li>
            <li>
              Route Handlers: we can build API endpoints to connect third party services.
            </li>
            <li>
              Advance Routing & Nested Layouts: create routes using the file system including layouts.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default overview;
