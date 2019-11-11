<svelte:head>
	<title>About</title>
</svelte:head>

<figure>
	<img src="./Sacred_Chao_2.jpg" alt="" />
		<figcaption>
				Source:
				<a href="https://en.wikipedia.org/wiki/File:Sacred_Chao_2.jpg">
					Sacred Chao, Wikipedia</a>
		</figcaption>
</figure>


<section class='content'>
	<h1>About this site</h1>
	<p>We add a <a href="https://sapper.svelte.dev/docs#Deploying_service_workers">consistent timestamp override environment variable</a> to the service worker to support a multi-server environment. <a href="https://github.com/rdela/kokodokai/blob/master/README.md">Use the <strong>SOURCE</strong></a>.</p>
</section>

<script context="module">
	export async function preload({ params, query }) {
		return;
	}
</script>

<style>
.content {
	max-width: 56em;
	padding: 1em 2em 2em;
	margin: 0 auto;
	text-align: left;
}

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
	line-height: 2.5em;
	padding: 0 1em;
}

h1 {
	margin: 1em 0 .25em;
}

h1,
p {
	text-align: center;
}
</style>