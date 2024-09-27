import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './page'

test('Page', () => {
  render(<Home />)
  const title = screen.getByRole('heading', { level: 1, name: 'Home' })
  expect(title).toBeDefined()
})
