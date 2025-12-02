import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c:any, next:any) {
  if(c.req.header("Authorization")){
    // Do validation
    let initTime:any = new Date()
    console.log(`Before next ${initTime}`)
    await next()
    let totaltime = (new Date().getTime() - initTime)/1000
    console.log(totaltime)
    console.log(`after next ${totaltime}`)
  } else {
    return c.text("You don't have access")
  }
}

app.use(authMiddleware)

app.post('/', async (c) => {

  const body = await c.req.json()
  console.log(body)
  console.log(c.req.header("Authorization"))
  console.log(c.req.param("param"))

  return c.text('Hello Hono!')
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
