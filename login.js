function validate() {
  //alert('validate')
  valid = true;

  // document.getElementById('nameerr').innerText = ''
  // document.getElementById('passerr').innerText = ''
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  if (username == "") {
    document.getElementById("error1").innerText = "specify username";
    valid = false;
  }

  if (password == "") {
    document.getElementById("error2").innerHTML = "specify password";
    valid = false;
  }
  if (username == "rutik" && password == "admin") {
    alert("Login Sucssesful");
    window.location.href="homepage/home.html";
  } else {
    alert("Login Failed");
  }

  return valid;
}
