// JS function
function phone() {
    console.log("Hello")
}
function samsung() {
    console.log("I'm Samsung")
}
function apple() {
    console.log("I'm Apple")
}
function vivo() {
    console.log("I'm Vivo")
}
samsung()
apple()
vivo()
samsung()
samsung()
console.log("Dineshi")


//Exercise 1 -> create 2 variables p,q and function add and print addition of two numbers

var p = 20
var q =10
function Add() {
    console.log(p+q)
}
Add() 

//Exercise 2 -> 
var fActor = "Surya"
var fPlayer = "Virat Kohli"
var fMovie = "PS 1"

function favourite() {
    console.log("Favourite Actor: " + fActor)
    console.log("Favourite Player: " + fPlayer)
    console.log("Favourite Movie: " + fMovie)
    console.log("Hello","hi")
    console.log("Hello"+"hi")
}
favourite()

// function parameters
function printName() {
    console.log("Dineshi")
}
printName()
//--------------------------
function printmyName(name) {
    console.log(name)
}
printmyName("Dineshika")

//exercise function parameters
function area(length, width) {
    console.log(length*width)
}
area(10,4)

// return type
function myName() {
    return("Din")
}
console.log(myName())

//exercise
function add(a,b){
    console.log("add")
    return a+b
}
console.log(add(25,10))

function sub(a,b){
    console.log("subtraction")
    return a-b
}
console.log(sub(25,10))

function multi(a,b){
    console.log("Multiply")
    return a*b
}
console.log(multi(20,10))

function div(a,b){
    console.log("division")
    return a/b
}
console.log(div(20,10))

//----new
function Adding(u,v){
    console.log("Adding")
    return u+v   
}
var n = Adding(19,10)
console.log(n)


