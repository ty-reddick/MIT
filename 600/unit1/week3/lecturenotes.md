# Find the cube root of a perfect cube
x = int(input('Enter a number: '))
ans = 0
while ans*ans*ans < abs(x):
	ans = ans + 1
	print('Current Guess = ', ans)
if ans*ans*ans != abs(x):
	print(x, ' is not a perfect cube.')
else:
	if x < 0:
		ans = -ans
	print('Cube root of ' + str(x) + ' is ' + str(ans))

Decrementing Function - Everytime i run a loop I think about This
Propeties of Decrementing Funtion:
{
	1. It will map a set of program variables to an integer.
	2. When the loop is entered, Its value is non negative.
	3. When its value gets less than or eaqual to zero the loop 		   terminates.
	4. Its decreased each time through the loop
}

## abs(x) - ans**3

Exhaustive enumeration - Guess and check Each time i go through the loop Im guessing and checking if it is an answer. If you reach 0 You know the answer does not exist.
Brute Force

### Find the cube root of a perfect cube (for loop)
x = int(input('Enter a number: '))
for ans in range(0, abs(x)+1):
	if ans**3 == abs(x):
		break ## Exits the loop
if ans**3 != abs(x):
	print(x, ' is not a perfect cube')
else:
	if x < 0:
		ans = -ans
	print('Cube root of ' + str(x) + ' is ' + str(ans))

Approximation Finding an answe that is good enough
episolon = true square root (find y such that y*y = x +- epsilon)
## Epsilon
x = 25
epsilon = 0.01
numGuesses = 0
ans = 0.0
while abs(ans**2 - x) >= epsilon and ans <= x:
		# ans += 1
        ans += 0.00001
        numGuesses += 1
print('numGuesses = ', numGuesses)
if abs(ans**2 - x) >= epsilon:
        print('Failed on square root of ', x)
else:
        print(ans, ' is close to square root of ', x)

This is gauunteed to terminate because ans - x must happen at some point

Bisection Search: {
	Cut the search space in half each iteration
	Start with a guess somewhere in the middle( then you can see if your guess is too high or too low)
	Rinse and Repeat until you find the right answer
	Log the guesses
}
## Epsilon (Bisection Search)
x = 25
## x = 12345.0
epsilon = 0.01
numGuesses = 0
low = 0.0
high = x
ans = (high + low)/2.0
while abs(ans**2 - x) >= epsilon and ans <= x:
	print('Low = ', low, ' High = ', high, 'ans = ', ans)
	numGuesses += 1
	if ans**2 < x:
		low = ans
	else:
		high = ans
	ans = (high + low)/2.0
print('numGuesses = ', numGuesses)
print(ans, ' is close to square root of ', x)