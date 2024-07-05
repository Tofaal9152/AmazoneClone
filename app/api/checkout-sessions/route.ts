import { NextRequest, NextResponse } from "next/server";

// Import and initialize Stripe with the secret key from environment variables  6 0
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

// Define the POST request handler for the API route 5
export async function POST(req: NextRequest, res: NextResponse) {
  // Parse the JSON body of the request
  const body = await req.json();
  // Extract items and email from the request body 0
  const { items, email } = body;

  // Create a Stripe checkout session 7
  const session = await stripe.checkout.sessions.create({
    // Define the payment method types allowed (only card payments in this case)
    payment_method_types: ["card"],
    // Specify allowed shipping address countries (US and CA in this case)
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    // Define the line items for the checkout session 0
    line_items: items.map((item: any) => ({
      price_data: {
        currency: "usd", // Currency for the payment
        product_data: {
          name: item.title, // Product name
          images: [item.image], // Product image
        },
        unit_amount: item.price * 100, // Price in cents (Stripe expects amount in the smallest currency unit)
      },
      quantity: item.quantity, // Quantity of the item
    })),
    // Set the mode to "payment"
    mode: "payment",
    // Define the URL to redirect to after a successful payment 0
    success_url: `${process.env.HOST}/success`,
    // Define the URL to redirect to if the payment is canceled 0
    cancel_url: `${process.env.HOST}/checkout`,
    // Add additional metadata to the session
    metadata: {
      email, // Store the email address provided in the request. Useful for identifying or contacting the customer.
      images: JSON.stringify(items.map((e: any) => e.image)), // Store a JSON string of item images. Useful for order fulfillment or customer service.
    },
  });

  // Return the session ID in the response
  return NextResponse.json({
    id: session.id,
  });
}
