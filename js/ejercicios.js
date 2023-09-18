
//1. Calculadora de edad
// function calcularEdad(fechaNacimiento) {
//     const fechaNacimientoArray = fechaNacimiento.split('-');
//     const añoNacimiento = parseInt(fechaNacimientoArray[0]);
//     const fechaActual = new Date();
//     const añoActual = fechaActual.getFullYear();
//     const edad = añoActual - añoNacimiento;
//     return edad;
//   }
//   const nombre = prompt('Por favor, introduce tu nombre:');
//   const fechaNacimiento = prompt('Por favor, introduce tu fecha de nacimiento en formato YYYY-MM-DD:');
//   const edad = calcularEdad(fechaNacimiento);
//   console.log(`Hola ${nombre}, tienes ${edad} años!`);
  
//2. Tirando Fruta
function tirandoFruta() {
const frutas = ["manzana", "tomate", "frutilla", "banana", "melon", "naranja", "mandarina", "sandia", "pomelo", "granada"]
frutas.forEach(fruta => {
    console.log(fruta)
})
const eleccion = prompt('Que fruta queres?')
const frutaUsuario = frutas.includes(eleccion.toLowerCase())
if (frutaUsuario) {
    console.log(`Sí, tenemos ${eleccion}!`);
  } else {
    console.log(`No, no tenemos ${eleccion}!`);
  }
}