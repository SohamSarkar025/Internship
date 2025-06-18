
const fs = require('fs');
const path = require('path');

//create the myFolder1 file in terminal using mkdir .Then run it .
const directory = path.join(__dirname,'myFolder1'); //here path.join joins the path of existing myFolder1 folder path in the directory variable
const filePath = path.join(directory,'file2.txt');  //here path.join joins the file path in the directory

//No need to create file2.txt manually , this fs module creates it automatically.
fs.writeFileSync(filePath,'Hello This is file2.txt');




