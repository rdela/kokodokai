<script>
	import Nav from '../components/Nav.svelte';
	export let segment;
</script>


<main>
	<slot></slot>
</main>

<Nav {segment}/>


<style>
	main {
		position: relative;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
