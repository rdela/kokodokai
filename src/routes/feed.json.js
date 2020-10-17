import { getPosts } from './_posts.js';
import { site } from '../metadata.js';

const jsonFeed = `
{
	"version": "https://jsonfeed.org/version/1",
	"user_comment": "This feed allows you to read the posts from this site in any feed reader that supports the JSON Feed format. To add this feed to your reader, copy the following URL — ${site.link}feed.json — and add it your reader.",
	"title": "${site.title}",
	"description": "${site.description}",
	"home_page_url": "${site.link}",
	"feed_url": "${site.link}feed.json",
	"author": {
		"name": "${site.author}",
		"url": "${site.link}",
		"avatar": "${site.image}"
	},
	"items": [
	${getPosts().map( (post) => `
		{
			"title": "${post.metadata.title}",
			"date_published": "${post.metadata.pubdate}",
			"id": "${site.link}${post.slug}",
			"url": "${site.link}${post.slug}",
			"content_html": "${
	post.html
		.replace(/"/gm, '\\"')
		.replace( />[^\S]+/gm, '>' )
		.replace( /[^\S]+</gm, '<' )
		.trim()
}"
		}`)}
	]
}`;

export function get(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Cache-Control', `max-age=${30 * 60 * 1e3}`);
	res.end(jsonFeed);
}
