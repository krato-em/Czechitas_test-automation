import { test, expect } from '@playwright/test';

test('homework', async ({ page }) => {
    // place for your homework code
    await page.goto('/');
});

test('Lesson_04.1: Registrace - uspesna registrace', async ({ page }) => {
    await page.goto('/registrace');

    const nameField = page.locator("input#name");
    const emailField = page.locator("#email");
    const passwordField = page.locator("input#password");
    const passwordConfirmField = page.locator("#password-confirm");
    const registrationBtn = page.getByRole("button", { name: "Zaregistrovat" });

    var unixDate = Date.now().toString();
    var email = unixDate.concat("@test.com");

    await nameField.fill("Test Name");
    await emailField.fill(email);
    await passwordField.fill("Test1234");
    await passwordConfirmField.fill("Test1234");

    await page.waitForTimeout(10);
    await registrationBtn.click();

    await page.getByRole('button', { name: 'Test Test1' })
    await expect(page.getByRole('button', { name: 'Test Test1' })).toBeVisible;
    await expect(page.getByRole('heading', { name: "Přihlášky" })).toBeVisible;
});

test('Lesson_04.2: Registrace - existujici mail', async ({ page }) => {
    await page.goto('/registrace');

    const nameField = page.locator("input#name");
    const emailField = page.locator("#email");
    const passwordField = page.locator("input#password");
    const passwordConfirmField = page.locator("#password-confirm");
    const registrationBtn = page.getByRole("button", { name: "Zaregistrovat" });

    const invalidFeedback = ".toast-title"
    const existingEmail = 'emilie.kratochvilova@test.com'

    await nameField.fill("Test Name");
    await emailField.fill(existingEmail);
    await passwordField.fill("Test1234");
    await passwordConfirmField.fill("Test1234");

    await page.waitForTimeout(10);
    await registrationBtn.click();
    await expect(page.locator(invalidFeedback)).toBeVisible();
});

test('Lesson_04.3: Registrace - hesla se neshoduji ', async ({ page }) => {
    await page.goto('/registrace');

    const nameField = page.locator("input#name");
    const emailField = page.locator("#email");
    const passwordField = page.locator("input#password");
    const passwordConfirmField = page.locator("#password-confirm");
    const registrationBtn = page.getByRole("button", { name: "Zaregistrovat" });

    const invalidFeedback = ".toast-title"

    await nameField.fill("TestName TestSurname");
    await emailField.fill("testTest@test.com");
    await passwordField.fill("Test1234");
    await passwordConfirmField.fill("Test12345");

    await page.waitForTimeout(10);

    await registrationBtn.click();
    await expect(page.locator(invalidFeedback)).toBeVisible();
});

//