let pregunta = (prompt("¿estas buscando departamentos o casas?"));
if (pregunta == "departamentos") {
    alert ("tenemos estos departamentos para mostrarte");
} else if (pregunta == "casas") {
    alert ("tenemos estas casas para mostrarte");
} else {
    alert ('ingresa "departamentos" o "casas" para poder ayudarte ');
}

let descuento = parseInt (prompt ("¿que porcentaje de descuento buscas?"))

for (let i = 1; i <= descuento; i++) {
let resultado = descuento * i ;
alert(`podemos ofrecerte un % ${resultado} de descuento`)
break
}