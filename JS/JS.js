function calcularPerimetro() {
  var base = parseFloat(document.getElementById("base").value);
  var lado = parseFloat(document.getElementById("lado").value);

  var perimetro = 2 * (base + lado);
  
  document.getElementById("resultado").innerHTML = "El perímetro del paralelogramo es: " + perimetro;
}



