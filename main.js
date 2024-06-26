const buttonsList = document.querySelector(".teclado");
const soundsList = document.querySelectorAll("audio");

function setupEvents() {
  buttonsList.addEventListener("click", (buttonElement) => {
    playAudio(buttonElement);
    buttonElement.target.classList.add("ativa");
  });

  buttonsList.addEventListener("keydown", (buttonElement) => {
    if (
      buttonElement.key === "Enter" ||
      buttonElement.key === "p" ||
      buttonElement.key === " "
    ) {
      playAudio(buttonElement);
      buttonElement.target.classList.add("ativa");
    }
  });

  buttonsList.addEventListener("keyup", (buttonElement) => {
    buttonElement.target.classList.remove("ativa");
    console.log(buttonElement.target.classList);
  });

  function playAudio(audioElement) {
    const audioName = audioElement.target.classList[1].split("_")[1];

    const selectedAudio = [...soundsList].find((sound) => {
      const soundId = sound.id.split("_")[2];
      return soundId === audioName;
    });

    selectedAudio.play();
  }
}
setupEvents();
