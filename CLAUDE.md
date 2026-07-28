# Repo coding conventions

## General
- TypeScript strict mode across all `src/` code
- No `any` in `src/` — use `unknown` and narrow at the boundary
- Structured logging via the `logger` module in production paths

## `scripts/**` — ops one-shots

Files in `scripts/**` are ad-hoc one-shot ops scripts, not production
code. They run manually or from cron and get thrown away when the
question changes.

- **`any` is allowed** — we're pulling ad-hoc aggregations out of
  Mongo/Postgres and typing every intermediate row is friction with no
  payoff. Narrow at the very end if you need to.
- **`console.log` is the expected output channel** — no structured
  logger. These scripts pipe into CSVs, Grafana importers, or humans.
- **No test coverage expected.** Scripts get read once, run, and either
  archived or deleted.

Rationale: prior review round kept flagging scripts/* for the `any`
uses that make sense in that context; carving them out cleanly here so
the noise stops.
