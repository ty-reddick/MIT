/* Loops */

/*

// Prints even numbes from 2 to 10

var evenNumber = 2;

while (evenNumber <= 10) {

evenNumber += 2;

console.log('Even Numbers: ' + evenNumber);

}

*/

/*

// Prints even numbes from 2 to 10

var evenNumber = 2;

for (evenNumber; evenNumber <= 10; evenNumber++) {

console.log('Even Numbers: ' + evenNumber);

};

*/

/* Functions */

/*

function withinEpsilon (x, y, epsilon) {

// x and y are floats

// returns true if x is within epsilon of y

return Math.abs(x ­ y) <= epsilon;

}

console.log(withinEpsilon(2, 3, 1));

*/

/*

//Scope

function f1 (x) {

function g () {

var x = 'abc';

console.log('x inside g() = ' + x);

}

var x = x + 1;

console.log('inner fuction x = ' + x);

g();

return x;

}

var x = 3

console.log('Global x = ' + x);

var z = f1(x);

console.log('z = ' + z);

*/

/*

var sumDigits = 0;

var i = '1952';

for (sumDigits; sumDigits < i.length; sumDigits++) {

sumDigits += parseInt(i);

console.log('sumDigits: ' + sumDigits + ' is a ' + typeof(sumDigits));

console.log('i: ' + sumDigits + ' is a ' + typeof(i));

};

*/