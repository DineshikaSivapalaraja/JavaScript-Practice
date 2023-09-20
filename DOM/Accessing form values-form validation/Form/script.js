//setting fields to check whether the input filled correctly or not
var nameCheck = false
var mobileCheck = false

//containers
var usernameContainer = document.querySelector(".username")
var mobileContainer = document.querySelector(".phone")

//selecting Icons
var usernameIcon = usernameContainer.querySelector("i")
var mobileIcon = mobileContainer.querySelector("i")

//selecting Labels
var usernameLabel = usernameContainer.querySelector("label")
var mobileLabel = mobileContainer.querySelector("label")

//selecting Input Box
var usernameInput = document.getElementById("username")
var mobileInput = document.getElementById("phone")


//username input
usernameInput.addEventListener("keyup",function(){
    var enteredValue = usernameInput.value

    if(enteredValue==""){
        //show label and hide icon
        usernameLabel.style.visibility="visible"
        usernameIcon.style.visibility="hidden"
        nameCheck = false 
    }
    else{
        //show icon and hide label
        usernameLabel.style.visibility="hidden"
        usernameIcon.style.visibility="visible"
        nameCheck = true
    }
})

//mobile input
mobileInput.addEventListener("keyup",function(){
    var enteredNumber = mobileInput.value

    if(enteredNumber==""){
        mobileLabel.style.visibility="visible"
        mobileIcon.style.visibility="hidden"
        mobileLabel.textContent="Please enter your mobile number"
        mobileCheck = false
    }
    else if(enteredNumber.length!=10){
        mobileLabel.style.visibility="visible"
        mobileIcon.style.visibility="hidden"
        mobileLabel.textContent="Please enter 10 digits Mobile Number"
        mobileCheck = false
    }
    else{
        mobileIcon.style.visibility="visible"
        mobileLabel.style.visibility="hidden"
        mobileCheck = true
    }

})

//selecting submit button
var submitBtn = document.getElementById("submitBtn")
var popup = document.querySelector(".popup")

submitBtn.addEventListener("click",function(e){
    //to preventing default refresh
    e.preventDefault()

    if(nameCheck==true && mobileCheck==true) {
        popup.textContent="Form filled Successfully";
        popup.style.backgroundColor="#6BE9FB";
        popup.style.top="10px"
        popup.style.opacity="1"
    }
    else{
        popup.style.top="10px"
        popup.style.opacity="1"
        popup.textContent="Please fill the form";
        popup.style.backgroundColor="red";
    }

    //run this line after 2s
    //set timeout (what should happen, after how many milliseconds )
    setTimeout(
        function(){
            popup.style.top="-40px"
            popup.style.opacity="0"
        },2000
    )
})  
