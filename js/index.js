//make a json object containing username and password
function checkLogin() {
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var curr = false;
  accounts.forEach((element) => {
    if (element.username == email && element.password == password) {
      console.log("User authentication successfull");
      curr = true;
    }
  });

  if (curr == true) {
    window.location.href = "src/home.html";
    return false;
  } else {
    alert("Please enter a valid username and password");
    return false;
  }
}
