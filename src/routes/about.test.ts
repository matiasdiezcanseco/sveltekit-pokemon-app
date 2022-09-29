import About from './about.svelte'
import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/svelte'

describe('Nav', () => {
	test('should match snapshot ', () => {
		const wrapper = render(About as any)
		expect(wrapper).toMatchSnapshot()
	})
})
