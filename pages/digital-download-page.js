export const digitalDownloadsPage = (page) => {
    const goToDigitalDownloads = async () => {
      await page.click('a[href="/digital-downloads"]'); 
    };
  
    const addRandomProductToCart = async () => {
        const products = await page.locator('.product-item');
        const count = await products.count();
      
        const randomIndex = Math.floor(Math.random() * count);
        const product = products.nth(randomIndex);
      
        const productName = await product.locator('.product-title a').textContent();
      
        await product.locator('input[value="Add to cart"]').click();
      
        return productName.trim();
      };
      
  
    return {
      goToDigitalDownloads,
      addRandomProductToCart,
    };
  };
  