//Print the value from the currency field dropdown value in console

import { test, chromium } from "@playwright/test";

test(`Test to launch browser and perform actions`, async ({page}) => {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.fill(`#username`, `Demosalesmanager`);
    await page.fill(`#password`, `crmsfa`);
    await page.click(`.decorativeSubmit`);
    await page.click(`text=CRM/SFA`);
    await page.click(`text=Leads`);
    await page.click(`text=Create Lead`);
    await page.selectOption('//select[@id="createLeadForm_currencyUomId"]', { value: 'USD' });
    await page.selectOption('//select[@id="createLeadForm_currencyUomId"]', { label: 'KWD - Kuwaiti Dinar' });
    await page.selectOption('//select[@id="createLeadForm_currencyUomId"]', { index: 1 });
    const dd= page.locator('//select[@id="createLeadForm_currencyUomId"]/option');
    const len=await dd.count();
    console.log ("Total no of options in currency dropdown: "+len);
    for (let i=0; i<len; i++){
        console.log( await dd.nth(i).innerText() );
    }

    await page.waitForTimeout(3000);

});