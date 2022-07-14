// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3   
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arreglo=Object.entries(objeto);
  return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const objetoletra=[];
        const numerodeveces=[];
        const arreglofinal={};
        for (let i = 0; i < string.length; i++) {
            if (objetoletra.indexOf(string.charAt(i))===-1) {
                objetoletra.push(string.charAt(i));
            }
                     //objetoletra[i]=string.charAt(i);
                   
        }
        
        for (let j = 0; j < objetoletra.length; j++) {
            let cont=0;
            for (let m = 0; m < string.length; m++) {
                
                if (objetoletra[j]===string.charAt(m)) {
                cont++;
                }
            }
            numerodeveces.push(cont);
            
        }
        for (let i = 0; i < numerodeveces.length; i++) {
            
            arreglofinal[objetoletra[i]]=numerodeveces[i];
        }
        return arreglofinal;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let palabranueva="";
            let minusculas="";
            //funcion para saber si es mayuscula
            function esMayuscula(letra){
                return letra===letra.toUpperCase();
            }
            for (let i = 0; i < s.length; i++) {
               if (esMayuscula(s.charAt(i))) {
                palabranueva+=s.charAt(i);
                
               }else{
                minusculas+=s.charAt(i);
               }
            
            }
            return palabranueva+minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //let str="The Henry Challenge is close!";
  let palabranueva="";
  const arreglo=[];
function esEspacio(letra){
  return letra===" ";
}
function revierta(texto){
  var texoinvertido="";
  for (let i = texto.length-1;i>=0; i--) {
      texoinvertido+=texto.charAt(i);
      
  }
  return texoinvertido;
}
for (let i = 0; i < str.length; i++) {
  ///la ultima palabra como no tiene espacio se guarda asi
  if ((i+1)===str.length) {
      palabranueva+=str.charAt(i);
      arreglo.push(palabranueva);
  }
 //si tiene espacio en la letra
  if (esEspacio(str.charAt(i))) {
      //si antes no tenia espacio, se guarda la nueva palabra
      if (!esEspacio(str.charAt(i-1))) {
          arreglo.push(palabranueva);
          
      }
      //no se guarda nada hasta que la palabra no tenga espacios
      palabranueva="";
  }else{//si no hay espacio, es una palabra nueva que iremos guardando
   palabranueva+=str.charAt(i);
  }
}    
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i]=revierta(arreglo[i]);
  console.log(arreglo[i])
}
// console.log(esEspacio(str));          
//console.log(arreglo.toString().replace(/,/g," "));
return arreglo.toString().replace(/,/g," ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  //let numero=12312;
            let palabranumero="";
           function revierta(texto){
                 var texoinvertido="";
                for (let i = texto.length-1;i>=0; i--) {
                texoinvertido+=texto.charAt(i);
                    
                 }
                return texoinvertido;
            }
            palabranumero=numero.toString();
            if (palabranumero===revierta(palabranumero)) {
              return "Es capicua";
            }else{
              return "No es capicua"
            }
            
    
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

