# Solana ESLint config

Let's share this ESLint config across all of our projects, to keep things consistent.

## Installation

1. Install this package in the target project, along with the required peer dependencies
   ```bash
   pnpx install-peerdeps@2 --pnpm --dev @solana/eslint-config-solana
   ```
2. Create an `eslint.config.mjs` file in your target project that imports this module
   ```js
   import solana from "@solana/eslint-config-solana";

   export default solana;
   ```
