// My role in the group is: Refactoring, Person 4

// Here is my part of the challenge (I have commented out the other's code/additions; only my refactored code is not commented):

//USER STORY BASED ON CODE (MELISSA)
// I want to ensure that the two groups of numbers that I have defined meet some specific criteria.
// I also want to ensure that certain tools exist that will allow me to verify this criter.
// One the groups that I have is of odd length: 1,2,3,4,5,5,7 and the other is of even
// length: 4,4,5,5,6,6,6,7. I want to take these steps in order to verify that these groups meet
// specific criteria and that specific tools exist to do so:
// 1. Verify that a tool for adding the numbers within a group exists.
// 2. Verify that the sum of the first group is 27.
// 3. Verify that the sum of the second group is 43.
// 4. Verify that a tool to find the average of the numbers within a group exists.
// 5. Verify that the average of the first group is 3.857142857142857
// 6. Verify that the average of the second group is 5.375
// 7. Verify that a tool to find the median of the numbers within a group exists.
// 8. Verify that the median of the first group is 4
// 9. Verify that the median of the second group is 5.5
// If any of these criteria are not met, I want to be told specifically which criteria has
// not been met by it's number and a description.

// PSEUDOCODE (KATIA): initialize array named odd_length as [1, 2, 3, 4, 5, 5, 7]
// INTIAL CODE (MATT): var odd_length = [1,2,3,4,5,5,7]
// REFACTORED CODE (MELISSA):
var oddLength = [1,2,3,4,5,5,7];

// PSEUDOCODE (KATIA):initialize array named even_length as [4, 4, 5, 5, 6, 6, 6, 7]
// INTIAL CODE (MATT): var even_length = [4,4,5,5,6,6,6,7]
// REFACTORED CODE (MELISSA):
var evenLength = [4,4,5,5,6,6,6,7];

// PSEUDOCODE (KATIA):create a function named assert with 3 parameters: (test, message, test_number)
// INTIAL CODE (MATT): function assert(test, message, test_number){
// REFACTORED CODE (MELISSA):
function assert(test, message, test_number){

// PSEUDOCODE (KATIA): if test = false
// INTIAL CODE (MATT): if (test === false)
// REFACTORED CODE (MELISSA):
if (test === false)

// PSEUDOCODE (KATIA):print test_number + "false" to console
// INTIAL CODE (MATT): {console.log(test_number + " false"); 
// REFACTORED CODE (MELISSA):
{console.log(test_number + " false"); 

// PSEUDOCODE (KATIA): throw the string "ERROR: " + message
// INTIAL CODE (MATT): throw "ERROR:" + message;
// REFACTORED CODE (MELISSA):
throw "ERROR:" + message;

// PSEUDOCODE (KATIA): print test_number + "true" to console
// INTIAL CODE (MATT): console.log(test_number + "true");
// REFACTORED CODE (MELISSA):
console.log(test_number + "true");

// PSEUDOCODE (KATIA): return true
// INTIAL CODE (MATT): return true} };
// REFACTORED CODE (MELISSA):
return true} };

// PSEUDOCODE (KATIA): call assert with parameters:
  // test = typeof "sum" is a function
  // message = "The value of sum should be a function"
  // test_number = "1."
// INTIAL CODE (MATT): assert(sum instanceof Function , "The value of sum should be a function", "1.");
// REFACTORED CODE (MELISSA):
assert(sum instanceof Function , "The value of sum should be a function", "1.");

// PSEUDOCODE (KATIA): call assert with parameters:
  // test = sum of all elements in array odd_length is 27
  // message = "The sum of odd_length is 27."
  // test_number = "2."
// INTIAL CODE (MATT):assert(sum(odd_length) === 27,"The sum of odd_length is 27.", "2.");
// REFACTORED CODE (MELISSA):
assert(sum(oddLength) === 27,"The sum of oddLength is 27.", "2.");

// PSEUDOCODE (KATIA): call assert with parameters:
  // test = sum of all elements in array even_length is 43
  // message = "The sum of even_length is 43."
  // test_number = "3."
// INTIAL CODE (MATT): assert(sum(even_length) === 43, "The sum of even_length is 43.", "3.");
// REFACTORED CODE (MELISSA):
 assert(sum(evenLength) === 43, "The sum of evenLength is 43.", "3.");

// PSEUDOCODE (KATIA): call assert with parameters:
  // test = typeof "average" is a function
  // message = "The value of average should be a function"
  // test_number = "4."
// INTIAL CODE (MATT):assert(average instanceof Function, "The value of average should be a function", "4.");
// REFACTORED CODE (MELISSA):
assert(average instanceof Function, "The value of average should be a function", "4.");

// PSEUDOCODE (KATIA): call assert with parameters:
  // test = average of all elements in array odd_length is 3.857142857142857
  // message = "The average of odd_length is 3.857142857142857"
  // test_number = "5."
// INTIAL CODE (MATT): assert(average(odd_length) === 3.857142857142857, "The average of odd_length is 3.857142857142857","5.");
// REFACTORED CODE (MELISSA):
assert(average(oddLength) === 3.857142857142857, "The average of oddLength is 3.857142857142857","5.");


// PSEUDOCODE (KATIA): call assert with parameters:
  // test = average of all elements in array even_length is 5.375
  // message = "The average of even_length is 5.375"
  // test_number = "6."
// INTIAL CODE (MATT): assert(average(even_length) === 5.375, "The average of even_length is 5.375", "6.");
// REFACTORED CODE (MELISSA):
assert(average(evenLength) === 5.375, "The average of evenLength is 5.375", "6.");

// PSEUDOCODE (KATIA): call assert with parameters:
  // test = typeof "median" is a function
  // message = "The value of median should be a function"
  // test_number = "7."
// INTIAL CODE (MATT): assert(median instanceof Function, "The value of median should be a function", "7.");
// REFACTORED CODE (MELISSA):
assert(median instanceof Function, "The value of median should be a function", "7.");

// PSEUDOCODE (KATIA): call assert with parameters:
  // test = median of all elements in array odd_length is 4
  // message = "The median of odd_length is 4"
  // test_number = "8."
// INTIAL CODE (MATT): assert(median(odd_length) === 4, "The median of odd_length is 4", "8.");
// REFACTORED CODE (MELISSA):
assert(median(oddLength) === 4, "The median of oddLength is 4", "8.");


// PSEUDOCODE (KATIA): call assert with parameters:
  // test = median of all elements in array even_length is 5.5
  // message = "The median of even_length is 5.5"
  // test_number = "9."
// INTIAL CODE (MATT): assert(median(even_length)===5.5,"The median of even_length is 5.5", "9.");
// REFACTORED CODE (MELISSA):
 assert(median(evenLength)===5.5,"The median of evenLength is 5.5", "9.");


