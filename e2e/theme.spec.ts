import { expect, test } from '@playwright/test'

test('theme toggle switches between light and dark', async ({ page }) => {
  await page.goto('/')
  const main = page.getByRole('main')

  await expect(main).toHaveAttribute('data-theme', 'light')

  await page.getByRole('button', { name: 'Switch to dark theme' })
  await expect(main).toHaveAttribute('data-theme', 'dark')
  await expect(page.getByRole('button', { name: 'Switch to light theme' })).toHaveAttribute(
    'aria-pressed',
    'true',
  )

  await page.getByRole('button', { name: 'Switch to light theme' }).click()
  await expect(main).toHaveAttribute('data-theme', 'light')
})
