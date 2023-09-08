  //select input tag
var input = document.getElementById("input")     
  //select ul tag
var output = document.getElementById("output")    
function AddList(){
       //creating element li
    var outP = document.createElement("li")    
       //assign text value to output
       // outP.textContent = input.value

       // outP.textContent = input.value + "<button onclick=\"DeleteText(event)\">Delete</button>"--> it provide html text
    outP.innerHTML = input.value + "<button onclick=\"DeleteText(event)\">Delete</button>" //to get texts

       //append the inputs to output 
    output.append(outP)
}

function DeleteText(event) {
       // output.remove()
       // event.target.remove()//to delete button tag
       event.target.parentElement.remove() //to delete a list item   
}