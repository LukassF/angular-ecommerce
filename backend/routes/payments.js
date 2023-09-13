const express = require("express");
const payments = express.Router();
require("dotenv/config");

const stripe = require("stripe")(process.env.STRIPE_KEY);

payments.post("/", async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "PL"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free shipping",

            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1500,
              currency: "usd",
            },
            display_name: "Next day air",

            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 1,
              },
              maximum: {
                unit: "business_day",
                value: 1,
              },
            },
          },
        },
      ],
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
      success_url: "https://ngecommerce.onrender.com/success.html",
      cancel_url: "https://ngecommerce.onrender.com/cancel.html",
    });

    res.status(200).json(session);
  } catch (err) {
    next(err);
  }
});

module.exports = payments;
