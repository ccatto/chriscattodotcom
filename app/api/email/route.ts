import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
// import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, userNote } = await request.json();

  // Create Transporter with Google OAuth2
  const createTransporter = async () => {
    console.log('inside createTransporter ~~~~~~~');
    const oauth2Client = new OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground',
    );

    // obtain Refresh Token:
    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    // Obtain Access Token by calling getAccessToken
    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.log('----- Error here cannot getAccessToken boo ------', err);
          reject();
        }
        resolve(token);
      });
    });

    // Create transporter with OAuth2
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.NODEMAILER_MY_EMAIL,
        accessToken,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      },
    });

    return transporter;
  };

  // send secure google email
  const sendSecureGoogleMail = async () => {
    try {
      const mailOptions = {
        from: process.env.NODEMAILER_MY_EMAIL,
        to: process.env.NODEMAILER_MY_EMAIL,
        subject: `💌 -  ‼  - YO K8 Message from ${name} (${email})`,
        text: userNote,
      };
      let emailTransporter = await createTransporter();
      await emailTransporter.sendMail(mailOptions);

      // #TODO explore utlizing a promise here instead of just calling function
      //   new Promise<string>((resolve, reject) => {
      //     transport.sendMail(mailOptions, function (err) {
      //       if (!err) {
      //         resolve('Email sent');
      //       } else {
      //         reject(err.message);
      //       }
      //     });
    } catch (err) {
      console.log('ERROR: ', err);
    }
  };

  // call send email
  try {
    await sendSecureGoogleMail();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }

  ///////////////////////////////////////////////////
  // scrap code here
  ///////////////////////////////////////////////////
  // // const sendEmail = async (emailOptions) => {
  // const sendEmail = async (mailOptions) => {
  //   console.log('======= inside sendEmail New');
  //   let emailTransporter = await createTransporter();
  //   console.log("🚀 ~ sendEmail ~ emailTransporter:", emailTransporter)
  //   await emailTransporter.sendMail(mailOptions);
  //   return NextResponse.json({ message: 'Email sent' });
  // };
  // const mailOptions: Mail.Options = {
  //   from: process.env.NODEMAILER_MY_EMAIL,
  //   to: process.env.NODEMAILER_MY_EMAIL,
  //   // cc: email, (uncomment this line if you want to send a copy to the sender)
  //   subject: `💌 -  ‼  - YO K8 Message from ${name} (${email})`,
  //   text: userNote,
  // };
  // sendEmail({
  //   subject: "Test",
  //   text: "I am sending an email from nodemailer!",
  //   to: "put_email_of_the_recipient",
  //   from: process.env.EMAIL
  // });

  ////  -----     -----     ///////////////////////////////////////////////
  // Classic Less Secure Config works locally:
  // const transport = nodemailer.createTransport({
  //   service: 'gmail',
  //   // host: "smtp.gmail.com",
  //   port: 465,
  //   secure: true,

  //   /*
  //     setting service as 'gmail' is same as providing these settings:

  //     host: "smtp.gmail.com",
  //     port: 465,
  //     secure: true

  //     If you want to use a different email provider other than gmail, you need to provide these manually.
  //     Or you can go use these well known services and their settings at
  //     https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  // */
  //   auth: {
  //     // might need oauth2
  //     // type: "OAuth2",
  //     user: process.env.NODEMAILER_MY_EMAIL,
  //     pass: process.env.NODEMAILER_PASSWORD,
  //   },
  // });

  // const mailOptions: Mail.Options = {
  //   from: process.env.NODEMAILER_MY_EMAIL,
  //   to: process.env.NODEMAILER_MY_EMAIL,
  //   // cc: email, (uncomment this line if you want to send a copy to the sender)
  //   subject: `💌 -  ‼  - YO K8 Message from ${name} (${email})`,
  //   text: userNote,
  // };

  // const sendMailPromise = () =>
  //   new Promise<string>((resolve, reject) => {
  //     transport.sendMail(mailOptions, function (err) {
  //       if (!err) {
  //         resolve('Email sent');
  //       } else {
  //         reject(err.message);
  //       }
  //     });
  //   });

  // try {
  //   await sendMailPromise();
  //   return NextResponse.json({ message: 'Email sent' });
  // } catch (err) {
  //   return NextResponse.json({ error: err }, { status: 500 });
  // }
  ///  -----     -----     ///////////////////////////////////////////////
}
