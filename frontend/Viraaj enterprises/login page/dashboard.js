document
.getElementById("logoutBtn")
.addEventListener("click",()=>{

window.location.href="login.html";

});

if(!localStorage.getItem("loggedIn")){

    window.location.href="login.html";

}


document
.getElementById("logoutBtn")
.addEventListener("click",function(){

    localStorage.removeItem("loggedIn");

    window.location.href="login.html";

});