// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
	const voiceSelect = document.getElementById("voice-select");
  let voices = [];

  const expose = document.getElementById("explore");
	const button = explore.querySelector("button");
  const image = explore.querySelector("img");

  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
}