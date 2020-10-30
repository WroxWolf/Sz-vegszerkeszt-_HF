//Elemek kigyűjtése

let buttonH1 = document.getElementById('buttonH1');
let buttonP = document.getElementById('buttonP');
let buttonStrong = document.getElementById('buttonStrong');
let input = document.getElementById('input');
let output = document.getElementById('output');

RenderOutput();

//Események és eseménykezelők
buttonH1.addEventListener('click', OnClickH1);
buttonP.addEventListener('click', OnClickP);
buttonStrong.addEventListener('click', OnClickStrong);
red.addEventListener('click', OnClickRed);
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

function OnClickP() {
    let statTag = "<p>";
    let endTag = "</p>";
    Changer(statTag, endTag);
}

function OnClickStrong() {
    let statTag = "<strong>";
    let endTag = "</strong>";
    Changer(statTag, endTag);
}

function OnClickRed() {
    let statTag = "<span style='color: red; font-weight: bold'>";
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