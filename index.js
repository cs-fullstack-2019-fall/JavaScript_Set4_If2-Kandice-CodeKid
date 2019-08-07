// ### Create a new file for each exercise
//
// #### Exercise 10
// Ask the user for 3 cards. If the sum equals 21 print BLACKJACK! If the sum is greater than 21 print BUST! If the sum is less than 21 print “The total is [TOTAL]”
//
// #### Exercise 11
// Ask the user to enter their grade. Print their letter grade:
//
//     A 90 - 100 B 80 - 89 C 70 - 79 D 60 - 69 F 0 - 59
//
// ##### Extra Credit:
//     If it's negative or over 100 print an error.
//
// ### Exercise 12
// Ask the user to enter their age. Check if they entered a value between 0 and 125. If valid, print "REAL AGE". If invalid print “NOT A REAL AGE!!!”



// EXERCISE 10
var card1 = parseInt(prompt("Enter Card 1 Value of 1-11"));
var card2 = parseInt(prompt("Enter Card 2 Value of 1-11"));
var card3 = parseInt(prompt("Enter Card 3 Value of 1-11"));
var cardTotal = parseInt(card1 + card2 + card3);
if (cardTotal > 21)
{
    alert("BUST!")
}
else if (cardTotal < 21)
{
    alert(cardTotal)
}
else if(cardTotal = 21)
{
    alert("BLACKJACK")
}




//EXERCISE 11
// Ask the user to enter their grade. Print their letter grade:
//
//     A 90 - 100 B 80 - 89 C 70 - 79 D 60 - 69 F 0 - 59
//
// ##### Extra Credit:
//     If it's negative or over 100 print an error.
var userGrade = parseInt(prompt("ENTER YOUR GRADE"));

if (userGrade === 100)
{
    alert("A")
}
else if (userGrade > 100)
{
    alert("ERROR")
}
else if (userGrade >= 90)
{
    alert("A")
}
else if (userGrade >= 80) {
    alert("B")
}
else if (userGrade >=70)
{
    alert("C")
}
else if (userGrade >= 60)
{
    alert("D")
}
else if (userGrade < 0)
{
    alert("ERROR")
}
else if (userGrade <= 59)
{
    alert("F")
}




//EXERSISE 12
var userAge = parseInt(prompt("Enter Your Age"));
if (userAge < 0)
{
    alert("NOT REAL AGE")
}
else if(userAge > 125)
{
    alert("NOT REAL AGE")
}
else if(userAge < 125)
{
    alert("Real Age");
}