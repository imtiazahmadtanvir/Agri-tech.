
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
    try {
        const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
        if (!stripeSecretKey) {
            return NextResponse.json(
                { error: "STRIPE_SECRET_KEY is not set" },
                { status: 500 }
            );
        }

        const stripe = new Stripe(stripeSecretKey);
        const body = await req.json();
        const { amount } = body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "bdt",
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "PaymentIntent creation failed" },
            { status: 500 }
        );
    }
}
