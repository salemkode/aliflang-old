//استيراد النصوص
let req = new XMLHttpRequest();
let names = null;

req.open("GET", "data/json.json");
req.onload = () => {
  names = JSON.parse(req.responseText);
  names = names.header;
  ("use static");
  new e("hermes", names);
};
req.send();

/* النص المتغير */
var OSbu = document.querySelector("#os");
var OSName = "ويندوز";
var OSicon = "windows";
var OSlink = "Alif_Studio.msi";

if (navigator.appVersion.indexOf("Mac") != -1) {
  OSName = "ماك";
  OSicon = "apple";
  OSlink = "Alif_Studio_macOS.zip";
} else if (navigator.appVersion.indexOf("Linux") != -1) {
  OSName = "لينكس";
  OSicon = "linux";
  OSlink = "AlifStudio2.tar.gz";
}

OSbu.innerHTML = `<a href="https://www.aliflang.org/alifstudio/${OSlink}" target="_blank">
<i class="fab fa-${OSicon}"></i> تحميل لنضام <span id="os"> ${OSName} </span></a>`;

/* قتح و اغلاق الريط العلوي
 */
var buBar = document.querySelector("#bu-bar");
var Bar = document.querySelector("#bar");

buBar.addEventListener("click", buB_click);

function buB_click() {
  if (document.querySelector("#bar").style.display == "flex") {
    document.querySelector("#bar").style.display = "none";
  } else {
    document.querySelector("#bar").style.display = "flex";
  }
}

/* ضبط التوافقيه مع شاشات الهواتف*/

function resize() {
  document.querySelector("#title").style.marginTop = s ;
  navUl.style.height = "0";
  navUl.style.height = "auto";

  if(window.innerWidth > 610){
    document.querySelector("#bar").style.display = "flex";
  }else{
    document.querySelector("#bar").style.display = "none";

  }
}
let nav = document.querySelector("nav");
let navUl = document.querySelector("nav ul");
let s = (nav.offsetHeight ) +"px";

window.addEventListener("resize", resize);

resize();

