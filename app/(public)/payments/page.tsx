import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';

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
          <JumbotronCattoFlexible
            title="Stripe Payment Pages"
            description="Stripe Payment Pages"
          />
        </div>
        <ul>
          <li>
            1. Create a stripe account & use "Test Mode"
          </li>
          <li>
            2. Create a stripe Product
          </li>
          <li>
            3. Setup Stripe payment link
          </li>
          <li>
            4. Stripe Secrete keys & .env vars
          </li>
          <li>
            5. Setup Stripe Webhook Api
          </li>
          <li>
            6. Review all different event types
          </li>
          <li>
            7. On horizon 
          </li>
        </ul>
        <ul>
          <li>
            1. Create a stripe account & toggle the "test mode" pill in the top right corner. It's a nice feature since we can use test mode and not accrue any charges. 
          </li>
          <li>
            2. Create a stripe Product. 
            In Stripe dashboard navigate to products page (we can use the search). Then basically click create product enter a bunch of optional data ensure to give it a price and then the products catalog we can view our products. Here is the <Link 
            href="https://dashboard.stripe.com/test/products?active=true" 
            target='_blank'
            className="font-medium text-blue-600 hover:underline dark:text-blue-500">
              stripe test product catalog.</Link> 
          </li>
          <li>
            3. Setup Stripe payment link; so we navigate to the product detail page and click the "Create payment link" button. This will create a page where we can make the purchase. 
          </li>
          <li>
            4.. Obtain API keys. We can search "API keys"; then copy & create 2 .env vars NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY && STRIPE_SECRET_KEY. 
          </li>
          <li>
            5. Setup Stripe Webhook Api. Search webhooks & click "Add an Endpoint". In our Next.js app in our "API" directory we need to create a new directory and name is something such as "stripe-checkout-session" then create a file names route.ts inside that (kinda normal route creation).
            We need to import stripe & obviously NextRequest, NextResponse.
          </li>
          <li>
            6. Review all different event types
          </li>
          <li>
            7. On horizon; after payment confirmation we can setup redirects to certain pages within our website; Also we could add some error handling & logging.
          </li>
        </ul>
        <p>
          install the Stripe CLI 
          if we are on a terminal window & get this: zsh: command not found: stripe
          we need to install the CLI by doing the following: "brew install stripe/stripe-cli/stripe"
        </p>
        <p>
          We could run "stripe login" then a browser will open where we grant access then we will be authenticated in the terminal shell.
        </p>
        <p>
        stripe listen --forward-to localhost:3000/api/stripe-checkout-session
        </p>
        <p> trigger an event: 
        stripe trigger payment_intent.succeeded
        </p>
        <p>the main event is charge.succeeded </p>
      </div>
    </>
  );
}
