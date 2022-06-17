 const body = document.querySelector('body'),
 overlay = body.querySelector(".overlay"),
 icon = body.querySelector(".icon"),
 iconfade = body.querySelector(".icon-fade"),
 instrumentos = body.querySelector(".instrumentosimg");

 overlay.addEventListener("mouseover", () => {
    icon.classList.toggle("icon-fade");
 });

 overlay.addEventListener("mouseout", () => {
  icon.classList.toggle("icon-fade");
});



  // document.querySelectorAll(".icon").forEach(icon => icon.classList.toggle("icon-fade")))