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
let fileContents = fs.readFileSync("tasks.json", "utf-8");
let previousTasks = JSON.parse(fileContents);
let taskArray = previousTasks.tasksList;

let action = process.argv[2];
let text = process.argv[3];
let priority = process.argv[4]


if (action === "add") {
    taskArray.push(new Task(text, priority));
    console.log("You have added this task.");
} else if(action === "list") {

    for(let i = 0; i < taskArray.length; i++) {
        if(taskArray[i].dateCompleted === null) {
            var completed = "No";
        } else {
            var completed = "Yes";
        } 
    
        let taskList = `
${i + 1}) Priority: ${taskArray[i].priority} 
           Task:${taskArray[i].text} 
           Due Date: ${taskArray[i].dueDate} 
           Completed: ${completed}`;
        console.log(taskList);
    }


    }

   
    let objectToSave = {
    tasksList: taskArray
}

objectToSave = JSON.stringify(objectToSave);

fs.writeFileSync("tasks.json", objectToSave, "utf-8");

//console.log(taskArray);