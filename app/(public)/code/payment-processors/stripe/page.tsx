import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code Stripe Payment Processing',
  description: 'Chris Catto Stripe Payment Processing',
  alternates: {
    canonical: 'https://www.chriscatto.com/code/payment-processors/stripe',
  },
};

export default function Page() {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-1">
          <JumbotronCattoFlexible
            title="Stripe Payment Processing"
            description="Stripe is a payment processor that I enjoy using. This is an outline of what type of development effort it takes."
          />
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 ring-2 ring-gray-300 dark:bg-[#5433FF] dark:text-slate-800">
          <p className="first-letter:float-start mb-3 text-gray-800 first-letter:me-3 first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900 first-line:uppercase first-line:tracking-widest dark:text-gray-800 dark:first-letter:text-gray-800">
            Stripe is payment processor where we can setup payments for any
            business & get started quickly. It is flexible & PCI compliant. It
            allows us to host our own payment page & create shareable links.
            This is obviously a starter page & is a work in progress.
          </p>
        </div>
        <hr className="m-3" />
      </div>
    </>
  );
}
