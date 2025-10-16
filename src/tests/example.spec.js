import { test } from "@playwright/test";

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


test("lesson 3", async ({ page }) => {
    
    await page.goto("/prihlaseni");

    const headingLocator = await page.getByRole("heading", {level: 1});
    const headingText = await headingLocator.textContent();
    console.log(headingText);
    const emailField = await page.getByLabel("Email");
    console.log("Is email field visible? " + await emailField.isVisible());
    console.log("Is email field enabled? " + await emailField.isEnabled());

    const forgotPassword = page.getByText("Zapomněli jste své heslo?");
    console.log("Forgot password href: " + await forgotPassword.getAttribute("href"));

    const passwordField = page.getByLabel("Heslo");


    const loginBtn = page.getByRole("button", { name: "Přihlásit" });
    console.log("Login button text: " + await loginBtn.textContent());

    await emailField.fill("da-app.admin@czechitas.cz");
    await passwordField.fill("Czechitas123");
    await loginBtn.click({
        button: "left",
        clickCount: 1,
        delay: 100
    });

    const userName = page.locator(".navbar-right").locator("strong");
    console.log("Logged in user: " + await userName.textContent());
});


test("Lesson-3: BreakoutRoom", async ({ page }) => {
    
    await page.goto("/prihlaseni");

    const btnLogin = await page.getByRole('button', { name: 'Přihlásit' });
    // await btnLogin.waitFor();
    //  await btnLogin.evaluate()
    console.log("Button text: " + await btnLogin.textContent());

    const passwordField = page.getByLabel("Heslo");
    console.log("Je videt? " + await passwordField.isVisible());
    console.log("Je povoleno? " + await passwordField.isEnabled());

    btnLogin.click();
    
});