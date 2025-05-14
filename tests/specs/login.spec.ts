import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://uat-app.yirifi.ai/auth/login/');

  // Fill in the email and password fields and submit the first login
  await page.fill('input[name="email"]', 'birat.parajuli@yirifi.com');
  await page.fill('input[name="password"]', 'Birat13@');
  await page.press('input[name="password"]', 'Enter');
  
  // Wait for navigation or any action after the login
  await page.waitForNavigation();

  // Submit the second login attempt with a different password
  await page.fill('input[name="password"]', 'Sanepa13@');
  await page.press('input[name="password"]', 'Enter');
  await page.click('button:has-text("Sign in")');
  
  // Click the 'I Understand' button
  await page.click('button:has-text("I Understand")');

  // Interact with the regulatory link and accept it
  await page.click('text=What are the regulatory');
  await page.click('button:has-text("Accept")');
});
