// const SpeechRecognition = null;
export default class Speach {
  // constructor() {
  //   this.start();
  // }

  start() {
    console.log(this);
    // window.SpeechRecognition = window.SpeechRecognition || window.webkit.SpeechRecognition;

    // eslint-disable-next-line no-undef
    const recognition = new SpeechRecognition();
    console.log(recognition);
    recognition.interimResults = true;

    recognition.addEventListener('results', (e) => {
      console.log(e.results);
    });
  }
}
