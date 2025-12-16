---
"@solana/eslint-config-solana": major
---

Added the following rules:

```
"@typescript-eslint/prefer-promise-reject-errors": "error",
"@typescript-eslint/restrict-plus-operands": "error",
"@typescript-eslint/restrict-template-expressions": "error",
```

These were repaired and re-enabled in https://github.com/anza-xyz/kit/pull/42, https://github.com/anza-xyz/kit/pull/38, and https://github.com/anza-xyz/kit/commit/2b49e836dffe27cbfd33f234df699aa3186ab93e, and it's now time to move them into the common config.
