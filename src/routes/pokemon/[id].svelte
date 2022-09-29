<script context="module" lang="ts">
	export async function load({ url, params }: { url: any; params: any }) {
		const id = params.id
		const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
		const res = await fetch(apiUrl)
		const pokemon = await res.json()
		return { props: { pokemon } }
	}
</script>

<script lang="ts">
	export let pokemon: any

	const type = pokemon.types[0].type.name
	const capitalizeFirstLetter = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}
</script>

<svelte:head>
	<title>Pokemon - {capitalizeFirstLetter(pokemon.name)}</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{pokemon.height}</strong>
		| Weight: <strong>{pokemon.weight}</strong>
	</p>
	<img class="card-image" src={pokemon.sprites['front_default']} alt={pokemon.name} />
</div>
