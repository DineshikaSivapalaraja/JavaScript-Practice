// Generate random numbers using library of Js 
var random = Math.random()
console.log(random)  // 0.1 to 0.9-->eg: 0.058870422614917484

// generate numbers between  1 to 9
var random = Math.random()*10
console.log(random)   //eg output : 4.969606052597668

//Math.floor() function for round down number/decrease upto whole number
var N = Math.floor(random)  //Math.floor(7.97297077) ---> 7, 0.12789479---> 0
console.log(N)

// generate 1 to 9 using math.floor()
var n = Math.floor(Math.random()*10)
console.log(n)

//generate 1 to 10 using math.floor()
var randomN = Math.floor(Math.random()*10)
console.log(randomN+1)
