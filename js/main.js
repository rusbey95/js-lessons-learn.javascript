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

// var userName = confirm("You Nik?");
// alert(userName);

// var password = prompt("please your password", "");
// alert("You password " + password);

// var youName = prompt("You name", "");
// alert("You " + youName);

// var question = confirm("you problem?");
// alert(question);

// var youName = prompt("What is you name?", "");
// alert("You name " + youName);




//****** Conditional operators: if, "?"  9 lesson ******//
// var years = prompt("In which year did the specification ECMA-262 5.1 appear?", "");
// if (years != 2011) alert("No!");

// var currentYears = prompt("what is the current year?", "");
// if(currentYears == 2018){
// 	alert("yes!");
// } else if(currentYears < 2018){
// 	alert("few");
// } else{
// 	alert("a lot of");
// }

// var firstName = prompt("what surname does Bill", "");
// if(firstName == "Geyts"){
// 	alert("Yes!");
// } else{
// 	alert("No!!!");
// }

// var test = prompt("10 + 1", "");
// if(test < 11){
// 	alert("few");
// } else if(test > 11){
// 	alert("a lot of");
// } else{
// 	alert("Yes=)");
// }

// var access;
// var year = prompt("Сколько Вам лет?", "");
// if (year >= 14){
// 	access = true;
// }else {
// 	access = false;
// }
// alert(access);

// var age = prompt("Сколько Вам лет?", "");
// access = age > 14 ? true : false;
// alert(access);

// var age = prompt("Возраст ", 18);
// var message = (age < 3) ? "Привет малыш" :
// 	(age < 18) ? "Привет" :
// 	(age < 100) ? "Здравствуй" :
// 	"Какой необычный возраст";
// alert(message);

// var year = prompt("Возраст", "");
// if (year > 10){
// 	alert("Уже большой");
// } else if (year < 10){
// 	alert("Еще малыш");
// } else{
// 	alert("То что нам нужно");
// }

// var year = prompt("Возраст", "");
// var message = (year > 10) ? "Уже большой" :
// 	(year == 0) ? "Почему ничего не ввел" :
// 	(year < 10) ? "Ещё малыш" :
// 	"То что нам нужно";
// alert(message);

//******************************HOMEWORK******************************//
// if("0"){
// 	alert("Hello");
// }

// var official = prompt("«Каково «официальное» название JavaScript?» ?", "");
// if(official == "ECMAScript"){
// 	alert("Верно");
// }else{
// 	alert("Не знаете? «ECMAScript»!");
// }

// var namber = prompt("Сейчас проверим", "");
// if(namber > 0){
// 	alert("1");
// }else if(namber < 0){
// 	alert("-1");
// }else{
// 	alert("0");
// }

// var authorization = prompt("Кто пришел?", "");
// if(authorization == "Админ"){
// 	var password = prompt("Ваш пароль?", "");
// 	if(password == null){
// 		alert("Вход отменен");
// 	}else if(password == "Чёрный Властелин"){
// 		alert("Добро пожаловать!");
// 	}else{
// 		alert("Пароль не верен");
// 	}
// }else if(authorization == null){
// 	alert("Вход отменен");
// }else{
// 	alert("Я Вас не знаю");
// }

// var a = prompt("Введите число", "")
// if(a + b < 4){
// 	result = "Мало";
// }else{
// 	result = "Много"
// } 





//****** Logical Operators ||(или) &&(и) !(не) 10 lesson ******//

// ***** ***** || (или) ***** *****

// alert(true || true); //true
// alert(true || false); //true
// alert(false || true); //true
// alert(false || false); //false

// if(1 || 0){
// 	alert(true); //true
// }
// if(0 || null){
// 	alert("yes"); //false
// }

// var hour = prompt("Когда вы собираетесь нас посетить?","");
// if(hour < 10 || hour > 18){
// 	alert("офис до 10 или после 18 закрыт");
// }

// var a;
// true || (a = 1);
// alert(a);

// var a;
// false || (a = 1);
// alert(a);

// ***** ***** &&(и) ***** *****

// alert(false && true); //false
// alert(false && false); //false
// alert(true && true); //true

// alert(1 && 0); //0
// alert(2 && 4); //4
// alert(0 && 1); //0
// alert(null & "text"); //0

// alert(1 && 2 && 3 && undefined); //undefined
// alert(0 && 2 && 20 && 21); //0
// alert(1 && 34 && "text" && 10) //10

// alert(2 || 0 && 4); //2
// alert(0 && 2 || 3); //3
// alert(10 && 0 && 2 || 15) // 15

// var x = 10;
// (x > 0) && alert("Больше"); 

// ***** ***** !(не) ***** *****
// alert(!true); //false
// alert(!0); //true





//******************************HOMEWORK******************************//























//****** lesson ******//
//******************************HOMEWORK******************************//