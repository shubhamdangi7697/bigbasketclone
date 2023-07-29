var Otp = Math. floor(1000 + Math. random() * 9000);
let continueLogin = document.getElementById("continue");
continueLogin.onclick = function(){
    let mobile = document.getElementById("mobileNum");
    if (mobile.value.length == 10){
        document.getElementById("log-in").style.display = "none";
        console.log(Otp);
        
    } else {
        alert("Enter 10 digit mobile number");
        mobile.value= "";
    }
        window.location.assign = "index.html";
    
};
