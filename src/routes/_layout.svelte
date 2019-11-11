<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<main>
	<slot></slot>
</main>

<Nav {segment}/>
