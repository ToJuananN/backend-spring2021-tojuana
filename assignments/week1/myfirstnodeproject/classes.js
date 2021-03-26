
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
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.location = workplace;
        this.active = false;
        this.energyHours = 16; // hours of energy
        this.checkValues();
        this.sayHello();
    
    }

    checkValues () {
        if (!(typeof this.active === "boolean")) {
            console.log("This object has an improper active value!");
        }
        if(this.energyHours < 0) {
            this.energyHours = 0;
        }else if (this.energyHours > 24) {
            this.energyHours = 24;
        }
    }

        sayHello(){
            console.log(`Hello! My name is ${this.firstName}. I work as a ${this.position} at ${this.location}. How are you doing today?`)
        }


    doWork(hours) {

        if ( !( Number.isNaN( parseInt(hours) ) ) ) {
            hours = parseInt(hours);
        } else if (typeof hours != "number") {
            console.log("The value for hours is not valid! Can't assign work.");
            return;
        }

        if (this.energyHours - hours < 0) {
            console.log(`${this.firstName} does not have that much energy! ${this.firstName} will work for ${this.energyHours} hours instead.`);
            hours = this.energyHours;
            this.energyHours = 0;

            //console.log("This employee can't work for this many hours at the moment!");
            //return;
        } else {
        // this.energyHours -= hours;
        this.energyHours = this.energyHours - hours;
        }
        console.log(`${this.fristName} works for ${hours} hours. they have ${this.energyHours} enery left.`);
       // console.log(this.firstName + " works for " + hours + " hours" );
    }

    goToSleep(hours) {

        if(1(Number.isNaN(parseInt(hours)))){
            hours = parseInt(hours);
        } else if (typeof hours != "numbers") {
            console.log("This value for hours is not valid! Can't assign work.")
            return;
        }

        if (hours + this.energyHours > 24) {
           let maxSleepHours = 24 - this.energyHours;
           console.log(`${this.firstName} does not need to sleep for that long! They will sleep for instead ${maxSleepHours} hours`);
           hours = maxSleepHours;
        }

        this.energyHours = this.energyHours + hours;
        console.log(`${this.firstName} goes to sleep for ${hours} hours. They have ${this.energyHours} hours left of energy hours.`);
        //console.log(this.firstName + " goes to sleep for " + hours + " hours");
    }
};




let myFirstFactoryObject = new Employee("ToJuana", "Newsome", "Student", "MEDA");
let secondEmployee = new Employee("Cool", "Johnson", "Admin", "UCLA");



myFirstFactoryObject.doWork(23);
secondEmployee.doWork(1);

//handmadeObject.doWork(4);

let thirdEmployee = new Employee("Tina", "Brooklyn", "Lawyer", "New York Time");
thirdEmployee.doWork(14);
secondEmployee.goToSleep(5);





let myStringLiteral = `Hello my name is ${thirdEmployee.firstName}, how are you doing today?`;

console.log(myStringLiteral);

console.log(myFirstFactoryObject, secondEmployee, thirdEmployee);