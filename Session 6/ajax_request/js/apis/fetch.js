// starting button handler
function screenUpdate() {
  document.getElementsByTagName("main")[0].style.display = "block";
  document.getElementById("DataGet").style.display = "none";
  callFetchAPI();
}
const year = "2020";
const month = "11";
const day = "21";
let currentIndex = 0;

//Handles the fetch api action and sends data in handleData();
function callFetchAPI() {
  const metadataUrl = `https://epic.gsfc.nasa.gov/api/natural/date/${year}-${month}-${day}`;

  fetch(metadataUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      handleData(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// Handles the data and dom
function handleData(data) {
  ImgLoading("ongoing");

  let imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${data[currentIndex].image}.png`;
  document.getElementById("imgPoint").src = imageUrl;

  document.getElementById("datePut").innerHTML =
    day + " - " + month + " - " + year;

  showIndex();
}

// hadles the buttons that chooses next or previous image
function updateIndex(x) {
  switch (x) {
    case "back":
      currentIndex = currentIndex - 1;
      break;
    case "forward":
      currentIndex = currentIndex + 1;
      break;
  }
  checkIndex();
  showIndex();
}
//Validates data range and recalls the api for img
function checkIndex() {
  if (currentIndex <= 0) {
    currentIndex = 0;
  } else if (currentIndex >= 11) {
    currentIndex = 11;
  }
  callFetchAPI();
}
// dom to show image
function showIndex() {
  document.getElementById("index").innerHTML = currentIndex;
}
//Loading operation cause the image takes a while to load and user may will think this isnt working
function ImgLoading(x) {
  if (x == "ongoing") {
    document.getElementById("loadPut").innerHTML = "Loading..";
  }
}
document.getElementById("imgPoint").addEventListener("load", () => {
  document.getElementById("loadPut").innerHTML = "";
});
