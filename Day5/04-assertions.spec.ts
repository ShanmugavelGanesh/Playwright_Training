//TESTLEAF TRAINER 25-01-2026 05:40 PM • 

import { expect, test } from "@playwright/test";

test(`Test to learn dropdown interaction`,async ({page}) => {

test.setTimeout(50000)

await page.goto(`http://leaftaps.com/opentaps/control/main`);

await expect(page.locator(`//input[@id="username"]`)).toBeEditable() // assertion - locator assertion

await page.locator(`//input[@id="username"]`).fill(`democsr2`);//Textbox

await expect(page.locator(`//input[@id="password"]`)).toBeEmpty()

await page.locator(`//input[@id="password"]`).fill(`crmsfa`);//Textbox

await expect(page.locator(`//input[@class="decorativeSubmit"]`)).toBeEnabled({timeout:8000})

await page.locator(`//input[@class="decorativeSubmit"]`).click();//Button

await page.locator(`//a[contains(text(),'CRM')]`).click();

await page.locator(`//a[text()="Create Lead"]`).click();

await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(`Testleaf`);

await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(`Ravindran`);

await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("R");

await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{value:"LEAD_COLDCALL"}) // value


// await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{label:"Cold Call"}) // label


// await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{index:1}) // index


//selectOption : part1(argument1) : identify the web element, part2(argument2):

const dropdown = page.locator(`//select[@id="createLeadForm_dataSourceId"]/option`); // 13 locators -> child locators

//[webElement1,....webElement13]

const dropDownCount = await dropdown.count(); // Print 13 number

// expect(dropDownCount).toBeGreaterThan(15) // Validating the values and giving the output

expect.soft(dropDownCount).toBeGreaterThan(15) // Validating the values and giving the output

for (let index = 0; index < dropDownCount; index++) {

console.log( await dropdown.nth(index).innerText());
/* Note :
page.locator(`//select[@id="createLeadForm_dataSourceId"]/option`); // array of 13 locators


page.locator(`//select[@id="createLeadForm_dataSourceId"]/option`).nth(0).innerText() =>"Blank"
page.locator(`//select[@id="createLeadForm_dataSourceId"]/option`).nth(1).innerText()=>Locator of "Cold call"
.
.
.page.locator(`//select[@id="createLeadForm_dataSourceId"]/option`).nth(12).innerText()=>Locator of "Word of Mouth"

*/ 
}

await page.waitForTimeout(5000);

await page.locator(`//input[@class="smallSubmit"]`).click();

const statusText = await page.locator(`//span[@id="viewLead_statusId_sp"]`).innerText() // statusText == Assigned

expect(statusText).toContain(`Assigned`) // Generic assertion


})