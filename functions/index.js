const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response } = require('express');
const stripe = require("stripe")('sk_test_51ImFKRSFS2Djv7o8TsXDMb1EcsStmhmZdkj7iwiEUtwPOj6FrW8kJmf0mlUwpIyTyzLK4cZ5zG0ZZJ9Kbd3eT5QS00w3PBQBip')

// API 

// -App config
const app = express();

// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.clientSecret,
    })
})


// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-ad7bc/us-central1/api