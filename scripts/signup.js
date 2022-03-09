let userData = JSON.parse(localStorage.getItem("userData")) || [];

document.getElementById('form_signup').addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    let obj ={
        uname: name,
        ucontact: contact,
        uemail: email,
        upassword: password,
    }
    console.log(obj)
    userData.push(obj);

    localStorage.setItem("userData",JSON.stringify(userData))
    window.location.href = "./login.html"
})