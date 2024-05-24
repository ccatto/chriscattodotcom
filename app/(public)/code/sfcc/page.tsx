import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code SFCC',
  description: 'Chris Catto Code Salesforce Commerce Cloud',
};

export default function Page() {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-1">
          <JumbotronCattoFlexible
            title="SFCC"
            description="Salesforce Commerce Cloud is an eCommerce platform. It provides an backend admin site which is known as the business manager & also provides storefront where a company sell products on line. I have worked quite extensively with platform since 2015 when it was originally created a by a company Demandware which was bought by Salesforce. "
          />
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 text-black ring-2 ring-gray-300 dark:bg-[#0064a5] dark:ring-gray-500">
          <Link
            href="https://www.salesforce.com/trailblazer/profile"
            target="_blank"
            className="font-medium text-slate-700 hover:underline dark:text-slate-800"
          >
            My Trailhead profile for Salesforce Commerce Cloud
          </Link>
          . Trailhead is a great resource to learn more about SFCC & other
          Salesforce cloud platforms.
        </div>
        <hr className="m-3" />
      </div>
    </>
  );
}
