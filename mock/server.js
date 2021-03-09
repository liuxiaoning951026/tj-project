/**
 * Mock服务，依赖Koa
 * 1. 请求URL路径（动态)
 * 2. JSON注释问题
 * 3. Get/Post问题
 * 4. Mock手动填写
 * Created by ligang on 2018/5/30.
 */
const path = require('path')
const fs = require('fs')
const http = require('http')

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
let jsonfile = require('jsonfile')
jsonfile.spaces = 4

const app = new Koa()
const router = new Router()

router.use(function (ctx, next) {
  ctx.set('Cache-Control', 'no-cache')
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  next()
})

app.use(bodyParser())

app.use(async (ctx) => {
  let url = ctx.request.url
  const replaceAPI = ctx.request.url.startsWith('/api')
  let filePath = path.join(__dirname, (replaceAPI ? ctx.request.path.replace('/api/', '') : ctx.request.path).replace('/query', '').replace('/delete', '') + '.json')
  let data

  if (fs.existsSync(filePath)) {
    try {
      data = jsonfile.readFileSync(filePath)
    } catch (err) {
      console.error('request: ' + url + ' fail!!!')
    }
  } else {
    console.warn('request: ' + url + ' not exist!!!!')
  }

  // 延迟1s
  await new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 300)
  })

  ctx.set('Content-Type', 'application/json')
  ctx.body = data
})

const port = 18080
const server = http.createServer(app.callback())
server.listen(port)
console.log(`'localhost:${port} listen!!!`)
