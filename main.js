let stats = false;
let mode = "dark";
function dropNavbar() {
  stats = !stats;
  if (stats) {
    document.getElementById("collapse").style.display = "block";
  } else {
    document.getElementById("collapse").style.display = "none";
  }
}
function darkMode() {
  if (mode === "dark") {
    mode = "light";
    document.getElementById("body").style.backgroundColor = "#0b0a19";
    const collection = document.getElementsByClassName("change");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.color = "white";
    }

  } else if (mode === "light") {
    mode = "dark";
    document.getElementById("body").style.backgroundColor = "white";
    const collection = document.getElementsByClassName("change");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.color = "black";
    }
  }
}

