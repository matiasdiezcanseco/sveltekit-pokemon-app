import PokemonCard from './PokemonCard.svelte'
import { describe, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/svelte'

describe('PokemonCard', () => {
	const pokeman = {
		id: '150',
		name: 'Mewtwo',
		image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150'
	}

	test('should display id and name correctly ', () => {
		render(PokemonCard as any, {
			props: {
				pokeman
			}
		})
		expect(screen.getByTestId('cardname-testid').innerHTML).toEqual('150. Mewtwo')
	})

	test('should show image', () => {
		render(PokemonCard as any, {
			props: {
				pokeman
			}
		})
		expect(screen.getByRole('img')).toBeTruthy()
	})

	test('should match snapshot', () => {
		const wrapper = render(PokemonCard as any, {
			props: {
				pokeman
			}
		})
		expect(wrapper).toMatchSnapshot()
	})
})
