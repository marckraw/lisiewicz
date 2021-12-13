module.exports = {
  "pages/**/*.{ts,js,tsx,jsx}": [
    "npx prettier --write",
    "npx eslint --fix",
  ],
  "components/**/*.{ts,js,tsx,jsx}": [
    "npx prettier --write",
    "npx eslint --fix",
  ],
  "constants/**/*.{ts,js,tsx,jsx}": [
    "npx prettier --write",
    "npx eslint --fix",
  ],
  "lib/**/*.{ts,js,tsx,jsx}": [
    "npx prettier --write",
    "npx eslint --fix",
  ]
}
