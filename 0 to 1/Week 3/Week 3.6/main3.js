const zod = require('zod')

function ValidationInp(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(obj)
    console.log(response)
}

ValidationInp({
    email: "risabh@gjak.com",
    password: "156789065"
})