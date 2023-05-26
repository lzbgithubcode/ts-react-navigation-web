module.exports = {
  '**/*.{js,jsx,ts,tsx.json}': [
    'pnpm run lint:fix',
    'pnpm run format',
    'git add --force',
  ],
};
