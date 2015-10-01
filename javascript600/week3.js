/* Translated from MIT 6.00 Course (Python) */ 

/* Find the cube root of a perfect cube */

/*

var x = 64;

var ans = 0;

while (ans*ans*ans < x) {

// ans increments by 1 on every loop

ans = ans + 1;

console.log('Current Guess: ' + ans);

}

if (ans*ans*ans != x) {

console.log(x + ' is not a perfect cube');

} else{

if (x < 0) {

}

console.log('Cube root of ' + x + ' is ' + ans);

}

*/

/* Find the cube root of a perfect cube (for loop) */

/*

var x = parseFloat(25);

var ans = parseFloat(0);

for (ans; ans < x.length; ans++) {

if (Math.pow(ans, 3) == x) {

ans = ans ­ 1;

console.log('Current Guess: ' + ans);

break;

}

}

if (Math.pow(ans, 3) != x) {

console.log(x + ' is not a perfect cube');

} else{

if (x < 0) {

}

console.log('Cube root of ' + x + ' is ' + ans);

};

*/

/* Epsilon */

/*

var x = parseFloat(25);

ans = ans ­ 1;

var epsilon = parseFloat(0.01);

var numGuesses = parseFloat(0);

var ans = parseFloat(0.0);

while (Math.abs(Math.pow(ans, 2) ­ x) >= epsilon && Math.abs(Math.pow(ans, 2) ­ x) <= x) {

ans += 0.01;

numGuesses += 1;

console.log('numGuesses: ' + numGuesses);

}

if (Math.abs(Math.pow(ans, 2) ­ x) >= epsilon) {

console.log('Failed on square root of ' + x);

} else{

console.log(ans + ' is close to the square root of ' + x);

};

*/

/* Epsilon Bisection Search */

/*

// var x = parseFloat(25);

var x = parseFloat(12345.0);

var epsilon = parseFloat(0.01);

var numGuesses = parseFloat(0);

var high = x;

var low = parseFloat(0.0)

var ans = (high + low)/parseFloat(2.0);

while (Math.abs(Math.pow(ans, 2) ­ x) > epsilon && ans <= x) {

console.log('Low: ' + low + ' High: ' + high + ' ans: ' + ans);

numGuesses += 1

if (Math.pow(ans, 2) < x) {

} else{

}

ans = (high + low)/parseFloat(2.0);

// console.log('numGuesses: ' + numGuesses);

// console.log(ans + ' is close to square root of ' + x);

}

console.log('numGuesses: ' + numGuesses);

console.log(ans + ' is close enough to square root of ' + x);

*/

/* epsilon Cube Root (Bisection Search) */

// var x = parseFloat(25);

var x = parseFloat(12345.0);

var epsilon = parseFloat(0.01);

low = ans;

high = ans;

var numGuesses = parseFloat(0);

var low = parseFloat(0.0);

var high = x;

var ans = (high + low)/parseFloat(2.0);

while (Math.abs(Math.pow(ans, 3) ­ x) >= epsilon && ans <= x) {

console.log('Low: ' + low + ' High: ' + high + ' ans: ' + ans);

numGuesses += 1;

if (Math.pow(ans, 3) < x) {

} else{

}

ans = (high + low)/parseFloat(2.0);

}

console.log('numGuesses: ' + numGuesses);

console.log(ans + ' is close enough to cube root of ' + x);

low = ans;

high = ans;