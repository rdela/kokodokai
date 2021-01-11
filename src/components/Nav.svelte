<script>
	export let segment;
</script>


<nav>
	<ul>
		<li>
			<a class='{segment === undefined ? "selected" : ""}' href='.'>home</a>
		</li>
		<li>
			<a class='{segment === "about" ? "selected" : ""}' href='about'>about</a>
		</li>
		<li><a href='rss.xml'>RSS</a></li>
		<li><a href='feed.json'>JSON Feed</a></li>
	</ul>
</nav>


<style>
	nav {
		padding: 0 1.5em;
		text-transform: uppercase;
	}

	ul {
		align-items: flex-start;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		list-style: none;
		margin: 0 0 4.53125em;
		padding: 0;
		width: 100%;
	}

	li {
		list-style-type: none;
		padding: 11px;
		text-align: center;
		width: 202px;
	}

	.selected {
		color: rgb(170,30,30);
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>
