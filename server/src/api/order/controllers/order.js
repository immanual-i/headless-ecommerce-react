'use strict';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
   async create(ctx) {
      // ctx modify API endpoint [Checkout]
      const { products, userName, email } = ctx.request.body;

      try {
         // retrieve product info
         const lineItems = await Promise.all(
            products.map(async (product) => {
               const item = await strapi
                  .service("api::item.item")
                  // extract items model
                  .findOne(product.id);

               return {
                  // from stripe flow documentation
                  price_data: {
                     currency: "usd",
                     product_data: {
                        name: item.name
                     },
                     unit_amount: item.price * 100,
                  },
                  quantity: product.count,
               }
            })
         );
         // console.log('lineItems:', lineItems);

         // create stripe session
         const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            customer_email: email,
            mode: "payment",
            success_url: "http://localhost:3000/checkout/success",
            cancel_url: "http://localhost:3000",
            line_items: lineItems,
         });

         // stripeSessionId is a reference to payment session created in Stripe
         await strapi.service("api::order.order").create({
            data: { userName, products, stripeSessionId: session.id },
         });

         // return session id
         return { id: session.id }
      } catch (error) {
         console.log(ctx);
         ctx.response.status = 500;
         return {
            error: {
               message: "There was a problem creating the charge."
            }
         }

      }
   }
}));
