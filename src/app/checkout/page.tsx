"use client";
import CheckoutPage from "@/components/checkout/CheckoutPage";
import { useGlobalContext } from "@/context/GlobalContext";
import { convertTakaToPaisa } from "@/utils/currency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripeKey ? loadStripe(stripeKey) : null;

export default function PaymentPage() {
  const { total } = useGlobalContext();

  if (!stripePromise) {
    return (
      <div className="max-w-xl mx-auto min-h-[calc(100vh-400px)] p-4">
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Stripe is not configured. Set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to
          enable checkout.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto min-h-[calc(100vh-400px)]">
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertTakaToPaisa(total + 100),
          currency: "bdt",
        }}
      >
        <CheckoutPage amount={total + 100}></CheckoutPage>
      </Elements>
    </div>
  );
}
