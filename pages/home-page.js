export const homePage = (page) =>{

 const goToHomePage = async () =>{
    await page.goto('/');
 }   

 const clickRegister = async () => {
   await Promise.all([
  page.waitForURL('**/register'),
  page.getByRole('link', { name: 'Register' }).click()
]);

 }
  return {
    goToHomePage,
    clickRegister
  };
};