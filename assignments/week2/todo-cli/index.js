const fs = require("fs");


class Task {
    constructor(text, priority, dueDate) {
        this.text = text;
        this.dueDate = dueDate;
        this.dateCreated = new Date();
        this.priority = priority;
        this.dateCompleted = null;
    } 
}



let taskArray = [];

let action = process.argv[2];
let text = process.argv[3];
let priority = process.argv[4]


if (action === "add") {
    taskArray.push(new Task(text));
    console.log("You have added this task.");
}

fs.writeFileSync("task.txt", String(taskArray), "utf-8");
console.log(taskArray);