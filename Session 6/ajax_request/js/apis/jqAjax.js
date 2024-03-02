//Updates screen from data
function screenUpdate() {
  document.getElementsByTagName("main")[0].style.display = "block";
  document.getElementById("DataGet").style.display = "none";
}
//Handles the api with ajax
function callAjax() {
  var query = document.getElementById("recipeInp").value;
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/recipe?query=" + query,
    headers: { "X-Api-Key": "tRDxrqYpnLzi7llQC06C4w==L86GCk9hhRmQXKvM" },
    contentType: "application/json",
    success: function (result) {
      console.log(result);
      PutData(result);
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}
//Global Data to handle the data better
let activeInstruct = {};
let globalResult;

//Dom manipulation
function PutData(result) {
  document.getElementById("lister").innerHTML = "";
  for (let i = 0; i < result.length; i++) {
    document.getElementById("lister").innerHTML += `
            <li onclick="changeIndex(${i});">${result[i].title}</li>
        `;
  }
  activeInstruct = result[0];

  if (result.length == 0) {
  } else {
    document.getElementById("instPoint").innerHTML = `
          <h4 class="text-center mt-3">${activeInstruct.title}</h4>
          <h6><b>Ingridients :</b></h6>
            <ul id="ingred">
            </ul>
          <h6><b>Instruction :</b></h6>
            <p>${activeInstruct.instructions}</p>
      `;
    let ingredSplit = activeInstruct.ingredients.split("|");
    for (let i = 0; i < ingredSplit.length; i++) {
      document.getElementById("ingred").innerHTML += `
          <li>${ingredSplit[i]}</li>
      `;
    }
  }
  document.getElementById("recAmm").innerHTML = result.length;
  globalResult = result;
}

//Updates the data of the global datas every time a new item is seleccted and calls updateData
function changeIndex(i) {
  let result = globalResult;
  activeInstruct = result[i];

  console.log(activeInstruct);
  updateData();
}

//it does reanalyzes the data and remanipulates DOM according to it
function updateData() {
  document.getElementById("instPoint").innerHTML = `
        <h4 class="text-center mt-3">${activeInstruct.title}</h4>
        <h6><b>Ingridients :</b></h6>
          <ul id="ingred">
          </ul>
        <h6><b>Instruction :</b></h6>
          <p>${activeInstruct.instructions}</p>
    `;
  const ingredSplit = activeInstruct.ingredients.split("|");
  for (let i = 0; i < ingredSplit.length; i++) {
    document.getElementById("ingred").innerHTML += `
        <li>${ingredSplit[i]}</li>
    `;
  }
}

//triggers when the document is loading..
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("recipeInp").value = "Ramen";
  document.getElementById("loader").innerHTML = "Loading";
  callAjax();
  document.getElementById("loader").innerHTML = "";
});

//shows loading so u dont have to wait even though this doesnt take much time to get data., still
function findIt() {
  document.getElementById("loader").innerHTML = "Loading";
  callAjax();
  document.getElementById("loader").innerHTML = "";
}
