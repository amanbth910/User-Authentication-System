let userIdentifier = "";

function getUserData() {
    userIdentifier = document.getElementById("identifier").value;

    let user = {};

    if (userIdentifier.includes("@")) {
        user.email = userIdentifier;
        user.mobile = "";
    } else {
        user.email = "";
        user.mobile = userIdentifier;
    }

    return user;
}


document.getElementById("sendOtpBtn").addEventListener("click", function () {

    let user = getUserData();

    fetch("http://localhost:8080/api/send-otp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
    });

});


document.getElementById("verifyOtpBtn").addEventListener("click", function () {

    let user = getUserData();
    user.otp = document.getElementById("otp").value;

    fetch("http://localhost:8080/api/verify-otp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.text())
    .then(data => {

    alert(data);

    if(data === "OTP Verified Successfully"){

        document.getElementById("resetSection").style.display = "block";

    }

});

});


document.getElementById("resetPasswordBtn").addEventListener("click", function () {

    let user = getUserData();
    user.password = document.getElementById("newPassword").value;

    fetch("http://localhost:8080/api/reset-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.text())
    .then(data => {
        alert(data);

        if (data === "Password Reset Successfully") {
            window.location.href = "../login page/index.html";
        }
    });

});