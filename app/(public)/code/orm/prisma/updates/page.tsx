import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Code ORM Prisma Getting Started',
  description: 'Chris Catto ORM Prisma Getting Started',
};

export default function Page() {
  let codeBlock1 = 'prisma migrate dev --name name_of_migration --create-only';
  let codeBlock2 = 'prisma migrate dev';
  let codeBlock3 = 'prisma db push';
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap dark:bg-[#090A15] dark:text-[#E2E8F0]">
        <div className="flex-1">
          <JumbotronCattoFlexible
            title="ORM - Prisma Making Updates"
            description="ORM - Prisma Making Updates - to make updates to schema without erasing data"
          />
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 ring-2 ring-gray-300 dark:bg-[#090A15] dark:text-[#E2E8F0]">
          <p className="indent-5">
            To make updates to prisma for example if we wanted to create; alter
            || update the structure of the database this is one way we could
            accomplish this.
          </p>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
          <div className="dark:text-[text-[#E2E8F0] m-4 flex-[80] rounded-2xl p-4 ring-2 ring-gray-300 dark:bg-[#090A15]">
            <ul className="space-y-2 font-medium">
              <li>
                1. Create migrate script
                <SyntaxHighlightingReactCatto codeString={codeBlock1} />
              </li>
              <li>
                2. Run the Migration
                <SyntaxHighlightingReactCatto codeString={codeBlock2} />
              </li>
              <li>
                3. Push the alters to remote database
                <SyntaxHighlightingReactCatto codeString={codeBlock3} />
              </li>
            </ul>
          </div>
        </div>
        <hr className="m-3" />
      </div>
    </>
  );
}
// export
