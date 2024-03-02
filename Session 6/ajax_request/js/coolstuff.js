const navword = document.getElementsByClassName("navword");

function Open() {
  for (let i = 0; i < navword.length; i++) {
    navword[i].style.display = "flex";
    document.getElementsByClassName("navicons")[i].style.paddingRight = "12px";
  }
  document.getElementsByTagName("aside")[0].style.width = "18%";
}
function Close() {
  for (let i = 0; i < navword.length; i++) {
    navword[i].style.display = "none";
    document.getElementsByClassName("navicons")[i].style.paddingRight = 0;
  }
  document.getElementsByTagName("aside")[0].style.width = "5%";
}

document.body.onload(Close());
