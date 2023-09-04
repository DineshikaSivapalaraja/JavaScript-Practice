console.log("Hello Dineshi!")

a=10  //---> not good to  declare variable without declaration 
b=20
console.log(a)
console.log(b)
console.log(a+b)
var w=10;//------> can use ; but not must 

//variable declaration--->var(global scope),let(local scope),const(once we assign, can't change)

{
    var a = 10
}
console.log(a)   //===========> 10


// {
//     let a = 10
// }
//     console.log(a)  //============error
{
    let p=10
    console.log(p)
}

// const a=10
// a=30
// console.log(a)  //============error

//exercise 1
var Price =1000
var Product = "Mobile"
var Tax = 100

console.log(Product)
console.log(Price+Tax)

//exercise 2
var fruitName = "Apple"
var count = 3
var price = 50
var total = count * price

console.log(fruitName)
console.log(total)

//operators
var a = 10
var b= a++
console.log(a)
console.log(b)

var c = 20
var d= ++c
console.log(c)
console.log(d)

//data types--1)primitive(String,boolean,number,null,undefined)
         //--2) Non primitive(Object,Array)
var g = 20
console.log(typeof(g))

var Name = "Din"
console.log(typeof(Name))

var x = true
console.log(typeof(x))

var y = null  //--> object
console.log(typeof(y))

var z  //-->undefined
console.log(typeof(z))

// prompt -> to get an input
// var f = prompt()
// console.log(f) // --> can't use in VS code because it is related to browser
