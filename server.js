const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || isNaN(amount)) {
      return res.status(400).json({ error: "Ugyldig beløp" });
    }

    const belopOre = Math.round(Number(amount) * 100);

    if (belopOre < 500) {
      return res.status(400).json({ error: "Minste beløp er 5 kr" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: belopOre,
      currency: "nok",
      automatic_payment_methods: {
        enabled: true
      }
    });

    res.json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    console.log("Stripe-feil:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server kjører på http://localhost:3000");
});