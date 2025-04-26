const estilos = ["Jazz", "Blues"];
console.log(estilos);

estilos.push("Rock-n-Roll");
console.log(estilos);

estilos[1] = "Heavy Metal";
console.log(estilos);

estilos.shift();
console.log(estilos);

estilos.splice(0,0,"Rap")
estilos.splice(1,0,"Reggae")
console.log(estilos);
