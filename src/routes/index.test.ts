import HomePage from './index.svelte'
import { beforeEach, describe, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/svelte'

describe('HomePage', () => {
	beforeEach(() => {
		global.fetch = vi.fn().mockImplementation(() => {
			return Promise.resolve({
				json() {
					return Promise.resolve({
						name: 'Test Poke',
						height: 3,
						weight: 20,
						sprites: { front_default: '' }
					})
				}
			})
		})
	})

	test('should display inputed text', async () => {
		render(HomePage as any)
		const input = screen.getByRole('textbox')
		await fireEvent.input(input, { target: { value: 'mewtwo' } })
		expect(screen.getByText('mewtwo')).toBeTruthy()
	})

	test('should match snapshot ', () => {
		const wrapper = render(HomePage as any)
		expect(wrapper).toMatchSnapshot()
	})
})
