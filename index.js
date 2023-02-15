var mapContainer = document.getElementById("kakaoMap"), // 지도를 표시할 div
  mapOption = {
    center: new daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
    level: 5, // 지도의 확대 레벨
  };

//지도를 미리 생성
var map = new daum.maps.Map(mapContainer, mapOption);
//주소-좌표 변환 객체를 생성
var geocoder = new daum.maps.services.Geocoder();
//마커를 미리 생성
var marker = new daum.maps.Marker({
  position: new daum.maps.LatLng(37.537187, 127.005476),
  map: map,
});

// Get the file picker element
var filePicker = document.getElementById("filePicker");

// Add event listener to update file name display
filePicker.addEventListener("change", function () {
  var fileNameDisplay = document.querySelector(".file-name-display");
  fileNameDisplay.textContent = this.files[0].name;
});
console.log("init");

function submitForm() {
  // Get the form element
  var form = document.getElementById("myForm");

  // Get all the form data
  var formData = new FormData(form);

  // Create a string with the form data
  var formDataString = "";
  for (var pair of formData.entries()) {
    formDataString += pair[0] + ": " + pair[1] + "\n";
  }

  var formDataJSON = Object.fromEntries(formData.entries());

  // Create a dialog with the form data
  alert("Data is...\n" + formDataString + "\n" + JSON.stringify(formDataJSON));
}
