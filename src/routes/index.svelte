<script lang="ts">
	import { pokemon } from '../stores/pokemart'
	import PokemonCard from '../components/PokemonCard.svelte'

	let searchTerm = ''
	let filteredPokemon: any[] = []

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeman: any) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
		} else {
			filteredPokemon = [...$pokemon]
		}
	}
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200 mb-4"
	bind:value={searchTerm}
	type="text"
	placeholder="Search Pokemon"
/>

<div class="grid gap-4 grid-cols-1 md:grid-cols-2 ">
	{#each filteredPokemon as pokeman}
		<PokemonCard {pokeman} />
	{/each}
</div>
