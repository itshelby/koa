const Koa = require('koa')
const app = new Koa()

const config = require('config')

const Router = require('koa-router')
const router = new Router()

const path = require('path')
const fs = require('fs')

const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort()
handlers.forEach(handler => require('./handlers/' + handler).init(app))

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello!'
  })

app.use(router.routes())

app.listen(config.get('port'))