const wsUri = 'wss://echo-ws-service.herokuapp.com';

const sendButton = document.querySelector('.send-message')
const locationButton = document.querySelector('.send-location');

let socket;

socket = new WebSocket(wsUri);
socket.onopen = function (evt) {};

function outputMessage(message) {
  let pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}

sendButton.addEventListener('click', e => {
  const input = document.querySelector('.message').value;
  const message = input;
  outputMessage("Отправитель: " + message);
  socket.send(message);

  socket.onmessage = function (evt) {
    outputMessage(
       '<span>Сервер: ' + evt.data + '</span>'
    );
 };
 socket.onerror = function (evt) {
    outputMessage(
       '<span style="color: red;">ERROR:</span> ' + evt.data
    );
 };
});


locationButton.addEventListener('click', () => {
  let position = navigator.geolocation.getCurrentPosition((position) => {
    outputMessage(
       `<a href="https://www.openstreetmap.org/#map=9/${position.coords.latitude}/${position.coords.longitude}">geolocation</a>`
    );
    socket.send = function (position) { };
 })
})


socket.addEventListener('open', () => {
  console.log('Connected to server.');
});