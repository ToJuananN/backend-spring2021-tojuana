
//Create a function called quizLotto()


function quizLotto() {
    let randomNumber = Math.floor((Math.random() * 59) + 1);
    let randomNumber2 = Math.floor((Math.random() * 35) + 1);
    //Array for final array
    let finalArray = [];
    // need a tracking variable to temporarly assign the number that will be pushed to the finalArray
    let num = null;
    //Ramdom number for the first five number
    const lotto = randomNumber(59);
    //Random number for the sixth number
    const powerBall = randomNumber2(35);
    //loop to add numbers to the final array
    for (let i = 0; i < 6; i++) {
        if (1 < 5) {
            num = lotto[i];
            finalArray.push(num);

        }else {
            num = powerBall[i];
            finalArray.push(num);
        }
    }
    //Return the final array
    return finalArray;

}

console.log(quizLotto());
console.log(quizLotto());
console.log(quizLotto());



