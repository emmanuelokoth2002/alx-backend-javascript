// 10-api/api.js
const express = require('express');

const app = express();

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  if (!isNaN(parseInt(req.params.id))) {
    res.send(`Payment methods for cart ${req.params.id}`);
  } else {
    res.status(404).send('Invalid cart ID');
  }
});

app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    credit_cards: true,
    paypal: false,
  };

  res.json({ payment_methods: paymentMethods });
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
});
