let speechSU = new window.SpeechSynthesisUtterance();

function submit() {
  let input = document.getElementById("mainInput")?.value;
  if (input) {
    speechSU.text = input;
    window.speechSynthesis.speak(speechSU);
  }
}
function deleteOne() {
  let input = document.getElementById("mainInput")?.value;
  if (input) {
    document.getElementById("mainInput").value = input.slice(0, -1);
  }
}
function clearInput() {
  let textArea = document.getElementById("mainInput");
  if (textArea) {
    textArea.value = "";
  }
}
function commonButton(type) {
  switch (type) {
    case "hungry":
      speechSU.text = "我饿了";
      break;
    case "thirsty":
      speechSU.text = "我渴了";
      break;
    case "urine":
      speechSU.text = "我想小便";
      break;
    case "poop":
      speechSU.text = "我想大便";
      break;
    case "sit":
      speechSU.text = "我想坐下";
      break;
    case "hello":
      speechSU.text = "你好";
      break;
    default:
      speechSU.text = "";
      break;
  }
  window.speechSynthesis.speak(speechSU);
}

function click(key) {
  if (key?.keyCode)
    switch (key?.keyCode) {
      case 90: commonButton('hungry');
        break;
      case 88: commonButton('thirsty');
        break;
      case 67: commonButton('urine');
        break;
      case 86: commonButton('poop');
        break;
      case 66: commonButton('sit');
        break;
      case 32: commonButton('hello');
        break;
    }
}

document.onkeydown = click;

// z 90
// x 88
// c 67
// v 86
// b 66
// n 78
// m 77
// space 32