const { test, expect } = require('@playwright/test');
test('Homepage',async({page})=>{
    await page.goto('https://www.leafground.com/dashboard.xhtml');
    const pageTitle=page.title();
    console.log('page title is :',pageTitle);
    const pageURL=page.url();
    console.log('page URL is :',pageURL);
    await expect(page).toHaveURL('https://www.leafground.com/dashboard.xhtml');
    await expect(page).toHaveTitle('Dashboard');
    await page.close();
})