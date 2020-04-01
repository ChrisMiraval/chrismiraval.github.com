//DOM

/*
    let tabla = document.querySelector(".table");
    let tablas = document.querySelectorAll("a");

    tablas.forEach(function(v, k){
        console.log(v);
    });


    let celdas = document.querySelectorAll("td");

    celdas.forEach(function(v){
        v.addEventListener('click', function(){
            console.log(this);
        })
    })
*/
//Obtener los elementos de la clase .close y almacenarlos en links
let links = document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function(v){
    //Agregar un evento click a cada uno de ellos
    v.addEventListener('click', function(e){
        e.preventDefault();
        let content = document.querySelector('.content');
        //Quitamos las clases de animación de entrada
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");
        //Agregamos clase para animar su salida
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        //Se ejecuta la totalidad del evento despúes de un tiempo X
        setTimeout(function(){
            //Nos direccionamos a la ruta especificada
            location.href = "/Boletines"
        }, 600);        

        return false;
    });
});

/* let iconos = document.querySelectorAll("i");

iconos.forEach(function(v){
    console.log(v.classList);
    v.classList.remove("far");
    v.classList.add("fa");
}); */
