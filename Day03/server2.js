
const server = require('express')
const app = server();
const path = require('path')
const port=8000;

// Register EJS
app.engine('ejs', require('ejs').__express);

// Register Pug
app.engine('pug', require('pug').__express);

// Default view engine (used when no extension is given)
app.set('view engine', 'ejs');

// Set views folder
app.set('views', path.join(__dirname, 'views'));

app.get('/ejs',(req,res)=>{
    res.render('ejs_template',{
        message:"This is ejs example!"
    })
})
app.get('/pug',(req,res)=>{
    res.render('pug_template.pug',{
        message:"This is pug example!"
    })
})
app.listen(port,()=>{
    console.log(`1Server is running on localhost:${port}`)
})
