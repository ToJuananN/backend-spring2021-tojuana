const fs = require("fs");
const arguments = process.argv;
// renaming arguments array to a veriable called argumments.
let filename = arguments[2];

// check if the arument was empty
if (filename === undefined) {
    console.log(`
Welcome to my file reader! Please provide the file name you want to read after the command.
Example:
node.filereader.js myFile.txt
    `);

    // end the script early so we don't run the code blow
    return;
}

if (fs.existsSync(filename)){
    let fileContents = fs.readFileSync(arguments[2], "utf-8");
    console.log(fileContents);
} else {
    // otherwise tell the use that we couldn't find the file.
    console.log("Sorry but we couldn't find that file. Please check the filename.");
}

// Read the file based on the argument in the vommand.

let fileContents = fs.readFileSync(arguments[2], "utf-8");

console.log(fileContents);

