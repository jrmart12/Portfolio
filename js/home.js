document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".loading").style.visibility = "visible";
  } else {
    document.querySelector(".loading").style.visibility = "hidden";
    document.querySelector("body").style.visibility = "visible";
  }
};

window.addEventListener("load", () => {
  document.querySelector("body").classList.add("loaded");
});
