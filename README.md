# Demo Webshop - readme file

## Test Purpose
To verify that a new user can register successfully, see their email in the header, and add a random product from the "Digital Downloads" section to their shopping cart. The test ensures the product added appears correctly in the cart.

##  Preconditions
- Node.js and Playwright installed
- `.env` file with the following:
  ```env
  BASE_URL=https://demowebshop.tricentis.com

## Steps to Execute
1. Navigate to the home page
2. Click "Register"
3. Fill in user details and register
4. Click "Continue"
5. Validate that the email is visible in the header
6. Navigate to "Digital Downloads"
7. Select a random product
8. Add it to the cart
9. Navigate to the shopping cart
10. Verify the product name matches

## Post-Conditions
* No actual data cleanup is needed.

## Validation Criteria
- After registration, the user's email appears in the top header.
- After selecting a random product and clicking "Add to cart", it appears in the shopping cart.
- The product name in the cart matches the selected one.

## Run Locally
npm install
npx playwright install
npx playwright test

## Notes
This repo uses environment variables, so be sure not to share your .env file.