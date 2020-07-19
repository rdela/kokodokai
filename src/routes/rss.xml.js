import { getPosts } from './_posts.js';

const months = ',Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split( ',' );

function formatPubdate ( str ) {
	const [ y, m, d ] = str.split( '-' );
	return `${d} ${months[+m]} ${y}`;
}

const rss = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
	<title>Kokodokai</title>
	<link>https://kokodokai.com/</link>
	<description>An experiment with Sapper, Svelte, and Markdown</description>
	<image>
		<url>https://kokodokai.com/favicon.png</url>
		<title>Kokodokai</title>
		<link>https://kokodokai.com/</link>
	</image>
	${getPosts().map( post => `
		<item>
			<title>${post.metadata.title}</title>
			<link>https://kokodokai.com/${post.slug}</link>
			<guid>https://kokodokai.com/${post.slug}</guid>
      <pubDate>${formatPubdate(post.metadata.pubdate)}</pubDate>
			<description>${
	post.html
		.replace(/&/gm, '&amp;')
		.replace(/</gm, '&lt;')
		.replace(/>/gm, '&gt;')
		.replace(/"/gm, '&quot;')
}</description>
		</item>
	` )}
</channel>
</rss>
`.replace( />[^\S]+/gm, '>' ).replace( /[^\S]+</gm, '<' ).trim();

export function get(req, res) {
	res.setHeader('Content-Type', 'application/rss+xml');
	res.setHeader('Cache-Control', `max-age=${30 * 60 * 1e3}`);
	res.end(rss);
}
