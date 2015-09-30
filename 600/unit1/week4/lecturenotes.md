Loops
While loops:
	example: {
		# prints even numbers from 2 to 10
		evenNumber = 2
		while (a <= 10):
			a += 2
			print(evenNumber)
	}
for loops:
	example: {
		# prints even numbers from 2 to 10
		for i in (2, 4, 6, 8, 10):
		print i
	}

Non scalar can hold multiple elements
Scalar only holds one

How can we write less code and accomplish more
Having more code is a bad thing (The difficulty grows as the complexity grows)
its about the amount of functionality you write each day

* Functions:We want to provide decomposition and abstaction. Break code into resuable pieces
* Decomposition - creates structure, It allows us to break our code up into modules (it should be self-contained and resuable)
* Abstraction - Suppresses details, it allows us to use a piece code like a black box(we dont see the contents, we just use it without knowing whats inside but we know how to use it. Ignorance is bliss)

Example: {
	def withinEpsilon(x, y, epsilon):
		# x,y,epsilon are floats, epsilon = 0.0
		# returns true if x is within epsilon of y
		return abs(x - y) <= epsilon
}
functions have a name, parameters, and a body(the code)
You can not write a return outside of a function

If we want to use withinEpsilon we look at the specications on how to use it.
example: {
	print(withinEpsilon(2, 3, 1))
}
example2: {
	val = withinEpisolon(2, 3, 1)
	print(val)
}

** If you see none you probably forgot a value
We can call functions wherever we want
You must name functions based on what it does. Naming is very important
example: {
	def f(x):
		x = x + 1
		print('x = ', x)
		return x

	x = 3
	z = f(x)
	print('z = ', z)
	print('x = ', x)

	# z will be 4
	# x will be 3
	# Why is x = 3? the x's have nothing to do with each other
}

What happens when we call a function
1. The formal parameter is bound to the value of the actual parameter
2. Upon entry of a function a new SCOPE is created
	2A. Scope is a mapping from names to objects
	example: {
	def f1(x):
		def g():
			x = 'abc'
			# assert False
		x = x + 1
		print('x = ', x)
		g()
		# assert False
		return x

	x = 3
	z = f1(x)
}
Assert is followed by either true or false
if true it does nothing
if false it stops the program dead in its tracks

LIFO - Last In First Out

When you leave a funcion the variables inside of it is gone forever

Strings
example: {
	sumDigits = 0
	for c in str(1952):
		sumDigits += int(c)
	print(sumDigits)
}

s = 'abc'
s(0) # prints a
s(0:2) # prints 'ab'
s.find('b') # b is at position 1