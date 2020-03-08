var indexArray = 0;
indexIntBar = 0;

var sections = [];
sections[0] = document.getElementById("menu");
sections[1] = document.getElementById("home");
sections[2] = document.getElementById("categories");
sections[3] = document.getElementById("credits");
sections[4] = document.getElementById("instruct");
sections[5] = document.getElementById("juego");

var game = 0;

var tiempo_splash = 1600;
window.onload = function () {
    setTimeout(function(){toSection('home')}, tiempo_splash); //EN DOS SEGUNDOS LLAMARA A LA FUNCION CAMBIAR SPLASH  animated flipInX
}

function toSection(sect){
    document.getElementById("primerosBotones").className = "botonImagen animated fadeIn";
    for (var i in sections) {
        sections[i].style.display = "none";
    }
    document.getElementById(sect).style.display = "block";
    indexArray = 0;
}

function toGame(opc) {
    game = opc;
    respuestas();
    //console.dir(resp[opc]);
    //preguntas = resp[opc];
    document.getElementById("menu").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("categories").style.display = "none";
    document.getElementById("credits").style.display = "none";
    document.getElementById("instruct").style.display = "none";
    document.getElementById("juego").style.display = "block";
}

function toSigIns() {
    if (indexIntBar === 5) { //YA HABIENDO LLEGADO AL FINAL, HAY QUE RESETEAR EL INDEX. 
        indexIntBar = 0;
        toSection('home');
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

    document.getElementById("interfaz").src = cambioInterfaces[indexIntBar];
    document.getElementById("barrita").src = cambioBarritas[indexIntBar];
    indexIntBar++;
}

var bars = [
    "img/Interfaces y barritas/Asset 129.png",
    "img/Interfaces y barritas/Asset 134.png",
    "img/Interfaces y barritas/Asset 130.png",
    "img/Interfaces y barritas/Asset 131.png",
    "img/Interfaces y barritas/Asset 132.png",
    "img/Interfaces y barritas/Asset 133.png"
]

function respuestas() {
    if (indexArray === 5) { //YA HABIENDO LLEGADO AL FINAL, HAY QUE RESETEAR EL INDEX. 
        indexArray = 0;
        toSection('categories');
        return;
    }
    document.getElementById("bar").src = bars[indexArray+1];

    var casillas = [];
    var correcta = aleatorio();
    var opCorrecta = categorias[game].pregunta[indexArray].opcion[0];
    //casillas[correcta] = opCorrecta; //Posicionar respuesta CORRECTA

    //var count = 1;
    /*for (let i = 0; i < 4; i++) { //Posicionar respuestas INCORRECTA
        if (casillas[i] == undefined) {
            casillas[i] = categorias[game].pregunta[indexArray].opcion[count];
            count++;
        }
    }*/

    for (let i = 0; i < 4; i++) {
        var aux = aleatorio();
        if(casillas[aux] == undefined) {
            casillas[aux] = categorias[game].pregunta[indexArray].opcion[i];
        }else {
            i --;
        }
    }
    
    document.getElementById("casilla1").innerHTML = casillas[0];
    document.getElementById("casilla2").innerHTML = casillas[1];
    document.getElementById("casilla3").innerHTML = casillas[2];
    document.getElementById("casilla4").innerHTML = casillas[3];
}

score = 0;
lives = 3;

function verify(choice) {
    if(document.getElementById(choice).innerHTML == categorias[game].pregunta[indexArray].opcion[0]) {
        score = score + 25;
        indexArray ++;
        respuestas();
    }else {
        score = score + 10;
        if(lives === 3) {
            document.getElementById("thirdChance").src = "img/Estrellas/Asset 109.png"
            lives --;
        }else
        if (lives === 2) {
            document.getElementById("secondChance").src = "img/Estrellas/Asset 109.png"
            lives--;
        }else
        if (lives === 1) {
            document.getElementById("lastChance").src = "img/Estrellas/Asset 109.png"
            lives--;
        }else {
            indexArray = 0;
            lives = 3;
            toSection('categories');
            document.getElementById("thirdChance").src = "img/Estrellas/Asset 108.png"
            document.getElementById("secondChance").src = "img/Estrellas/Asset 108.png"
            document.getElementById("lastChance").src = "img/Estrellas/Asset 108.png"
        }
    }
}

function aleatorio() {
    return Math.floor(Math.random() * (4));
}

categorias = [{
    imagen: "imagen 1",
    pregunta: [{
            opcion: ["Blanco",
                "Lovely",
                "Carnaval",
                "4 babys"
            ]
        },
        {
            opcion: ["11PM",
                "Más de ti",
                "Hace mucho tiempo",
                "Bien loco"
            ]
        },
        {
            opcion: ["Tusa",
                "Sin pijama",
                "Runaway",
                "Me estás matando"
            ]

        },
        {
            opcion: ["Ateo",
                "La botella",
                "Me pones en tensión",
                "Encantadora"
            ]

        },
        {
            opcion: ["Lo que pasó, pasó",
                "Amuleto",
                "Ayer la vi",
                "Salió el sol"
            ]
        },
    ]
},
{
    imagen: "imagen 1",
    pregunta: [{
            opcion: ["God save the queen",
                "Life is good",
                "The london",
                "Highest in the room"
            ]
        },
        {
            opcion: ["Blitzkrieg Bob",
                "Saint-Tropez",
                "Money in the grave",
                "Collard greens"
            ]

        },
        {
            opcion: ["All the small things",
                "0 of 100",
                "Fustal shuffle",
                "Sicko mode"
            ]

        },
        {
            opcion: ["Basket case",
                "Valentino",
                "Mickey Mouse is death",
                "Marquee moon"
            ]

        },
        {
            opcion: ["Where eagles dare",
                "Damaged gods",
                "Straigth edge",
                "Viet nam"
            ]
        },
    ]
},
{
    imagen: "imagen 1",
    pregunta: [{
            opcion: ["Let it be",
                "Hotel California",
                "Wicked game",
                "Take on me"
            ]
        },
        {
            opcion: ["Hey Joe",
                "What's up?",
                "Black in black",
                "Breake my stride"
            ]
        },
        {
            opcion: ["We will rock you",
                "Every breath you take",
                "Paradise city",
                "Under the bridge"
            ]
        },
        {
            opcion: ["Adiós",
                "Agua",
                "Maldito duende",
                "Sweet dreams"
            ]
        },
        {
            opcion: ["Gimme Shelter",
                "Summer of 69",
                "November rain",
                "Inmigrant song"
            ]

        },
    ]
},
{
    imagen: "imagen 1",
    pregunta: [{
            opcion: ["Young and beautiful",
                "Like i love you",
                "The bad touch",
                "Kiss me"
            ]
        },
        {
            opcion: ["Mirrors",
                "Sugar",
                "When i was your man",
                "Locked out heaven"
            ]

        },
        {
            opcion: ["Bad romance",
                "Material girl",
                "Womanizer",
                "La isla bonita"
            ]

        },
        {
            opcion: ["Blank space",
                "Lose you to love me",
                "Party in the U.S.A",
                "Cut you off"
            ]

        },
        {
            opcion: ["La mordidita",
                "Humanos a marte",
                "La bicicleta",
                "La invitación"
            ]
        },
    ]
}
];

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