<script>
  import { fade } from 'svelte/transition';

	let visible = true;
</script>


{#if visible}
	<div
		in:fade="{{delay:250,duration: 250}}"
		out:fade="{{duration: 250}}"
	>
		<slot></slot>
	</div>
{/if}


<style>
	div {
		position: relative;
	}
</style>
