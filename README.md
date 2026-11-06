\# Playwright Practice – SauceDemo



UI test automation practice using Playwright and TypeScript against saucedemo.com.



\## Tests

\- Login: standard user can log in; locked-out user sees an error

\- Cart: user can add a product and the cart badge updates

\- Checkout: user can complete an order; missing postcode shows a validation error



\## Run

npm install

npx playwright test

