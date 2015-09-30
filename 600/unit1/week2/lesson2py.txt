## No need for semi-colons!

# 3 # This will print

## Variables (No )
## Variables ia a way to name an object
## Assignment Binds a name to an object
# x = 4
# print(x)

## Variables can be changed
# x = x*x
# print(x) # Now x = 16

## Input function lets us input Things from the keyboard
## raw_input() doesnt work in my shell
# input()
# y = input('Enter a number') # y will be the number inputted but will be a sting
# print(y)
# print(type(y))

## You have to turn it into a float
# y = float(input('Enter a number'))
# print(y)
# print(y*y)
# print(type(y))

## Straight Line Programs End

## Conditionals
# x = int(input('Enter an integer: '))
# if x%2 == 0:
# 	print('even')
# else:
# 	print('odd')
# 	if x%3 != 0:
# 		print('And not divisible by 3')


# x = int(input('Enter x: '))
# y = int(input('Enter y: '))
# z = int(input('Enter z: '))

# if x < y:
# 	if x < z:
# 		print('x is least')
# 	else:
# 		print('z is least')
# elif y < z:
# 	print('y is least')


## Find the cube root of a perfect cube
## abs() - absolute value of the input
# x = int(input('Enter an integer: '))
# ans = 0
# while ans*ans*ans < abs(x):
#     ans = ans + 1
#     print('Current Guess: ', ans)
# if ans*ans*ans != abs(x):
#     print('Sorry cannot find the cube root of ', x)
# else:
#     if x < 0:
#         ans = -ans
#     print('Cube root of ' + str(x) + ' is ' + str(ans))
