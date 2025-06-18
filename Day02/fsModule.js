//a) Write a program to create a new file and write some content into it using fs.writeFile().
const fs = require("fs");
const fileName = "data.txt";
fs.writeFile(fileName,"My first file",(err)=>{
    if(err){
        throw err;
    }
});


//b) How to append data to an existing file using Node.js?.
fs.appendFile(fileName,"\nThis is append version",(err)=>{
    if(err){
        throw err;
    }
})


//c) Write a Node.js script to read a file and print its content to the console.
fs.readFile(fileName,'utf-8',(err,item)=>{
    if(err){
        throw err;
    }
    console.log(item);
})


// d) How do you delete a file using Node.js? Provide code.
fs.unlink(fileName,(err)=>{
    if(err){
        throw err;
    }
})


