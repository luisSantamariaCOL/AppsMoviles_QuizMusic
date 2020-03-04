
 var tiempo_splash=1600;
 window.onload = function (){
     setTimeout(toHome, tiempo_splash);   //EN DOS SEGUNDOS LLAMARA A LA FUNCION CAMBIAR SPLASH  animated flipInX

 }
 

function toHome(){
    document.getElementById("QuizMusic").className = "animated flipInX";
    document.getElementById("primerosBotones").className = "botonImagen animated fadeIn";
    document.getElementById("menu").style.display = "none";
    document.getElementById("home").style.display = "block";
    document.getElementById("categories").style.display = "none";
    document.getElementById("credits").style.display = "none";
    document.getElementById("conf").style.display = "none";
    document.getElementById("dontknow").style.display = "none";
    document.getElementById("juego").style.display = "none";
}
function toCategories(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("categories").style.display = "block";
    document.getElementById("credits").style.display = "none";
    document.getElementById("conf").style.display = "none";
    document.getElementById("dontknow").style.display = "none";
    document.getElementById("juego").style.display = "none";
}

function toCredits(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("categories").style.display = "none";
    document.getElementById("credits").style.display = "block";
    document.getElementById("conf").style.display = "none";
    document.getElementById("dontknow").style.display = "none";
    document.getElementById("juego").style.display = "none";
}

function toInstructions(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("categories").style.display = "none";
    document.getElementById("credits").style.display = "none";
    document.getElementById("conf").style.display = "block";
    document.getElementById("dontknow").style.display = "none";
    document.getElementById("juego").style.display = "none";
}

function toGame(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("categories").style.display = "none";
    document.getElementById("credits").style.display = "none";
    document.getElementById("conf").style.display = "none";
    document.getElementById("dontknow").style.display = "none";
    document.getElementById("juego").style.display = "block";
}

indexIntBar = 0;
function toSigIns(){
    if (indexIntBar===5) { //YA HABIENDO LLEGADO AL FINAL, HAY QUE RESETEAR EL INDEX. 
        indexIntBar=0;
        toHome();
        return;
    }

    var cambioInterfaces = [ 
        "img/Interfaces y barritas/Asset 124.png",
        "img/Interfaces y barritas/Asset 125.png",
        "img/Interfaces y barritas/Asset 126.png",
        "img/Interfaces y barritas/Asset 127.png",
        "img/Interfaces y barritas/Asset 128.png"
    ];
    var cambioBarritas = [
        "img/Interfaces y barritas/Asset 129.png",
        "img/Interfaces y barritas/Asset 130.png",
        "img/Interfaces y barritas/Asset 131.png",
        "img/Interfaces y barritas/Asset 132.png",
        "img/Interfaces y barritas/Asset 133.png"
    ]

    document.getElementById("interfaz").src=cambioInterfaces[indexIntBar];
    document.getElementById("barrita").src=cambioBarritas[indexIntBar];
    indexIntBar++;
    
}

var indexArray = 0;
function respuestas(){ 

    if (indexArray===5) { //YA HABIENDO LLEGADO AL FINAL, HAY QUE RESETEAR EL INDEX. 
        indexArray=0;
        toCategories();
        return;
    }
    var respuestas = [ //ARRAY DE RESPUESTAS
        ["Coldplay","In the end","Green day","Eminem"],
        ["Linkin Park","U2","Gorillaz","Queen"],
        ["Queen","Ramones","The Beatles","Oasis"],
        ["Coldplay","In the end","Green day","Eminem"],
        ["Linkin Park","U2","Gorillaz","Queen"]
    ];
    var casillas = [];
    var correcta = aleatorio();
    casillas[correcta] = respuestas[indexArray][0]; //Posicionar respuesta CORRECTA
    
    var count = 1;
    for (let i = 0; i < 4; i++) { //Posicionar respuestas INCORRECTA
        if (casillas[i]==undefined) {
            casillas[i] = respuestas[indexArray][count];
            count++;
        }
    }
    indexArray = indexArray + 1; 
    
   /*
    console.log(respuestas);
    console.log(casillas);
    console.log(count); 
   */
    //Agregando contenido a los botones rpta html
    document.getElementById("casilla1").innerHTML = casillas[0];
    document.getElementById("casilla2").innerHTML = casillas[1];
    document.getElementById("casilla3").innerHTML = casillas[2];
    document.getElementById("casilla4").innerHTML = casillas[3];
    var holamundo = document.getElementById("casilla1");
    console.log(holamundo);
}

function aleatorio(){
    return Math.floor(Math.random()*(4));
}

respuestas(); //Call
      /*
       var secciones = [];//en este array creare una funcion que me va a inicializar 
        var tiempo_splash=2000;
        window.onload = function (){
            inicializarReferencias();
            setTimeout(cambiarSplash, tiempo_splash);   //EN DOS SEGUNDOS LLAMARA A LA FUNCION CAMBIAR SPLASH
        }


        function inicializarReferencias(){ //solo una vez buscar esas referencias
            secciones[1] = document.getElementById("seccion1");
            secciones[2] = document.getElementById("seccion2");
            secciones[3] = document.getElementById("seccion3");
            secciones[4] = document.getElementById("seccion4");
            secciones[5] = document.getElementById("seccion5");
        }

        function cambiarSplash(){//en la seccion 1 
            secciones[1].className = "splash  oculto"; //propiedad que permite acceder al class splash
            //ocultare la seccion 1 que es splash
            secciones[2].className = "home";
        }
        
        function cambiarSeccion(id_seccion){ 
            for(var i in secciones){//coge todas las secciones y las oculta
                secciones[i].classList.add("oculto");
            }
            secciones[id_seccion].classList.remove("oculto");
        }
        */
