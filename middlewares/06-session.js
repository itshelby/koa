const session = require('koa-generic-session')
const convert = require('koa-convert')

exports.init = app => app.use(convert(session({
  key:     'sid',
  cookie:  {
    httpOnly:  true,
    path:      '/',
    overwrite: true,
    signed:    false, // by default true (not needed here)
    maxAge:    3600 * 4 * 1e3 // session expires in 4 hours, remember me lives longer
  },
  rolling: true
})))
