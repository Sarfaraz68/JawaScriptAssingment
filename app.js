
//Assignment #1//

//Question - 1//
alert("Welcome to my webiste");

//Question - 2//
alert("Error! Please enter a valid password");

//Question - 3//
document.write("Welcome to JS Land <br> Happy Coding!");

//Question - 4//
alert("Welcome to JS Land");
alert("Happy Coding!");

//Assignment #2//

//Question - 1//
var username;

//Question - 2//
var myName = "Sarfaraz Ahmed Khan";

//Question - 3//
var message;
message="Hello World";
alert(message);

// //Question - 4//
var studentName="Jhone Doe";
var studentAge=15;
var studentCourse="Certified Mobile Application Development";
alert(studentName);
alert(studentAge + " years old");
alert(studentCourse);

//Question - 5//
var pizza = "PIZZA";
alert(pizza.slice(0,5) +"\n"+ pizza.slice(0,4)+"\n"+ pizza.slice(0,3)+"\n"+ pizza.slice(0,2)+"\n"+ pizza.slice(0,1));

//Question - 6//
var email = "sarfaraz68@gmail.com";
alert("My email address is "+email);//

//Question - 7//
var book = "A Smarter way to learn JavaScript";
alert("I am trying to learn from the Book "+book)


//Question - 8//
var myStatement = "Yah! I can write HTML content through JawaScrip";
document.write(myStatement);

//Question - 9//
var symbols = " ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ";
alert(symbols); 



// Assignment #3//

//Question - 1//
var age = 15;
alert("I am "+age+" years old");

//Question - 2//
var visitWebPage;
visitWebPage = 14;
alert("You have visited this site "+visitWebPage+" times");

//Question - 3//
var birthYear = 1990;
var birthYearType = typeof(birthYear);
document.write("My birth year is "+birthYear);
document.write("<br>"+"Data type of birth year delclared is "+birthYearType);

//Question - 4//
var visitorName = "John Doe";
var product = "T-Shirt(s)";
var quantity = 5;
document.write(visitorName+" ordered "+quantity+ " " + product+ " on XYZ Clothing store");


// Assignment #4//

//Question - 1//
var name1 = "Asif", name2 = "Kashif", name3 = "Zahid";

//Question - 2//

// 5 illegal varibales//
//var ?nam11 = "Nasir", var = "Zahid", 2name = "Rashid", my name = "Asif", alert = "Nasir";
// 5 legal varibales//
//var _name = "Nasir", $name="Zahid", name6="Rashid", MyName="Asif", Your_name = "Nasir";

//Question - 3//
var rulesHeading = "Rules for naming JS Veriables";
document.write(rulesHeading.bold().fontsize(6)+"<br>"+"<br>");
document.write("Variable names can only contain numbers, $, and _. For exmple: $my_1stname or name"+"<br>");
document.write("Variable must begin with a letter, $ or _. For example: $name, _name or name"+"<br>");
document.write("Varibale names are case sensitive"+"<br>");
document.write("Varibale names should not be JS keyworkds"+"<br>");


// Assignment #5//

//Questions - 1&2//
var firstNumber = prompt("Enter first number...");
var secondNumber = prompt("Enter second number");
var result = +firstNumber + +secondNumber;
var result1 = +firstNumber * +secondNumber;
var result2 = +firstNumber - +secondNumber;
var result3 = +firstNumber / +secondNumber;
var result4 = +firstNumber % +secondNumber;

document.write("Sum of "+firstNumber+" and "+secondNumber +" is " + result + "<br>");
document.write("Multiplication of "+firstNumber+" and "+secondNumber +" is " + result1 + "<br>");
document.write("Difference of "+firstNumber+" and "+secondNumber +" is " + result2 + "<br>");
document.write("Division of "+firstNumber+" and "+secondNumber +" is " + result3 + "<br>");
document.write("Modulas of "+firstNumber+" and "+secondNumber +" is " + result4);

//Question - 3//
var number1;
document.write("Value after veriable declaration is " + number1+"<br>");
number1=5;
document.write("Initial Value: " + number1+"<br>");
number2= ++number1;
document.write("Value after increament: " + number2+"<br>");
number1=number1+7;
document.write("Value after addition: " + number1+"<br>");
number1=--number1;
document.write("Value after decreament: " + number1+"<br>");
number1=number1%3;
document.write("The remainder is: " + number1);

//Question - 4//
var ticketCost = 600;
var numberOfTickets=5;
var totalCost=ticketCost*numberOfTickets;
document.write("Total cost to buy "+numberOfTickets+" tickets to a movie is "+totalCost+"PKR")

//Question - 5//
var anyNumber = +prompt("Enter Number....")
var anyNumber1=anyNumber*1;
var anyNumber2=anyNumber*2;
var anyNumber3=anyNumber*3;
var anyNumber4=anyNumber*4;
var anyNumber5=anyNumber*5;
var anyNumber6=anyNumber*6;
var anyNumber7=anyNumber*7;
var anyNumber8=anyNumber*8;
var anyNumber9=anyNumber*9;
var anyNumber10=anyNumber*10;
document.write("Table of "+anyNumber+"<br>");
document.write(anyNumber+"x"+"1"+"="+anyNumber1+"<br>");
document.write(anyNumber+"x"+"2"+"="+anyNumber2+"<br>");
document.write(anyNumber+"x"+"3"+"="+anyNumber3+"<br>");
document.write(anyNumber+"x"+"4"+"="+anyNumber4+"<br>");
document.write(anyNumber+"x"+"5"+"="+anyNumber5+"<br>");
document.write(anyNumber+"x"+"6"+"="+anyNumber6+"<br>");
document.write(anyNumber+"x"+"7"+"="+anyNumber7+"<br>");
document.write(anyNumber+"x"+"8"+"="+anyNumber8+"<br>");
document.write(anyNumber+"x"+"9"+"="+anyNumber9+"<br>");
document.write(anyNumber+"x"+"10"+"="+anyNumber10+"<br>");

//Question - 6//
var celsius = +prompt("Enter temprature in Celsius.....");
var fahrenheit = +prompt("Enter temprature in Fahrenheit.....")
var celsius1 = (fahrenheit - 32) * (5/9); 
var fahrenheit1 = (celsius*(9/5))+32;
var degreeSign="o"
document.write("The Temperature Converter"+"<br>");
document.write(celsius+degreeSign.sup()+"C " +"is "+fahrenheit1+degreeSign.sup()+"F"+"<br>");
document.write(fahrenheit+degreeSign.sup()+"F "+"is "+celsius1+degreeSign.sup()+"C"+"<br>");

//Question - 7//
var heading = "Shopping Cart";
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges=100;
var totalCharges=(priceItem1*quantityItem1)+(priceItem2*quantityItem2)+shippingCharges;
document.write(heading.fontsize(4).bold()+"<br>"+"<br>");
document.write("Price of Item is "+priceItem1+"<br>");
document.write("Quantity of Item 1 is "+quantityItem1+"<br>");
document.write("Price of Item 2 is "+priceItem2+"<br>");
document.write("Quantity of Item 2 is "+quantityItem2+"<br>");
document.write("Shipping Charges  "+shippingCharges+"<br>"+"<br>");
document.write("Total cost of your order is "+totalCharges+"<br>");

//Question - 8//
var marksHeading = "Marks Sheet";
var totalMarks=980;
var marksObtained=804;
var markPercentage=(marksObtained/totalMarks)*100;
document.write(marksHeading.fontsize(4).bold()+"<br>"+"<br>");
document.write("Total marks: "+totalMarks+"<br>");
document.write("Marks Obtained: "+marksObtained+"<br>");
document.write("Percentage: "+markPercentage+"%"+"<br>");

// // //Question - 9//
var currencyPkr = "Currency in PKR";
var usDollar=10;
var saudiRiyal=25;
document.write(currencyPkr.fontsize(4).bold()+"<br>"+"<br>");
var totalPkr=(usDollar*104.80)+(saudiRiyal*28);
document.write("Total Currency in PKR: "+totalPkr);

//Question - 10//

var someNumber=10;
var resultNumber=((someNumber+5)*10)/2
document.write("Result of the calculation is: "+resultNumber+"<br>");

//Question - 11//
var ageHeading = "Age Calculator";
var currentYear = 2020;
var birthYear = 1992;
var age = currentYear - birthYear;
document.write(ageHeading.fontsize(4).bold()+"<br>"+"<br>");
document.write("Current Year: "+currentYear+"<br>");
document.write("Birth Year: "+birthYear+"<br>");
document.write("Your Age is: "+age+"<br>");

//Question - 12//
var geometrizerHeading = "The Geometrizer";
document.write(geometrizerHeading.fontsize(4).bold()+"<br>"+"<br>");
var radiousOfCircle=20;
var valueOfPi=3.142;
var circumOfCircle = radiousOfCircle*2*valueOfPi;
var areaOfCircle = valueOfPi*radiousOfCircle*radiousOfCircle;
document.write("Radius of Circle: "+radiousOfCircle+"<br>");
document.write("The Circumference is: "+circumOfCircle+"<br>");
document.write("Area of Circle is: "+areaOfCircle+"<br>");

//Question - 13//
var lifeTimeSupplyHeading = "The Lifetime Supply Calculator";
document.write(lifeTimeSupplyHeading.fontsize(4).bold()+"<br>"+"<br>");
var myFavoritSnack = "Chess Burger";
var currentAge = 30;
var myMaximumAge=65;
var amountOfSnackPerDay = 2;
var totalSnackForLife = (myMaximumAge-currentAge)*365*amountOfSnackPerDay;
document.write("You will need "+totalSnackForLife+" "+myFavoritSnack+" to last you until the ripe old age of "+myMaximumAge+"<br>");

// Assignment #6//

//Question - 1//
var a=10;
document.write("Result:"+"<br>");
document.write("The value of a is: "+a+"<br>");
document.write("-------------------------------"+"<br>"+"<br>");
++a;
document.write("The value of ++a is: "+a+"<br>");
document.write("Now the value of a is: "+a+"<br>"+"<br>");
document.write("The value of a++ is: "+a+"<br>");
a++;
document.write("Now the value of a is: "+a+"<br>"+"<br>");
--a;
document.write("The value of --a is: "+a+"<br>");
document.write("Now the value of a is: "+a+"<br>"+"<br>");
document.write("The value of a-- is: "+a+"<br>");
a--;
document.write("Now the value of a is: "+a+"<br>"+"<br>");

//Question - 2//
var a=2,b=1;
document.write("a is "+a+"<br>");
document.write("b is "+b+"<br>");
var resultValue = --a - --b + ++b + b--;
document.write("Result is "+resultValue+"<br>");

//Question - 3//

var yourName = prompt("Enter your name please......");
document.write("Welcome "+yourName);

//Question - 4//
//No questin number 4 in the list

//Question - 5//

var anyNumber = +prompt("Enter Number....");
if(anyNumber===0){anyNumber=5};
var anyNumber1=anyNumber*1;
var anyNumber2=anyNumber*2;
var anyNumber3=anyNumber*3;
var anyNumber4=anyNumber*4;
var anyNumber5=anyNumber*5;
var anyNumber6=anyNumber*6;
var anyNumber7=anyNumber*7;
var anyNumber8=anyNumber*8;
var anyNumber9=anyNumber*9;
var anyNumber10=anyNumber*10;
document.write("Table of "+anyNumber+"<br>");
document.write(anyNumber+"x"+"1"+"="+anyNumber1+"<br>");
document.write(anyNumber+"x"+"2"+"="+anyNumber2+"<br>");
document.write(anyNumber+"x"+"3"+"="+anyNumber3+"<br>");
document.write(anyNumber+"x"+"4"+"="+anyNumber4+"<br>");
document.write(anyNumber+"x"+"5"+"="+anyNumber5+"<br>");
document.write(anyNumber+"x"+"6"+"="+anyNumber6+"<br>");
document.write(anyNumber+"x"+"7"+"="+anyNumber7+"<br>");
document.write(anyNumber+"x"+"8"+"="+anyNumber8+"<br>");
document.write(anyNumber+"x"+"9"+"="+anyNumber9+"<br>");
document.write(anyNumber+"x"+"10"+"="+anyNumber10+"<br>");

//Question - 6//

var subject1 = prompt("Enter Your subject One....");
var subject2 = prompt("Enter Your subject Two....");
var subject3 = prompt("Enter Your subject Three....");
var totalMarksOfEachSubject = 100;
var marksObtainedsubject1 = +prompt("Marks Obtained in First Subject....");
var marksObtainedsubject2 = +prompt("Marks Obtained in Second Subject....");
var marksObtainedsubject3 = +prompt("Marks Obtained in Third Subject....");
var totalMarksOfThreeSubjects = marksObtainedsubject1 + marksObtainedsubject2 + marksObtainedsubject3;
var percntageOfStudent = (totalMarksOfThreeSubjects / (totalMarksOfEachSubject * 3)) * 100;
var HeadingMarksheet = "Subject  Total Marks  Obtained Marks  Percentage";

document.write("<table  width='500'>");
    document.write("<tr>");
        document.write("<td>" + "Subject" + "</td>");
        document.write("<td>" + "Total Marks" + "</td>");
        document.write("<td>" + "Marks Obtained" + "</td>");
        document.write("<td>" + "Percentage" + "%" + "</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>" + subject1 + "</td>");
        document.write("<td>" + totalMarksOfEachSubject + "</td>");
        document.write("<td>" + marksObtainedsubject1 + "</td>");
        document.write("<td>" + marksObtainedsubject1 + "%" + "</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>" + subject2 + "</td>");
        document.write("<td>" + totalMarksOfEachSubject + "</td>");
        document.write("<td>" + marksObtainedsubject2 + "</td>");
        document.write("<td>" + marksObtainedsubject2 + "%" + "</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>" + subject3 + "</td>");
        document.write("<td>" + totalMarksOfEachSubject + "</td>");
        document.write("<td>" + marksObtainedsubject3 + "</td>");
        document.write("<td>" + marksObtainedsubject3 + "%" + "</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>" + "  " + "</td>");
        document.write("<td>" + (totalMarksOfEachSubject * 3) + "</td>");
        document.write("<td>" + totalMarksOfThreeSubjects + "</td>");
        document.write("<td>" + percntageOfStudent.toFixed(2) + "%" + "</td>");
    document.write("</tr>");
document.write("</table>");

//Question - 7//
//There is no question 7 in the assignment


//Assignment #9-10//

//Question - 1//

var cityName = prompt("Enter the City Name.....");
cityName=cityName.toUpperCase();
if (cityName==="KARACHI"){
    alert("Welcome to city of lights")
}

//Question - 2//

var genderCheck = prompt("Enter your gender....")
genderCheck=genderCheck.toUpperCase();
if (genderCheck==="MALE"){
    alert("Good Morning Sir!");
}
if (genderCheck==="FEMALE"){
    alert("Good Morning Ma'am!");
}

//Question - 3//

var colorinput = prompt("Enter Colour Red, Yellow or Green........");
var color1="Red";
var color2="Yellow";
var color3="Green";
if (colorinput.toUpperCase()==='RED'){
document.write("<table width='500'>");
    document.write("<tr>");
        document.write("<td >" + "Signal Color" + "</td>");
        document.write("<td>" + "Message" + "</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>" + color1.fontcolor("red") + "</td>");
    document.write("<td>" + "Must Stop".fontcolor("red") + "</td>");
    document.write("</tr>");
    document.write("</table>")
}
if (colorinput.toUpperCase()==='YELLOW'){
    document.write("<table width='500'>");
        document.write("<tr>");
            document.write("<td >" + "Signal Color" + "</td>");
            document.write("<td>" + "Message" + "</td>");
        document.write("</tr>");
        document.write("<tr>");
        document.write("<td>" + color2.fontcolor("yellow") + "</td>");
        document.write("<td>" + "Ready to Move".fontcolor("yellow") + "</td>");
        document.write("</tr>");
        document.write("</table>")
    }
if (colorinput.toUpperCase()==='GREEN'){
        document.write("<table width='500'>");
            document.write("<tr>");
                document.write("<td >" + "Signal Color" + "</td>");
                document.write("<td>" + "Message" + "</td>");
            document.write("</tr>");
            document.write("<tr>");
            document.write("<td>" + color3.fontcolor("green") + "</td>");
            document.write("<td>" + "Move Now".fontcolor("green") + "</td>");
            document.write("</tr>");
            document.write("</table>")
        }

//Question - 4//

var remainFuel = +prompt("How much fuel left is in you car.....");
if (remainFuel<0.25){
    document.write("Please refill the fuel in your car"+"<br>")
}

//Question - 5-a//
var a = 4; 
if (++a === 5){ 
    alert("Given condition for variable a is true"); 
}
//Result: Alret Message Displayed

//Question - 5-b//
var b = 82; 
if (b++ === 83) { 
    alert("given condition for variable b is true"); 
} 
//Result: Alret Message Did Not Display

//Question - 5-c//
var c = 12; 
if (c++ === 13){ alert("condition 1 is true"); } 
if (c === 13){ alert("condition 2 is true"); } 
if (++c < 14){ alert("condition 3 is true"); } 
if(c === 14){ alert("condition 4 is true"); } 
//Result: Condition 2 and 4 are true

//Question - 5-d//
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost) { alert("The cost equals"); } 
//Result: Alret Message displayed

Question - 5-e//
if (true){ alert("True"); } 
if (false){alert("False");} 
//Result: Alret Message displayed - True

//Question - 5-f//
if("car" < "cat"){ alert("car is smaller than cat"); } 
 //Result: Alret Message displayed

Question - 6//
var marksEnglish = +prompt("English Marks....");
var marksEnglishOutOf = +prompt("English Marks out of....");
var marksMathematics = +prompt("Mathematics Marks....");
var marksMathematicsOutOf = +prompt("Mathematics Marks out of....");
var marksUrdu = +prompt("Urdu Marks....");
var marksUrduOutOf = +prompt("Urdu Marks out of....");

var totalObtained = marksEnglish+marksMathematics+marksUrdu;
var totalOutOf = marksEnglishOutOf+marksMathematicsOutOf+marksUrduOutOf;
var percentage1=(totalObtained/totalOutOf)*100;
var remarks;
var grade;

if(percentage1>=80){
remarks="Excellent";
grade="A-One";
}
else if (percentage1>=70) {
        remarks="Good";
        grade="A";  
    }
else if (percentage1>=60) {
        remarks="You need improvement";
        grade="B";  
    }
else if (percentage1<60) {
        remarks="Sorry";
        grade="Fail";  
}

var HeadingMarksheet = "Marks Sheet";
document.write(HeadingMarksheet.fontsize(4).bold()+"<br>"+"<br>");
document.write("Total Marks :"+totalOutOf+"<br>");
document.write("Marks Obtained :"+totalObtained +"<br>");
document.write("Percentage :"+percentage1.toFixed(0)+"%"+"<br>");
document.write("Grade :"+grade+"<br>");
document.write("Remarks :"+remarks+"<br>");
que
//Question #7//
var randomNumber = Math.random();
var finalNumber = randomNumber.toFixed(1)*10; 
var inputNumber = +prompt("Guess a number between 1 and 10....");
document.write("Guess Game"+"<br>");
document.write("-----------------"+"<br>");
if (finalNumber===inputNumber){
    document.write("Bingo! Correct Answer"+"<br>");
    document.write("Secret Number was "+finalNumber+"<br>");
}
else if ((finalNumber+1===inputNumber)) {
    document.write("Close enough to correct answer!"+"<br>");
    document.write("Secret Number was "+finalNumber+"<br>");
}
else {
    document.write("Try Again!"+"<br>");
    document.write("Secret Number was "+finalNumber+"<br>");
}

//Question #8//
var numberEvenOrOdd = +prompt("Enter a number to check it is divisable by 3 or Not "+"<br>");
numberEvenOrOdd = numberTodivide%2;
if (numberEvenOrOdd === 0){
    document.write("Number is Even!")
}
else{
    document.write("Number is Odd")
}

//Question #9//
var numberEvenOrOdd = +prompt("Enter a number to check it is divisable by 3 or Not "+"<br>");
numberEvenOrOdd = numberEvenOrOdd%2;
if (numberEvenOrOdd === 0){
    document.write("Number is Even!")
}
else{
     document.write("Number is Odd")
}

//Question #10//

var temperature1 = +prompt("Enter Temperature.......");
if (temperature1>40){
    document.write("It is too hot outside");
}
else if (temperature1>30){
    document.write("The weather today is normal");
}
else if (temperature1>20){
    document.write("Today weather is cool");
}
else if (temperature1>10){
    document.write("OMG! Today's weather is so cool");
}

//Question #11//
var numberOne = +prompt("Enter First Number.....");
var numberTwo = +prompt("Enter Second Nummber....");
var operation1= prompt("What Operation you wish to perform +,-,/ or %");
var add1=numberOne+numberTwo;
var sub1=numberOne-numberTwo;
var divi1=numberOne/numberTwo;
var per1=(numberOne/numberTwo)*100;
var result11;
if(operation1==="+"){
    alert("Result is ...."+add1);
}
else if(operation1==="-"){
    alert("Result is ...."+sub1);
}
else if(operation1==="/"){
    alert("Result is ...."+divi1);
}
else if(operation1==="%"){
    alert("Result is ...."+per1+"%");
}

