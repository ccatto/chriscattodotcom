import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code Database ORM Prisma',
  description: 'Chris Catto Code Database ORM Prisma overview',
};

export default function Page() {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-1">
          <JumbotronCattoFlexible
            title="ORM - Prisma"
            description="Prisma is an ORM which is works well with TypeScript; global database caching; connection pooling & real-time db events."
          />
        </div>
        <div className="dark:text-[text-[#E2E8F0] m-4 flex-[80] rounded-2xl p-4 ring-2 ring-gray-300 dark:bg-[#090A15]">
          <p className="first-letter:float-start mb-3 text-gray-500 first-letter:me-3 first-letter:text-5xl first-letter:font-bold first-letter:text-gray-900 first-line:uppercase first-line:tracking-widest dark:text-gray-400 dark:first-letter:text-gray-100">
            Prisma ORM is open source which includes the Prisma Client &
            Migration system. It's quite popular maybe not as much as Sequelize
            but it has a strong community. It works well with Rest API's &
            GraphQL. It creates a "schema.prisma" file where it models the
            database.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            The migration tool is very helpful migrating the model to the
            database. There is also the Prisma Studio which is a GUI database
            IDE however currently I still like to just use other tools such as
            DBeaver to inspect the DB. Overall Prisma in my opinion is a great
            choice to go with for an ORM.
          </p>
        </div>
        <hr className="m-3" />
      </div>
    </>
  );
}
