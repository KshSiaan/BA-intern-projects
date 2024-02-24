function add_row(name, rel, nid, num) {
  document.getElementById("tbody").innerHTML += `<tr class="cont">
                    <td><input type="text" name="" id="" value="${name}"></td>
                    <td><input type="text" name="" id="" value="${rel}"></td>
                    <td><input type="text" name="" id="" value="${nid}"></td>
                    <td><input type="text" name="" id="" value="${num}"></td>
                    <td class="center"><button type="button" onclick="deleter(this)">-</button></td>
                </tr>`;
}

function adder() {
  let nomName = document.getElementById("nomName");
  let nomRel = document.getElementById("nomRel");
  let nomNID = document.getElementById("nomNID");
  let nomNum = document.getElementById("nomNum");

  if (nomName.value == "") {
    alertify.warning("Please put value of Nominee Name");
  } else if (nomRel.value == "") {
    alertify.warning("Please put value of Relation with Nominee");
  } else if (nomNID.value == "") {
    alertify.warning("Please put value of Nominee NID/Birth Certificate");
  } else if (nomNum.value == "") {
    alertify.warning("Please put value of Nominee's Mobile Number");
  } else {
    add_row(nomName.value, nomRel.value, nomNID.value, nomNum.value);
  }
}

function deleter(x) {
  x.parentElement.parentElement.remove();
}
