const fs = require("fs");

// To-Do
// Detect what OS they are using and remove any invalid characters when  creating a file.


//console.log("You are running on " + process.platform);

// renaming arguments array to a veriable called argumments.
// process = object/ argv = array
const arguments = process.argv;
//
let filename = arguments[3];
let action = arguments[2];
let contents = arguments[4];
let filename2 = contents;
let mergedFile = arguments[5];

//Reassign contents variable, as an empty array element holds the value undefined
if (contents === undefined){
    contents = "";
}

if (action === undefined) {
    console.log(`
Welcome to my file reader! Please provide the file name you want to use after the command.
Example:
Read a file: node.filereader.js read myFile.txt
Write a file: node.filereader.js write myFile.txt "Text to write"
Update a file: node.filereader.js update myFile.txt "Text to add"
Merge two existing file: node filereader.js merge file1.txt file2.text
mergefile.txt
Delete a file: node.filereader.js delete myFile.txt true
    `);
    // end the function early so we don't run the code below
    return;
}

if(action === "read") {
    // check if the arument was empty
    if (fs.existsSync(filename)){
        let fileContents = fs.readFileSync(filename, contents, "utf-8");
        console.log(fileContents);
    } else {
        // otherwise tell the use that we couldn't find the file.
        console.log("Sorry but we couldn't find that file. Please check the filename.");
    }
}else if (action === "write"){
    //check if the file exists......
    if(fs.existsSync(filename)){
        console.log("Sorry but this file already exists! Please use a different filename")
    }else {
        //If it doesn't exist, we can create it safely.
        fs.writeFileSync(filename, "", "utf-8");
    console.log("Finished writing the file: " + filename);
    } 

}else if (action === "update"){

    if(fs.existsSync(filename)){
        // Updated file with a new line
        fs.appendFileSync(filename, "\n" + contents, "utf-8")
        console.log("Updated file: " + filename);
    } else {
        console.log("This file doesn't exist, but we created it for you.");
        fs.appendFileSync(filename, contents, "utf-8")
    }

} else if (action === "delete"){

    if(fs.existsSync(filename)){
        if(contents === "true"){
            fs.unlinkSync(filename);
            console.log(filename + "Sucessfully deleted.");
        } else{
            console.log("Are you sure you want to delete this file? Keep in mind this file will be PERMENENTLY deleted and not moved to the Recycling bin or the trash. Please run the command again with the word true as the final argument");
        }

    }else{
        console.log("There is no file with that name, please double check your argument. ")
    }
    
} else if(action === "merge") {
    if(fs.existsSync(filename) && fs.existsSync(filename2)){

        let fileContents = fs.readFileSync(filename, "utf-8");
        let fileContents2 = fs.readFileSync(filename2, "utf-8");
        let mergedContents = fileContents + "\n" + fileContents2;
        
        if(fs.existsSync(mergedFilename)){
            console.log("Sorry but we can't create the merged file, as the file name already exist.");
        } else {
            fs.writeFileSync(mergedFilename, mergedContents, "utf-8");
            console.log("Finished merging your file.")
        }
    }else {
        console.log("Sorry but one of your files that you chose does not exist! Please double check you spelling.");
      // node filereader.js copy originalFile newFile  
    }else if(action === "copy"){
        if(fs.existsSync(filename)) {
            if (filname === "") {
                console.log("Please enter a file to be copied.");
            } else if (contents === filename) {
                console.log(`${filename} already exisit, Please choose a different name.`)
            } else {
                fs.copyFileSync(filename, contents);
                console.log("Copy is made.")
            }
        } else {
            console.log {
                console.log(`${filename} does not exist.`)
            }
        }
    }else {
        console.log(`There is no action by that name. Please double check your spelling. The available actions for thes script are: read, write, update, delete, merge, and copy.
        Welcome to my file reader! Please provide the file name you want to use after the command.
        Example:
        Read a file: node.filereader.js read myFile.txt
        Write a file: node.filereader.js write myFile.txt "Text to write"
        Update a file: node.filereader.js update myFile.txt "Text to add"
        Merge two existing file: node filereader.js merge file1.txt file2.text
        mergefile.txt
        Delete a file: node.filereader.js delete myFile.txt true
        `);
    }









// Read the file based on the argument in the vommand.

//let fileContents = fs.readFileSync(arguments[2], "utf-8");

//console.log(fileContents);

