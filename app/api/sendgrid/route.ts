import { type NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request: NextRequest) {
  console.log("inside post sendgrid");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  const msg = {
    to: 'chriscatto3@gmail.com',
    from: 'chriscatto3@gmail.com', // Use the email address or domain you verified above
    subject: 'Good - Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  // //ES6
  // sgMail
  //   .send(msg)
  //   .then(() => {}, error => {
  //     console.error(error);

  //     if (error.response) {
  //       console.error(error.response.body)
  //     }
  //   });

  //ES8
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();

  return NextResponse.json({ message: 'SendGrid Email sent' });
}
