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

if (localStorage.getItem("Utags")) {
  // Retrieving UTags
  var userTags = [];
  userTags = JSON.parse(localStorage.getItem("Utags"));
  // alert(userTags);

  var source = document.getElementById("tagButton").innerHTML;
  var template = Handlebars.compile(source);

  var parentDiv = $("#templatedButton");

  for (var i = 0; i < userTags.length; i++) {
    var curData = userTags[i];
    // alert("here");
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }
  // document.getElementById("getTags").innerHTML = userTags;
} else {
  document.getElementById("getTags").innerHTML = "-";
}
