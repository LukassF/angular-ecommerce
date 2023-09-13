const express = require("express");
const payments = express.Router();
require("dotenv/config");

const stripe = require("stripe")(process.env.STRIPE_KEY);

payments.post("/", async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: parseInt(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:5000/success.html",
      cancel_url: "http://localhost:5000/cancel.html",
    });

    res.status(200).json(session);
  } catch (err) {
    next(err);
  }
});

module.exports = payments;
