'use strict';

const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');


const port = process.env.SERVER_PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  server.use(async (ctx, next) => {
    ctx.status = 200;
    await next();
  });

  router.get('*', async (ctx) => {
    ctx.respond = false;
    await handle(ctx.req, ctx.res);
  });

  server.use(router.routes());

  server.listen(port, (error) => {
    if (error) {
      throw error;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
