const Koa = require('koa')
const app = new Koa()

const config = require('config')

const Router = require('koa-router')
const router = new Router()

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello!'
  })

app.use(router.routes())

app.listen(config.get('port'))