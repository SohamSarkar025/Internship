//Class-03

const server = require('express')
const app = server();
const path = require('path');
const html = path.join(__dirname,'HTML');
const filePath = `${html}/signup.html`

//EJS => Embedded JavaScript Templating 
app.set('view engine','pug')   //Declaring using app.set that our view engine is 'ejs'.
app.use(server.static(path.join(__dirname,'public')))  //Css File is in Public Directory .

app.get('/ejs1',(req,res)=>{
    res.render('signup');
})

app.get("/ejs2",(req,res)=>{
    const user = {
        name:"Soham Sarkar",
        language:["Python","Java","C++","Bengali","Hindi"]
    }
    res.render('info',{
        pageTitle:"Student Info",
        info:user
    })
})
app.get("/pug",(req,res)=>{
    const user = {
        name:"Soham Sarkar",
        language:["Python","Java","C++","Bengali","Hindi"]
    }
    res.render('info',{
        pageTitle:"Student Info",
        info:user
    })
})
app.get('/signup',(req,res)=>{
    res.send(`
        <h1>This is SignUp Page</h1>
        <label for="name">Name</label>
        <input type="text" name="username" id="name" placeholder="Enter your Name">
        <button type="submit">Submit</button>
    `)
})
//Json Type 
app.get('/json',(req,res)=>{
    res.send([
        {"Name":"Raj","Roll":"1"},
        {"Name":"Puja","Roll":"2"},
        {"Name":"Soham","Roll":"3"},
    ])
})

//Using res.sendFile() , sending the file Path
app.get('/signin',(req,res)=>{
    res.sendFile(filePath);
})

app.listen(3000);