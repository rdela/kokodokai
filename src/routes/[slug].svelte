<svelte:head>
	<title>{post.metadata.title}</title>
</svelte:head>


{#if post.metadata.image}
<figure>
	<img src="{post.metadata.image}" alt="" />
	{#if post.metadata.caption}
		<figcaption>
			{#if post.metadata.captionlabel}
				{post.metadata.captionlabel}
			{/if}
			{#if post.metadata.captionlink}
				<a href="{post.metadata.captionlink}">
					{post.metadata.caption}
				</a>
			{:else}
				{post.metadata.caption}
			{/if}
		</figcaption>
	{/if}
</figure>
{/if}


<section class='content'>
	<h1>{post.metadata.title}</h1>
	{@html post.html}
</section>

<style>
	figure {
		margin: 0 auto;
	}

	figure img {
		height: auto;
		max-height: 384px;
		max-width: 100%;
	}

	figcaption {
		display: block;
		font-size: .875em;
		font-style: italic;
		padding: 0 1em;
	}

	.content {
		max-width: 40em;
		padding: 1em 2em 2em;
		margin: 0 auto;
		text-align: left;
	}

	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/

	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>

<script>
	export let post;
</script>

<script context="module">

	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].html
		const res = await this.fetch(`${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}

</script>
