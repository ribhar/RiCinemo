let userData = JSON.parse(localStorage.getItem("userData")) || [];

document.getElementById('form_login').addEventListener("submit", function(event){
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    var flag = false;
        for (var i = 0; i<userData.length; i++) {
            if (userData[i].uemail === email && userData[i].upassword === password) {
                flag = true;
                break;
            }
        }
        if(flag){
            alert("Login Success");
            window.location.href = "index.html";
        }
        else {
            alert("Invalid Credentials");
        }
   
})