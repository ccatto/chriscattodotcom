import { Customer } from './../../lib/definitions';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from "stripe";
import dayjs from "dayjs";
import { exec } from 'child_process';

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, apiVersion: "2023-10-16");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const fulfillOrder = async (data: Stripe.LineItem[], customerEmail: string) => {
  // save the list item w/ the users email attached
  // const client = await clientPromise;
  // const db= client.db(constants.db);
  // const email = customerEmail.toLowerCase();
  console.log("inside fulfillOrder need to add db insert or update");
  // // update the users account so that it includes the tier 
  // const userUpserted = await.db.collection("users".findOneAndUpdate ())
};

const saveCheckoutSession = async (eventDataObject: any) => {

  try {
    console.log('inside saveCheckoutSession need to build out the db insert');
    return true;
    // const res = await (await clientPromise)
    //   .db(constants.db)
    //   .collection("checkout_sessions")
    //   .insertOne(eventDataObject);
    //   return res.acknowledge;
  } catch (e) {
    console.error('error saving checkout session error === ', e);
    return false;
  }
};

const handleCompletedCheckoutSession = async (
  event: Stripe.CheckoutSessionCompletedEvent
) => {
  try {
    const sessionWithLineItem = await stripe.checkout.sessions.retrieve(
      (event.data.object as any).id,
      {
        expand: ["line_items"],
      }
    );
    const lineItems = sessionWithLineItem.line_items;
    if (!lineItems) return false; 
    const ordersFulfilled = await fulfillOrder(
      lineItems.data,
      (event.data.object as any).customer_details.email
    );
    await saveCheckoutSession(event.data.object);
    // if (ordersFulfilled) return true;

    console.error("error fulfilling orders for", JSON.stringify(lineItems), JSON.stringify(event.data.object));
    return false;
  } catch(e) {
    console.error("error in function handleCompletedCheckoutSession ", e);
    return false;
  }
};


// Stripe POST 
export async function POST(request: NextRequest, response: NextResponse) {

  const payload = await request.text();
  const responseParsed = JSON.parse(payload);
  const stripeSignature = request.headers.get("Stripe-Signature");
  const dateTime = new Date(responseParsed.created = 1000).toLocaleDateString();
  const timeString = new Date(responseParsed.created = 1000).toLocaleDateString();
  let stripeResult = "Stripe Webhook called;";
  let stripeEvent;

  // const { PRICE_ID } = await request.json();
  // console.log('PRICE_ID === ' ,PRICE_ID);

  console.log("----- this are the 3 values going to be passed: ");
  console.log("payload === ", payload);
  console.log("========================           ==================");
  console.log('responseParsed === ', responseParsed);
  console.log("========================           ==================");
  console.log('process.env.STRIPE_SECRET_KEY! === ', process.env.STRIPE_SECRET_KEY!);

  try {
    console.log("inside try & want to constructEvent -----------------------");
    stripeEvent = stripe.webhooks.constructEvent(
      payload,
      stripeSignature!,
      process.env.STRIPE_SECRET_KEY!,
    )
    console.log('inside try event.type === ', stripeEvent.type );
  } catch(e){
    console.log("error e === ", e);
    return NextResponse.json({ error: e }, { status: 400 });
  }

  switch (stripeEvent.type) {
    case "checkout.session.completed":
      const savedSession = await handleCompletedCheckoutSession(stripeEvent);
      if(!savedSession) 
        return NextResponse.json(
          {error: "unable to save checkout session"}, 
          {status: 500}
      );
      break;
    case "payment_intent.succeeded": 
      // need to create a different function not 
      const updated = await handleCompletedCheckoutSession(stripeEvent);
      if(!updated) 
        return NextResponse.json(
          {error: "unable to save checkout session"}, 
          {status: 500}
      );
      break;
    default: 
      console.warn('unhandled event type ${event.type}');
  }

  return NextResponse.json({ status:"success", message: 'stripe post successful', event: stripeEvent.type });

  // return NextResponse.json ({ received: true, status: stripeResult});

}


// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create({
//         line_items: [
//           {
//             // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//             price: '{{PRICE_ID}}',
//             quantity: 1,
//           },
//         ],
//         mode: 'payment',
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//         automatic_tax: {enabled: true},
//       });
//       res.redirect(303, session.url);
//     } catch (err ) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }



// OLD JUNK Code: 

// const session = await stripe.checkout.sessions.create({
//   line_items: [
//     {
//       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//       price: '{{PRICE_ID}}',
//       quantity: 1,
//     },
//   ],
//   mode: 'payment',
//   success_url: `http://localhost:3000/payments/?success=true`,
//   cancel_url: `http://localhost:3000/payments/?canceled=true`,
//   // success_url: `${req.headers.origin}/?success=true`,
//   // cancel_url: `${req.headers.origin}/?canceled=true`,
//   automatic_tax: {enabled: true},
// });
// console.log('stripe session', session);