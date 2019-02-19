// Crea un array di numeri interi e fai
// la somma di tutti gli elementi che sono
// in posizione dispari

var myArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
var sumodd = 0;


for (var i=0; i < myArr.length; i++) {

  var odd = i%2;


  if (odd == true) {
    sumodd += myArr[i];
  }
}
document.getElementById("data").innerHTML = sumodd;
