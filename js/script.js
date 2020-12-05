//hermes
let req = new XMLHttpRequest();
let names = null;
req.open("GET", "../data/json.json");
req.onload = () => {
  names = JSON.parse(req.responseText);
  names = names.header;
  ("use static");
  new e("hermes", names);
};
req.send();

var OSbu = document.querySelector("#os");
var OSName = "ويندوز";
var OSicon = "windows";
var OSlink = "Alif_Studio.msi"; 

if (navigator.appVersion.indexOf("Mac") != -1) {
  OSName = "ماك";
  OSicon = "apple"
  OSlink = "Alif_Studio_macOS.zip"
} else if (navigator.appVersion.indexOf("Linux") != -1) {
  OSName = "لينكس";
  OSicon = "linux";
  OSlink = "AlifStudio2.tar.gz"
}

OSbu.innerHTML = `<a href="https://www.aliflang.org/alifstudio/${OSlink}" target="_blank">
<i class="fab fa-${OSicon}"></i> تحميل لنضام <span id="os"> ${OSName} </span></a>`;
