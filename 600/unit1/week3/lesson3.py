### Find the cube root of a perfect cube
##x = int(input('Enter a number: '))
##ans = 0
##while ans*ans*ans < abs(x):
##	ans = ans + 1
##	print('Current Guess = ', ans)
##if ans*ans*ans != abs(x):
##	print(x, ' is not a perfect cube.')
##else:
##	if x < 0:
##		ans = -ans
##	print('Cube root of ' + str(x) + ' is ' + str(ans))

### Find the cube root of a perfect cube (for loop)
##x = int(input('Enter a number: '))
##for ans in range(0, abs(x)+1):
##	if ans**3 == abs(x):
##		break
##if ans**3 != abs(x):
##	print(x, ' is not a perfect cube')
##else:
##	if x < 0:
##		ans = -ans
##	print('Cube root of ' + str(x) + ' is ' + str(ans))

#### Epsilon
##x = 25
##epsilon = 0.01
##numGuesses = 0
##ans = 0.0
##while abs(ans**2 - x) >= epsilon and ans <= x:
##        ans += 0.00001
##        numGuesses += 1
##print('numGuesses = ', numGuesses)
##if abs(ans**2 - x) >= epsilon:
##        print('Failed on square root of ', x)
##else:
##        print(ans, ' is close to square root of ', x)

## Epsilon (Bisection Search) (This doesnt really work on every integer...)
## x = 25
##x = 12345.0
##epsilon = 0.01
##numGuesses = 0
##low = 0.0
##high = x
##ans = (high + low)/2.0
##while abs(ans**2 - x) >= epsilon and ans <= x:
##	print('Low = ', low, ' High = ', high, 'ans = ', ans)
##	numGuesses += 1
##	if ans**2 < x:
##		low = ans
##	else:
##		high = ans
##	ans = (high + low)/2.0
##print('numGuesses = ', numGuesses)
##print(ans, ' is close to square root of ', x)

## Epsilon Cube root (Bisection Search) (This doesnt really work on every integer...)
## x = 25
x = 12345.0
epsilon = 0.01
numGuesses = 0
low = 0.0
high = x
ans = (high + low)/2.0
while abs(ans**3 - x) >= epsilon and ans <= x:
	print('Low = ', low, ' High = ', high, 'ans = ', ans)
	numGuesses += 1
	if ans**3 < x:
		low = ans
	else:
		high = ans
	ans = (high + low)/2.0
print('numGuesses = ', numGuesses)
print(ans, ' is close to cube root of ', x)
