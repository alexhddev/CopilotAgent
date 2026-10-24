import { expect, test } from '@playwright/test'

test('home page renders', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Copilot Agent' })).toBeVisible()
  await expect(page.getByText('Your workspace starts here.')).toBeVisible()
})

test('navbar navigates between pages', async ({ page }) => {
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Main navigation' })

  await nav.getByRole('link', { name: 'About' }).click()
  await expect(page).toHaveURL('/about')
  await expect(page.getByRole('heading', { name: 'About us' })).toBeVisible()

  await nav.getByRole('link', { name: 'Contact' }).click()
  await expect(page).toHaveURL('/contact')
  await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible()

  await nav.getByRole('link', { name: 'Home' }).click()
  await expect(page).toHaveURL('/')
  await expect(page.getByRole('heading', { name: 'Copilot Agent' })).toBeVisible()
})

test('unknown route shows not found page with link home', async ({ page }) => {
  await page.goto('/does-not-exist')
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible()

  await page.getByRole('link', { name: 'Go back home' }).click()
  await expect(page).toHaveURL('/')
})
