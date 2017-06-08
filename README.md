# Next.js demo

_This repo was used as a material for the "Next.js - making websites made simple (again)" presentation by [Rafał Ruciński](https://fatfisz.com)._

## Introduction

[Next.js](https://github.com/zeit/next.js) is a self-described "framework for server-rendered React apps". Its main strenghts are an easy convention for adding new pages, a modern setup for development (including Webpack bundling, hot reloading, support for the current ES features through Babel), and support for CSS-in-JS.

This repo contains a step-by-step introduction to Next.js. Successive commits can be treated as slides. All of the commits make up a very simple blog-like website. To provide the data for the website you'll also need the [nextjs-demo-miniserver](https://github.com/fatfisz/nextjs-demo-miniserver).

The examples cover only a part of Next.js features. The version used in this repo is 3.0.0-beta6, but the code should be compatible with the 2.x and 3.x versions.

### Disclaimer

Although I'm using a few helper packages with Next.js, they are not mandatory. I'm not responsible for any JS fatigue you might experience as a result of following the instructions here.

## Requirements

Node version should be at least 6. I'm using [yarn](https://github.com/yarnpkg/yarn) for package management. Also [nextjs-demo-miniserver](https://github.com/fatfisz/nextjs-demo-miniserver) needs to be running for the changes in the final commit to work.

## Commits

### Set up the repo

We add this very `README.md`, `.editorconfig` and `.gitignore` files.

### Install next.js and dependencies

We add packages: `next`, `react`, `react-dom`. Because Next.js also works with `preact` and `inferno`, the `react*` dependencies are not mandatory.

### Add scripts to package.json

It is encouraged to add custom commands like `dev`, `build`, `start` instead of `next`, `next build`, `next start`. That way we won't have to type a different command later when the basic Next.js commands will not suffice.

### Add the bootstrap styles

We're not savages, are we? 😉

### Install helper packages

Though those are not required, they will aid us later on:

* `babel-plugin-module-resolver` - I prefer absolute paths to relative ones; I encourage you to try this approach too!
* `classnames` - a utility for handling element classes
* `cross-env` - allows using the same syntax for setting the env vars on all OS-es
* `isomorphic-fetch` - provides the same API for fetching data on the client side and on the server side
* `koa` & `koa-router` - we'll be adding a small custom server later on

### Hello world!

We add the first page!

### Style the index page

We add some style to the index page.

### Add the button component

You know what happens 🙂

### Use babel-plugin-module-resolver

We use the plugin to allow us to use the absolute paths. Also we learn how to extend Babel configuration from Next.js.

### Use styled-jsx

`styled-jsx` allows us to write scoped CSS. We look at how this works in practice.

### Add another page

The index page is a bit sad on its own, let's provide it with a friend.

### Add the Layout component

We see that the structure of the pages will be partially similar, so we move the common parts away into another component.

### Add getInitialProps

The method that we can set on the "page" components allows us to provide the page with data - whether it's on the server side or the client side.

### Add the custom server

While Next.js has a built-in server, it doesn't handle dynamic URL paths. We add a minimal custom server that is doing exactly the same as the Next.js built-in server.

### Add the blog page

After adding the custom server we're ready to handle dynamic paths. We're using the mini-server as an API endpoint.

## License

Copyright (c) 2017 Rafał Ruciński. Licensed under the MIT license.
