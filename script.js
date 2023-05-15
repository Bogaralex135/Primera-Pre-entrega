

const pc1 = "Mini PC Intel NUC GAMER";
const precioPc1 = 14999;
const pc2 = "Computadora PRIDE GAMING Raptor";
const precioPc2 = 21999;
const pc3 = "Computadora PRIDE GAMING DD-CHAN / EDICIÓN LIMITADA";
const precioPc3 = 18999;

function descuento(precio) {
  const estudiante = prompt("20% de descuento a todos los estudiantes\n\n¿Eres estudiante? Si / No").toLowerCase();
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

alert("Bienvenido a Computadoras.com\n\nPrimer Pre-entrega de CoderHouse Curso JavaScript Comisión 43095\nAlumno: Bogar Vazquez Mata");

let opcion;
do {
  opcion = parseInt(
    prompt(
      `Que desea comprar?\n \n1-${PC1} $${precioPC1} \n2-${PC2} $${precioPC2} \n3-${PC3} $${precioPC3} \n4-Salir`
    )
  );

  switch (opcion) {
    case 1:
      mostrarCompra(descuento(precioPC1), precioPC1, PC1);
      break;
    case 2:
      mostrarCompra(descuento(precioPC2), precioPC2, PC2);
      break;
    case 3:
      mostrarCompra(descuento(precioPC3), precioPC3, PC3);
      break;
    case 4:
      alert("Gracias por su compra");
      break;
    default:
      alert("Opcion no valida");
  }
} while (opcion !== 4);
