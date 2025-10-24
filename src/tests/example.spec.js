import { expect, test } from "@playwright/test";

test("should open login page", async ({ page }) => {
    await page.goto("/prihlaseni");
    console.log(await page.title());
});

test("lesson 2", async ({ page }) => {
    await page.goto("/prihlaseni");
    await page.locator("input#email").screenshot({ path: "css_id_email.png"});
    await page.locator(".btn-primary").screenshot({ path: "sumbit_btn.png"});
    await page.locator("div").locator("form").locator("input[type$='word']").screenshot({path: "chain.png"});
    await page.getByRole("heading", {level: 1}).screenshot({ path: "heading.png"});
    await page.getByText("Zapomněli jste své heslo?").screenshot({ path: "passfgt.png"});
    await page.getByLabel("Email").screenshot({ path: "by_label.png"});
    console.log(await page.title());
});


test("lesson 4", async ({ page }) => {
    await page.goto("/prihlaseni");

    await expect(page).toHaveScreenshot();

    const emailField = page.getByLabel("Email");
    await expect(emailField).toBeVisible();

    const passwordField = page.getByLabel("Heslo");
    await expect(passwordField, "password field should be visible").toBeVisible();
    await expect(passwordField).toBeEnabled();

    const loginButtotn = page.getByRole("button", {name: 'Přihlásit'} );
    await expect(loginButton).toHaveText("Přihlásit");



});

test("lesson 4.2", async ({ page }) => {
    await page.goto("/")
    const moreInfoButton = page.getByText("Více informací")
    await expect(moreInfoButton).toBeVisible();
    await moreInfoButton.click();
    await expect(moreInfoButton).not.toBeAttached();
    
    await page.getByRole('link', { name: 'Vytvořit přihlášku' }).click();

    const emailField = page.getByLabel("Email");
    const passwordField = page.getByLabel("Heslo");
    const loginButton = page.getByRole('button', { name: 'Přihlásit' });
    await emailField.fill("da-app.admin@czechitas.cz");
    await passwordField.fill("Czechitas123");
    await loginButton.click();

    const checkbox = page.locator("#restrictions_yes");
    await expect(checkbox).not.toBeChecked();
    await checkbox.check({ force: true}); // toto nepouzivat, protoze v realu to vlastne nemusi byt vubec klikatelne uzivatelem
    await expect(checkbox).toBeChecked();
});