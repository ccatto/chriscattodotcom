import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import { constants } from '@/app/constants/constants';

export const metadata: Metadata = {
  title: 'Chris Catto Stripe Products Pages',
  description: 'Chris Catto Stripe Products Pages',
  alternates: {
    canonical: 'https://www.chriscatto.com/payments',
  },
};

export default function Page() {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex">
          <JumbotronCattoFlexible
            title="Stripe Products Pages"
            description="Stripe Products Pages"
          />
        </div>
        <p>
          This is our products page. It's just a stub now but will be built out
          eventually.
        </p>
        <p>This is a test product link button:</p>
        <Link
          href={constants.paymentLinks.cattoTestProduct}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Buy the test product
        </Link>
      </div>
    </>
  );
}
