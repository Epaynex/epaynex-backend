// webhook.js
const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_YOUR_SECRET_KEY'); // Replace with your actual secret key

app.use(express.json());

app.post('/webhook', (req, res) => {
  const event = req.body;

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log(`✅ Payment received from ${session.customer_email}`);

   const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'epaynexinc@gmail.com',
    pass: process.env.EMAIL_PASS, // Store this in your .env file
  },
});

const mailOptions = {
  from: 'epaynexinc@gmail.com',
  to: session.customer_email,
  subject: 'Welcome to Epaynex 🚀',
  html: `
    <h2>Hi there!</h2>
    <p>Thanks for joining Epaynex. Your payment was successful, and you're now part of our early access community.</p>
    <p>We’ll be sending you updates, onboarding materials, and exclusive investor-grade insights.</p>
    <p>Let’s build the future of fintech together.</p>
    <br>
    <strong>– Jones & the Epaynex Team</strong>
  `,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('❌ Email failed:', error);
  } else {
    console.log('✅ Onboarding email sent:', info.response);
  }
});
 // TODO: Trigger onboarding flow here
    // e.g., send email, update CRM, provision dashboard access
  }

  res.status(200).send('Webhook received');
});

app.listen(4242, () => console.log('Webhook server running on port 4242'));
