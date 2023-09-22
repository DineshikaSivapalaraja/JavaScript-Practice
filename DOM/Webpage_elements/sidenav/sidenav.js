//selecting close icon in navbar
var closenav = document.getElementById("closenav")
//selecting sidebar
var sidenav = document.querySelector(".sidenav")
//selecting menu bar icon
var menubar = document.getElementById("menubar")

//closing the nav bar
closenav.addEventListener("click",function(){
    sidenav.style.left="-40%";
})

//calling navbar after closing it
menubar.addEventListener("click",function(){
    sidenav.style.left="0px";
})
