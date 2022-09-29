import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import IdPage from './[id].svelte'

describe('IdPage', () => {
	const pokemon = {
		name: 'mewtwo',
		height: '20',
		weight: '1220',
		types: [{ type: { name: 'psychic' } }],
		sprites: {
			front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150'
		}
	}

	test('should display name ', () => {
		render(IdPage as any, {
			props: {
				pokemon
			}
		})
		expect(screen.getByText(/mewtwo/i)).toBeTruthy()
	})

	test('should display attributes ', () => {
		render(IdPage as any, {
			props: {
				pokemon
			}
		})
		expect(screen.getByText(/psychic/i)).toBeTruthy()
		expect(screen.getByText('20')).toBeTruthy()
		expect(screen.getByText('1220')).toBeTruthy()
	})

	test('should match snapshot ', () => {
		const wrapper = render(IdPage as any, {
			props: {
				pokemon
			}
		})
		expect(wrapper).toMatchSnapshot()
	})
})
