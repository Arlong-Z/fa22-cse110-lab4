1. Line 12 will output 3 since i is a var variable and it will not be limit my the scope. Therefore, it can be use after the for block. The length of prices is 3 so that i the for statment will loop 3 times which makes i to be 3.
2. Line 13 will outoput 150. Since disountedPrice is a var variable, it can be use for the outer scope. The last declaration for dicountedPrice is when i equals to 2, discountedPrice will be 300 * (1-0.5) = 150. Therefore, line 13 will print 150.
3. Line 14 will print 150. Since finalPrice is an var variable is not limited by the scopes, it can be used anywhere after it is declared. The last update for finalPrice is when i equals to 2 and dicountedPrice equals to 150. Since Math.round(discountedPrice * 100) / 100 equals 150 and it is set to finalPrice, at line 14 it will print 150. 
4. The function will returen a list of the final price after the discount. The function take a list of the original prices, and it computes the final prices and return them as a list. In this case, since the input list is [100, 200, 300] and the discount is 0.5, it will output [50, 100, 150].
5. It will return an error since i is declared inside the scope of 'for' as a let variable, it can not be used outside of the 'for' scope. 
6. It will return an error since dicountedPrice is declared inside the scope of 'for' as a let variable, it can not be used outside of the 'for' scope. 
7. It will print 150 since it is a let variable and is declared in the same scope as line 14, it can be used at line 14 and the inner scope which is the scope for 'for'. In this case, finalPrice can be updated inside the for loop and it will be 150 after the loops. 
8. It will return a list of price [50, 100, 150] that after the discounts same as Q4. 
9. It will reutrn an error since i is a let variable in the 'for' scope, it can not be used outside the for loop.
10. It will print 3. Since length is a const variable at the same scope of line 12, it can be used at line 12. 
11. It will return a list of price that after the dicounts. Same as Q4 and Q8, with teh input [100, 200, 300] as original prices and 0.5 as dicount, it will return the list [50, 100, 150].
12. 
- A. student.name
- B. student['Grad Year']
- C. student.greeting()
- D. student['Favorite Teacher'].name
- E. student.courseLoad[0]
13. 
- A. Output '32'. Intergers map to their exact string representation with '+'.
- B. output 1. strings maps to integer when '-' is applied
- C. output 3. 'null' is converted to 0 in number
- D. output '3null'. "null" map to their exact string representation with '+'.
- E. output 4. 'true' is coverted to 1 in number. 
- F. output 0. Both 'false' and 'null' are converted to 0 in number.
- G. output '3undefined'. "undefined" map to their exact string representation with '+'.
- H. output NaN. "undefined" will be converted as NaN in number and everything plus or minus NaN is NaN as well. 
14. 
- A. output true. String '2' become number 2
- B. output flase. Stirng '2' is larger than '12' in string comparison
- C. output true. '2' become number 2
- D. output false. '===' checks the equality without type conversion and number 2 and string '2' are diiferent types
- E. output false. true become 1 and 1 does not equals 2
- F. output ture. Boolean() converts any none 0 number to true
15. '==' will convert both sides to the same type and compare them. '===' is a strict euqality check which means it will not make any conversion for the comparison. If two sides are different types, '===' will simply return false.
17. The function will return a list [2, 4,6]. The modifyArray function will pass a list and a function. Here, the function we passed is dosomething() which will be call when callback() in modifyArray() is called. dosomething() takse a number and times it by 2 and return the result. modifyArray() loops through the list and calls dosomething() with each element in the list and put them in the new list and return them. 
19. The output is 1 4 3 2. 