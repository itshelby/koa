const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = '/users'
})

module.exports = router
