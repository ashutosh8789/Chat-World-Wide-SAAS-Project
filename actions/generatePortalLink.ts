// 'use client';

// import Stripe from "stripe";
// import {authOptions} from "@/auth";
// import {adminDb} from "@/firebase-admin";
// import {getServerSession} from "next-auth";
// import {headers} from "next/headers";
// import {redirect} from "next/navigation";





// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//     apiVersion:"2024-06-20",
// })

// export async function generatePortalLink() {
//     const session = await getServerSession(authOptions);
//     const host = headers().get("host");

//     if(!session?.user.id) return console.log("No user ID found");

//     const {
//         user:{ id },

//     }=session;

//     const returnUrl = 
//     process.env.NODE_ENV ==="development"
//     ? `https://${host}/register`
//     : `httsp://${host}/register`

//     const doc = await adminDb.collection("customers").doc(id).get();

//     if(!doc.data)
//         return console.error("no customer record found with userid",id);

//     const stripeSession = await stripe.billingPortal.sessions.create({
//         customer : stripeId,
//         return_url : returnUrl,
//     });

//     redirect(stripeSession.url)
// }

