"use client";
import React from "react";
import axios from "axios";
import { useAppSelector } from "@/redux/hooks";
import { getCart } from "@/redux/counterSlice";
import { superbase } from "@/lib/superbase/products";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with the publishable key from environment variables 1 0
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

const Checkout = () => {
  // Get cart items from Redux state  0
  const cart = useAppSelector(getCart);

  // Function to create a Stripe checkout session 2
  const CreateStripeSession = async () => {
    // Wait for Stripe to be initialized 3
    const stripe = await stripePromise;
    // Get the current authenticated user from Supabase 0
    const {
      data: { user },
    } = await superbase.auth.getUser();

    // Create a checkout session on the server 4
    const CheckoutSession = await axios.post("/api/checkout-sessions", {
      items: cart, // Pass cart items 0
      email: user?.email, // Pass user email 0
    });

    // Redirect to the Stripe checkout page 8
    const result = await stripe?.redirectToCheckout({
      sessionId: CheckoutSession.data.id, // Pass the session ID
    });

    // Handle any errors during the redirect
    if (result?.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className="absolute top-0 z-50 bg-black h-full w-full">
      {/* Payment Section */}
      <section className="divcenter w-full h-full ">
        <div className="border border-slate-600 shadow-md shadow-slate-700 bg-gray-900 p-5 space-y-4 w-1/3 text-white">
          <h1 className="text-2xl text-orange-300 font-bold text-center">
            Order Summary
          </h1>
          <div className="flex items-center justify-between">
            <span>Items</span>
            <span className="font-bold">$456</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Delivery</span>
            <span className="font-bold">$456</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Total</span>
            <span className="font-bold">$456</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Coupon applied</span>
            <span className="font-bold">$456</span>
          </div>
          <hr />
          <h1 className="text-xl font-bold text-red-500 flex items-center justify-between">
            <span>Order Total</span>
            <span>$564</span>
          </h1>
          <hr />
          <div
            onClick={CreateStripeSession}
            className="px-2 text-center font-bold duration-300 rounded-md py-1
          text-black text-md cursor-pointer bg-[#FFD814] hover:bg-[#FFA41C]
          mt-[1rem]"
          >
            Order
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
