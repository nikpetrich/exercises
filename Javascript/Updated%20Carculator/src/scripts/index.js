import '../styles/index.css';
console.log("start");
var _cMem = 0;
var calcHistory = [];

//function to show the value of the buttons inside the display
function insert(num) {
  document.form.textview.value = document.form.textview.value+num;
}
window.insert = insert;
//equal function 



function addToHistory(exp, result) {
  calcHistory.push(exp + " = " + result);
  
}

function showHistory() {
  
  var element = document.getElementById('historyWindow'); 
  element.innerHTML = "";

  for(let i = 0;i < calcHistory.length; i++) {
    var div = document.createElement('div');
    div.textContent =  calcHistory[i]; //anpassen
    element.appendChild(div);

  }
}

//clean function
function clean () {
  document.form.textview.value = "";
}
window.clean = clean;
//back function
function back () {
  let exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0,exp.length-1); //genauer erklären
}
window.back = back;
//percent function useless now323
function percent () {
  let exp = document.form.textview.value;
  result = exp * 0.5;
  document.form.textview.value = result; 
  
}
window.percent = percent;

//radic function
function radic () {
  let exp = document.form.textview.value;
  document.form.textview.value = Math.sqrt(exp);
}
window.radic = radic;

//pow 2 function
function pow2 () {
  let exp = document.form.textview.value;
  document.form.textview.value = Math.pow(exp, 2);
}
window.pow2 = pow2;

//pow 3 function
function pow3 () {
  let exp = document.form.textview.value;
  document.form.textview.value = Math.pow(exp, 3);
}
window.pow3 = pow3;

//MS-save

document.getElementById("equal").addEventListener("click", function (){

  var exp = document.form.textview.value;

  //shows the result inside the input
  var result = eval(exp); 
  document.form.textview.value =result; 
  addToHistory(exp,result);
  showHistory();
});


document.getElementById("MS").addEventListener("click", function(){
  _cMem =Number(document.form.textview.value);
});
//M+ add
document.getElementById("M+").addEventListener("click", function(){
  _cMem += Number(eval(document.form.textview.value));
  console.log(_cMem);
});
//M- add
document.getElementById("M-").addEventListener("click", () => {
  _cMem -= Number(eval(document.form.textview.value));
  console.log(_cMem);
});
//MR-recall
document.getElementById("MR").addEventListener("click", () => {
  document.form.textview.value = _cMem;
});
//MC-clear
document.getElementById("MC").addEventListener("click", function (){
  _cMem = 0 ;
});

/*


document.getElementById("historyWindow").innerHtml.addEventListener("click", function(){

}) = document.form.textview.value + "=" + exp;
function equal() {
  document.getElementById("history").append(document.getElementById("bar").val()+"=")
   var a3 = c(eval($("#bar").val()))
}*/





