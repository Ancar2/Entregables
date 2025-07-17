// -------------------------------------------------------------------EJERCICIO 1--------------------------------------------
// Crear un algoritmo que solicite al usuario un número n y calcule la suma de todos
// los números del 1 a n.
// -------------------------------------------------------------------SOLUCION--------------------------------------------
console.log(`-----------------------------------------------`);
console.log(`ejercicio 1`);

let init = 0;
let number = prompt ('escribe tu numero para hacer la suma hasta tu numero')

if(number > 0){

    for (let i = 1; i <= number; i++) {
        init += i;
        console.log(`+ ${i}`); 
        console.log(init);
    }

    console.log(`Tu numero es ${number}, el calculo de la suma de los numeros es ${init}`);

}else{
    console.log('ingresa un numero valido');

}





// -------------------------------------------------------------------EJERCICIO 2--------------------------------------------
// Crear un algoritmo que determine si un número ingresado por el usuario es par o
// impar.
// -------------------------------------------------------------------SOLUCION--------------------------------------------
console.log(`-----------------------------------------------`);
console.log(`ejercicio 2`);
let num = prompt('ingresa tu numero para saber si es par')

if(num >= 0){
    if((num % 2) == 0){
        console.log(`tu numero ${num} es par`);
    }else{
        console.log(`tu numero ${num} es impar`);

    }

}else{
    console.log('ingresa un numero valido');
}







// -------------------------------------------------------------------EJERCICIO 3--------------------------------------------
// La pizzería Pepitos requiere un algoritmo que permita informarle a los usuarios si
// reciben o no un premio por parte del negocio, se tienen las siguientes validaciones:

// Si el usuario tiene 10 años o menos, recibe un jugo.
// Si el usuario es mayor de 18 años, recibe una cerveza.
// Si el usuario es mujer, además recibe una porción de pizza Hawaiana.
// Si el usuario es hombre, además recibe una porción de pizza de tres
// carnes.
// e. Si el usuario no cumple con ninguna condición, se le debe informar que no
// recibe ningún premio.
// -------------------------------------------------------------------SOLUCION--------------------------------------------
console.log(`-----------------------------------------------`);
console.log(`ejercicio 3`);
let edad = prompt('edad del usuario');
let genero = prompt('genero del usuario "M" o "F"')
genero = genero.toLowerCase();

if ( ((edad > 0) && (genero == 'm')) || ((edad > 0) && (genero == 'f')) ){

    if(edad <= 10){
        console.log('tiene un premio');
        console.log(`su edad es de ${edad} años por tal obtiene un JUGO`);

        if (genero == 'm') {
            console.log(`ademas su genero es Masculino y recibe una porcion de pizza 3 carnes adicional`);

        }else{
            console.log(`ademas su genero es Femenino y recibe una porcion de pizaa hawaiana`);

        }

    } else if (edad >= 18){
        console.log('tiene un premio');
        console.log(`tu edad es de ${edad} años por tal obtienes una CERVEZA`);

        if (genero == 'm') {
            console.log(`ademas su genero es Masculino y recibe una porcion de pizza 3 carnes adicional`);

        }else{
            console.log(`ademas su genero es Femenino y recibe una porcion de pizza hawaiana`);

        }
    }else{
        console.log('No tiene un premio');
        console.log(`el usuario no cumple con las condiciones, tiene ${edad} años y no tiene premio`);

    }

}else {
    console.log('el usuario no es valido');

}





// -------------------------------------------------------------------EJERCICIO 4--------------------------------------------
// Crear un algoritmo que permita al usuario seleccionar productos de un menú
// escribiendo el nombre del producto. Cada selección sumará el precio del
// producto al total, hasta que el usuario escriba "pagar"
// . Al finalizar, el programa
// mostrará el total a pagar.
// Las opciones del menú puede ser definido por el programador
// Pista: Se puede realizar con 2 arrays o con 1 array de objetos

// -------------------------------------------------------------------SOLUCION--------------------------------------------

console.log(`-----------------------------------------------`);
console.log(`ejercicio 4`);
const menu = [
  { nombre: "hamburguesa", precio: 15000 },
  { nombre: "pizza", precio: 20000 },
  { nombre: "empanada", precio: 5000 },
  { nombre: "gaseosa", precio: 4000 },
  { nombre: "jugo", precio: 6000 }
]


let totalProductos = []
let totalPrecio = 0

while (true) {
    let canasta = prompt (`Hamburguesa: $15.000 \n Pizza: $20.000 \n Empanada: 5.000 \n Gaseosa: 4.000 \n Jugo: 6.000 \n ELIGE LOS PRODUCTOS QUE DESEAS\n escribe PAGAR para terminar`)

    if(canasta.toLowerCase() == 'pagar'){
        alert(`terminaste tu selecion!`)
        break;
   }

    let producto

    for (let i = 0; i < menu.length; i++) {
        const element = menu[i];

        if (element.nombre == canasta.toLowerCase()) {
            producto =element
        } 
    }

    console.log(`agregaste ${producto.nombre} = $${producto.precio}`);

    if (!producto == '') {
        totalPrecio += producto.precio
        totalProductos.push(producto)
    }else{
        console.log('no existe el producto que ingresaste');
        
    }
    
    
}
console.log(`-----------------------------`);
console.log(`tus productos son: `);
console.log(totalProductos);
console.log(`total a pagar $${totalPrecio}`);











// -------------------------------------------------------------------EJERCICIO 5--------------------------------------------

// Crear un algoritmo que muestre la tabla de multiplicar de un número ingresado por
// el usuario hasta un límite también especificado por el usuario. Además, el
// programa debe mostrar el total de las multiplicaciones
// -------------------------------------------------------------------SOLUCION--------------------------------------------
console.log(`-----------------------------------------------`);
console.log(`ejercicio 5`);
const numero = parseInt(prompt (`ingresa un numero a multiplicar`))
const limite = parseInt(prompt (`ingresa el limite de tu multiplicacion`))

let tabla = []
let numeroTabla = 0
let suma = 0

for (let i = 0; i < limite; i++) {
    numeroTabla ++
    tabla.push(numeroTabla)
}

console.log(`TU TABLA DE MULTIPLICAR:`);
for (let i = 0; i < tabla.length; i++) {
    const element = tabla[i];
    
   let resultado = element * numero
   suma += resultado
   console.log(`${numero} x ${element}  = ${resultado}`);
}

console.log(`la suma de los resultados es ${suma}`);











// -------------------------------------------------------------------EJERCICIO 6--------------------------------------------
// Crear un algoritmo que determine el valor de matrícula ($1.000.000) a pagar por
// un estudiante basado en su promedio.
// a. Si el promedio fue menor a 3 no se le descuenta nada.
// b. Cuando el promedio sea entre 3 y 4 se le descuenta el 5%
// c. Cuando el promedio sea mayor que 4, se le descuenta 50%
// -------------------------------------------------------------------SOLUCION--------------------------------------------
console.log(`-----------------------------------------------`);
console.log(`ejercicio 6`);
const promedio = parseFloat(prompt ('ingrese el promedio del estudiante'))

valorMatricula = 1000000
if (promedio >= 0 && promedio <= 5) {
    

    if (promedio > 0 && promedio < 3) {
        console.log(`el valor de su matricula es $${valorMatricula}`);
    }else if (promedio >=3 && promedio <=4){
        valorMatricula = (valorMatricula - ( valorMatricula * 5) / 100)
        console.log(`el valor de su matricula es $${valorMatricula}`);
    }else if (promedio > 4 ) {
        valorMatricula = (valorMatricula - ( valorMatricula * 50) / 100)
        console.log(`el valor de su matricula es $${valorMatricula}`);
    }

}else {
    console.log(`ingresa un promedio valido`);
    
}