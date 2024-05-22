import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';

export const metadata: Metadata = {
  title:
    'How to Simply Set Port In Next.js to a port aside from :3000 Chris Catto js docs',
  description:
    'How to Simply Set Port In Next.js to a port aside from :3000 Chris Catto Javascript Frameworks Nextjs documentation',
};

const HowToSetPortInNextJs = () => {
  const codeBlock = '"scripts": {\n    "dev": "next dev -p 8080"';

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="How To Simply Set Port In Next.js"
            description="How to Simply Set Port In Next.js to a port aside from :3000"
          />
        </div>
      </div>
      <div className="m-4 flex-[80] rounded-2xl p-4 text-white ring-2 ring-gray-300 dark:bg-black dark:ring-gray-500">
        <div className="mb-4 inline-block text-lg font-extrabold tracking-tight">
          This is how to set port in a next.js app so if we want to run another
          application on a different port. By default the port is 3000. We
          update the "package.json" file and utilize the "-p" flag. The
          following will update to a port of :8080
        </div>
        <SyntaxHighlightingReactCatto codeString={codeBlock} />
      </div>
    </>
  );
};
export default HowToSetPortInNextJs;
