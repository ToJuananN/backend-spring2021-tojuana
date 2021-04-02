const fs = require("fs");

fs.writeFileSync("myJson.json", "", "utf-8");

let myObject = {
    aString: "this is a string",
    aNumber: 100,
    aBoolean: true,
    anObject: {
        anotherNumber: 1,
        anotherString: "Hellos"
    },
    aFunction: function () {
        console.log("hi");
    }
}

let convertedObject = JSON.stringify(myObject);
console.log(Object);
fs.writeFileSync("myjson.json", convertedObject, "utf-8");

// Reading 
let fileContents =fs.readFileSync("myjson.json", "utf-8");

let  readObject = JSON.parse(fileContents);

console.log(typeof readObject); 
console.log(readObject.anObject.anotherNumber);