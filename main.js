const buttonsList = document.querySelectorAll(".tecla");
const soundsList = document.querySelectorAll("audio");

let pom = document.querySelector("#som_tecla_pom");

buttonsList.forEach((buttonsListItem) => {
  buttonsListItem.addEventListener("click", (e) => {

    const button = e.target.classList[1].split("_")[1];

    soundsList.forEach((play) => {

      const audio = play.id.split("_")[2];

      if (button === audio) {
        play.play();
      }
    });
  });
});
