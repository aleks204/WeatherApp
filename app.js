// api key : 4f9b61c1f110cb3e6c00bfc1646b8c95

let latitude;
let longitude;
const notification = document.getElementsByClassName("notification")[0];

function getLocation() {
  if (navigator.geolocation);
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position) {
  console.log(position);
}

function onError(error) {
  console.log("Unable to retrieve your location", error);
  notification.innerHTML = error.message;

  const p = document.createElement("p");
  p.innerHTML = error.message;

  notification.style.display = "block";
  notification.appendChild(p);
}

getLocation();
