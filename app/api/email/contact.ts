// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from 'nodemailer';

// Nodemailer docs: // https://nodemailer.com/about/
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // https://nodemailer.com/smtp/
  const transporter = nodemailer.createTransport({
    service: 'SendinBlue',
    auth: {
      user: process.env.MY_EMAIL,
      // user: process.env.email,
      pass: process.env.SMTP_PASS,
    },
    secure: false, // Default value but showing for explicitness
  });

  const { name, email, message } = req.body;

  if (!message || !name || !message) {
    return res
      .status(400)
      .json({ message: 'Please fill out the necessary fields' });
  }

  // https://nodemailer.com/message/#common-fields
  const mailData = {
    from: email,
    to: email,
    subject: `Message from ${name}`,
    text: `${message} | Sent from: ${email}`,
    html: `<div>${message}</div><p>Sent from: ${email}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: Error | null, info) => {
      if (err) {
        reject(err);
        return res
          .status(500)
          .json({ error: err.message || 'Something went wrong' });
      } else {
        resolve(info.accepted);
        res.status(200).json({ message: 'Message sent!' });
      }
    });
  });

  return;
}
