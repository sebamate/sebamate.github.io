let ataqueJugador
let ataqueEnemigo
let resultado
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById ("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionGrid = document.getElementById ("grid")
    sectionGrid.style.display = "none"

    let sectionReiniciar = document.getElementById ("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById ("boton-mascota")
    botonMascotaJugador.addEventListener ("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById ("boton-fuego")
    botonFuego.addEventListener ("click", ataqueFuego)

    let botonAgua = document.getElementById ("boton-agua")
    botonAgua.addEventListener ("click", ataqueAgua)

    let botonTierra = document.getElementById ("boton-tierra")
    botonTierra.addEventListener ("click", ataqueTierra)

    let botonReiniciar = document.getElementById ("boton-reiniciar")
    botonReiniciar.addEventListener ("click", reiniciarJuego)

}


function seleccionarMascotaJugador () {
    let sectionSeleccionarMascota = document.getElementById ("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById ("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let sectionGrid = document.getElementById ("grid")
    sectionGrid.style.display = "grid"

  let inputSquartle = document.getElementById ("squartle")
  let inputBulbasaur = document.getElementById ("bulbasaur")
  let inputCharmander = document.getElementById ("charmander")
  let spanMascotaJugador = document.getElementById ("mascota-jugador")


    if (inputSquartle.checked) {
        spanMascotaJugador.innerHTML = "Thor"
    }
    else if (inputBulbasaur.checked) {
        spanMascotaJugador.innerHTML = "Niebla"
    }
    else if (inputCharmander.checked) {
        spanMascotaJugador.innerHTML = "Apolo"
    }
 
    seleccionarMascotaEnemigo()
    
}

function seleccionarMascotaEnemigo () {
    let mascotaAleatorio = aleatorio (1,3)
    let spanMascotaEnemigo = document.getElementById ("mascota-enemigo")

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Thor"
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Niebla"
    } else {
    spanMascotaEnemigo.innerHTML = "Apolo"
    }

}


//seccion de Ataques

function ataqueFuego () {
    ataqueJugador = "FUEGO 🔥"
    ataqueAleatorioEnemigo()
}
function ataqueAgua () {
    ataqueJugador = "AGUA 💧"
    ataqueAleatorioEnemigo()
}
function ataqueTierra () {
    ataqueJugador = "TIERRA 🌱"
    ataqueAleatorioEnemigo()
}


function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio (1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO 🔥"

    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA 💧"

    } else {
        ataqueEnemigo = "TIERRA 🌱"
    }

    combate()

    crearMensaje()

    revisarVidas ()

    
}

//COMBATE
function combate () {
    let spanVidasJugador = document.getElementById ("vidas-jugador")
    let spanVidasEnemigo = document.getElementById ("vidas-enemigo")

    if(ataqueJugador == ataqueEnemigo) {
    resultado = "EMPATE"
   
    } else if(ataqueJugador == "AGUA 💧" && ataqueEnemigo == "FUEGO 🔥") {
    resultado = "GANASTE"
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
    
    } else if(ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "AGUA 💧") {
    resultado = "GANASTE"
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
   
    } else if(ataqueJugador == "FUEGO 🔥" && ataqueEnemigo == "TIERRA 🌱") {
    resultado = "GANASTE"
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
    
    } else {
    resultado = "PERDISTE"
    vidasJugador--
    spanVidasJugador.innerHTML = vidasJugador
    }

    

}

function revisarVidas (){
    if (vidasEnemigo == 0) {
        crearMensajeFinal ("Felicitaciones! GANASTE 😀")
    } else if (vidasJugador == 0) {
        crearMensajeFinal ("Lo siento, PERDISTE 😥")
    }

}

function crearMensaje () {
    let sectionMensaje = document.getElementById ("resultado")
    let ataquesDelJugador = document.getElementById ("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById ("ataques-del-enemigo")
   

    let parrafo1 = document.createElement ("p")
    parrafo1.innerHTML = ataqueJugador

    ataquesDelJugador.appendChild (parrafo1)

    let parrafo2 = document.createElement ("p")
    parrafo2.innerHTML = ataqueEnemigo

    ataquesDelEnemigo.appendChild (parrafo2)
}

function crearMensajeFinal (resultadoFinal) {
    let sectionMensaje = document.getElementById ("resultado")
   
    let parrafo = document.createElement ("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensaje.appendChild (parrafo)

    let botonFuego = document.getElementById ("boton-fuego")
    botonFuego.disabled = true

    let botonAgua = document.getElementById ("boton-agua")
    botonAgua.disabled = true

    let botonTierra = document.getElementById ("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById ("reiniciar")
    sectionReiniciar.style.display = "flex"
}

function reiniciarJuego () {
    location.reload ()

}

function aleatorio (min, max) {
        return Math.floor(Math.random()*(max-min + 1) + min)
    }
   




window.addEventListener("load", iniciarJuego)