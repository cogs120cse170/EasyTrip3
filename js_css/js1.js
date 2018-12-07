// document.getElementById("tags")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("forEnter").click();
//     }
// });

function land() {
  window.location.href = "./LandingPage.html";
}

function goBack() {
    window.history.back();
}

function signup() {
  localStorage.clear();

  var inputEmail = document.getElementById("Uemail");
  localStorage.setItem("Uemail", inputEmail.value);

  var inputName = document.getElementById("Uname");
  if (inputName.value) {
    // alert();
    localStorage.setItem("Uname", inputName.value);
    // alert(inputName.value);
  }
  var inputPW = document.getElementById("Upassword");
  localStorage.setItem("Upassword", inputPW.value);
  window.location.href = "./LandingPage.html";
}

function signin() {
  localStorage.clear();
  var inputName = document.getElementById("Ename");
  if (inputName.value) {
    localStorage.setItem("Uname", inputName.value);
  } else {
    localStorage.setItem("Uname", "Stranger");
  }
  var inputPW = document.getElementById("Epassword");
  localStorage.setItem("Upassword", inputPW.value);
  window.location.href = "./LandingPage.html";
}

function facebookSignin() {
  localStorage.clear();

  var inputName = document.getElementById("Fname");
  if (inputName.value) {
    localStorage.setItem("Uname", inputName.value);
  } else {
    localStorage.setItem("Uname", "Stranger");
  }
  var inputPW = document.getElementById("Fpassword");
  localStorage.setItem("Upassword", inputPW.value);
  window.location.href = "./LandingPage.html";
}

function googleSignin() {
  localStorage.clear();

  var inputName = document.getElementById("Gname");
  if (inputName.value) {
    localStorage.setItem("Uname", inputName.value);
  } else {
    localStorage.setItem("Uname", "Stranger");
  }
  var inputPW = document.getElementById("Gpassword");
  localStorage.setItem("Upassword", inputPW.value);
  window.location.href = "./LandingPage.html";
}

function tagAdd() {
  var userTags = [];
  if (localStorage.getItem("Utags")) {
    userTags = JSON.parse(localStorage.getItem("Utags"));
  }
  var userTag = document.getElementById("tags");
  if (userTag.value) {
    userTagJSONed = {
      'id': userTags.length + 1,
      'tag': "#" + userTag.value
    }
    userTags.push(userTagJSONed);
    localStorage.setItem("Utags", JSON.stringify(userTags));
  }
  window.location.href = "./profile.html";
}

// document.getElementById("tags")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("forEnter").click();
//     }
// });

function removeTag(tagID) {
  var userTags = JSON.parse(localStorage.getItem("Utags"));
  var toDelete = document.getElementById(tagID).innerHTML;
  toDelete = toDelete.substring(0, toDelete.length - 2);
  for (var i = 0; i < userTags.length; i++) {
    if (_.isEqual(toDelete, userTags[i].tag)) {
      userTags.splice(i, 1);
    }
  }
  localStorage.setItem("Utags", JSON.stringify(userTags));
  history.go(0);
}

// Facebook login
var modal = document.getElementById('fblogin');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Google login
var modal = document.getElementById('googlelogin');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function updateProfile() {
  var inputName = document.getElementById("getName");
  if (inputName.value)
    localStorage.setItem("Uname", inputName.value);

  var inputEmail = document.getElementById("getEmail");
  if (inputEmail.value)
    localStorage.setItem("Uemail", inputEmail.value);
  window.location.href = "./LandingPage.html";
}

// To remove tags
var closebtns = document.getElementsByClassName("tagClose");
var i;
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}

function calender() {
  var number = document.getElementsByClassName('form-control').length;
  var locations = [];
  var startDates = [];
  var endDates = [];

  var i;
  for (i = 0; i < number; i++) {
    locations.push(document.getElementsByClassName('form-control')[i].value);
    startDates.push(document.getElementsByClassName('start')[i].value);
    endDates.push(document.getElementsByClassName('end')[i].value);
  }

  // This is to save all places
  localStorage.setItem("Uplace", locations);

  // XXX If Implementing several trips,
  // var allTrips = [];
  // if (localStorage.getItem("Uplaces")) {
  //   allTrips = JSON.parse(localStorage.getItem("Uplaces"));
  // }
  // // var userTag = document.getElementById("tags");
  // if (locations.value) {
  //   locationsJSONed = {
  //     'id': allTrips.length + 1,  // XXX maybe different id required (if in need to be diff)
  //     'place': locations.value;
  //   }
  //   // alert(JSON.stringify(userTagJSONed));
  //   allTrips.push(locationsJSONed);
  //   localStorage.setItem("Uplaces", JSON.stringify(allTrips));
  // }

  localStorage.setItem("locations", JSON.stringify(locations));
  localStorage.setItem("startDates", JSON.stringify(startDates));
  localStorage.setItem("endDates", JSON.stringify(endDates));
  window.location.href = "./calendar.html";
}

function modifyDate(date){
    var year =date.substring(2,4);
    var day= date.substring(5,7);
    var month= date.substring(8);
    var formated= day+"/"+month+"/"+year
    return new Date(formated);
}

function calender1() {
  window.location.href = "./calendar.html";
}

function addPlace() {
  var dselected= localStorage.getItem("date_selected");
    var places=[];
    if (localStorage.getItem(dselected) === null) {
        places=[];
    }
    else{
       places= JSON.parse(localStorage.getItem(dselected));
    }



    var place= document.getElementById('titleFont').textContent;
    places.push(place);
    localStorage.setItem(dselected,JSON.stringify(places));
    //localStorage.setItem('places',"Metropolitan");
    window.location.href="../calendar.html";
}

function plan() {
  window.location.href = "./TripPlan.html";
}

function search() {
  window.location.href = "./search.html";
}

function review() {
  window.location.href = "./review.html";
}

function result() {
  var placeSearched = document.getElementById("toSearch");
  if (placeSearched.value) {
    localStorage.setItem("Usearch", placeSearched.value);
  } else {
    localStorage.setItem("Usearch", "-");
  }
  window.location.href = "./results.html";
}

document.getElementById("toSearch")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("forEnter").click();
    }
});



function newLoc() {
  var inputPlace = document.getElementById("Uplace");
  localStorage.setItem("Uplace", inputPlace.value);

  $("div.locations").append("<li><form class = \"form\">Place<p class=\"answerlist\" align=\"center\"><input type=\"text\" class=\"form-control\" name=\"location\" placeholder=\"Location\"></p></form></li><li>Dates </br>\<p class=\"answerlist\">From <input class=\"start\" type=\"date\"> to <input class=\"end\" type=\"date\"></p><br></li>")
}
// To popup fb login screen
function fb() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

// Create a new list trip to a landing page when "ADD" is clicked
function newTrip() {
  // new list to be added
  var li = document.createElement("li");
  // <input ~~~ id="myNewTrip" ~~~> to be entered when user makes action
  var inputValue = document.getElementById("myNewTrip").value;

  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    // alert("");
  } else {
    document.getElementById("myTripList").appendChild(li);
  }
  document.getElementById("myNewTrip").value = "";

  // var span = document.createElement("SPAN");
  // var txt = document.createTextNode("\u00D7");
  // span.className = "close";
  // span.appendChild(txt);
  // li.appendChild(span);
  //
  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     var div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // }
}
