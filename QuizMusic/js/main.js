var indexArray = 0;
indexIntBar = 0;
var animacion = document.getElementById("logoCategorias");
var salir;

var sections = [];
sections[0] = document.getElementById("menu");
sections[1] = document.getElementById("home");
sections[2] = document.getElementById("categories");
sections[3] = document.getElementById("credits");
sections[4] = document.getElementById("instruct");
sections[5] = document.getElementById("juego");
salir = document.getElementById("menu_stop");
var game = 0;
var tiempoActual = 0;

var bars = [
    "img/Interfaces y barritas/Asset 129.png",
    "img/Interfaces y barritas/Asset 134.png",
    "img/Interfaces y barritas/Asset 130.png",
    "img/Interfaces y barritas/Asset 131.png",
    "img/Interfaces y barritas/Asset 132.png",
    "img/Interfaces y barritas/Asset 133.png"
]

var tiempo_splash = 1600;
window.onload = function () {
    setTimeout(function(){toSection('home')}, tiempo_splash); //EN DOS SEGUNDOS LLAMARA A LA FUNCION CAMBIAR SPLASH  animated flipInX
}

function toSection(sect){
    
    document.getElementById("primerosBotones").className = "botonImagen animated fadeIn";
    for (var i in sections) {

        sections[i].style.display = "none";
    }
    if(sect == "categories"){
        document.getElementById("cat").className = "animated bounceInUp";
    }
    document.getElementById(sect).style.display = "block";
    
    score = 0;
    indexArray = 0;
    lives = 3;
    time = 10;
    gains = 25;
    document.getElementById("thirdChance").src = "img/Estrellas/Asset 108.png"
    document.getElementById("secondChance").src = "img/Estrellas/Asset 108.png"
    document.getElementById("lastChance").src = "img/Estrellas/Asset 108.png"
}


function toGame(opc) {
    game = opc;
    scoreSpot = document.getElementById("score"+opc);
    ctr = 5;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = categorias[game].pregunta[ctr];
        categorias[game].pregunta[ctr] = categorias[game].pregunta[index];
        categorias[game].pregunta[index] = temp;
    }
    toSection('juego');
    respuestas();
}

function toSigIns() {
    if (indexIntBar === 5) { //YA HABIENDO LLEGADO AL FINAL, HAY QUE RESETEAR EL INDEX. 
        indexIntBar = 0;
        toSection('home');
        document.getElementById("interfaz").src = "img/Interfaces y barritas/Asset 123.png";
        document.getElementById("barIns").src = "img/Interfaces y barritas/Asset 129.png";
        return;
    }

    var cambioInterfaces = [
        "img/Interfaces y barritas/Asset 124.png",
        "img/Interfaces y barritas/Asset 127.png",
        "img/Interfaces y barritas/Asset 126.png",
        "img/Interfaces y barritas/Asset 128.png",
        "img/Interfaces y barritas/Asset 125.png"
    ];

    var barIns = [
        "img/Interfaces y barritas/Asset 134.png",
        "img/Interfaces y barritas/Asset 130.png",
        "img/Interfaces y barritas/Asset 131.png",
        "img/Interfaces y barritas/Asset 132.png",
        "img/Interfaces y barritas/Asset 133.png"
    ];

    document.getElementById("interfaz").src = cambioInterfaces[indexIntBar];
    document.getElementById("barIns").src = barIns[indexIntBar];
    indexIntBar++;
}



function respuestas() {
    if (indexArray === 5) { //YA HABIENDO LLEGADO AL FINAL, HAY QUE RESETEAR EL INDEX. 
        if(score>scoreSpot.innerHTML) {
            scoreSpot.innerHTML = score;
        }
        animacion.className = ("animated tada");
        total = parseInt(document.getElementById("score0").innerHTML) + 
        parseInt(document.getElementById("score1").innerHTML) + 
        parseInt(document.getElementById("score2").innerHTML) + 
        parseInt(document.getElementById("score3").innerHTML);
        document.getElementById("totalScore").innerHTML = total;
        score = 0;
        indexArray = 0;
        lives = 3;
        gains = 25;
        document.getElementById("thirdChance").src = "img/Estrellas/Asset 108.png"
        document.getElementById("secondChance").src = "img/Estrellas/Asset 108.png"
        document.getElementById("lastChance").src = "img/Estrellas/Asset 108.png"
        toSection('categories');
        return;
    }
    document.getElementById("casilla1").classList.remove("true");
    document.getElementById("casilla2").classList.remove("true");
    document.getElementById("casilla3").classList.remove("true");
    document.getElementById("casilla4").classList.remove("true");
    document.getElementById("casilla1").classList.remove("false");
    document.getElementById("casilla2").classList.remove("false");
    document.getElementById("casilla3").classList.remove("false");
    document.getElementById("casilla4").classList.remove("false");

    time = 10;
    gains = 25;
    tiempoActual = 10;
    document.getElementById("timerNumb").innerHTML = tiempoActual;
    update = setInterval(timing, 1000);
    document.getElementById("bar").src = bars[indexArray+1];
    document.getElementById("logoCategorias").src = categorias[game].pregunta[indexArray].opcion[4];

    var casillas = [];
    var correcta = aleatorio();
    var opCorrecta = categorias[game].pregunta[indexArray].opcion[0];

    for (let i = 0; i < 4; i++) { // Distribución de respuestas
        var aux = aleatorio(4);
        if(!casillas[aux]) {
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
gains = 25;

function verify(choice) {
    animacion.className = ("animated zoomIn");
    if(document.getElementById(choice).innerHTML == categorias[game].pregunta[indexArray].opcion[0]) {
        score = score + gains;
        document.getElementById("logoCategorias").src = categorias[game].pregunta[indexArray].opcion[5];
        indexArray ++;
        document.getElementById(choice).classList.add("true");
        clearInterval(update);
        setTimeout(respuestas, 1000);
    }else {
        document.getElementById(choice).classList.add("false");
        if(lives === 3) {
            document.getElementById("thirdChance").src = "img/Estrellas/Asset 109.png"
            lives --;
        }else
        if (lives === 2) {
            document.getElementById("secondChance").src = "img/Estrellas/Asset 109.png"
            lives--;
        }else {
            document.getElementById("lastChance").src = "img/Estrellas/Asset 109.png"
            lives--;
            indexArray = 0;
            lives = 3;
            clearInterval(update);
            toSection('categories');
        }
    }
}

function timing() {
        //Se cambio time por tiempoActual
        --tiempoActual;
        gains = gains - 2;

    if (tiempoActual<10) {
        document.getElementById("timerNumb").innerHTML = tiempoActual;
    }
    if (tiempoActual===0) {
        clearInterval(update);
        indexArray++;
        document.getElementById("casilla1").classList.add("false");
        document.getElementById("casilla2").classList.add("false");
        document.getElementById("casilla3").classList.add("false");
        document.getElementById("casilla4").classList.add("false");
        setTimeout(respuestas, 1000);
    }
}

function salida(){
    salir.className = "salir";
    clearInterval(update);
    secciones[5].className = "oculto";
}

function regresar(){
        score = 0;
        clearInterval(update);
        salir.className = "salir oculto";
        toSection('categories');
}

function cancelar(){
    salir.className = "salir oculto";
    
    if(update){
        clearInterval(update);
    }

    document.getElementById("timerNumb").innerHTML = tiempoActual;
    update = setInterval(timing, 1000);
}

function aleatorio(num) {
    return Math.floor(Math.random() * (num));
}

categorias = [{
    pregunta: [{
            opcion: ["Blanco",
                "Lovely",
                "Carnaval",
                "4 babys",
                "img/Estrellas Reggaeton/Asset 114.png",
                "img/Estrellas Reggaeton/Asset 116.png"
            ]
        },
        {
            opcion: ["11PM",
                "Más de ti",
                "Hace mucho tiempo",
                "Bien loco",
                "img/Estrellas Reggaeton/Asset 12.png",
                "img/Estrellas Reggaeton/Asset 1.png"
            ]
        },
        {
            opcion: ["Tusa",
                "Sin pijama",
                "Runaway",
                "Me estás matando",
                "img/Estrellas Reggaeton/Asset 11.png",
                "img/Estrellas Reggaeton/Asset 4.png"
            ]

        },
        {
            opcion: ["Ateo",
                "La botella",
                "Me pones en tensión",
                "Encantadora",
                "img/Estrellas Reggaeton/Asset 10.png",
                "img/Estrellas Reggaeton/Asset 3.png"
            ]

        },
        {
            opcion: ["Lo que pasó, pasó",
                "Amuleto",
                "Ayer la vi",
                "Salió el sol",
                "img/Estrellas Reggaeton/Asset 9.png",
                "img/Estrellas Reggaeton/Asset 2.png"
            ]
        },
    ]
},
{
    pregunta: [{
            opcion: ["God save the queen",
                "Life is good",
                "The london",
                "Highest in the room",
                "img/Estrellas Punk/Asset 53.png",
                "img/Estrellas Punk/Asset 46.png"
            ]
        },
        {
            opcion: ["Blitzkrieg Bop",
                "Saint-Tropez",
                "Money in the grave",
                "Collard greens",
                "img/Estrellas Punk/Asset 51.png",
                "img/Estrellas Punk/Asset 47.png"
            ]

        },
        {
            opcion: ["All the small things",
                "0 of 100",
                "Fustal shuffle",
                "Sicko mode",
                "img/Estrellas Punk/Asset 49.png",
                "img/Estrellas Punk/Asset 43.png"
            ]

        },
        {
            opcion: ["Basket case",
                "Valentino",
                "Mickey Mouse is death",
                "Marquee moon",
                "img/Estrellas Punk/Asset 57.png",
                "img/Estrellas Punk/Asset 44.png"
            ]

        },
        {
            opcion: ["Where eagles dare",
                "Damaged gods",
                "Straight edge",
                "Viet nam",
                "img/Estrellas Punk/Asset 55.png",
                "img/Estrellas Punk/Asset 45.png"
            ]
        },
    ]
},
{
    pregunta: [{
            opcion: ["Let it be",
                "Hotel California",
                "Wicked game",
                "Take on me",
                "img/Estrellas Rock/Asset 42.png",
                "img/Estrellas Rock/Asset 32.png"
            ]
        },
        {
            opcion: ["Hey Joe",
                "What's up?",
                "Black in black",
                "Breake my stride",
                "img/Estrellas Rock/Asset 40.png",
                "img/Estrellas Rock/Asset 33.png"
            ]
        },
        {
            opcion: ["We will rock you",
                "Every breath you take",
                "Paradise city",
                "Under the bridge",
                "img/Estrellas Rock/Asset 38.png",
                "img/Estrellas Rock/Asset 35.png"
            ]
        },
        {
            opcion: ["Adiós",
                "Agua",
                "Maldito duende",
                "Sweet dreams",
                "img/Estrellas Rock/Asset 31.png",
                "img/Estrellas Rock/Asset 29.png"
            ]
        },
        {
            opcion: ["Gimme Shelter",
                "Summer of 69",
                "November rain",
                "Inmigrant song",
                "img/Estrellas Rock/Asset 36.png",
                "img/Estrellas Rock/Asset 28.png"
            ]

        },
    ]
},
{
    pregunta: [{
            opcion: ["Young and beautiful",
                "Like i love you",
                "The bad touch",
                "Kiss me",
                "img/Estrellas Pop/Asset 27.png",
                "img/Estrellas Pop/Asset 17.png"
            ]
        },
        {
            opcion: ["Mirrors",
                "Sugar",
                "When i was your man",
                "Locked out heaven",
                "img/Estrellas Pop/Asset 25.png",
                "img/Estrellas Pop/Asset 16.png"
            ]

        },
        {
            opcion: ["Bad romance",
                "Material girl",
                "Womanizer",
                "La isla bonita",
                "img/Estrellas Pop/Asset 23.png",
                "img/Estrellas Pop/Asset 13.png"
            ]

        },
        {
            opcion: ["Blank space",
                "Lose you to love me",
                "Party in the U.S.A",
                "Cut you off",
                "img/Estrellas Pop/Asset 21.png",
                "img/Estrellas Pop/Asset 15.png"
            ]

        },
        {
            opcion: ["La mordidita",
                "Humanos a marte",
                "La bicicleta",
                "La invitación",
                "img/Estrellas Pop/Asset 19.png",
                "img/Estrellas Pop/Asset 14.png"
            ]
        },
    ]
}
];