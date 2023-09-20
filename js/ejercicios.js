
//1. Calculadora de edad
function calcularEdad(fechaNacimiento) {
  const nombre = prompt('Por favor, introduce tu nombre:');
  const fechaNacimiento = prompt('Por favor, introduce tu fecha de nacimiento en formato YYYY-MM-DD:');
    const fechaNacimientoArray = fechaNacimiento.split('-');
    const añoNacimiento = parseInt(fechaNacimientoArray[0]);
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const edad = añoActual - añoNacimiento;
    console.log(`Hola ${nombre}, tienes ${edad} años!`);
  }



  
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

//3. Comparar
function comparar() {
const bool1 = 10 == '10' //En este caso, el igualado compara contenido y daria true como resultado
const bool2 = 10 === '10' //En este caso, el igualado compara el valor, que uno es un numero y el otro un string
const dato = typeof 10.6 //Sale que 10.6 es un dato de tipo number
const bool3 = true === 1 //Para js 1 es true y 0 es false
}

//4. Objeto ciudad
function objeto() {
const ciudad = {
nombre:'BSAS',
fechaFundacion: 1764-05-18,
poblacion: 8,
extension: '5km'
}
for(const propiedad in objeto){
  console.log(`${propiedad} : ${objeto[propiedad]}`)
}
}

//5. Nuevo array
function numberArray(numberArray){
const doble = numberArray.map(number => number*2)
}

//6. Piramide de astericos
function piramide() {
//Primera:
  const pisosPiramide = 5
let astericos = ''
pisosPiramide.forEach(piso => {
astericos += '*'
})
//Segunda:
}

//7. Nombres con A
function nameA() {
  let arrayNombres
  for(let i = 0; i<5; i++){
    const nombre = prompt('Por favor, introduzca un nombre:');
    arrayNombres.push(nombre)
  }
  arrayNombres.forEach(nombre => {
    if(nombre.toLowerCase()[0] === 'a'){
      console.log(nombre)
    }
  })
}

//8. Reemplazar palabras
function reemplazar() {
  const cadena = console.prompt('Ingrese una cadena de palabras: ').toLowerCase
  const palabra = console.prompt('Ingrese una palabra a reemplazar en la cadena: ').toLowerCase
  const reemplazo = console.prompt('Ingrese la palabra que la reemplazara: ').toLowerCase
  console.log(cadena.replaceAll(palabra, reemplazo))
}

//9. Cortar cadena
function cortar() {
  const cadena = console.prompt('Ingrese una cadena de palabras: ')
  const num = conole.prompt('Ingrese un numero: ')
  console.log(cadena.slice(0, num+1))
}

//10. String con separador
function separador() {
  const cadena = console.prompt('Ingrese una lista de elementos separados por una coma(,): ')
  
  console.log(cadena.replaceAll(' ', '').replaceAll(',', '-'))
}

//11. Calculadora
function calculadora() {
const pedidos = console.prompt('Ingrese su pedido(EJ: nombre:cantidad), con cada objeto separado por coma')
}
