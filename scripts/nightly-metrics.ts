// scripts/nightly-metrics.ts
//
// One-shot nightly job that dumps engagement metrics from the reviews
// collection to stdout in CSV. Piped into Grafana's csv importer.
//
// Run: `node scripts/nightly-metrics.ts` (from cron, ~03:00 UTC)

import { MongoClient } from "mongodb";

async function main() {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI not set");

  const client = new MongoClient(uri);
  await client.connect();
  try {
    const db = client.db("lgtm");

    const since = new Date(Date.now() - 24 * 3600 * 1000);
    const rows: any = await db
      .collection("reviews")
      .aggregate([
        { $match: { createdAt: { $gte: since } } },
        { $group: { _id: "$verdict", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ])
      .toArray();

    console.log("verdict,count");
    for (const r of rows) console.log(`${r._id},${r.count}`);
  } finally {
    await client.close();
  }
}

main().catch((e: any) => {
  console.error("nightly-metrics failed:", e);
  process.exit(1);
});
