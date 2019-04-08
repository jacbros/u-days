function accordion() {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

function startTid() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTid(m);
  s = checkTid(s);
  document.getElementById('tid').innerHTML = "<span class='timedisplay'>" +  h + ":" + m + ":" + s +
   "</span>";
  var t = setTimeout(startTid, 500);
}
function checkTid(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

function vaelgPil(idElement, dataNameElement, viewBoxElement, styleElement, polylineElement, uddannelseElement, infoElement, overskriftElement) {
    var divPil = "";
    var divMaal = "";
    var divUddannelser = "";

    for (var i = 0; i < idElement.length; i++) {
        divPil +=
            '<svg id="pil' + idElement[i] + '" class="arrows" data-name="' + dataNameElement[i] + '" xmlns="http://www.w3.org/2000/svg" viewBox="' + viewBoxElement[i] + '"><defs><style>@keyframes offset { to {stroke-dashoffset: 0; } } ' + styleElement[i] + ' fill: none;stroke: #f8a41a;stroke-miterlimit: 10;stroke-width: 10px;}  </style></defs><title>pil1.1</title><polyline' + polylineElement[i] + ' /></svg>';
        divMaal +=
            '<button class="accordion" onclick="togglePil(' + idElement[i] + ')"><h2>' + uddannelseElement[i] + '</h2><img src="startarrow.png" alt="pil"><svg id="herestatic' + idElement[i] + '" class="hereposition" data-name="herestatic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.49 283"><defs><style>.cls-1 {fill: #f8a41a;} .hereposition{ position: absolute; width:30px;}</style></defs><title>herestatic</title><ellipse class="cls-1" cx="136.64" cy="263.11" rx="95.86" ry="19.89" /><path class="cls-1" d="M177.13,275.15c27.88-1.62,55.81-1.06,83.71-.52,13.78.27,27.55.5,41.34.52,12.08,0,24.87.22,36.83,3,25.9-49.69,47.37-99.93,47.37-129.85a136.25,136.25,0,0,0-272.5,0c0,30,21.57,80.39,47.54,130.19A50.65,50.65,0,0,1,177.13,275.15ZM250,95a54,54,0,1,1-54,54A54,54,-1,0,1,250,95Z" transform="translate(-113.88 -12)" /></svg></button><div class="panel"><h3>' + overskriftElement[i] + '</h3><br><p>' + infoElement[i] + '</p></div>';

    }
    document.getElementById("guidearrow").innerHTML = divPil;
    document.getElementById("uddannelseinfo").innerHTML = divMaal;

    accordion();
}


function togglePil(idElement2) {
    var show = document.getElementById("pil" + idElement2);

    if (getComputedStyle(show).display === "none") {
        show.style.display = "block";
    } else {
        show.style.display = "none";
    }
}



// Hovedprogramdel

var uddannelser = ['Finansøkonom', 'Datamatiker', 'Multimediedesigner', 'IT-teknolog', 'Serviceøkonom'];
var overskrift = ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet','For dig der vil arbejde med digitale medier','Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet'];
var info = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet facilisis placerat. Donec posuere, diam id pretium facilisis, nisi enim eleifend lorem, vitae faucibus mauris velit ut nulla. Duis vulputate molestie accumsan. Cras rutrum tellus odio, at faucibus orci placerat vel. Nunc vitae nulla dapibus eros pretium tristique ac sit amet est.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet facilisis placerat. Donec posuere, diam id pretium facilisis, nisi enim eleifend lorem, vitae faucibus mauris velit ut nulla. Duis vulputate molestie accumsan. Cras rutrum tellus odio, at faucibus orci placerat vel. Nunc vitae nulla dapibus eros pretium tristique ac sit amet est.', 'Vil du arbejde professionelt med udvikling og implementering af digitale brugeroplevelser, digitalt design og programmering? Så skal du være multimediedesigner.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet facilisis placerat. Donec posuere, diam id pretium facilisis, nisi enim eleifend lorem, vitae faucibus mauris velit ut nulla. Duis vulputate molestie accumsan. Cras rutrum tellus odio, at faucibus orci placerat vel. Nunc vitae nulla dapibus eros pretium tristique ac sit amet est.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet facilisis placerat. Donec posuere, diam id pretium facilisis, nisi enim eleifend lorem, vitae faucibus mauris velit ut nulla. Duis vulputate molestie accumsan. Cras rutrum tellus odio, at faucibus orci placerat vel. Nunc vitae nulla dapibus eros pretium tristique ac sit amet est.'];

var id = [1, 2, 3, 4, 5];
var viewBox = ["0 0 486.53 144.24", "0 0 435.18 455.93", "0 0 449.51 93.02", "0 0 757.95 99.41", "0 0 896.42 175.8"];
var style = ["#guide1 {animation: offset 0.5s ease forwards; stroke-dasharray: 611.127; stroke-dashoffset: 611.127;", "#guide2 {animation: offset 0.5s ease forwards; stroke-dasharray: 868.764; stroke-dashoffset: 868.764;", "#guide3 {animation: offset 0.5s ease forwards; stroke-dasharray: 579.377; stroke-dashoffset: 579.377;", "#guide4 {animation: offset 0.5s ease forwards; stroke-dasharray: 894.101; stroke-dashoffset: 894.101;", "#guide5 {animation: offset 0.5s ease forwards; stroke-dasharray: 1048.389; stroke-dashoffset: 1048.389;"];
var polyline = [' id="guide1" y="1000" points="480.97 144.18 481.47 100.18 13.47 100.18 13.47 21.18 4.47 39.18"', ' id="guide2" points="5.5 455.93 5.5 195.43 422.5 195.43 422.5 19.43 430.5 32.43"', ' id="guide3" points="5.5 69 5.5 5.5 436.5 5.5 436.5 75.5 445 63.29"', ' id="guide4" points="5.5 69 5.5 5.5 745.5 5.5 745.5 82.5 753.5 71.5"', ' id="guide5" points="5.5 175.8 5.5 112.3 883.5 112.3 883.5 23.3 891.5 39.3"'];



vaelgPil(id, uddannelser, viewBox, style, polyline, uddannelser, info, overskrift);

