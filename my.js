//Elemek kigyűjtése

let buttonH1 = document.getElementById('buttonH1');
let buttonH2 = document.getElementById('buttonH2');
let buttonH3 = document.getElementById('buttonH3');
let buttonH4 = document.getElementById('buttonH4');
let buttonH5 = document.getElementById('buttonH5');
let buttonH6 = document.getElementById('buttonH6');

let red = document.getElementById('red');
let buttonP = document.getElementById('buttonP');
let Link = document.getElementById('buttonLink')
let buttonStrong = document.getElementById('buttonStrong');
let buttonOl = document.getElementById('buttonOl');
let buttonUl = document.getElementById('buttonUl');

let buttonB = document.getElementById('buttonB');
let buttonI = document.getElementById('buttonI');
let buttonSup = document.getElementById('buttonSup');
let buttonSub = document.getElementById('buttonSub');
let buttonS = document.getElementById('buttonS');
let buttonU = document.getElementById('buttonU');
let buttonMark = document.getElementById('buttonMark');

let input = document.getElementById('input');
let output = document.getElementById('output');

RenderOutput();

//Események és eseménykezelők
buttonH1.addEventListener('click', OnClickH1);
buttonH2.addEventListener('click', OnClickH2);
buttonH3.addEventListener('click', OnClickH3);
buttonH4.addEventListener('click', OnClickH4);
buttonH5.addEventListener('click', OnClickH5);
buttonH6.addEventListener('click', OnClickH6);

buttonB.addEventListener('click', OnClickB);
buttonI.addEventListener('click', OnClickI);
buttonSup.addEventListener('click', OnClickSup);
buttonSub.addEventListener('click', OnClickSub);
buttonS.addEventListener('click', OnClickS);
buttonU.addEventListener('click', OnClickU);
buttonMark.addEventListener('click', OnClickMark);

red.addEventListener('click', OnClickRed);
yellow.addEventListener('click', OnClickyellow);
green.addEventListener('click', OnClickgreen);
blue.addEventListener('click', OnClickblue);
white.addEventListener('click', OnClickwhite);
brown.addEventListener('click', OnClickbrown);
buttonP.addEventListener('click', OnClickP);
Link.addEventListener('click',OnClickLink);
buttonOl.addEventListener('click',onClickOl);
buttonUl.addEventListener('click',onClickUl);

buttonStrong.addEventListener('click', OnClickStrong);
input.addEventListener('keyup', RenderOutput);


function GetWrappedSelection(text, start, end, statTag, endTag) {
    let left = text.slice(0, start);
    let middle = text.slice(start, end);
    let right = text.slice(end);
    let newText = `${left}${statTag}${middle}${endTag}${right}`;
    return newText;
}

function OnClickH1() {
    Changer(
        "<h1>", 
        "</h1>"
        );
}
function OnClickH2() {
    Changer(
        "<h2>", 
        "</h2>"
        );
}
function OnClickH3() {
    Changer(
        "<h3>", 
        "</h3>"
        );
}
function OnClickH4() {
    Changer(
        "<h4>", 
        "</h4>"
        );
}
function OnClickH5() {
    Changer(
        "<h5>", 
        "</h5>"
        );
}
function OnClickH6() {
    Changer(
        "<h6>", 
        "</h6>"
        );
}

function OnClickP() {
    let statTag = "<p>";
    let endTag = "</p>";
    Changer(statTag, endTag);
}

function OnClickB() {
    let statTag = "<b>";
    let endTag = "</b>";
    Changer(statTag, endTag);
}
function OnClickI() {
    let statTag = "<i>";
    let endTag = "</i>";
    Changer(statTag, endTag);
}
function OnClickSup() {
    let statTag = "<sup>";
    let endTag = "</sup>";
    Changer(statTag, endTag);
}
function OnClickSub() {
    let statTag = "<sub>";
    let endTag = "</sub>";
    Changer(statTag, endTag);
}
function OnClickS() {
    let statTag = "<s>";
    let endTag = "</s>";
    Changer(statTag, endTag);
}
function OnClickU() {
    let statTag = "<u>";
    let endTag = "</u>";
    Changer(statTag, endTag);
}
function OnClickMark() {
    let statTag = "<mark>";
    let endTag = "</mark>";
    Changer(statTag, endTag);
}



function OnClickLink() {
    let statTag = "<a href='#'>";
    let endTag = "</a>";
    Changer(statTag, endTag);
}

function OnClickStrong() {
    let statTag = "<strong>";
    let endTag = "</strong>";
    Changer(statTag, endTag);
}
function onClickOl() {
    let statTag = "<ol><li>";
    let endTag = "</li></ol>";
    Changer(statTag, endTag);
}
function onClickUl() {
    let statTag = "<ul><li>";
    let endTag = "</li></ul>";
    Changer(statTag, endTag);
}

function OnClickRed() {
    let statTag = "<span style='color: red;'>";
    let endTag = "</span>";
    Changer(statTag, endTag);
}
function OnClickyellow() {
    let statTag = "<span style='color: yellow;'>";
    let endTag = "</span>";
    Changer(statTag, endTag);
}
function OnClickgreen() {
    let statTag = "<span style='color: green;'>";
    let endTag = "</span>";
    Changer(statTag, endTag);
}
function OnClickblue() {
    let statTag = "<span style='color: blue;'>";
    let endTag = "</span>";
    Changer(statTag, endTag);
}
function OnClickwhite() {
    let statTag = "<span style='color: white;'>";
    let endTag = "</span>";
    Changer(statTag, endTag);
}
function OnClickbrown() {
    let statTag = "<span style='color: brown;'>";
    let endTag = "</span>";
    Changer(statTag, endTag);
}

function Changer(statTag, endTag) {
    let text = input.value;
    let start = input.selectionStart;
    let end = input.selectionEnd;
    input.value = GetWrappedSelection(text, start, end, statTag, endTag);
    RenderOutput();
}

function RenderOutput() {
    let html = input.value;
    output.innerHTML = html;
}