document
.getElementById("signupForm")
.addEventListener("submit", function(e){

e.preventDefault();


let user = {

fullname: document.getElementById("name").value,

email: document.getElementById("email").value,

mobile: document.getElementById("mobile").value,

password: document.getElementById("password").value

};
let confirmPassword = 
document.getElementById("confirmPassword").value;


if(user.password !== confirmPassword){

    alert("Password does not match");
    return;

}



fetch("http://localhost:8080/api/signup",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(user)

})

.then(res=>res.text())

.then(data=>{

alert(data);

});


});