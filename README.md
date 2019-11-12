# Sapper Markdown Site with Svelte v3 (Netlify + Root Directory Version)

## Intro

This modified [Sapper](https://sapper.svelte.dev/) template uses [Markdown](https://daringfireball.net/projects/markdown/) for posts and [Svelte 3](https://svelte.dev/).

Visit <https://kokodokai.com/> to see it in action, building with [Netlify](https://www.netlify.com/) configured with a [`netlify.toml`](https://github.com/rdela/kokodokai/blob/master/netlify.toml).

To clone it and get started:

```bash
git clone https://github.com/rdela/kokodokai.git
cd sapper-v3
npm install # or yarn
npm run dev # or yarn dev
```

Open up [localhost:3000](http://localhost:3000/) and start clicking around.

## GitLab Pages Version

For the GitLab pages version, visit <https://rdela.gitlab.io/sapper-v3/> or
clone:

```bash
git clone https://gitlab.com/rdela/sapper-v3.git
cd sapper-v3
npm install # or yarn
npm run dev # or yarn dev
```

Open up [localhost:3000/sapper-v3](http://localhost:3000/sapper-v3) and start clicking around.

## Sources

Derived from <https://github.com/pngwn/sapper-v3> and <https://github.com/sveltejs/sapper-template>. For a non-markdown version of the official template, follow the [Using `degit` for Rollup instructions](https://github.com/sveltejs/sapper-template/blob/master/README.md#getting-started):

```sh
npx degit "sveltejs/sapper-template#rollup" my-app
cd my-app
npm install # or yarn
npm run dev
```

Note [via pngwn, Dec 27, 2018](https://github.com/pngwn/sapper-v3/commit/db2d2e5f16873b40b5525f325bdae31d3e2d63bb#diff-04c6e90faac2675aa89e2176d2eec7d8R5): Right now, Sapper seems to expect a preload function to be exported from every route, it will still work without one but it will give you warnings. You can just [`return` nothing from preload](https://gitlab.com/rdela/sapper-v3/blob/master/src/routes/about.svelte#L26) to silence it.
