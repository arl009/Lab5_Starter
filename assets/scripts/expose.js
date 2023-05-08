// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
	const select = document.getElementById("horn-select");
  const slider = document.getElementById("volume");
  const image = document.querySelector("#volume-controls img");
  const expose = document.getElementById("expose");
	const button = expose.querySelector("button");
	const audio = expose.querySelector("audio");
  const horn = expose.querySelector("img");

  var type = null;
  select.addEventListener("change", (event) => {
		type = select.value;
    if (type === "air-horn"){
      horn.src = './assets/images/air-horn.svg';
      audio.src = './assets/audio/air-horn.mp3';
    }
    else if(type === "car-horn"){
      horn.src = './assets/images/car-horn.svg';
      audio.src = './assets/audio/car-horn.mp3';
    }
    else if(type === "party-horn"){
      horn.src = './assets/images/party-horn.svg';
      audio.src = './assets/audio/party-horn.mp3';
    }
	});

	slider.addEventListener("input", (event) => {
		const volume = slider.value;
    audio.volume = volume / 100;
		if (volume == 0) {
      image.src = "./assets/icons/volume-level-0.svg";
		}
		else if (volume < 33) {
      image.src = "./assets/icons/volume-level-1.svg";
    }
    else if (volume < 66) {
      image.src = "./assets/icons/volume-level-2.svg";
		}
    else {
      image.src = "./assets/icons/volume-level-3.svg";
		}
	});

	var confetti = new JSConfetti();
	button.addEventListener("click", (event) => {
		if (type === "party-horn") {
			confetti.addConfetti();
      audio.play();
		}
    else{
      audio.play();
    }
	});
}