
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

const iniciarJuego = () => { 

  let botonMascotaJugador = document.getElementById('boton-mascota');
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

  let botonFuego = document.getElementById('boton-fuego')
  botonFuego.addEventListener('click', ataqueFuego)
  let botonAgua = document.getElementById('boton-agua')
  botonAgua.addEventListener('click', ataqueAgua)
  let botonTierra = document.getElementById('boton-tierra')
  botonTierra.addEventListener('click', ataqueTierra)
}

// Seleccionando la mascota del jugador

const seleccionarMascotaJugador = () => { 

  let inputHipodoge = document.getElementById('hipodoge')
  let inputCapipepo = document.getElementById('capipepo')
  let inputRatigueya = document.getElementById('ratigueya')
  let spanMascotaJugador = document.getElementById('mascota-jugador')


  if ( inputHipodoge.checked ) { 
    spanMascotaJugador.innerHTML = "Hipodoge"
  } else if ( inputCapipepo.checked ) {
    spanMascotaJugador.innerHTML = "Capipepo"
  } else if ( inputRatigueya.checked ) { 
    spanMascotaJugador.innerHTML = "Ratigueya"
  } else {
    alert('Selecciona una mascota para poder continuar! 🙃')
  }

  seleccionarMascotaEnemigo()
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
}

// Mostrando los ataques seleccionados en pantalla

const crearMensaje = (resultado) => { 
  let sectionMensajes = document.getElementById('mensajes')
  let parrafo = document.createElement('p')
  parrafo.innerHTML = (`Tu mascota ataco con ${ataqueJugador}, la mascota del enemigo con ${ataqueEnemigo} - ${resultado}.`)
  sectionMensajes.appendChild(parrafo)
}

// Funcion para la aleatoriedad

const aleatorio = (min, max) => { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)  // ? Asi podemos escuchar cuando el documento de Html este por completo cargado y ejecutar el JS 