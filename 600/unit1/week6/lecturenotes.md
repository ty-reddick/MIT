Divide & Conquer - Taking a had problem and breaking them down into smaller problems
Smaller are easier to solve solutions to small problems can easily be combined to solve the original problems

Recursion - a way of describing problems, Also a way of designing solutions

Base Case - Gives us a direct answer
Recursive or (indective) Case - We reduce to a simplier version of the problem plus other functions

When you start working on problems Trry to break them down Recursively
Palindrome- reads the same from front to back(I, wow, non etc...)
Breaking a Problem Down Recursively Example: {
	# def toChars(s):
	#     import string
	#     s = string.lower(s)
	#     ans = ''
	#     for c in s:
	#         if c in string.lowercase:
	#             ans = ans + c
	#     return ans

	# def isPal(s):
	#     if len(s) <= 1:
	#         return True
	#     else:
	#         return s[0] == s[-1] and isPal(s[1:-1])

	# def isPalindrome(s):
	#     """Returns True if s is a palindrome and False otherwise"""
	#     return isPal(toChars(s))

	# ##print isPalindrome('Guttag')
	# ##print isPalindrome('Guttug')
	# ##print isPalindrome('Able was I ere I saw Elba')
	# ##print isPalindrome('Are we not drawn onward, we few, drawn onward to new era?')
}
The above code is broken down into smaller problems that solves the large problem

Fibinocci - (They Breed like rabbits)
The number of females at month n is equal to the number of females 2 months earlier plus the number of females of the previous month
code: {
	f(n)=f(n-2)+f(n-1
	)
}
see lesson.py