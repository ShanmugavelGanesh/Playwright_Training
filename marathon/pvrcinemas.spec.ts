import { test, expect } from '@playwright/test';

test('TC_PVR_001 - Book Movie Ticket in PVR Cinemas', async ({ page }) => {
    
    // 1. Launch the browser and open URL [cite: 6]
    await page.goto('https://www.pvrcinemas.com/'); // [cite: 4]
    permissions: []

    // 2. Select the city as "Chennai" [cite: 7]
    // Using XPath to locate the city search/selection
    await page.locator(`//input[@role="combobox"]`).click();
    await page.locator(`//input[@role="combobox"]`).fill('Chennai');
    await page.locator("//ul/li//span[text()='Chennai']").click();
    await page.locator(`(//span[contains(text(),"Cinema")])[1]`).click();

    // 3. Choose cinema from the available list 
    // Handled via the 'Cinema' dropdown/tab
    await page.locator(`(//span[contains(text(),"Select Cinema")])[1]`).click();
    await page.locator(`//ul[@role="listbox"]/li`).nth(0).click();
    const cinemaList = page.locator("//ul[@class='p-dropdown-items']//li");
    cinemaList.nth(0).click();
    await page.waitForTimeout(2000);
    // Using Arrays: Select the first cinema from the list

    // 4. Select movie date [cite: 9]
      await page.locator(`(//span[contains(text(),"Select Date")])[1]`).click();
      await page.locator(`//ul[@role="listbox"]/li`).nth(2).click();
    const date = page.locator("//ul[@class='p-dropdown-items']//li");
    date.nth(2).click();
    await page.waitForTimeout(2000);


    // 5. Choose any available movie [cite: 10]
    await page.locator(`(//span[contains(text(),"Select Movie")])[1]`).click();
    await page.locator(`//ul[@role="listbox"]/li`).nth(0).click();
     const movie = page.locator("//ul[@class='p-dropdown-items']//li");
    movie.nth(0).click();
     await page.waitForTimeout(2000);


    // 6. Select available show time [cite: 11]
    await page.locator(`(//span[contains(text(),"Select Timing")])[1]`).click();
    await page.locator(`//ul[@role="listbox"]/li`).nth(1).click();
    await page.waitForTimeout(2000);

    // 7. Click on Book button [cite: 12]
    await page.locator(`//button[@type="submit"]`).click();
    await page.waitForTimeout(2000);

    // 8. Click on Accept for Terms & Conditions [cite: 13]
    const acceptBtn = page.locator("//button[text()='Accept']");
    if(await acceptBtn.isVisible()) {
        await acceptBtn.click();
    }
    await page.waitForTimeout(2000);

    // 9. Select the available seat [cite: 14]
    // Selecting the first seat that is not already booked
    await page.locator(`((//div[@class="all-seats"]/div/tr)[6]/td)[10]`).click()
    await page.locator(`((//div[@class="all-seats"]/div/tr)[6]/td)[11]`).click()
    await page.waitForTimeout(2000);

    // // 10. Verify seat information and total ticket amount [cite: 15]
    const seatInfo = await page.locator(`//h6[contains(text(),"Seat Info")]`).isEnabled();
    if(seatInfo==true) {
        console.log("Seat selection successful");
        // const row = await page.locator(`((//span[@class="seat-selected-pvr"])[1]/ancestor::tr//span[@class="seat-row-no area"])[1]`)
        // const rowtext= await rowlocator.textContent();
        // console.log(`Row details: ${rowtext}`);
        const selectedSeats = page.locator('//span[contains(@class,"seat-selected")]');
        const ticketCount = await selectedSeats.count();
        console.log(`Selected tickets: ${ticketCount}`);
        const seatNumber = page.locator(`//div[@class="seat-number"]`);
        let finalTicket='';
        for(let i=0; i<ticketCount; i++) {
            console.log(`Seat Number: ${await seatNumber.nth(i).textContent()}`);
            finalTicket = finalTicket + await seatNumber.nth(i).textContent();
        }
        console.log(finalTicket);

        ////div[@class="select-seat-number"]//p
        const seatfinalNumber = page.locator(`//div[@class="select-seat-number"]//p`);
        const finalcount = await seatfinalNumber.count();
        let finalSeat='';
        for(let i=0; i<finalcount; i++) {
            finalSeat = finalSeat + await seatfinalNumber.nth(i).textContent();
        }
        console.log(`Final Seat Number: ${finalSeat}`);

        if(finalTicket===finalSeat) {
            console.log("Seat numbers match");
            const row = await page.locator(`((//span[@class="seat-selected-pvr"])[1]/ancestor::tr//span[@class="seat-row-no area"])[1]`)
            const rowtext= await row.textContent();
            let value='ABCDEGGHIJKL'
            if(value.includes(rowtext!.trim())) {
                let type=await page.locator(`(//span[@class="seats_area_type"])[2]`)
                
                let value=await type.textContent();
                console.log(`Seat Type and Price: ${value}`);
                console.log(value);
                if(value!=null) {
                let val1=value.split('(');
                console.log(val1)
                let val2=val1[1].split(`+`);
                let amount=val2[0];
                console.log(`Ticket Amount: ${amount}`);
                let twoTicket = parseInt(amount) * ticketCount;
                console.log(`Total Amount: Rs.${twoTicket}`);
                // let GSTcal=await page.locator(`(//div[@class="tickets-count"])[2]/following-sibling::div/p`);
                let GSTcal=await page.locator(`//p[text()="56.08"]`);
                let GST=await GSTcal.innerText()
                let GST1= parseFloat(GST);
                console.log(`GST Amount: ${GST}`);
                let TotalAmount= twoTicket + GST1;
                console.log(`Grand Total Amount: Rs.${TotalAmount}`);
                await page.waitForTimeout(2000);
                await page.locator(`//i[contains(@class,"pi")]`).click();
                let convFee=await page.locator(`//p[text()="56.08"]`).innerText();
                let convFee1=parseFloat(convFee);
                console.log(`Convenience Fee: ${convFee}`);
                let convFeeGST=await page.locator(`//p[text()="56.08"]`).innerText();
                let convFeeGST1=parseFloat(convFeeGST);
                console.log(`Convenience Fee GST: ${convFeeGST}`);
                let grandTotal= TotalAmount + convFee1 + convFeeGST1;
                let roundVal=grandTotal.toFixed(2);
                console.log(`Final Grand Total Amount: Rs.${roundVal}`);
                await page.waitForTimeout(2000);
                
                if(roundVal==) {

                
            }

    } else {
        console.log("Seat number not matching");
    }
    // // const seatInfo = page.locator("//div[@class='seat-info']");
    // const totalAmount = page.locator("//div[@class='grand-total']");
    
    // // // Assertions
    // expect(seatInfo).toContain('Seat Info');
    // await expect(totalAmount).toContainText('Rs.');

    // // 11. Verify the Title of the page [cite: 16]
    // await expect(page).toHaveTitle(/PVR Cinemas/);

    // // 12. Proceed to booking [cite: 17]
    // await page.locator("//button[contains(text(),'Proceed')]").click();
}
}
});