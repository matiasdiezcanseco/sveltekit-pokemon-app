import Nav from './Nav.svelte'
import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/svelte'

describe('Nav', () => {
	test('should find routes ', () => {
		const routes = ['Home', 'About']
		render(Nav as any)
		routes.forEach((route) => expect(screen.getByText(route).innerHTML).toEqual(route))
	})

	test('should match snapshot ', () => {
		const wrapper = render(Nav as any)
		expect(wrapper).toMatchSnapshot()
	})
})
