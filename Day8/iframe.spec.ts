import{test} from "@playwright/test";

test (`Learn iframes`, async ({page})=>{
await page.goto(`https://www.amazon.in/`);
const framepage=page.frame();
});
