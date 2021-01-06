const Koa = require('koa')
const path = require('path')
const KoaRouter = require('koa-router')
const KoaBody = require('koa-bodyparser')
let jsonfile = require('jsonfile')
KoaBody({ multipart: true })
const app = new Koa()
const router = new KoaRouter()

app
  .use(KoaBody())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(async ctx => {
    let url = ctx.request.url
    console.log(url)
    const replaceAPI = ctx.request.url.startsWith('/api')
    let filePath = path.join(__dirname, (replaceAPI ? ctx.request.path.replace('/api/', '') : ctx.request.path).replace('/query', '').replace(/\/delete$/, '') + '.json')
    let data = jsonfile.readFileSync(filePath)
    ctx.set('Content-Type', 'application/json')

    // 延迟1s
    await new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 300)
    })
    ctx.body = data
  })

app.listen(8080, () => {
  console.log(`服务器启动成功，mock数据端口号：8080`)
})
