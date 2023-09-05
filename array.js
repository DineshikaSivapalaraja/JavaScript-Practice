// arrays

var fruits = ["Apple","Banana","Mango"]
console.log(fruits)

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

// change the value of the array element
var fruits = ["Apple","Banana","Mango"]
fruits[2]="Pine apple"
console.log(fruits)

//add element to the array
fruits.push("Avocado")
console.log(fruits)

//remove element from array
fruits.pop()
console.log(fruits)
//-------------->remove particular element from array
fruits.pop("Banana")
console.log(fruits)

//find array length
var color = ["Blue", "Grey", "White", "Black"]
console.log(color.length)

//exercise
//program 1--> print array elements using loop
var colors = ["Blue", "Grey", "White", "Black"]
var n = colors.length
for(var i=0; i<n; i++){
    console.log(colors[i])
}

//program 2--> find the Sum of Array Elements
var num = [12,67,98,22,65,10,32]
var N = num.length
var sum=0
for(var j=0; j<N; j++){
    sum+=num[j]
}
console.log("The sum of the array is: "+sum)

//program 3--> program to calculate the average of an array
var num = [12,67,98,22,65,10,32]
var N = num.length
var sum=0
for(var j=0; j<N; j++){
    sum+=num[j]
}
avg=sum/N
console.log("The average of the array is: "+avg)

//program 4--> program to check if a number exists in the array
var n = 100
var num = [12,67,98,22,65,10,32]
var count = num.length
var exists = false
for (var i = 0; i<count; i++){
    if(n == num[i]){
        var exists = true
    }    
}
if(exists==true){
    console.log("The number "+n+" is exists in "+ (i+1) +" position")
}
else{
    console.log("The number is not exist")
}

//array slices--> to return selected elements
var n =[12,22,45,67,99]
var N = n.slice(0,4)
console.log(N)  //[ 12, 22, 45, 67 ]

//array splices
//---> add/remove array elements
var n =[13,33,40,100,76]
var N = n.splice(2,1)
console.log("Deleted element: "+ N)  //Deleted element:40
console.log("New array: "+ n) //New array:13,33,100,76

//--> replace 2nd position element
var n =[13,33,40,100,76]
var N = n.splice(2,1,88)
console.log("Replacing element: "+ N)  //Replacing element: 40
console.log("New array: "+ n) //New array: 13,33,88,100,76

//---> at position 2 push/add one element
var n =[13,33,40,100,76]
n.splice(2,0,88)
console.log("New array: "+ n) //New array: 13,33,88,40,100,76

var n =[13,33,40,100,76]
n.splice(2,2,88)
console.log("New array: "+ n) //New array: 13,33,88,76







