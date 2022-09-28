function calcular(){
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;

    let cal = peso/(altura*altura);

    let contenedor = document.querySelector("#contenedor");
    // console.log ("contenedor");

    contenedor.innerHTML=cal
    
}

