import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import CodeGistsCatto from '@/app/components/AtomicDesign/atoms/CodeGistsCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Stripe Payment Pages',
  description: 'Chris Catto Stripe Payment Pages',
  alternates: {
    canonical: 'https://www.chriscatto.com/payments',
  },
};

export default function Page() {
  const pathName =
    'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fccatto%2Fgists%2Fblob%2Fmain%2Fstripe-webhook.ts&style=a11y-dark&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on';

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Stripe Payment Pages"
            description="Stripe Payment Pages"
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-[#FAFAFA] ring-2 ring-gray-300 dark:bg-[#09090B] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Stripe Payment Pages
          </h2>
          <div>
            <div>
              <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
                <li className="m-5">
                  Stripe is a payment processor that I've chosen to use. This is
                  the official{' '}
                  <Link
                    target="_blank"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://stripe.com/"
                  >
                    Stripe page.
                  </Link>{' '}
                  Stripe is an interesting option and currently it's the payment
                  processor I choose to use. Let's take a look how to add it to
                  a Next.js app.
                </li>
              </ul>
            </div>
            <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            <div>
              <p className="flex justify-center text-2xl">
                <span className="pr-2 font-bold">Summary</span>of setting up
                Stripe in Next.js includes the following:
              </p>
              <div className="mt-4 flex justify-center">
                <ol className="w-full space-y-4">
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          1. Create a stripe account & use "Test Mode"
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          2. Create a stripe Product
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          3. Setup Stripe payment link
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          4. Stripe Secrete keys & .env vars
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          5. Setup Stripe Webhook Api
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          6. Review all different event types
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">6. Stripe CLI</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">7. On Horizon</h3>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
              <p className="flex justify-center text-2xl">
                <span className="pr-2 font-bold">Details</span> of setting up
                next-auth in Next.js includes the following:
              </p>
              <div className="mt-4">
                <ol className="w-full space-y-4">
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          1. Create a stripe account
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            1. Create a stripe account & toggle the "test mode"
                            pill in the top right corner. It's a nice feature
                            since we can use test mode and not accrue any
                            charges.
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          2. Create a stripe Product.
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            In Stripe dashboard navigate to products page (we
                            can use the search). Then basically click create
                            product enter a bunch of optional data ensure to
                            give it a price and then the products catalog we can
                            view our products. Here is the{' '}
                            <Link
                              href="https://dashboard.stripe.com/test/products?active=true"
                              target="_blank"
                              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                              stripe test product catalog.
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          3. Setup Stripe payment link;
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            Setup Stripe payment link; so we navigate to the
                            product detail page and click the "Create payment
                            link" button. This will create a page where we can
                            make the purchase.
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          4. Obtain API keys.
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            Obtain API keys. We can search "API keys"; then copy
                            & create 2 .env vars
                            NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY &&
                            STRIPE_SECRET_KEY &&
                            NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          5. Setup Stripe Webhook Api.
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            Setup Stripe Webhook Api. Search webhooks & click
                            "Add an Endpoint". In our Next.js app in our "API"
                            directory we need to create a new directory and name
                            is something such as "stripe-checkout-session" then
                            create a file names route.ts inside that (kinda
                            normal route creation). We need to import stripe &
                            obviously NextRequest, NextResponse.
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          6. Review all different event types
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            Review all different event types. The main event is
                            charge.succeeded
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          7. Stripe CLI
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            install the Stripe CLI if we are on a terminal
                            window & get this: zsh: command not found: stripe we
                            need to install the CLI by doing the following:
                            "brew install stripe/stripe-cli/stripe" We could run
                            "stripe login" then a browser will open where we
                            grant access then we will be authenticated in the
                            terminal shell.
                            <p>
                              stripe listen --forward-to
                              localhost:3000/api/stripe-checkout-session
                            </p>
                            <p>
                              trigger an event: stripe trigger
                              payment_intent.succeeded
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          8. On horizon
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            On horizon; after payment confirmation we can setup
                            redirects to certain pages within our website; Also
                            we could add some error handling & logging.
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
                <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
                <div className="flex w-full justify-center pb-4">
                  This is a clean full file:
                </div>
                <div className="flex h-96 w-full justify-center bg-green-400">
                  <CodeGistsCatto path={pathName} />
                </div>
              </div>
              <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
