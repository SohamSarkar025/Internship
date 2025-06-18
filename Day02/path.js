/*a) What is the use of the path module in Node.js?

The path module provides utilities for working with file and directory paths. It helps ensure cross-platform compatibility when dealing with file system paths.

*/

/*
const path = require("path");
const filePath = '\Users\docs/report.pdf'; 
console.log(path.basename(filePath));         //path.basename() gives us filename from a full path. 
console.log(path.extname(filePath));          //path.extname() gives us extension of the file.
*/

/* b) Use path.join() to combine directory names and filenames to create a valid path.

*/

const fs = require("fs");
const path = require("path");
const directory = path.join(__dirname,'myFolder');
const filePath = path.join(directory,'file1.txt');
fs.writeFileSync(filePath,'Hello From Soham ~');


// c) What is the difference between fs.readFileSync() and fs.readFile()?

// Reading File using readFile() Method.
// fs.readFile()
// Asynchronous (non-blocking)
// Code execution does not wait for the file to be read.
// Requires a callback (or can be used with Promises).

fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err){
        throw error;
    }
    console.log(data);
});


//Reading File Using readFileSync Method.
// fs.readFileSync()
// Synchronous (blocking)
// Code execution waits until the file is completely read.
// Useful for small scripts or during app startup where blocking is acceptable.

const data = fs.readFileSync(filePath,'utf-8');
console.log(data);