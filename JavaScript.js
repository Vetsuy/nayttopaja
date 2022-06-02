function f2() {
    var submit = document.getElementById("submit").value;
    
      alert("Thanks for the submission");
}
    
function f1() {
var email = document.getElementById("email").value;
var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    
if(!filter.test(email))
    
alert("Please Enter Valid Email.");
}

function main() {
  f1();
  f2();
}