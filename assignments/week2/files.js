const fs = require("fs");
// holds the terminal's command's arguments. THESE ARE NOT FUNCTION ARGUMENTS.
process.argv;

console.log(process.argv);


// GRUD: Create, Read, Update, Delete
// Any GRUD operations WILL NOT ask for permission to create/delete files. 

// Create a file using Node FS module
// REPLACES existing files with same name, deleting old content.
fs.writeFileSync("new_file.txt", "Hello World!", "utf-8");


let myCode = `
console.log("How are you doing?");

console.log(100 * 100);


`;

// 3 arguments order: filename, contents, character set.
fs.writeFileSync("javascriptcode.js", myCode, "utf-8");

console.log("Finished creating file");

// READ files with Node FS.

// 2 argument order: filename, character set


let fileContents = fs.readFileSync("new_file.txt", "utf-8");

console.log(fileContents);

let essayContents = fs.readFileSync("new_file.txt", "utf-8");

let essayArray =  essayContents.split(" ");

console.log(`The essay has ${essayArray.length} in it.`);

// Reads the boolean.js hoping that it will read 
let tryingToReadDatatype =  fs.readFileSync("boolean.js", "utf-8");

console.log(typeof parseInt (tryingToReadDatatype));

