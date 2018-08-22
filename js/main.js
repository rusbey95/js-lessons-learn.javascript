//****** alert 1 lesson ******//
// alert("alert txt");



//****** code structure 2 lesson ******//
// alert("txt");
// [1, 2].forEach(alert);

//comments one line
/*
 comments two line
 comments two line
*/ 




//****** variable structure 3 lesson ******//
// var i = 2;
// console.log(i);
// var y;
// y = i;
// console.log(y);

//reserve variable: var; class; return; export ...

// var x = 1;
// var y = 2;
// var z = 3;
// console.log((x + y) * z);

//constant variable: 
// var COLOR_ORANGE = "#FF7F00";
// var COLOR_WHITE = "#ffffff";
// var COLOR_BLACK = "#000000";
// console.log(COLOR_BLACK);

//******************************HOMEWORK******************************//
// var admin, name;
// var name = "Vasiliy";
// admin = name;
// console.log(admin);




//****** data types (6), typeof 4 lesson ******//
// var number = 1; //number
// var string = "text"; //string
// var years = true; // boolean
// var noName = null; // null
// var date; // undefined  
// //end primitive
// var user = {name: "Vasya"}; //object

// console.log(number, string, years, noName, date, user);

//******************************HOMEWORK******************************//
// console.log(
// 	typeof 1, //number 
// 	typeof "text", //string
// 	typeof true, //boolean
// 	typeof null, //object "error" this null
// 	typeof undefined, // undefined
// 	typeof {userName: "Kolya"},  //object
// 	typeof function(){} //function error this object 
// );




//****** Basic Operators 5 lesson ******//
// var a = 10;
// var b = "2";
// console.log(c = a + +b);
// var z = "12";
// console.log(y = (z - (a + b * c)));

// var c = "text";
// var y = 10;
// console.log(z = c + y);
// console.log(typeof z);

// var i = 0;
// console.log(i++ * 10);
// console.log(++i * 10);

// var x = 1;
// console.log(--x);
// console.log(x--);
// console.log(x);
// console.log(++x - 10 * 2 - 1); //-21
// console.log(x);

// var a = 1;
// var b = 2;
// var c = 3;
// a *= 2;
// b = c;
// console.log(c);

// for (a = 1, b = 3, c = a * b; a < 10; a++){}

//******************************HOMEWORK******************************//
// var a = 1, b = 2, c, d;

// c = ++a; console.log(c); //2
// d = b++; console.log(d); //2

// c = (2+ ++a); console.log(c); //5
// d = (2+ b++); console.log(d); //5

// console.log(a, b); //3,4

//----------------------------------------

// var a = 2;
// var x = 1 + (a *= 2);
// console.log(x);




//****** Operators comparison and boolean values 6 lesson ******//
// var a = 2;
// var b = 10;
// var c = 1;
// console.log(b >= c);
// console.log("a" != "A");
// console.log(null >= "0");

//******************************HOMEWORK******************************//
// console.log(1 < 2); //true
// console.log("1" < 2); //true
// console.log("1" < "2"); //true
// console.log(undefined >= 1) //false
// console.log(undefined === null) //false
// console.log(undefined == null) //true
// console.log(null == 0); //false
// console.log(null === 0); //false




//****** Bitwise Operators 7 lesson ******//
// a = 0;  // 00000000000000000000000000000000
// a = 1;  // 00000000000000000000000000000001
// a = 2;  // 00000000000000000000000000000010
// a = 3;  // 00000000000000000000000000000011
// a = 255;// 00000000000000000000000011111111




//****** alert, prompt, confirm  8 lesson ******//

//alert
// alert("Hello");

//prompt
// var years = prompt("How old are you?", "");
// alert("You " + "are " + years + "!");

//confirm
// var isAdmin = confirm("You admin ?");
// alert(isAdmin);

//******************************HOMEWORK******************************//
// var name = prompt("What is you name?", "");
// alert("You name " + name);