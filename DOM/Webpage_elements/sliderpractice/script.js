//selecting right btn
var rightBtn = document.getElementById("right")
//selecting leftBtn
var leftBtn = document.getElementById("left")
//selecting slide
var  slider = document.querySelector(".slider-container")

//initializing margin
var margin = 0

rightBtn.addEventListener("click",function(){
    margin=margin+100
    // slider.style.marginLeft = "-"+margin+"vw"

    if(margin>300){
        margin=0
    }
    slider.style.marginLeft = "-"+margin+"vw"
})


// var marginL =-100
leftBtn.addEventListener("click",function(){
    
    if(margin<=0){
        margin=400
    }
    margin=margin-100
    slider.style.marginLeft = "-"+margin+"vw"

})