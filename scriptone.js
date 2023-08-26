const form =document.getElementsByTagName('form')[0];
function validate() {
    var email = document.getElementById("email")
    var password = document.getElementById("pwd")
   var mobilenum = document.getElementById("mobile")
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
   var regexp2 =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    var regexp3 =/^\(?([0-9]{3})\)?[-. ]([0-9]{3})[-. ]([0-9]{4})$/


//var strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
//var mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')


    if(password.value.trim() ==="" || mobilenum.value.trim ==="" && password.value.trim() ==="" || email.value.trim() ===""){
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
else if(!regexp3.test(mobilenum.value)) {
    alert("Invalid Mobile No.");
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




    