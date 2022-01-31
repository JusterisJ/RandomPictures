let buttonNewPicture = document.querySelector(`.newPicture`);
let pictureDiv = document.querySelector(`.picture`);
let randomText = document.querySelector(`.randomText`);
let previousRandomNum = Number();
let data;
fetch(
  `https://raw.githubusercontent.com/JusterisJ/RandomPictures/main/data.json`
)
  .then((response) => response.json())
  .then((data) => imageLoad(data));

function imageLoad(duomenys) {
  data = duomenys;
  console.log(data);
}

buttonNewPicture.addEventListener(`click`, function () {
  changePictureAndQuote();
});

function changePictureAndQuote() {
  let randomNum = random();
  if (randomNum == previousRandomNum) {
    if ((previousRandomNum = !0)) {
      randomNum--;
    } else {
      randomNum++;
    }
  }
  previousRandomNum = randomNum;
  pictureDiv.innerHTML = `<img src=${data[randomNum].src} alt="" />`;
  randomText.textContent = data[randomNum].quote;
}
function random() {
  return Math.floor(Math.random() * (data.length - 1 - 0 + 1)) + 0;
}
