import { getPrisma } from './prisma'
import { Hono } from 'hono'

type Env = {
  DATABASE_URL: string
}

const app = new Hono<{ Bindings: Env }>()

app.post('/api/v1/signup', async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL)

  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
    },
  })

  return c.json(user)
})

app.post('/api/v1/signin', (c)=>{

})

app.post('/api/v1/blog', (c)=>{

})

app.put('/api/v1/blog', (c)=>{

})

app.get('/api/v1/blog/:id', (c)=>{

})

export default app
