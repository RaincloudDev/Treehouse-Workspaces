name = input("Please enter your name: ")
number = input("Please enter a number: ")

# TODO: Make sure the number is an integer


# TODO: Print out the User's name and the number entered,
# making sure the two statements are on separate lines of output.


# TODO: Compare the number the user gave with the different
# FizzBuzz conditions. 
# *********************
# If the number is divisible by 3, print "is a Fizz number."
isFizz=False
isBuzz=False
isFizzBuzz=False

print(name, 'chose', number, 'let\'s see if it\'ll FizzBuzz!')

if (int(number) % 3)==0:
    isFizz = True
    print(number, 'Is Fizz!')
# If the number is divisible by 5, print "is a Buzz number."
if (int(number) % 5)==0:
    isBuzz=True
    print(number, 'Is Buzz!')
# If the number is divisible by both 3 and 5, print "is a FizzBuzz number."
if (isFizz and isBuzz):
    isFizzBuzz=True
    print('and,',  number, 'is FizzBuzz!')
if(isFizz==False and isBuzz==False):
      print('Sorry,', name, number, ' is neither fizzy or buzzy! Try again!')


# Otherwise, print "is neither a fizzy or a buzzy number."
# *********************


# TODO: Define variables for is_fizz and is_buzz that stores 
# a Boolean value of the condition. Remember that the modulo operator, %, 
# can be used to check if there is a remainder.


# Using the variables, check the condition of the value, and print the necessary
# string





