import nodemailer from 'nodemailer';
import { render } from '@react-email/render';

import Email from '../components/Templates/Email';

type Payload = {
  recipient: string;
  subject: string;
  html: string;
};

export async function sendMail(mailSubject: any, toEmail: any, mailText: any) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW, // Change 'PASS' to 'pass'
    },
  });

  const emailHtml = render(Email({ mailText }));

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: mailSubject,
    html: emailHtml,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email Sent:', info.response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
