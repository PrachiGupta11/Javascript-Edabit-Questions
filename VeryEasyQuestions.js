// Return the Sum of Two Numbers
// Create a function that takes two numbers as arguments and returns their sum.

function sum(a,b)
{
    let sum=a+b;
    return sum;
}
console.log(sum(7,8));
console.log(sum(3,2));
console.log(sum(-3,-6));
console.log(sum(7,3));

// Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

function convertMinutesToSeconds(minutes)
{
    let seconds= minutes*60;
    return seconds;
}
console.log(convertMinutesToSeconds(5));
console.log(convertMinutesToSeconds(3));
console.log(convertMinutesToSeconds(2));

// Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, 
// possibly zero. Return that value.

function remainder(num1,num2)
{
    let rem=num1%num2;
    return rem;
}
console.log(remainder(1,3));
console.log(remainder(3,4));
console.log(remainder(-9,45));
console.log(remainder(5,5));

// Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimeter(length, width) {
	let perimeter=2*(length+width);
	return perimeter;
}
console.log(findPerimeter(6,7));
console.log(findPerimeter(20,10));
console.log(findPerimeter(2,9));

// Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
	let incrementNum = num+1;
	return incrementNum;
}
console.log(addition(0));
console.log(addition(9));
console.log(addition(-3));








