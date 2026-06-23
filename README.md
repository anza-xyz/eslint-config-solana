# Solana ESLint config

> [!WARNING]
> **This package is deprecated.** It has been replaced by
> [`@solana-config/eslint`](https://github.com/solana-foundation/js-configs),
> part of the [`@solana-foundation/js-configs`](https://github.com/solana-foundation/js-configs)
> monorepo. Please migrate to the new package; this one will no longer receive updates.

Let's share this ESLint config across all of our projects, to keep things consistent.

## Installation

1. Install this package in the target project, along with the required peer dependencies
   ```bash
   pnpx install-peerdeps@2 --pnpm --dev @solana/eslint-config-solana
   ```
2. Create an `.eslint.json` file in your target project that extends this module
   ```json
   {
     "extends": ["@solana/eslint-config-solana"]
   }
   ```
