{
  let condition = Boolean(true);
  let conditionFlag = Boolean(true);

  const flagToggle = () => {
    const language = document.querySelector(".js-brightAndLanguage__flag");
    const polishFlag = "images/polish.png";
    const englishFlag = "images/english.png";

    if (conditionFlag === false) {
      conditionFlag = true;
      language.src = englishFlag;
    } else if (conditionFlag === true) {
      conditionFlag = false;
      language.src = polishFlag;
    }
  };
 const imgMainToggle = (imgMain) => {
    const ImageJacobFirst = "images/myfoto2.jpg";
    const ImageError = "images/error.png";

    if (conditionFlag === false) {
      imgMain.src = ImageError;
    } else if (conditionFlag === true) {
      imgMain.src = ImageJacobFirst;
    }
  };
  const aboutMeTextToggle = (aboutMe) => {
    if (aboutMe.innerHTML === "O mnie") {
      aboutMe.innerHTML =
        "<b>ERROR 666</b><br>We will provide English version as soon as possible! Sorry for the inconvenience.";
    } else {
      aboutMe.innerHTML = "O mnie";
    }
  };
  const brightnessToggle = (imgMain, aboutMe) => {
    const body = document.querySelector(".body");

    aboutMe.classList.toggle("aboutMe--colorWhite");
    body.classList.toggle("body--dark");
    imgMain.classList.toggle("imgMain--bright");
  };
  const moonSunIconToggle = () => {
    const moonSunElement = document.querySelector(".js-brightAndLanguage__moonSun");
    const sunImage = "images/sun.png";
    const moonImage = "images/moon.png";

    if (condition === false) {
      condition = true;
      moonSunElement.src = moonImage;
    } else if (condition === true) {
      condition = false;
      moonSunElement.src = sunImage;
    }
  };
  const init = () => {
    const langChange = document.querySelector(".brightAndLanguage__flag");
    const moonSunButton = document.querySelector(".brightAndLanguage__moonSun");

    const imgMain = document.querySelector(".imgMain");
    const aboutMe = document.querySelector(".aboutMe");

    langChange.addEventListener("click", () => {
      flagToggle();
      imgMainToggle(imgMain);
      aboutMeTextToggle(aboutMe);
    });
    moonSunButton.addEventListener("click", () => {
      brightnessToggle(imgMain, aboutMe);
      moonSunIconToggle();
    });
  };
  init();
}
