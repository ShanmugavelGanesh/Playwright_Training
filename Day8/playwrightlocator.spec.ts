//Playwright locators
import { test } from "@playwright/test";
test(`Learn playwright locators`,async ({page}) => {

await page.goto(`http://leaftaps.com/opentaps/control/main`);

await page.getByText("Username",{exact:true}).fill(`Demosalesmanager`)
await page.getByRole("textbox",{name:"PASSWORD"}).fill(`crmsfa`);
await page.getByRole("button",{name:"Login"}).click();
await page.getByText("CRM/SFA",{exact:true}).click();
await page.getByText("Leads",{exact:true}).click();
// await page.getByText("Find Leads",{exact:true}).click();
await page.getByRole("link",{name:"Find Leads"}).click();
await page.getByRole("textbox",{name:"Lead ID"}).fill('11106'); 
await page.getByRole("button",{name:"Find Leads"}).click();
await page.getByRole("link",{name:"11106"}).click();
await page.getByRole("link",{name:"Edit"}).click();
await page.waitForTimeout(4000);
});