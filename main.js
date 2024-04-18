var speech_to_text = window.webkitSpeechRecognition;
var recognition = new speech_to_text;

function start() {
    document.getElementById("textbox").innerHTML = " ";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var result = event.results[0][0].transcript;
    console.log(result);
    document.getElementById("textbox").innerHTML = result;
    speak();
}
function speak() {
    var text_to_speech = window.speechSynthesis;
    var data = document.getElementById("textbox").value;
    var convert = new SpeechSynthesisUtterance(data);
    text_to_speech.speak(convert);
    Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    img_format:"png",
    png_quality:90
});
var camera = document.getElementById("camera");


