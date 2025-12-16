# @solana/eslint-config-solana

## 6.0.0

### Major Changes

- [`89d9bfb`](https://github.com/anza-xyz/eslint-config-solana/commit/89d9bfb673a116e2085ec0af43cdcd4f51b693e0) Thanks [@steveluscher](https://github.com/steveluscher)! - Added the following rules:

  ```
  "@typescript-eslint/prefer-promise-reject-errors": "error",
  "@typescript-eslint/restrict-plus-operands": "error",
  "@typescript-eslint/restrict-template-expressions": "error",
  ```

  These were repaired and re-enabled in https://github.com/anza-xyz/kit/pull/42, https://github.com/anza-xyz/kit/pull/38, and https://github.com/anza-xyz/kit/commit/2b49e836dffe27cbfd33f234df699aa3186ab93e, and it's now time to move them into the common config.

## 5.0.1

### Patch Changes

- [`6500e7c`](https://github.com/anza-xyz/eslint-config-solana/commit/6500e7cb7cfb9ddf00e4764091af367a8d9c10c5) Thanks [@steveluscher](https://github.com/steveluscher)! - Updated ESLint to 9.39.1
