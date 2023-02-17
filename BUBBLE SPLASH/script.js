const counterDisplay = document.querySelector("h3");
const time = document.querySelector("h4");
let counter = 0;
let theTime = 0;

//Fonction pour générer les bulles//
const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);
  const size = Math.random() * 200 + 100 + "px";

  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1; //ternaire pour obtenir une left négative, afin que les bulles changent de direction//
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });
  //suppression des bulles 8s après leur création//
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};
//création des bulles toutes les 0,4s//
setInterval(
  bubbleMaker,

  400
);

//affichage du temps en secondes//
const timer = () => {
  theTime++;
  time.textContent = "Temps : " + theTime + " secondes";
};

setInterval(
  timer,

  1000
);
