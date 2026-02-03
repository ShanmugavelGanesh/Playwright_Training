import { test } from "@playwright/test";

test(`Learn playwright locators`,async ({page}) => {
    
await page.goto(`https://login.salesforce.com/?locale=in`);
await page.getByAltText("Salesforce").isVisible();
await page.getByAltText("Salesforce").click();
await page.getByRole("textbox",{name:"Username"}).fill(`dilipkumar.rajendran@testleaf.com`);
//await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")
await page.getByText("Username",{exact:true}).fill(`dilipkumar.rajendran@testleaf.com`)
await page.getByRole("textbox",{name:"Password"}).fill(`TestLeaf@2025`);
await page.getByRole("button",{name:"Log In"}).click();
await page.getByTitle("App Launcher",{exact:true}).click();
await page.getByAltText("User").first().isVisible();
await page.getByAltText("User").first().click();

await page.waitForTimeout(3000)

})