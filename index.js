const Koa = require('koa');
const app = new Koa();
app.use(async ctx => { ctx.body = 'Hello Docker World'; });
app.listen(3000);