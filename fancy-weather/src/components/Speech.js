export default class Speech {
  start() {
    const recognition = new (window.SpeechRecognition
      || window.webkitSpeechRecognition || window.mozSpeechRecognition
      || window.msSpeechRecognition)();

    console.log(recognition);
    recognition.interimResults = true;
    recognition.lang = 'en';
    // recognition.continuous = true;
    const div = document.createElement('div');
    document.body.append(div);

    recognition.start();

    recognition.addEventListener('results', (e) => {
      console.log(e.results);
      const p = document.createElement('p');
      p.innerHTML = e.results;
      div.append(p);
    });
  }
}
