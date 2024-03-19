// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable

const car = 'subaru';

//TODO: ADD re-assignable but not redeclarable variable

let newCar= "ford"


// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value

const fixedNumber= 50;


//TODO: Create a redeclarable variable with a boolean value

let Car = true;
car= false;


//TODO: Create a re-assignable variable with a string value

let months = 'January, February, March';
months = 'April, May, June';


// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)

let firstMonth = 'January';
let secondMonth = 'February';
let ConcatenateMonths = 'January + ", " + secondMonth';

//TODO: Interpolate string (`${}`)

let firstMonth = 'January';
let secondMonth ='Feburary';
let InterpolateMonths = '${first Month}, ${secondMonth}';

//TODO: Convert to uppercase

let Month = 'January'
let uppercaseMonth = month.toUpperCase ();



//TODO: Convert to lowercase

let Month = 'January'
let lowercaseMonth = month.toLowerCase ();


//TODO: Index a specific character
 
let month = 'January'
let characterAtIndex2 = month [2];


//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality

let Num1 = 5;
let strNum1 = '5';

let isEqual=Num1===strNum1;

//TODO: strict inequality

let Num1 = 5;
let strNum1 = '5';
let notEqual=Num1 !==strNum1;


//TODO: equality

let num = 5;
let strNum = '5';
let  isEqual = num == strNum;



//TODO: inequality

let num = 5;
let strnum ='5';
let notEqual = num != strNum;

//TODO: greater than

let num1 = 5;
let num2 = 2;
let isGreater = num1 > num2;


//TODO: less than

let num1 = 5;
let num2 = 2;
let isLess = num1 < num2;


//TODO: greater or equal to

let num1 = 5;
let num2 = 5;

let isGreaterOrEqual = num1 >= num2;

//TODO: less or equal to

let num1 = 5;
let num2 = 5;

let isLessOrEqual = num1 <= num2;



// 5.0 CONTROL FLOW
// TODO: if-else statement

let num = 10;
if (num > 5) {("Number is gereater than 5")

} else {("Number is not greater than 5")

}


//TODO: switch-case

let week = 3;
let weekName;

switch (week) {
case 0:
weekName = "Sunday";
break;
case 1:
weekName = "Monday";
break;
case 2:
weekName = "Tuesday";
break;
case 3:
weekName = "Wednesday";
break;
case 4:
weekName = "Thursday";
break;
case 5:
weekName = "Friday";
break;
 case 6:
weekName = "Saturday";
break;
 default:
weekName = "Invalid day";
}







