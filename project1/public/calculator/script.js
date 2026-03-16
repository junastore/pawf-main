// ============================
// SIMPLE CALCULATOR SCRIPT
// ============================

const display = document.getElementById("display");
const expression = document.getElementById("expression");

let currentInput = "";

// tampilkan angka/operator
function appendValue(value){

currentInput += value;

display.value = formatDisplay(currentInput);

}

// hapus semua
function clearDisplay(){

currentInput = "";
display.value = "";
expression.textContent = "";

}

// hapus satu karakter
function deleteLast(){

currentInput = currentInput.slice(0,-1);

display.value = formatDisplay(currentInput);

}

// hitung hasil
function calculate(){

if(currentInput === "") return;

try{

expression.textContent = formatDisplay(currentInput) + " =";

let result = eval(currentInput);

display.value = result;

currentInput = result.toString();

}catch{

display.value = "Error";
currentInput = "";

}

}

// ubah simbol supaya cantik
function formatDisplay(str){

return str
.replace(/\*/g,"×")
.replace(/\//g,"÷")
.replace(/-/g,"−");

}

// keyboard support
document.addEventListener("keydown",(e)=>{

let key = e.key;

if(key >= "0" && key <= "9") appendValue(key);

else if(key === "+") appendValue("+");

else if(key === "-") appendValue("-");

else if(key === "*") appendValue("*");

else if(key === "/") appendValue("/");

else if(key === ".") appendValue(".");

else if(key === "%") appendValue("%");

else if(key === "Enter") calculate();

else if(key === "Backspace") deleteLast();

else if(key === "Escape") clearDisplay();

});