const form =document.getElementsByTagName('form')[0];
function validate() {
    var email = document.getElementById("email")
    var password = document.getElementById("pwd")
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
    var regexp2 =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    if(email.value.trim() ==="" || password.value.trim() ===""){
        alert("Empty fields");
        return false;
}
else if(!regexp.test(email.value)) {
    alert("Invalid Email ");
    return false;
}
else if(!regexp2.test(password.value)) {
    alert("Invalid Password");
    return false;
}
else {
    return true;
}
}

form.addEventListener('submit' , function (event) {
    if(!validate()) {
        event.preventDefault();
    }
});