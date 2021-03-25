
let firstName = "Cynthia";

let handmadeObject = {
    firstName:  "ToJuana",
    lastName: "Newsome",
    position: "Student",
    location:  "San Francisco",
    active: true,
    doWork: function () {
        console.log(this.firstName + " is now working!")
    }
};



class Employee {
    constructor (firstName, lastName, position, workplace, ) { 
        console.log("New Object");
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.location = workplace;
        this.active = false;
        this.checkValues();
       // this.created();
    }

    checkValues () {
        if (!(typeof this.active === "boolean")) {
            console.log("This object has an improper active value!");
        }
    }

   // created() {
        //console.log("A new object is born!")
   // }

    doWork(hours) {
        console.log(`${this.fristName} works for ${hours} hours.`);
       // console.log(this.firstName + " works for " + hours + " hours" );
    }

    goToSleep(hours) {
        console.log(`${this.firstName} goes to sleep for ${hours} hours`);
        //console.log(this.firstName + " goes to sleep for " + hours + " hours");
    }
};




let myFirstFactoryObject = new Employee("ToJuana", "Newsome", "Student", "MEDA");
let secondEmployee = new Employee("Cool", "Johnson", "Admin", "UCLA");



myFirstFactoryObject.doWork(23);
secondEmployee.doWork(1);

handmadeObject.doWork(4);

let thirdEmployee = new Employee("Tina", "Brooklyn", "Lawyer", "New York Time");
thirdEmployee.doWork(14);
secondEmployee.goToSleep(5);





let myStringLiteral = `Hello my name is ${thirdEmployee.firstName}, how are you doing today?`;

console.log(myStringLiteral);

console.log(myFirstFactoryObject, secondEmployee, thirdEmployee);