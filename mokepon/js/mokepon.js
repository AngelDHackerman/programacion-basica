
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

let botonMascotaJugador = document.getElementById('boton-mascota');
let botonFuego = document.getElementById('boton-fuego')
let botonAgua = document.getElementById('boton-agua')
let botonTierra = document.getElementById('boton-tierra')

let seccionMascota = document.getElementById('seleccionar-mascota')
let seccionAtaque = document.getElementById('seleccionar-ataque')
let botonReiniciar = document.getElementById('boton-reiniciar')


const iniciarJuego = () => { 

  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

  botonFuego.addEventListener('click', ataqueFuego)
  botonAgua.addEventListener('click', ataqueAgua)
  botonTierra.addEventListener('click', ataqueTierra)

  seccionAtaque.style.display = 'none'
  botonReiniciar.disabled = true
  botonReiniciar.addEventListener('click', reiniciarJuego)
}

// Seleccionando la mascota del jugador

const seleccionarMascotaJugador = () => { 

  let inputHipodoge = document.getElementById('hipodoge')
  let inputCapipepo = document.getElementById('capipepo')
  let inputRatigueya = document.getElementById('ratigueya')
  let spanMascotaJugador = document.getElementById('mascota-jugador')


  if ( inputHipodoge.checked ) { 
    spanMascotaJugador.innerHTML = "Hipodoge"
    ocultarSeccionMascotas()  
  } else if ( inputCapipepo.checked ) {
    spanMascotaJugador.innerHTML = "Capipepo"
    ocultarSeccionMascotas()  
  } else if ( inputRatigueya.checked ) { 
    spanMascotaJugador.innerHTML = "Ratigueya"
    ocultarSeccionMascotas()  
  } else {
    alert('Selecciona una mascota para poder continuar! 🙃')
  }

  seleccionarMascotaEnemigo()
}

const ocultarSeccionMascotas = () => {
  seccionMascota.style.display = 'none'
  seccionAtaque.style.display = ''
}


// Seleccionando la mascota del enemigo

const seleccionarMascotaEnemigo = () => { 
  let mascotaAleatorio = aleatorio(1, 3)
  let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

  if ( mascotaAleatorio == 1 ) { 
    spanMascotaEnemigo.innerHTML = 'Hipodoge'
  } else if ( mascotaAleatorio == 2 ) { 
    spanMascotaEnemigo.innerHTML = 'Capipepo'
  } else {
    spanMascotaEnemigo.innerHTML = 'Ratigueya'
  }
}

// Seleccionando el Ataque del usuario

const ataqueFuego = () => {
  ataqueJugador = 'FUEGO'
  ataqueAleatorioEnemigo()
}

const ataqueAgua = () => {
  ataqueJugador = 'AGUA'
  ataqueAleatorioEnemigo()

}

const ataqueTierra = () => {
  ataqueJugador = 'TIERRA'
  ataqueAleatorioEnemigo()
}

// Seleccionando aleatoriamente el Ataque del enemigo

const ataqueAleatorioEnemigo = () => { 
  let ataqueAleatorio = aleatorio(1,3)

  if ( ataqueAleatorio == 1 ) { 
    ataqueEnemigo = 'FUEGO'
  } else if ( ataqueAleatorio == 2 ) { 
    ataqueEnemigo = 'AGUA'
  } else { 
    ataqueEnemigo = 'TIERRA'
  }

  combate()
}

// Combate entre mascotas

const combate = () => {
  let resultado
  let spanVidasJugador = document.getElementById('vidas-jugador')
  let spanVidasEnemigo = document.getElementById('vidas-enemigo')

  if ( ataqueEnemigo == ataqueJugador ) { 
    resultado = 'EMPATE 😐' 
  } else if ( ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') { 
    resultado = 'GANASTE! 🥳'
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if ( ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
    resultado = 'GANASTE! 🥳' 
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if ( ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') { 
    resultado = 'GANASTE! 🥳'
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
  } else {
    resultado = 'PERDISTE 😞'
    vidasJugador--  // Este le resta -1 a las vidas
    spanVidasJugador.innerHTML = vidasJugador
  }
  
  crearMensaje(resultado)
  
  revisarVidas()
}

// Revisar las vidas de los jugadores y enviar el mensaje final. 

const revisarVidas = () => { 
  if ( vidasEnemigo == 0 ) {
    crearMensajeFinal('FELICITACIONES !!! Ganaste 🥳🥳🥳')
    deshabilitarReiniciar()
  } else if ( vidasJugador == 0 ) { 
    crearMensajeFinal('Lo sentimos pero perdiste 😞😞😞')
    deshabilitarReiniciar()
  } 
}

// Deshabilitar los botones 

const deshabilitarReiniciar = () => {
  botonFuego.disabled = true
  botonAgua.disabled = true
  botonTierra.disabled = true

  botonReiniciar.disabled = false
}

// Mostrando los ataques y resultados seleccionados en pantalla

const crearMensaje = (resultado) => { 
  let sectionResultado = document.getElementById('resultado')
  let ataquesDelJugador = document.getElementById('ataques-del-jugador')
  let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

  let notificacion = document.createElement('p')  // ? esto va a crear un nuevo elemento "p" al final del texto de nuestra pagina
  let nuevoAtaqueDelJugador = document.createElement('p')
  let nuevoAtaqueDelEnemigo = document.createElement('p')

  notificacion.innerHTML = resultado
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
  // let parrafo = document.createElement('p')
  // parrafo.innerHTML = (`Tu mascota ataco con ${ataqueJugador}, la mascota del enemigo con ${ataqueEnemigo} - ${resultado}.`)

  sectionResultado.appendChild(notificacion)
  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

const crearMensajeFinal = (resultadoFinal) => { 
  let sectionMensajes = document.getElementById('mensajes')

  let parrafo = document.createElement('p')
  parrafo.innerHTML = resultadoFinal
  
  sectionMensajes.appendChild(parrafo)
}


// Reiniciar el juego 

const reiniciarJuego = () => { 
  window.location.reload()
}

// Funcion para la aleatoriedad

const aleatorio = (min, max) => { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)  // ? Asi podemos escuchar cuando el documento de Html este por completo cargado y ejecutar el JS 