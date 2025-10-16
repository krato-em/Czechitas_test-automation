import { test, expect } from '@playwright/test';
 
test('homework', async ({ page }) => {
    // place for your homework code
    await page.goto('/');
});


test('registrace', async ({ page }) => {
    // place for your homework code
    await page.goto('/registrace');

    await page.getByRole("textbox", { name: 'Jméno a příjmení' }).fill("TestName TestSurname");
    await page.locator("#email").fill("email@test.com");
    await page.locator("input#password").fill("test");
    await page.locator("#password-confirm").fill("test")

});


test('Lesson_03: registrace', async ({ page }) => {
    // place for your homework code
    await page.goto('/registrace');

    const nameField = page.locator("input#name");
    const emailField = page.locator("#email");
    const passwordField = page.locator("input#password");
    const passwordConfirmField = page.locator("#password-confirm");
    const registrationBtn = page.getByRole("button", { name: "Zaregistrovat" });

    const invalidFeedback = ".invalid-feedback";

    await nameField.fill("TestName TestSurname");
    await emailField.fill("testTest@test.com");
    await passwordField.fill("Test1234");
    await passwordConfirmField.fill("Test12345");

    await page.waitForTimeout(10);

    await registrationBtn.click();


    // Possitive scenario
    await expect(page.locator(invalidFeedback)).toBeVisible();

    //// Negative scenario
    // await expect(page.locator(invalidFeedback)).toBeHidden();

});

