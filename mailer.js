// mailer.js
const nodemailer = require('nodemailer');

function sendOnboardingEmail(email) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'epaynexinc@gmail.com',
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: 'epaynexinc@gmail.com',
    to: email,
    subject: 'Welcome to Epaynex 🚀',
    html: `
      <h2>Hi there!</h2>
      <p>Your payment was successful. You're now part of Epaynex's early access program.</p>
      <p>We’ll send you updates, onboarding materials, and exclusive investor-grade insights.</p>
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
}

module.exports = { sendOnboardingEmail };
