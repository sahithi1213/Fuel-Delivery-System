const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
require('dotenv').config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const Order = require('../models/orderModel')
router.post("/placeorder", async (req, res) => {

    const { token, subtotal, currentUser, cartItems } = req.body

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const payment = await stripe.paymentIntents.create({
            amount: subtotal * 100,
            currency: 'INR',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        })

        if (payment) {

            const neworder = new Order({
                name: currentUser.name,
                email: currentUser.email,
                userid: currentUser._id,
                otherItems: cartItems,
                orderAmount: subtotal,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip
                },
                transactionId: payment.source.id
            })

            neworder.save()

            res.send('Order Placed Successfully')
        }
        else {
            res.send('Payment Failed')
        }

    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' + error });
    }

});


router.post("/getuserorders", async (req, res) => {
    const { userid } = req.body
    try {
        const orders = await Order.find({ userid: userid }).sort({ _id: -1 })
        res.send(orders)
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' });
    }
});

module.exports = router