window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`div[data-key="${e.key}"]`);
  if (!audio) {
    return;
  }
  console.log(audio);
  console.log(key);

  key.classList.add("play");

  audio.currentTime = 0;

  audio.play();
});

const keys = document.querySelectorAll(".key");

console.log(keys);

keys.forEach((key) => {
  key.addEventListener("transitionend", function (e) {
    // console.log(e);
    if (e.type === "transitionend") {
      this.classList.remove("play");
    }
  });
});
