{
const imgMain = document.querySelector(".imgMain");
const aboutMe = document.querySelector(".aboutMe");
let condition = Boolean(true);
let conditionFlag = Boolean(true);

const sunImage = "images/sun.png";
const moonImage = "images/moon.png";


const moonSunButton = document.querySelector(".brightAndLanguage__moonSun");
const langChange = document.querySelector(".brightAndLanguage__flag");

const body = document.querySelector(".body");
const moonSunElement = document.querySelector(".js-brightAndLanguage__moonSun");
const eng = document.querySelector(".eng");

const imgMainToggle = () => {

  const language = document.querySelector(".js-brightAndLanguage__flag");
  const ImageJacobFirst = "images/myfoto2.jpg";
  const ImageError = "images/error.png";
  const polishFlag = "images/polish.png";
  const englishFlag = "images/english.png";

  if (conditionFlag===false) {
    conditionFlag = true;
    language.src = englishFlag;
  } else if (conditionFlag===true){
    conditionFlag = false;
    language.src = polishFlag;
  }

  if (aboutMe.innerHTML === "O mnie") {
    aboutMe.innerHTML =
      "<b>ERROR 666</b><br>We will provide English version as soon as possible! Sorry for the inconvenience.";
  } else {
    aboutMe.innerHTML = "O mnie";
  }

  if (conditionFlag===false) {
    imgMain.src = ImageError;
  } else if (conditionFlag===true){
    imgMain.src = ImageJacobFirst;
  }
}
const brightnessToggle = () => {
  body.classList.toggle("body--dark");
  imgMain.classList.toggle("imgMain--bright");
  aboutMe.classList.toggle("aboutMe--colorWhite");
}
const moonSunIconToggle = () => {
  if (condition===false) {
    condition = true;
    moonSunElement.src = moonImage;
  } else if (condition===true) {
    condition = false;
    moonSunElement.src = sunImage;
  }
}
const init = () => {
  const text =
  "Wujek dobra rada: Jeśli późno wstaniesz, to możesz odrazu zjeść obiad i nie musisz robić śniadania";
  console.log(text);

  langChange.addEventListener("click", () => {
  imgMainToggle();
});
  moonSunButton.addEventListener("click", () => {
  brightnessToggle();
  moonSunIconToggle();
});
  

}
 init();
}