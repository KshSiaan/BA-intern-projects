// For the button before getting in
function screenUpdate() {
  document.getElementsByTagName("main")[0].style.display = "block";
  document.getElementById("DataGet").style.display = "none";
  XhrReq();
}

//Dom manipulation as the data comes from the request
function doStuff(data) {
  let cleanData = JSON.parse(data);

  document.getElementById("timeSet").innerHTML =
    "Most Recent " +
    "<u>SpaceX</u>" +
    " Launch record from  " +
    cleanData.date_utc;
  document.getElementById("logoPatch").src = cleanData.links.patch.small;
  document.getElementById("missionName").innerHTML =
    "Mission : " + cleanData.name;

  tableFillup(cleanData);
}

//This acctually request the Xhr Data and handles it then sends data to doStuff()
function XhrReq() {
  let xhrApi = new XMLHttpRequest();
  xhrApi.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      doStuff(this.responseText);
    }
  };

  xhrApi.open("GET", "https://api.spacexdata.com/v5/launches/latest", true);
  xhrApi.send();
}

// This fills up the table with data
function tableFillup(param) {
  let datas = [
    {
      topic: "Launchpad ID",
      data: param.launchpad,
    },
    {
      topic: "Flight Number",
      data: param.flight_number,
    },
    {
      topic: "Rocket ID",
      data: param.rocket,
    },
  ];

  for (let j = 0; j < param.crew.length; j++) {
    datas.push({ topic: j + 1 + "th Crew", data: param.crew[j].role });
  }

  for (let i = 0; i < datas.length; i++) {
    document.getElementById("datatableBody").innerHTML += `
    <tr>
            <th scope="row">${i}</th>
            <td>${datas[i].topic}</td>
            <td>${datas[i].data}</td>
    </tr>
    `;
  }
}
