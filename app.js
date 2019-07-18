const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// 模板引擎需要放在所有的方法前面
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// 引入koa-router组建并且生成router实例
const Router = require('koa-router')
const router = new Router()
// 引入index路由
const index = require('./routes/index')
router.use(index)
// 引入users路由
const users = require('./routes/users')
router.use('/users', users)
// 将router实例挂载在app实例上
app.use(router.routes()).use(router.allowedMethods())



// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())


// 开启静态资源访问
// 通过localhost:3000/file/file1.jpg就可以访问@/public/file/file1.jpg文件
app.use(require('koa-static')(__dirname + '/public'))



// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
