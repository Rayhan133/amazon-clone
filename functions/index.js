const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
	'sk_test_51Ie9c0A7IMYJPWgLrOiHL8fywPghhL2Y6Kl4T7aBUVwLzcMt04tNCQFLDhYUmSuJKQeQw2phTvRNlr5B6clpuDBS00ihBHlgjp'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => {
	response.status(200).send('hello word');
});

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;
	console.log('Payment request received Boom', total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: 'usd',
	});

	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-1389b/us-central1/api