import { test, expect } from '@playwright/test';
import { homePage } from '../pages/home-page';
import { registerPage } from '../pages/register-page';
import { digitalDownloadsPage } from '../pages/digital-download-page';

test("User can register and add product to cart", async ({ page }) => {
  const home = homePage(page);
  const register = registerPage(page);
  const downloads = digitalDownloadsPage(page);

  const timestamp = Date.now();
  const email = `user+${timestamp}@example.com`;
  const password = "User123456789";

  await home.goToHomePage();

// //temp regitration
// await page.click('a[href="/login"]');
// await page.fill('#Email', email);
// await page.fill('#Password', password);
// await page.click('input.login-button');
// await page.waitForURL(`${process.env.BASE_URL}/`);


  await home.clickRegister();

  await register.selectGender("M");
  await register.fillRegistrationForm("Asaf", "Elazar", email, password);
  await register.submitRegistration();
  await register.continueAfterRegister();

  await expect(page).toHaveURL(`${process.env.BASE_URL}/`);
  await register.isEmailVisible(email);

 await downloads.goToDigitalDownloads();

 const selectedProduct = await downloads.addRandomProductToCart();

 await page.click('#topcartlink a[href="/cart"]');

 await expect(page).toHaveURL(`${process.env.BASE_URL}/cart`);

 const cartProductName = await page.locator('.cart-item-row .product-name').textContent();
 expect(cartProductName.trim()).toBe(selectedProduct);
});