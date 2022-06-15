let overlay = document.querySelector(".overlay");
let icon = document.querySelector(".icon");

overlay.addEventListener("mouseover", function (event) {
  //highlight the mouseover target
      if (icon.className == "icon") {
        icon.classList.remove("icon");
        icon.classList.add("icon-fade");
      }
    else {
      return
    }
  console.log(event)
}, false);

overlay.addEventListener("mouseout", function () {
  // highlight the mouseout target
  if (icon.className == "icon"){
    icon.classList.remove('icon-fade');
    icon.classList.add('icon')
  }
  else {
    return
  }
console.log("exit")

  }, false);