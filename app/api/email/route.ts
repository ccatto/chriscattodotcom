import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  // console.log("inside POST Route request === ", request);
  const { email, name, userNote } = await request.json();
  // console.log("🚀 ~ POST ~ message:", userNote)
  // console.log("🚀 ~ POST ~ name:", name)
  // console.log("email = ", email);

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these settings:

      host: "smtp.gmail.com",
      port: 465,
      secure: true

      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.NODEMAILER_MY_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_MY_EMAIL,
    to: process.env.NODEMAILER_MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `💌 -  ‼  - YO K8 Message from ${name} (${email})`,
    text: userNote,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
