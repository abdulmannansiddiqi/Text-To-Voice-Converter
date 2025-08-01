let speech = new SpeechSynthesisUtterance()

document.querySelector('button').addEventListener
('click',( ) =>{
    speech.text = document.querySelector('textarea').value
    window.speechSynthesis.speak(speech)
})

// How It Works:
// SpeechSynthesisUtterance() is a Web API that allows text-to-speech.

// You create a speech object and set its .text property.

window.speechSynthesis.speak(speech) triggers the speech.

