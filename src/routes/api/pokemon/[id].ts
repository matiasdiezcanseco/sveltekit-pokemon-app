export async function get({ params }: { params: any }) {
	const id = params.id
	const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
	const res = await fetch(apiUrl)
	const pokemon = await res.json()

	return {
		status: 200,
		body: pokemon
	}
}
