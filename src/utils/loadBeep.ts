import gratationalBeep from "../assets/audio/gravitational-beep.mp3";

//Safari only plays audio if it is loaded beforehand
export function loadBeep() {
  const audio = new Audio(gratationalBeep);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch((error) => console.log("Error on audio play", error));
  };
}
