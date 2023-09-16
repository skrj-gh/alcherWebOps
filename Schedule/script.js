var acc = document.getElementsByClassName("card");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var isActive = this.classList.contains("active");
    for (var j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
    }
    if (!isActive) {
      this.classList.add("active");
    }
    else {
      acc[0].classList.add("active");
    }
  });
}
