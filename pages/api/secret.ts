import type { NextApiRequest, NextApiResponse } from "next";

// Next.js API route leaking a secret env var to the client via the JSON response.
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  return res.json({ stripeKey: process.env.STRIPE_SECRET_KEY });
}
