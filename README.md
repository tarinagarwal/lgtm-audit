# lgtm-audit

End-to-end smoke test for the LGTM Upstash migration.

Created programmatically to exercise:
- GitHub webhook signature verification (Upstash SETNX dedup)
- Context-indexing workflow (Upstash Workflow, 6 checkpointed steps)
- Review pipeline (QStash queue → /internal/queue/review)
