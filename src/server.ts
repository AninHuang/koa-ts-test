import Koa from 'koa'
// 對 POST 請求的處理，koa-bodyparser 中間件可以把 koa 上下文的 formData 解析到 ctx.request.body 中
import bodyParser from 'koa-bodyparser'
import cors from 'koa2-cors'
// 在 console 輸出日誌
import logger from 'koa-logger'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

router.get('/', async (ctx) => {
    try {
        let html = `
            <h1>Hello</h1>
        `
        ctx.body = html
    } catch (e) {
        console.error(e)
    }
})

app.use(bodyParser())
app.use(
    cors({
        origin: '*',
    })
)
app.use(logger())
app.use(router.routes())

const server = app
    .listen(3000, async () => {
        console.log('Server running on port 3000')
    })
    .on('error', (err) => {
        console.error(err)
    })

export default server
