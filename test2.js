//Question 1.1
//Find the error in the following for loop:

for (var i = 0; i < 5; i++){
 console.log(i);
}
VM470:2 0
VM470:2 1
VM470:2 2
VM470:2 3
VM470:2 4
//Question 1.2
//Find the error in the following conditional:
if (false){
   console.log("hello");
 }else{
   console.log("hasta luego");
 }
VM82:4 hasta luego
undefined

//Question 1.3
//Find the error in the following code:
var x = 15;
if (x > 10){
   console.log("x is greater than ten");
}

 x is greater than ten
undefined


//Question 1.4
//Find the error in the following code:
var y = 27;
if (y === 27){
  console.log(27);
}

 27
undefined


//Question 2.1
//What does will the console output when the following is entered.
 '1'+1

//a. 2
//b. "2"
//c. "11"
//d. 11
//La respuesta es "11".



//Question 2.2
//Find the errors in the following
var name = "Roberto"
var time =3
//name"+ said "He's comming late.", the meetin is still at " + time +
(name+" said \"He's comming late.\", the meetin is still at "+ time)
//"Roberto said "He's comming late.", the meetin is still at 3".


//Question 2.3
//What is the value of x?
//Hint: Remember PEMDAS (parenthesis, exponent, mult, div, add, sub)
var a = "thug life"
var b = 5;
var c = 10;
var x = b*c + a;

var a = "thug life"
var b = 5;
var c = 10;
var x = b*c + a;

"50thug life"



//Question 2.4
//What is the value of x?
var x = 10;
var y = 6;
x = x*y;
var z = 4;
x = x*z;
// La repuesta es 240.



//Question 3.1
//Write a sentence that uses the following variables
var firstName = "John"
var lastName = "Martinez"
var city = "Miami"

firstName+ " " + lastName+" "+"fue a "+cItY
"John Martinez fue a Miami"





//Question 3.2
//Write a sentence that uses the following variables
totalPower = 32
generator = 1
"El generador "+ generator +" tiene un poder de "+totalPower+" MW"
"El generador 1 tiene un poder de 32 MW"



//Question 3.3
//What is the value of str3?

var str1 = "que bola acere";
var str2 = "sup dawg";
var str3 = str1+"is similar to"+str2+" in spanish.";
str3
"que bola acereis similar tosup dawg in spanish."


//Question 3.4
//Use console.log to output the statement: "Hi! My name is Slim Shady." using the following two variables:
var greeting = "Hi!";
var name = "Slim Shady";

var greeting = "Hi!";
var name = "Slim Shady";
console.log(greeting +" my name is "+name);
VM446:3 Hi! my name is Slim Shady



//Question 4
/*
Given three variables, money, interest, and years, write a program that displays (using console.log) the amount of money that you have after collecting the interest payments due at the end of each year. For example, if you start with $100 and the interest is 10%, then your program should output the following:
"At the end of year 1, you have $110"
"At the end of year 2, you have $121"
"At the end of year 3, you have $131.1"
...
"At the end of year [n], you have $[amount from previous year]*(1+interest)
----
Dadas tres variables, money, interest, and years, escriba un programa que muestre (utilizando console.log) la cantidad de dinero que usted tendria luego de recibir el pago de interes al final del an~o. Poe ejemplo, si usted comienza con cien dolares y la tasa de interes For example, if you start with $100 and the interest is 10%, then your program should output the following:
"Al terminar el an~o 1, usted tiene $110"
"Al terminar el an~o 2, usted tendra $121"
"Al terminar el an~o 3, usted tendra $131.1"
...
"Al terminar el an~o [n], usted tendra $[monto anterior]*(1+interes)
"
*/
var money = 1000;
var interest = 0.05;
var years = 30;

for(var PrimeRaño=1; PrimeRaño<=YeaRs;PrimeRaño++){
  mOnEy=mOnEy*(1+inTereSt);
  console.log("Al terminar el año"+PrimeRaño+" , usted tiene "+ mOnEy );
}
VM544:6 Al terminar el año1 , usted tiene 1050
VM544:6 Al terminar el año2 , usted tiene 1102.5
VM544:6 Al terminar el año3 , usted tiene 1157.625
VM544:6 Al terminar el año4 , usted tiene 1215.5062500000001
VM544:6 Al terminar el año5 , usted tiene 1276.2815625000003
VM544:6 Al terminar el año6 , usted tiene 1340.0956406250004
VM544:6 Al terminar el año7 , usted tiene 1407.1004226562504
VM544:6 Al terminar el año8 , usted tiene 1477.455443789063
VM544:6 Al terminar el año9 , usted tiene 1551.3282159785163
VM544:6 Al terminar el año10 , usted tiene 1628.8946267774422
VM544:6 Al terminar el año11 , usted tiene 1710.3393581163143
VM544:6 Al terminar el año12 , usted tiene 1795.8563260221301
VM544:6 Al terminar el año13 , usted tiene 1885.6491423232367
VM544:6 Al terminar el año14 , usted tiene 1979.9315994393985
VM544:6 Al terminar el año15 , usted tiene 2078.9281794113685
VM544:6 Al terminar el año16 , usted tiene 2182.874588381937
VM544:6 Al terminar el año17 , usted tiene 2292.018317801034
VM544:6 Al terminar el año18 , usted tiene 2406.619233691086
VM544:6 Al terminar el año19 , usted tiene 2526.9501953756403
VM544:6 Al terminar el año20 , usted tiene 2653.2977051444223
VM544:6 Al terminar el año21 , usted tiene 2785.9625904016434
VM544:6 Al terminar el año22 , usted tiene 2925.260719921726
VM544:6 Al terminar el año23 , usted tiene 3071.523755917812
VM544:6 Al terminar el año24 , usted tiene 3225.099943713703
VM544:6 Al terminar el año25 , usted tiene 3386.354940899388
VM544:6 Al terminar el año26 , usted tiene 3555.6726879443577
VM544:6 Al terminar el año27 , usted tiene 3733.4563223415757
VM544:6 Al terminar el año28 , usted tiene 3920.129138458655
VM544:6 Al terminar el año29 , usted tiene 4116.135595381587
VM544:6 Al terminar el año30 , usted tiene 4321.9423751506665
undefined
//Extra credit
/*
Dadas tres variables, escriba un programa que muestre (en la consola) "Usted debe comprar un carro nuevo" solamente si la eddad del carro que tiene (carAge) es mayor que 10, el millaje (mileage) es mayor que 150,000, y si la marca es Kia. De otra manera, su programa debe mostrar "Espere un poco, sea frugal."

Given three variables, create a program that outputs (to the console) "You should buy a new car" only if the current car age is greater than 10, the mileage is greater than 150,000 and the brand is Kia. Otherwise, your program should output "Hold off a bit, be frugal."
*/
var carAge = 10;
var mileage = 150000;
var brand = "Kia";

if (         ){
  console.log("You should buy a new car");
}
else{
  console.log("Hold off a bit, be frugal.");
}
var carAge = 10;
var mileage = 150000;
var brand = "Kia";
if(carAge<=10 && mileage==150000 && brand =="Kia"){
  console.log("You should buy a new car");
}
else{
  console.log("Hold off a bit, be frugal.");
}

VM564:5 You should buy a new car

//Question 5.2
/*
You work for a water park. This park has 7 small pools and 5 large ones.
The engineer tells you every day which pool is working.
The accountant asked you to build a report which shows how many gallons are used per day in filling the pools, which depends on the pools that are operational. Today, every pool is operational.

Usted trabaja para un parque de agua. En este parque hay 7 piscinas pequenas y 5 grandes.
El ingeniero le reporta todo los dias de cuales piscinas estan trabajando.
La contadora le pidio que haga un reporte de cuanto galones gasta por dia, que depende en las piscinas operacionales.  Hoy toda las piscinas estan trabajando.
*/

var totalPools = 12
var currentPool = 1
var smallVolume = 1000
var largeVolume = 3000
var totalVolume = 0
for (; ; ) {
  var
  var totalPools = 12
  var currentPool = 1
  var smallVolume = 1000
  var largeVolume = 3000
  var totalVolume = 0
  for ( totalPools ; currentPool= ; ) {
  VolumenTotal=7*(smallVolume)+5*(largeVolume)


}


// Extra Credit
// Este dia las picsinas numero 2 y 10 no trabajan,
// Repeat the same problem but assume pools 2 and 10 aren't operational.
var totalPools = 12
var currentPool = 1
var smallVolume = 1000
var largeVolume = 3000
var totalVolume = 0
for ( ;   ;  ) {





}



//Extra Credit
/*
The engineer knows that pools 2, 6 and 10 won't work tomorrow.
Besides, pool number 12 will be filled with half the volume in order to accommodate children.
Go ahead and build tomorrow's report today, so you can rest easy.

El ingeniero sabe que manana las picsinas 2, 6, y 10 no van a trabajar.
Ademas, la picina numero 12 la van a llenar con la mitad del volumen, para ninos pequenos.
Adelantese y haga el reporta hoy, para que manana descanse
*/
