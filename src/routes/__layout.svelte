<script>
	import Nav from '../components/Nav.svelte'
</script>

<div class="p-8 max-w-6xl mx-auto">
	<Nav />
	<slot />
</div>

<style type="text/postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
