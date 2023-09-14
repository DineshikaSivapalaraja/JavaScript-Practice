//get user input from user using prompt--> but can't run on vscode
var n = prompt() //to get user input
console.log("The user's input: "+n)
var f = 1
for(var i = n; i>=1 && i<=n ; i--) {
    f*=i
}
console.log("The factorial of number: "+ f)

//find factorial for given number
var N = 5
var F = 1
for(var j = N; j>=1 && j<=N ; j--) {
    F*=j
}
console.log("The factorial of number: "+ F)
