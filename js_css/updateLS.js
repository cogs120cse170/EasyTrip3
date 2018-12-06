
if (localStorage.getItem("Uname")) {
  document.getElementById("getName").innerHTML = localStorage.getItem("Uname");
} else {
  document.getElementById("getName").innerHTML = "S";
}

if (localStorage.getItem("Uemail")) {
  document.getElementById("getEmail").innerHTML = localStorage.getItem("Uemail");
} else {
  document.getElementById("getEmail").innerHTML = "-";
}
