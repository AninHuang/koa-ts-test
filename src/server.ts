import Koa from 'koa'
// 對 POST 請求的處理，koa-bodyparser 中間件可以把 koa 上下文的 formData 解析到 ctx.request.body 中
import bodyParser from 'koa-bodyparser'
import cors from 'koa2-cors'
// 在 console 輸出日誌
import logger from 'koa-logger'

const app = new Koa()

app.use(async (ctx) => {
    ctx.body = 'hello koa2'
})

app.use(bodyParser())
app.use(
    cors({
        origin: '*',
    })
)
app.use(logger())

const server = app
    .listen(3000, async () => {
        console.log('Server running on port 3000')
    })
    .on('error', (err) => {
        console.error(err)
    })

export default server
