let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");

let img = document.getElementById("img");
let upload = document.getElementById("upload");

let reset = document.querySelector("span");
let imgBox = document.querySelector(".img-box");

function resetValue() {
  img.style.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  brightness.value = "100";
  sepia.value = "0";
  grayscale.value = "0";
  blur.value = "0";
  hueRotate.value = "0";
}

window.onload = function () {
  reset.style.display = "none";
  imgBox.style.display = "none";
};

// 29:00
upload.onchange = function () {
  reset.style.display = "block";
  imgBox.style.display = "block";

  // This is to read files or images
  //Add Image
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]); //the image you selected
  file.onload = function () {
    img.src = file.result;
  };
  resetValue();
};

//get all filters

let filters = document.querySelectorAll("ul li input");
filters.forEach(function (filter) {
  filter.addEventListener("input", function () {
    img.style.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)
        `;
  });
});
