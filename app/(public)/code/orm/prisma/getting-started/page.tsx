import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Code ORM Prisma Getting Started',
  description:
    'Chris Catto ORM Prisma Getting Started - steps to take to install & get the Prisma ORM up & running.',
};

export default function Page() {
  const codeBlock1 = 'npm install prisma --save-dev';
  const codeBlock2 = 'npm i -g prisma';
  const codeBlock3 = 'prisma -v\n5.13.0';
  const codeBlock4 = 'prisma init';
  const codeBlock5 = 'prisma db pull';
  const codeBlock6 = 'mkdir -p prisma/migrations/0_init';
  const codeBlock7 =
    'npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql';

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-1">
          <JumbotronCattoFlexible
            title="ORM - Prisma Getting Started"
            description="ORM - Prisma Getting Started."
          />
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 ring-2 ring-gray-300 dark:bg-[#090A15] dark:text-[#E2E8F0]">
          <p className="indent-5">
            Getting started; To get Prisma into a project we need to take a few
            steps such as installing it & adding the package. Connecting it to
            our database & set it up for migrations.
          </p>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
          <div className="dark:text-[text-[#E2E8F0] m-4 flex-[80] rounded-2xl p-4 ring-2 ring-gray-300 dark:bg-[#090A15]">
            <ul className="space-y-2 font-medium">
              <li>
                1. Add it to project:
                <SyntaxHighlightingReactCatto codeString={codeBlock1} />
                We could also install it globally:
                <SyntaxHighlightingReactCatto codeString={codeBlock2} />
              </li>
              <li>
                2. Check it's installed by listing the version
                <SyntaxHighlightingReactCatto codeString={codeBlock3} />
              </li>
              <li>
                3. Initialize it & this will create our directory prisma &
                schema.prisma file
                <SyntaxHighlightingReactCatto codeString={codeBlock4} />
              </li>
              <li>
                4. Pull the database; this is a good resource to{' '}
                <Link
                  target="_blank"
                  href="https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/baseline-your-database-typescript-postgresql"
                >
                  baseline our database.
                </Link>
                <SyntaxHighlightingReactCatto codeString={codeBlock5} />
              </li>
              <li>
                5. First create a migrations directory:
                <SyntaxHighlightingReactCatto codeString={codeBlock6} />
              </li>
              <li>
                6. This command reads your Prisma schema and generates your
                Prisma Client library:
                <SyntaxHighlightingReactCatto codeString={codeBlock7} />
              </li>
            </ul>
          </div>
        </div>
        <p>
          So now basically Prisma is installed; initialized in the project &
          ready to make updates.
        </p>
        <hr className="m-3" />
      </div>
    </>
  );
}
