let text =
  "Wujek dobra rada: Jeśli późno wstaniesz, to możesz odrazu zjeść obiad i nie musisz robić śniadania";
let imageOne = "https://i.imgur.com/2ugcFV4.jpg";
let imageSecond = "https://i.imgur.com/rGFCAyO.png";
let sunImage = "https://i.imgur.com/mIGokM3.png";
let moonImage = "https://i.imgur.com/hNtINpm.png";
let polishFlag = "https://i.imgur.com/O3VfuOn.png";
let englishFlag = "https://i.imgur.com/wqdZedL.png";

let moonSunButton = document.querySelector(".brightAndLanguage__moonSun");
let langChange = document.querySelector(".brightAndLanguage__flag");
let imgMain = document.querySelector(".imgMain");
let body = document.querySelector(".body");
let moonSunElement = document.querySelector(".js-brightAndLanguage__moonSun");
let eng = document.querySelector(".eng");
let aboutMe = document.querySelector(".aboutMe");
let language = document.querySelector(".js-brightAndLanguage__flag");

console.log(text);

moonSunButton.addEventListener("click", () => {
  body.classList.toggle("body--dark");
  imgMain.classList.toggle("imgMain--bright");
  aboutMe.classList.toggle("aboutMe--colorWhite");
  if (moonSunElement.src === sunImage) {
    moonSunElement.src = moonImage;
  } else {
    moonSunElement.src = sunImage;
  }
});

langChange.addEventListener("click", () => {
  if (language.src === polishFlag) {
    language.src = englishFlag;
  } else {
    language.src = polishFlag;
  }

  if (aboutMe.innerHTML === "O mnie") {
    aboutMe.innerHTML =
      "<b>ERROR 666</b><br>We will provide English version as soon as possible! Sorry for the inconvenience.";
  } else {
    aboutMe.innerHTML = "O mnie";
  }

  if (imgMain.src === imageOne) {
    imgMain.src = imageSecond;
  } else {
    imgMain.src = imageOne;
  }
});
