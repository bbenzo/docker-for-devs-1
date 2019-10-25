import Koa from 'koa';

const app = new Koa();

app.use(async ctx => { ctx.body = 'Hello World of Docker'; });

console.log("Starting test server...");

app.listen(8080);