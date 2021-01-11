# Sapper Markdown Site with Svelte v3 (Netlify + Root Directory Version)

## Intro

This modified [Sapper](https://sapper.svelte.dev/) template uses [Markdown](https://daringfireball.net/projects/markdown/) for posts and [Svelte 3](https://svelte.dev/).

Visit <https://kokodokai.com/> to see it in action, building with [Netlify](https://www.netlify.com/) configured with a [`netlify.toml`](https://github.com/rdela/kokodokai/blob/master/netlify.toml).

To clone it and get started:

```bash
git clone https://github.com/rdela/kokodokai.git
cd kokodokai
npm install # or yarn
npm run dev # or yarn dev
```

Open up [localhost:3000](http://localhost:3000/) and start clicking around.

## Page Transitions

Added fade in/out page transitions after getting annoyed at some jitter when navigating between routes and then feeling inspired revisiting [pngwn's svelte-travel-transitions](https://github.com/pngwn/svelte-travel-transitions) repo/demo based on [Sarah Drasner's page-transitions-travelapp](https://github.com/sdras/page-transitions-travelapp).

See `src/components/TransitionFadeInOut.svelte` and these routes:

- `src/routes/index.svelte`
- `src/routes/about.svelte`
- `src/routes/[slug].svelte`
- `src/routes/_error.svelte`

To learn more about Svelte transitions visit the [Transitions section of the Svelte tutorial](https://svelte.dev/tutorial/transition).

## Feeds

### Now with ~~100%~~ **200%** MOAR FEED

That's right ppl, **[RSS](https://en.wikipedia.org/wiki/RSS)** *plus* **[JSON Feed](https://jsonfeed.org/)**. Check out `src/routes/rss.xml.js` and `src/routes/feed.json.js`.
RSS Modeled after the [svelte.dev feed](https://github.com/sveltejs/v2.svelte.dev/blob/b21e7b90ad7f2d62556eba660314e7238a22ce4a/src/routes/blog/rss.xml.js), [@brentsimmons](https://github.com/brentsimmons)'
[RSS](https://inessential.com/xml/rss.xml) + [JSON Feed](https://inessential.com/feed.json) structure on [Inessential](https://inessential.com/), and [@gruber](https://github.com/gruber)'s [RSS](https://daringfireball.net/feeds/main) + [JSON Feed](https://daringfireball.net/feeds/json) on [Daring Fireball](https://daringfireball.net/feeds/).

## GitLab Pages Version

For the GitLab pages version, visit the [demo](https://rdela.gitlab.io/sapper-v3/) or
clone the [repo](https://gitlab.com/rdela/sapper-v3):

```bash
git clone https://gitlab.com/rdela/sapper-v3.git
cd sapper-v3
npm install # or yarn
npm run dev # or yarn dev
```

Open up [localhost:3000/sapper-v3](http://localhost:3000/sapper-v3/) and start clicking around.

## Sources

Cobbled together by borrowing liberally from [pngwn/sapper-v3](https://github.com/pngwn/sapper-v3) and [sveltejs/sapper-template](https://github.com/sveltejs/sapper-template) early on. For a non-markdown version of the official template, follow the [Using `degit` for Rollup instructions](https://github.com/sveltejs/sapper-template/blob/master/README.md#getting-started):

```sh
npx degit "sveltejs/sapper-template#rollup" my-app
cd my-app
npm install # or yarn
npm run dev
```
