import { getPosts } from './_posts.js';
import { formatPubdate, site } from '../metadata.js';

const rss = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
	<title>${site.title}</title>
	<link>${site.link}</link>
	<description>${site.description}</description>
	<image>
		<url>${site.image}</url>
		<title>${site.title}</title>
		<link>${site.link}</link>
	</image>
	${getPosts().map( post => `
		<item>
			<title>${post.metadata.title}</title>
			<link>${site.link}${post.slug}</link>
			<guid>${site.link}${post.slug}</guid>
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
