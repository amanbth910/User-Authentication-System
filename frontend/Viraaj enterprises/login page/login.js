document
.getElementById("loginForm")
.addEventListener("submit",function(e){

e.preventDefault();


let user={

email:document.getElementById("email").value,

password:document.getElementById("password").value

};



fetch("http://localhost:8080/api/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(user)

})

.then(res=>res.text())

.then(data=>{

if(data=="Login Successful"){

    localStorage.setItem("loggedIn","true");

    window.location.href="dashboard.html";

}
else{

    alert(data);

};

});


});