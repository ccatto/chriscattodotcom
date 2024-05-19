import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import { constants } from '@/app/constants/constants';

export const metadata: Metadata = {
  title: 'Chris Catto Stripe Payment Pages',
  description: 'Chris Catto Stripe Payment Pages',
  alternates: {
    canonical: 'https://www.chriscatto.com/payments',
  },
};

export default function Page() {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex">
          <JumbotronCattoFlexible title="Catto Cart" description="Catto Cart" />
        </div>
        <p>This is the Cart page. This is just a stub but will be build out.</p>
        <p>
          This is the test Stripe link button:{' '}
          <Link
            href={constants.paymentLinks.cattoTestProduct}
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Test Stripe Payment
          </Link>
        </p>
        <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
      </div>
    </>
  );
}
