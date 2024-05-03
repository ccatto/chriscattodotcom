import { type NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request: NextRequest) {
  console.log("inside post sendgrid");

  const { email, name, userNote } = await request.json();

  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  const msg = {
    to: process.env.NODEMAILER_MY_EMAIL,
    from: process.env.NODEMAILER_MY_EMAIL, // Use the email address or domain you verified above
    subject: `💌 -  ‼  - YO Sendgrid K8 Message from ${name} (${email})`,
    text: userNote,
    html: `<strong>${userNote} and easy to do anywhere, even with Node.js</strong>`,
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
