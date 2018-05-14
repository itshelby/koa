const Koa = require('koa')
const app = new Koa()

const config = require('config')

const usersRoutes = require('./routes/users')

const path = require('path')
const fs = require('fs')

const handlers = fs.readdirSync(path.join(__dirname, 'middlewares')).sort()
handlers.forEach(handler => require('./middlewares/' + handler).init(app))

app.use(usersRoutes.routes())

app.listen(3000)
