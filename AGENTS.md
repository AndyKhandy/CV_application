## Code Review Rules

### Architecture & Standards
- Never commit hardcoded secrets or environment variables; always direct the developer to use `.env` file handling.
- Verify all string-based database IDs use regex validations to prevent SQL injections or path traversal bugs.

### Testing & Quality
- Any new Express route or FastAPI endpoint change must include a corresponding test suite update.
