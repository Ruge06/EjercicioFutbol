let animales = ["mono", "gato", "perro", "raton", "serpiente", "sapo", "cocodrilo", "ardilla", "tucan", "leon", "aguila", "tigre", "puma", "cerdo", "vaca", "burro", "cebra", "iguana", "delfin", "ballena"];

function mostraraimales(){
    let cont = document.querySelector('#animalescont');
    for (let i=0; i<animales.length; i++){
        let animal = animales[i];
        let li = document.createElement('li');
        li.textContent = animal;
        cont.appendChild(li);
    }
}

mostraraimales();

let animales2 = [
    {
        nombre: "mono",
        img: "https://www.bioenciclopedia.com/wp-content/uploads/2011/12/mono4-800.jpg",
        pesoPromedio: "Peso = 320 kg",
        numeroDePatas: "N° patas = 2",
        colorPredominante: "Color = cafe",
        alimentacion: "Alimentanción = vegetariano",
        habitad: "Habitad = selva",
    },
    {
        nombre: "gato",
        img: "https://ethicalbreeding.org/wp-content/uploads/2018/01/download-700x438.jpg",
        pesoPromedio:"Peso = 5",
        numeroDePatas: "N° patas = 4",
        colorPredominante: "Color = blanco",
        alimentacion: "Alimentanción = carnivoro",
        habitad:"Habitad = urbana",
    },
    {
        nombre: "perro",
        img: "https://misanimales.com/wp-content/uploads/2021/07/cocker-spaniel-cara-640x853.jpg",
        pesoPromedio: "Peso = 15",
        numeroDePatas: "N° patas = 4",
        colorPredominante: "Color = cafe",
        alimentacion: "Alimentanción = carnivoro",
        habitad: "Habitad = urbana",
    },
    {
        nombre: "raton",
        img: "https://www.bioenciclopedia.com/wp-content/uploads/2016/09/raton.jpg",
        pesoPromedio: "Peso = 0.09",
        numeroDePatas: "N° patas = 4",
        colorPredominante: "Color = gris",
        alimentacion: "Alimentanción = omnivoro",
        habitad: "Habitad = urbana",
    },
    {
        nombre: "serpiente",
        img: "https://t1.ea.ltmcdn.com/es/posts/5/8/3/tipos_de_serpientes_24385_600_square.jpg",
        pesoPromedio: "Peso = 4",
        numeroDePatas: "N° patas = 0",
        colorPredominante: "Color = azul",
        alimentacion: "Alimentanción = carnivoro",
        habitad: "Habitad = jungla",
    },
    {
        nombre: "sapo",
        img: "https://okdiario.com/img/2019/10/03/-que-diferencias-hay-entre-sapos-y-ranas_.jpg",
        pesoPromedio: "Peso = 0.019",
        numeroDePatas: "N° patas = 4",
        colorPredominante: "Color = verde",
        alimentacion: "Alimentanción = insectivoro",
        habitad: "Habitad = jungla",
    },
    {
        nombre: "cocodrilo",
        img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/18/16452027893540.jpg",
        pesoPromedio: "Peso = 1000",
        numeroDePatas: "N° patas = 4",
        colorPredominante: "Color = verde",
        alimentacion: "Alimentanción = carnivoro",
        habitad: "Habitad = rios, humedales",
    },
    {
        nombre: "adrilla",
        img: "https://s1.eestatic.com/2021/05/11/curiosidades/significado/580453282_184851281_1706x960.jpg",
        pesoPromedio: "Peso = 0.33",
        numeroDePatas:"N° patas = 4",
        colorPredominante: "Color = naranja",
        alimentacion: "Alimentanción = herbivoro",
        habitad:"Habitad = selva",
    },
    {
        nombre: "tucan",
        img: "http://imgs.globovision.com/ytCUndKRWSK6U6zrlafCfLiiXIQ=/847x0/smart/a93f24889dbe410f9a3b61d3ccddd631",
        pesoPromedio:"Peso = 0.62",
        numeroDePatas:"N° patas = 2",
        colorPredominante:"Color = negro",
        alimentacion:"Alimentanción = frugivora",
        habitad:"Habitad = selva",
    },
    {
        nombre: "leon",
        img: "https://concepto.de/wp-content/uploads/2019/05/leon-sabana-africa-e1559242836802.jpg",
        pesoPromedio: "Peso = 190",
        numeroDePatas: "N° patas = 4",
        colorPredominante: "Color = amarillo",
        alimentacion: "Alimentanción = carnivoro",
        habitad: "Habitad = sabana"
    }
];

function buscaranimales(){
    let cont1 = document.querySelector('#animalesbusqueda');
    let txtBusqueda = document.querySelector('#buscador').value;
    let acumulador = "";
    animales2.forEach(animal =>{
        if (animal.nombre.toLowerCase().startsWith(txtBusqueda) && txtBusqueda.toLowerCase() !=="") {
            acumulador=acumulador+`<img src= "${animal.img}" width="400"/><h3>${animal.nombre}</h3><h3>${animal.pesoPromedio}</h3><h3>${animal.numeroDePatas}</h3><h3>${animal.colorPredominante}</h3><h3>${animal.alimentacion}</h3><h3>${animal.habitad}</h3>`
        }
    });
    cont1.innerHTML=acumulador;
}


