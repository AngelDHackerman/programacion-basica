
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const botonMascotaJugador = document.getElementById('boton-mascota');
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')

const seccionMascota = document.getElementById('seleccionar-mascota')
const seccionAtaque = document.getElementById('seleccionar-ataque')
const botonReiniciar = document.getElementById('boton-reiniciar')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionResultado = document.getElementById('resultado')

// Clase para crear mokepones

class Mokepon { 
  constructor ( nombre, foto, vida ) { 
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
  }
}

// Creando la instancia para los mokepones

let hipodoge = new Mokepon('hipodoge', '../assets/mokepons_mokepon_hipodoge_attack.webp', 5)
console.log(hipodoge)

let capipepo = new Mokepon('capipepo', '../assets/mokepons_mokepon_capipepo_attack.webp', 5)
console.log(capipepo)

let ratigueya = new Mokepon('ratiguera', '../assets/mokepons_mokepon_ratigueya_attack.webp', 5)
console.log(ratigueya)



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
    crearMensajeFinal(' FELICITACIONES !!! Ganaste 🥳')
    deshabilitarReiniciar()
  } else if ( vidasJugador == 0 ) { 
    crearMensajeFinal(' Lo sentimos pero perdiste 😞')
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
  let ataquesDelJugador = document.getElementById('ataques-del-jugador')
  let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

  let nuevoAtaqueDelJugador = document.createElement('p')  // ? esto va a crear un nuevo elemento "p" al final del texto de nuestra pagina
  let nuevoAtaqueDelEnemigo = document.createElement('p')

  sectionResultado.innerHTML = resultado
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

const crearMensajeFinal = (resultadoFinal) => { 

  sectionResultado.innerHTML = resultadoFinal
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