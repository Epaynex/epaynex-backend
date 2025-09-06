const { sendOnboardingEmail } = require('./mailer');
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/paystack-webhook', (req, res) => {
  const event = req.body;

  if (event.event === 'charge.success') {
   sendOnboardingEmail(email);
 const email = event.data.customer.email;
    const amount = event.data.amount / 100;
    const currency = event.data.currency;

    console.log(`✅ Payment received from ${email} – ${currency} ${amount}`);

    // Trigger onboarding email
    sendOnboardingEmail(email);

    // Update Airtable CRM
    updateCRM(email, amount, currency);
  }

  res.sendStatus(200);
});
