
 var tiempo_splash=1600;
 window.onload = function (){
     setTimeout(toHome, tiempo_splash);   //EN DOS SEGUNDOS LLAMARA A LA FUNCION CAMBIAR SPLASH

 }
 



function toHome(){
    document.getElementById("QuizMusic").className = "animated flipInX";
    document.getElementById("PrimerosBotones").className = "botones animated flipInX";
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

function toConf(){
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

var indexArray = 0;
function respuestas(){
    if (indexArray===5) {
        indexArray=0;
        toCategories();
        return;
    }
    var respuestas = [
        ["Coldplay","In the end","Green day","Eminem"],
        ["Linkin Park","U2","Gorillaz","Queen"],
        ["Queen","Ramones","The Beatles","Oasis"],
        ["Coldplay","In the end","Green day","Eminem"],
        ["Linkin Park","U2","Gorillaz","Queen"]
    ];
    var casillas = [];
    var correcta = aleatorio();
    casillas[correcta] = respuestas[indexArray][0];
    
    var count = 1;
    for (let i = 0; i < 4; i++) {
        if (casillas[i]==undefined) {
            casillas[i] = respuestas[indexArray][count];
            count++;
        }
    }
    indexArray = indexArray + 1; 
    console.log(respuestas);
    console.log(casillas);
    console.log(count);   // if(respuestas[5]===undefined) console.log("INDEFINIDO");
    document.getElementById("casilla1").innerHTML = casillas[0];
    document.getElementById("casilla2").innerHTML = casillas[1];
    document.getElementById("casilla3").innerHTML = casillas[2];
    document.getElementById("casilla4").innerHTML = casillas[3];
}

function aleatorio(){
    return Math.floor(Math.random()*(4));
}

respuestas();
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
