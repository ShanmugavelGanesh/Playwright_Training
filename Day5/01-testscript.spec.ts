//Test scrpt

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
    // await page.fill(`#createLeadForm_companyName`, `TestLeaf`);
    // await page.fill(`#createLeadForm_firstName`, `Shan`);
    // await page.fill(`#createLeadForm_lastName`, `G`);
    // await page.fill(`#createLeadForm_personalTitle`, `Shan_Lead`);
    // await page.fill(`#createLeadForm_generalProfTitle`, `New_Training_Lead`);
    // await page.fill(`#createLeadForm_annualRevenue`, `12 LPA`);
    // await page.fill(`#createLeadForm_departmentName`, `QA  Dept`);
    // await page.fill(`#createLeadForm_primaryPhoneNumber`, `9876543210`);
    // await page.click(`.smallSubmit`);

    await page.locator('//input[@id="createLeadForm_companyName"]').fill('TestLeaf');
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('Shan');
    await page.locator('//input[@id="createLeadForm_lastName"]').fill('G');
    await page.locator('//input[@id="createLeadForm_personalTitle"]').fill('Shan_Test_Lead');
    await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill('New_Training_Lead');
    await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill('12 LPA');
    await page.locator('//input[@id="createLeadForm_departmentName"]').fill('QA  Dept');
    await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill('9876543210');
    const dd=page.locator('#createLeadForm_dataSourceId>option')
    const len=await dd.count();
    for(let i=0; i<len; i++){

        console.log(await dd.nth(i).innerText()); 

    }
    await page.waitForTimeout(3000);

});