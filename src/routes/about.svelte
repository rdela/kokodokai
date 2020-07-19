<svelte:head>
	<title>About</title>
</svelte:head>

<figure>
	<img src="./sacred-chao.png" alt="" height="384" width="384" />
	<figcaption>
		Source:
		<a href="https://en.wikipedia.org/wiki/File:Sacred_Chao_2.jpg">
			Sacred Chao, Wikipedia
		</a>
	</figcaption>
</figure>


<section class='content'>
	<h1>About this site</h1>
	<p>This site is part of an ongoing series of experiments with <a href="https://sapper.svelte.dev/">Sapper</a>, <a href="https://svelte.dev/">Svelte</a>, and <a href="https://daringfireball.net/projects/markdown/">Markdown</a>. Have a look at the <a href="https://github.com/rdela/kokodokai">source code on GitHub</a> or visit the <a href="https://rdela.gitlab.io/sapper-v3">GitLab pages version</a>.</p>
</section>

<script context="module">
	export async function preload({ params, query }) {
		return;
	}
</script>

<style>
figure {
	margin: 0 auto;
	position: relative;
	width: 100%;
}

figure img {
	animation: spin-cycle infinite 40s linear;
	animation-delay: 2s;
	display: block;
	height: auto;
	margin: 0 auto;
	max-height: 384px;
	max-width: 100%;
	z-index: 0;
}

figcaption {
	box-sizing: border-box;
	display: block;
	font-size: .875em;
	font-style: italic;
	padding: 0 1em;
	width: 100%;
	z-index: 1;
}

.content {
	margin: 0 auto;
	max-width: 41em;
	padding: 1em 2em 2em;
	text-align: left;
}

h1 {
	margin: 0 0 .25em;
}

h1,
p {
	text-align: center;
}

@keyframes spin-cycle {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
