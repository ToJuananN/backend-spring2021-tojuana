
// Create a function called quizFind()
//1. Two arguments: array, item to search for
//2. output: if the item is in the array return indexOf
// if the item is not in the array return -1
// quizFind() should work with any data

function quizFind(array, item) {
    //no array
     if(array.length == null) {
         throw error ;
     }
     //array is empty
     if(array.length === 0){
         return null;
     }
     // loop through the array
     for (let i = 0; i < array.length; i++){
         //tracking variable
        let currentItem = array[i];
        //if item is found set this equal to tracking variable
        if(currentItem === item) {
        //return indexOf item    
         return i;
        }
     }
     // return if item is not in array
     return -1;
 }
     
 console.log(quizFind([3, 5,2,4], 9)); //Output -1
 console.log(quizFind(['Chicken', 'Hamburger', 'Pizza', 'Hotdogs'], 'Pizza'));//Output 2
 console.log(quizFind([1, 2, 3, 99], 99)); // Output 3

