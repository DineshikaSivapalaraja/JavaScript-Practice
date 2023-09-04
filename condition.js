// if else
if (true) {
    console.log("Hello")
}
else {
    console.log("Bye")
}
//
// if (false) {
//     console.log("Hello")
// }
// else {
//     console.log("Bye")
// }

//
console.log(10<5)
console.log(10>5)
console.log(10==10)

if(3>5) {
    console.log("Hey")
}
else {
    console.log("Tata")
}

//exercise 1
// if its raining ="Umbrella"
//No rain = "Enjoy the sun"

// var rain = true
// if(rain){
//     console.log("Take an umbrella")
// } 
// else{
//     console.log("Enjoy the sun")
// }

var rain = false
if(rain){
    console.log("Take an umbrella")
} 
else{
    console.log("Enjoy the sun")
}

//exercise 2
//did you finish your home work?---> yes/no?
var ans="yes"
if(ans){
    console.log("Great job!")
}
else{
    "Finish your homework before playing"
}

//exercise 3----> Are there any cookies left?
var result="no"
if(result){
    console.log("Would you like a cookie?")
}
else{
    console.log("Time to bake more cookies")
}

//exercise 4----> Did you brush your teeth?
var result="yes"
if(result){
    console.log("Your teeth are clean.")
}
else{
    console.log("Go brush your teeth now.")
}

//exercise 5----> is it your birthday today?
var result="no"
if(result){
    console.log("Happy birthday! Enjoy your special day!")
}
else{
    console.log("Have a great day!")
}

// logical AND--&& , OR--||
console.log(true && true)
console.log(true && false)
console.log(true && false &&  true)

console.log(true  || true)
console.log(true || false || true)

//logical NOT
console.log(!true)

//Practice question 1---> What is the color of the traffic light?

var color="red"
if(color=="red"){
    console.log("Stop")
}

if(color=="yellow"){
    console.log("Get Ready")
}

if(color=="green"){
    console.log("Go")
}
//using else if
if(color=="red"){
    console.log("Stop")
}
else if(color=="yellow"){
    console.log("Get Ready")
}
else if(color=="green"){
    console.log("Go")
}

//Practice question 2---> What is the season of the Year?

var season= "autumn"

if (season=="spring"){
    console.log("Enjoy the blooming flowers.")
}
else if (season=="summer"){
    console.log( "Have fun in the sun.")
}
else if (season=="autumn" || season=="fall"){
    console.log("Admire the colorful leaves.")
}
else if (season=="winter"){
    console.log("Bundle up and stay warm.")
}

//Practice question 3 --> what  is the score in a game?
var score = 78
if(score < 50){
    console.log("You need to improve.");
}
else if(score>= 50 && score <70){
// else if(50 <= score <70)  {
console.log("Good job!");
}
else if(score >= 70){
    console.log("Excellence performance!");
}

//Practice question 4 --> is the number even / odd?
var n = 9
if(n%2==0){// if(n%2==1)--> if reminder is 1-->odd
    console.log("The number is even")
}
else{
    console.log("The number is odd")
}

//Practice question 5----> is the character a vowel or a consonant?
var char = 'A'
if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'){
    console.log("it is a vowel")
}
else{
    console.log("It is a consonant")
}



