const pc1 = "Mini PC Intel NUC GAMER";
const precioPc1 = 14999;
const pc2 = "Computadora PRIDE GAMING Raptor";
const precioPc2 = 21999;
const pc3 = "Computadora PRIDE GAMING DD-CHAN / EDICIÓN LIMITADA";
const precioPc3 = 18999;

function descuento(precio) {
  const estudiante = prompt(
    "20% de descuento a todos los estudiantes\n\n¿Eres estudiante? Si / No"
  ).toLowerCase();
  if (estudiante === "si") {
    return precio * 0.8;
  } else if (estudiante === "no") {
    return precio;
  } else {
    alert("Opcion no valida");
  }
}

function mostrarCompra(precioTotal, precioSubtotal, producto) {
  const confirmacion = prompt(
    `¿Esta seguro de comprar este producto? Si / No\n \n${producto} \nPrecio subtotal: $${precioSubtotal} \nPrecio Total: $${precioTotal}`
  ).toLowerCase();
  if (confirmacion === "si") {
    alert(`Gracias por comprar ${producto}`);
  } else if (confirmacion === "no") {
  } else {
    alert("Opcion no valida");
  }
}

alert("Bienvenido a Computadoras.com");

let opcion;
do {
  opcion = parseInt(
    prompt(
      `Que desea comprar?\n \n1-${pc1} $${precioPc1} \n2-${pc2} $${precioPc2} \n3-${pc3} $${precioPc3} \n4-Salir`
    )
  );

  switch (opcion) {
    case 1:
      mostrarCompra(descuento(precioPc1), precioPc1, pc1);
      break;
    case 2:
      mostrarCompra(descuento(precioPc2), precioPc2, pc2);
      break;
    case 3:
      mostrarCompra(descuento(precioPc3), precioPc3, pc3);
      break;
    case 4:
      alert("Gracias por su compra");
      break;
    default:
      alert("Opcion no valida");
  }
} while (opcion !== 4);
