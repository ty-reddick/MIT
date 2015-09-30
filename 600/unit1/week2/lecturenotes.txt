IDLE - Integrated Development Environment
includes: {
	Text Editor
	Shell With syntax highlights
	Debugger
}

Objects - Everything in Python is an Object(Even program code)
		  Each object has a TYPE (what it is and what we can do with it)
2 Types of Objects - Scalar - indivisible
					 Non Scalar
Scalar types: {
	Int - integer (3) AKA Number
	  type(3) - Will tell you it is an int
	float - integer proximation (decimals)
		    type(3.0) - Will tell you it is a float
		    (floats should always be used)
	boolean - True or False
	None - Nothing (NoneType) 
}
Non Scalar types: {
	Strings - Words in qoutes 'a'
			 type('abc') - will output str
	Expression- Sequence of operands and operators
				The operands are objects
				Example: 3+3;
}

Operators: {
	+  = addition (We can also combine strings this is called 				concatonation) This is overloaded
	-  = Subration
	*  = Multiplication
	/  = Division
	%  = Modulo Aka remainder
	=  = Asignment
	== = Equality of objects
	!= = Doesnt equal
}

This Works 3+3;
This doesnt: 3 3;
This Works: 'a'+'b';
This doesnt: 'a'+3;
This Works: 'a' + str(3);    //This converts 3 into a string
This doesnt: 3 + int('a');

Program = Script (Its the same thing)
Check out lesson2.py

Variables ia a way to name an object
Assignment Binds a name to an object
Examples:{
	# x = 4
	# print(x)

	# Variables can be changed
	# x = x*x
	# print(x) # Now x = 16

	# Input function lets us input Things from the keyboard
	# raw_input() doesnt work in my shell
	# input()
	# y = input('Enter a number') # y will be the number inputted but will be a sting
	# print(y)
	# print(type(y))

	# You have to turn it into a float
	# y = float(input('Enter a number'))
	# print(y)
	# print(y*y)
	# print(type(y))
}

Straight Line Programs = No loops, ifs etc. Every command gets executed once. (BORING)

Pogramming is like creating Recipes fo food

Conditional Statement - If (optionally else elif)
Branching Prgrams (Fork in the road) Branches can have sub banches
Example: {
	x = int(input('Enter an integer: '))
	if x%2 == 0:
		print('even')
	else:
		print('odd')
		if x%3 != 0:
			print('And not divisible by 3')
}
Example 2: {
	x = int(input('Enter an integer for x: '))
	y = int(input('Enter an integer for y: '))
	z = int(input('Enter an integer for z: '))

	if x < y:
		if x < z:
			print('x is least')
		else:
			print('z is least')
	elif y < z:
		print('y is least')
}

Indentation affect your programs, YOU WILL GET AN ERROR!!!

Programs are inteded to be read (Debugging purposes)

Looping Construct (Turing Complete (look it up)) - Iteration
It is a more complicated form of control (You can execute a statement moe than once)
Example: {
	# Find the cube root of a perfect cube
	x = int(input('Enter an integer: '))
	ans = 0
	while ans*ans*ans < abs(x):
		ans = ans + 1
		print('Current Guess: ', ans)
	if ans*ans*ans != abs(x):
		print(x, ' is not a number')
	else:
		if x < 0:
			ans = -ans
		print('Cube root of ' + str(x) + ' is ' + str(ans))
}