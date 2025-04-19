import { expect } from "@playwright/test";

export const registerPage = (page) => {
  const selectGender = async (gender) => {
    if (gender !== "M" && gender !== "F") {
      throw new Error('Gender must be "M" or "F"');
    }
    await page.check(`#gender-${gender === "M" ? "male" : "female"}`);
  };

  const fillRegistrationForm = async (first, last, email, password) => {
    await page.fill("#FirstName", first);
    await page.fill("#LastName", last);
    await page.fill("#Email", email);
    await page.fill("#Password", password);
    await page.fill("#ConfirmPassword", password);
  };

  const submitRegistration = async () => {
    await Promise.all([
      page.waitForURL(`${process.env.BASE_URL}/register`), 
      page.click('#register-button')
    ]);
  };
  

  const continueAfterRegister = async () => {
    await Promise.all([
        page.waitForURL(`${process.env.BASE_URL}/`),
        page.click('input.register-continue-button')
      ]);
      
  };

  const isEmailVisible = async (email) => {
    await expect(page.locator('.header-links a.account')).toHaveText(email);
  };

  return {
    selectGender,
    fillRegistrationForm,
    submitRegistration,
    continueAfterRegister,
    isEmailVisible,
  };
};
