function convertirTexto()
{
    let texto = document.querySelector("#Texto").value;
    console.log("Texto");

    let contenedor = document.querySelector("#contenedor");
    console.log("contenedor");

    contenedor.innerHTML = contarLongitud(texto);
    console.log(contarLongitud(texto));
    console.log("tercerCaracter", obtenerCaracter(texto, 2));
    console.log("Extraccion", extraer(texto));
    console.log("reemplazar", reemplazar(texto));
    console.log("Division", dividir(texto));
}

function mayusculas(txt)
{
    return txt.toUpperCase();
    
}

function contarLongitud(texto){
    return texto.length
}

function obtenerCaracter(texto, posicion){
    if (texto.charAt(posicion) == ""){
        return "no existe";
    } else{
        return texto.charAt(posicion);
    }

}

function extraer(texto){
    return texto.substring(2,5);
}

function reemplazar(texto){
    return texto.replace("martes","viernes");
}

function dividir(texto){
    return texto.split(" ");
}