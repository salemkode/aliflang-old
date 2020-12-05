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

var OSName = "ويندوز";
var OSicon = "windows";
var OSbu = document.querySelector("#os");

if (navigator.appVersion.indexOf("Mac") != -1) {
  OSName = "ماك";
  OSicon = "apple"
} else if (navigator.appVersion.indexOf("Linux") != -1) {
  OSName = "لينكس";
  OSicon = "linux";
}

OSbu.innerHTML = `<i class="fa fa-${OSicon}"></i> تحميل لنضام <span id="os"> ${OSName} </span>`;
