1. Line 12 prints 3
2. Line 13 will print 150 and iterate from 50,100 and 150 because it finds the discounted price
3. Line 14 prints the last value's discounted price which was 150 because the value is just a variable to hold an iteration
4. This function returns an array of finalPrices of all prices after an applied discount being [ 50, 100, 150 ]
   <!-- They changed var to let here -->
5. Line 12 "console.log(i)" will print an error that i isn't defined because i was only defined in the for loop
6. Line 13 will produce an error because discountedPrice was also definied in the for loop
7. Line 14 will print 150 because the variable was declared in the function
8. This function returns [ 50, 100, 150 ] because the variable was declared in the function and went through an iteration.
   <!-- changed let to const -->
9.  Line 11 produces an error because it causes the error that the i is not defined
10. Line 12 prints a 3 because the length is a const of 3 that hasn't changed
11. This function returns the discounted aray of [ 50, 100, 150]. The value cannot be moved to point elsewhere but the values inside can still be changed.
    
12. A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
<!-- "Node" to start, ".exit" to leave -->
13. A. '3' + 2      Output: '32' because + can represent concatenation
    B. '3' - 2      Output: 1 because 3 becomes a number due to -
    C. 3 + null     Output: 3 because null represents 0 in +
    D. '3' + null   Output: '3null' because it concatenates since its a string and null represents a string
    E. true + 3     Output: 4 since true turns into a 1
    F. false + null     Output: 0 because false andn null turn into a 0
    G. '3' + undefined  Output: '3undefined' because undefined can become a string
    H. '3' - undefined  Output: NaN because undefined cannot turn into a number


14. A.'2' > 1       Output: true because 2 comes after 1 even in string
    B. '2' < '12'   Output: false because 2 compares to 1 first and 2 !<1 so false
    C. 2 == '2'     Output: true because '2' turns into a number
    D. 2 === '2'    Output: false because === means strictly equal and 2 and '2' are different
    E. true == 2    Output: false becasue true turns into a 1 which isn't equal to 2
    F. true === Boolean(2)   Output: true because Boolean(2) turns into true which =true

15. == is more lenient where we can turn vars of different types to other types whereas === is fully strict and it has to be the same type and same value

17. Passing in modifyArray([1,2,3], doSomething), we have a const declaration and for loop that reads array.length of 3. It will iteratively push the values from array into new Array with a callback that doubles the value. This means we double the value before pushing it resulting in [2,4,6]
    
19. The output in printNums() is 
    1
    4
    3
    2
    because 1 and 4 print instantly while 3 prints after and then 2 due to delay/timeout