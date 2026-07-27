/**
 * Fix 16 stress-test — a small Express + Prisma-flavored file that
 * SHOULD get framework-specific findings once the reviewer sees
 * package.json contains express/prisma/zod/hono/trpc.
 *
 * Real bugs seeded:
 *   - async route handler forgets to forward error to next() → Express gotcha
 *   - $queryRawUnsafe with untrusted user input → Prisma trap
 *   - res.json returned instead of `return res.json` → double-send risk
 */
import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

// BUG 1: async handler with no next() forwarding — unhandled rejection crashes process.
app.get("/user/:id", async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({ where: { id: req.params.id } });
  res.json(user);
});

// BUG 2: $queryRawUnsafe with untrusted param — SQL injection via Prisma.
app.get("/search", async (req: Request, res: Response) => {
  const q = req.query.q as string;
  const results = await prisma.$queryRawUnsafe(
    `SELECT * FROM articles WHERE title LIKE '%${q}%'`,
  );
  res.json(results);
});
