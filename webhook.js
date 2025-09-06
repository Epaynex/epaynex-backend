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

    // TODO: Trigger onboarding flow here
    // e.g., send email, update CRM, provision dashboard access
  }

  res.status(200).send('Webhook received');
});

app.listen(4242, () => console.log('Webhook server running on port 4242'));
