//  1. Express Routing
// Q1. Create a basic Express server with two routes:
// •	GET / that returns "Welcome to Express!"
// •	GET /about that returns "About Us Page"

const server = require('express')
const app = server()

app.get('/',(req,res)=>{
    res.send(`Welcome to Express!`)
})
app.get('/about',(req,res)=>{
    res.send(`About Us Page`)
})
app.listen(3000)