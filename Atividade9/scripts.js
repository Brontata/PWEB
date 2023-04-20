function mostrarMaior() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
  
    var maior = num1;
    if (num2 > maior) {
      maior = num2;
    }
    if (num3 > maior) {
      maior = num3;
    }
  
    document.getElementById("resultado").innerHTML = "O maior número é " + maior;
  }
  
  function mostrarOrdenados() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
  
    var ordenados = [num1, num2, num3].sort(function(a, b){return a - b});
  
    document.getElementById("resultado").innerHTML = "Os números ordenados são " + ordenados.join(", ");
  }
  