//1

// const trabajo = usuarios.map(usuario => usuario.trabajo);
// trabajo.forEach(element => {
    
//     console.log(element);
// });

//2

// const pais = usuarios.map(usuario => usuario.pais);
// pais.forEach(element => {
//     console.log(element);
// });

//3
// const china = usuarios.filter(usuarios => usuarios.pais === "China");
// console.log(china);

//4
// const menores = usuarios.filter(usuarios => usuarios.edad < 21);
// console.log(menores);

//5
// const masculino = usuarios.filter(usuarios => usuarios.sexo === "Male");
// console.log(masculino);

//6
// const femenino = usuarios.filter(usuarios => usuarios.sexo === "Female");
// console.log(femenino);

//7
// const femenino = usuarios.filter(usuarios => usuarios.sexo === "Female")
//                 .map(usuario => usuario.nombre);
// console.log(femenino);

//8
// const masculinoMail = usuarios.filter(usuarios => usuarios.sexo === "Male")
//                 .map(usuario => usuario.email);
// console.log(masculinoMail);

//9
// const mostrar = usuarios.map(usuario => ({
//     nombre: usuario.nombre,
//     apellido: usuario.apellido,
//     ciudad: usuario.ciudad
// }));
// console.log(mostrar);
  
//10
// const mayores = usuarios
//   .filter(usuario => usuario.edad > 35)
//   .map(usuario => ({
//     nombre: usuario.nombre,
//     apellido: usuario.apellido,
//     ciudad: usuario.ciudad,
//   }));

// console.log(mayores);

//11
// const edadTotal = usuarios.reduce( (anterior, actual) => anterior + actual.edad, 0);
// let cantidadDeUsuarios = 0;
// for (let index = 0; index < usuarios.length; index++) {
//     cantidadDeUsuarios += 1;
    
// }
// let resultado = edadTotal / cantidadDeUsuarios;
// console.log(resultado);

//12

// const hombres = usuarios.filter(usuario => usuario.sexo === "Male");

// const edadTotal = hombres.reduce((anterior, actual) => anterior + actual.edad, 0);

// let cantidadDeUsuarios = 0;
// for (let index = 0; index < hombres.length; index++) {
//     cantidadDeUsuarios += 1;
// }

// let resultado = edadTotal / cantidadDeUsuarios;
// console.log(resultado);

//13
// const usuarioEgipcio = usuarios.filter(usuario => usuario.pais == "Egypt")

// const edadTotal = usuarioEgipcio.reduce((anterior, actual) => anterior + actual.edad, 0);

// let cantidadDeUsuarios = 0;
// for (let index = 0; index < usuarioEgipcio.length; index++) {
//     cantidadDeUsuarios += 1;
// }

// let resultado = edadTotal / cantidadDeUsuarios;
// console.log(resultado);