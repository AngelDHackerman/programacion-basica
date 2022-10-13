
let ataqueEnemigo = []
let ataqueJugador = []
let vidasJugador = 3
let vidasEnemigo = 3
let opcionDeMokepones
let botonFuego
let botonAgua
let botonTierra
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let ataquesMokeponEnemigo = []
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.webp'

// Funcion para la aleatoriedad

const aleatorio = (min, max) => { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Creando las dimensiones del mapa

let alturaQueBuscamos 
let anchoDelMapa = window.innerWidth - 20 // InnerWidth nos da el ancho actual de nuestra pantalla. 
const anchoMaximoDelMapa = 350

if ( anchoDelMapa > anchoMaximoDelMapa ) { 
  anchoDelMapa = anchoMaximoDelMapa - 20 
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

const spanMascotaJugador = document.getElementById('mascota-jugador')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')

const botonMascotaJugador = document.getElementById('boton-mascota');

const seccionMascota = document.getElementById('seleccionar-mascota')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const seccionAtaque = document.getElementById('seleccionar-ataque')
const botonReiniciar = document.getElementById('boton-reiniciar')
const contenedorAtaques = document.getElementById('contenedor-ataques')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionResultado = document.getElementById('resultado')

// Agregando el canvas (debe ser agregado aqui, no antes)

let lienzo = mapa.getContext("2d")

// Clase para crear mokepones

let mokepones = []

let inputHipodoge 
let inputCapipepo 
let inputRatigueya

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon { 
  constructor ( nombre, foto, vida, fotoMapa, x = 10, y = 10 ) { 
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
    this.ancho = 40
    this.alto = 40
    this.x = aleatorio(0, mapa.width - this.ancho)
    this.y =  aleatorio( 0, mapa.height - this.alto)
    this.mapaFoto = new Image()
    this.mapaFoto.src = fotoMapa
    this.velocidadX = 0
    this.velocidadY = 0
  }

  pintarMokepon () { 
    lienzo.drawImage(
      this.mapaFoto,
      this.x,  // posicion en X
      this.y,  // posicion en y
      this.ancho,  // Alto de imagen
      this.alto  // Ancho de imagen
    )
  }
}

// Creando la instancia para los mokepones

let hipodoge = new Mokepon('hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp', 5, './assets/hipodoge.webp')
let capipepo = new Mokepon('capipepo', './assets/mokepons_mokepon_capipepo_attack.webp', 5, './assets/capipepo.webp')
let ratigueya = new Mokepon('ratigueya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5, './assets/ratigueya.webp')

let hipodogeEnemigo = new Mokepon('hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp', 5, './assets/hipodoge.webp', 80, 120)
let capipepoEnemigo = new Mokepon('capipepo', './assets/mokepons_mokepon_capipepo_attack.webp', 5, './assets/capipepo.webp', 150, 95)
let ratigueyaEnemigo = new Mokepon('ratigueya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5, './assets/ratigueya.webp', 200, 190)

// Agregando 5 ataques por cada mokepon

hipodoge.ataques.push( 
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🌱', id: 'boton-tierra'},
)

hipodogeEnemigo.ataques.push( 
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🌱', id: 'boton-tierra'},
)

capipepo.ataques.push( 
  {nombre: '🌱', id: 'boton-tierra'},
  {nombre: '🌱', id: 'boton-tierra'},
  {nombre: '🌱', id: 'boton-tierra'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🔥', id: 'boton-fuego'},
)

capipepoEnemigo.ataques.push( 
  {nombre: '🌱', id: 'boton-tierra'},
  {nombre: '🌱', id: 'boton-tierra'},
  {nombre: '🌱', id: 'boton-tierra'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🔥', id: 'boton-fuego'},
)

ratigueya.ataques.push( 
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🌱', id: 'boton-tierra'},
)

ratigueyaEnemigo.ataques.push( 
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya)  // .push() agrega los elementos al array seleccionado.


const iniciarJuego = () => { 

  mokepones.forEach((mokepon) => { // for each mokepon in mokepones

    opcionDeMokepones = `
    <input type="radio" name="mascota" id=${mokepon.nombre}>
    <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
      <p>${mokepon.nombre}</p>
      <img src='${mokepon.foto}' alt="${mokepon.nombre}">
    </label>
    `

  contenedorTarjetas.innerHTML += opcionDeMokepones  // ? Asi insertamos el valor del template de arriba en el div que seleccionamos.

  inputHipodoge = document.getElementById('hipodoge')
  inputCapipepo = document.getElementById('capipepo')
  inputRatigueya = document.getElementById('ratigueya')

  })

  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

  seccionAtaque.style.display = 'none'
  sectionVerMapa.style.display = 'none'
  botonReiniciar.disabled = true
  botonReiniciar.addEventListener('click', reiniciarJuego)
}

// Seleccionando la mascota del jugador

const seleccionarMascotaJugador = () => { 

  if ( inputHipodoge.checked ) { 
    spanMascotaJugador.innerHTML = inputHipodoge.id  // el id se asigna en la linea '84' 
    mascotaJugador = inputHipodoge.id
    ocultarSeccionMascotas()  
  } else if ( inputCapipepo.checked ) {
    spanMascotaJugador.innerHTML = inputCapipepo.id
    mascotaJugador = inputCapipepo.id
    ocultarSeccionMascotas()  
  } else if ( inputRatigueya.checked ) { 
    spanMascotaJugador.innerHTML = inputRatigueya.id
    mascotaJugador = inputRatigueya.id
    ocultarSeccionMascotas()  
  } else {
    alert('Selecciona una mascota para poder continuar! 🙃')
  }

  extraerAtaques(mascotaJugador)
  sectionVerMapa.style.display = 'flex'
  iniciarMapa()
}

const extraerAtaques = (mascotaJugador) => { 
  let ataques
  for (let i = 0; i < mokepones.length; i++) {
    if ( mascotaJugador == mokepones[i].nombre ) { 
      ataques = mokepones[i].ataques
    }
  }
  mostrarAtaques(ataques)
}

const mostrarAtaques = (ataques) => { 
  ataques.forEach((ataque) => { 
    ataquesMokepon = ` 
    <button class="boton-de-ataque BAtaque" id="${ataque.id}">${ataque.nombre}</button>
    `
    contenedorAtaques.innerHTML += ataquesMokepon
  })
  botonFuego = document.getElementById('boton-fuego')
  botonAgua = document.getElementById('boton-agua')
  botonTierra = document.getElementById('boton-tierra')
  botones = document.querySelectorAll('.BAtaque')

}

const secuenciaAtaque = () => { 
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      if ( e.target.textContent === '🔥') { 
        ataqueJugador.push('FUEGO')
        boton.style.background = '#112f58'
        boton.disabled = true  // ? Con esto deshabilitamos los botones seleccionados
      } else if ( e.target.textContent === '💧') { 
        ataqueJugador.push('AGUA')
        boton.style.background = '#112f58'
        boton.disabled = true
      } else { 
        ataqueJugador.push('TIERRA')
        boton.style.background = '#112f58'
        boton.disabled = true
      }
      ataqueAleatorioEnemigo()
    })
  })
}

const ocultarSeccionMascotas = () => {
  seccionMascota.style.display = 'none'
  seccionAtaque.style.display = 'none'  // todo: esto fue ocultado al momento de agregar el canvas. 
}


// Seleccionando la mascota del enemigo

const seleccionarMascotaEnemigo = (enemigo) => { 
  // let mascotaAleatorio = aleatorio(0, mokepones.length - 1 )  // Esto debe comenzar en 0 porque el primer indice del array es 0, tambien -1 para evitar darle un indice extra al array.

  spanMascotaEnemigo.innerHTML = enemigo.nombre
  ataquesMokeponEnemigo = enemigo.ataques
  secuenciaAtaque()
}

// Seleccionando aleatoriamente el Ataque del enemigo

const ataqueAleatorioEnemigo = () => { 
  let ataqueAleatorio = aleatorio( 0, 5 - 1 )

  if ( ataqueAleatorio == 0 || ataqueAleatorio == 1 ) { 
    ataqueEnemigo.push('FUEGO')
  } else if ( ataqueAleatorio == 3 || ataqueAleatorio == 4) { 
    ataqueEnemigo.push('AGUA')
  } else { 
    ataqueEnemigo.push('TIERRA')
  }
  iniciarPelea ()
}

const iniciarPelea = () => { 
  if ( ataqueJugador.length === 5 ) { 
    combate()
  }
}

// Combate entre mascotas

const indexAmbosOponentes = ( jugador, enemigo ) => { 
  indexAtaqueJugador = ataqueJugador[jugador]
  indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

const combate = () => {

  for (let i = 0; i < ataqueJugador.length; i++) {
    if(ataqueJugador[i] === ataqueEnemigo[i]) { 
      indexAmbosOponentes(i, i)
      crearMensaje('EMPATE')
    } else if ( ataqueJugador[i] === 'FUEGO' && ataqueEnemigo[i] === 'TIERRA' ) { 
      indexAmbosOponentes(i, i)
      crearMensaje('GANASTE')
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else if ( ataqueJugador[i] === 'AGUA' && ataqueEnemigo[i] === 'FUEGO' ) { 
      indexAmbosOponentes(i, i)
      crearMensaje('GANASTE')
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else if ( ataqueJugador[i] === 'TIERRA' && ataqueEnemigo[i] === 'AGUA' ) { 
      indexAmbosOponentes(i, i)
      crearMensaje('GANASTE')
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else { 
      indexAmbosOponentes(i, i)
      crearMensaje('PERDISTE')
      victoriasEnemigo++
      spanVidasEnemigo.innerHTML = victoriasEnemigo
    }
  }
  revisarVictorias()
  
}

// Revisar las vidas de los jugadores y enviar el mensaje final. 

const revisarVictorias = () => { 
  if ( victoriasJugador === victoriasEnemigo ) {
    crearMensajeFinal('Esto fuen un empate 😐')
    deshabilitarReiniciar()
  } else if ( victoriasJugador > victoriasEnemigo ) { 
    crearMensajeFinal(' FELICITACIONES !!! Ganaste 🥳')
    deshabilitarReiniciar()
  } else {
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
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

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


const pintarCanvas = () => {

  mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
  mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
  lienzo.clearRect(0, 0, mapa.width, mapa.height)  // Elimina los contenidos que estaban antes para dejar limpio el canvas
  lienzo.drawImage(
    mapaBackground,  // aqui le decimos que quieremos que dibuje en el canvas
    0,  // posicion x
    0,  // posicion y
    mapa.width,  
    mapa.height,
  )

  mascotaJugadorObjeto.pintarMokepon()
  hipodogeEnemigo.pintarMokepon()
  capipepoEnemigo.pintarMokepon()
  ratigueyaEnemigo.pintarMokepon()

  // Aqui verificamos si nuestra mascota "tiene velocidad" osea se esta moviendo

  if ( mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0 ) { 
    revisarColision(hipodogeEnemigo)
    revisarColision(capipepoEnemigo)
    revisarColision(ratigueyaEnemigo)
  }
}


const moverDerecha = () => { 
  mascotaJugadorObjeto.velocidadX = 5
}

const moverIzquierda = () => { 
  mascotaJugadorObjeto.velocidadX = -5
}

const moverAbajo = () => { 
  mascotaJugadorObjeto.velocidadY = 5
}

const moverArriba = () => { 
  mascotaJugadorObjeto.velocidadY = -5
}

const detenerMovimiento = () => { 
  mascotaJugadorObjeto.velocidadX = 0
  mascotaJugadorObjeto.velocidadY = 0
}

const sePresionoUnaTecla = (event) => { 
  
  switch (event.key) {  // event.key dice que tecla fue presionada.
    case 'ArrowUp':
      moverArriba()
      break
    case 'ArrowDown':
      moverAbajo()
      break
    case 'ArrowLeft':
      moverIzquierda()
      break
    case 'ArrowRight':
      moverDerecha()
    default:
      break
  }
}

const iniciarMapa = () => {
  
  mascotaJugadorObjeto = obtenerObjetoMascota()
  intervalo =setInterval(pintarCanvas, 50)  // ? funcionEjecutar, tiempoDeIntervalo
  window.addEventListener('keydown', sePresionoUnaTecla)  // ? keydown, dectecta que tecla ha sido presionada
  window.addEventListener('keyup', detenerMovimiento)
}

const obtenerObjetoMascota = () => { 
  for (let i = 0; i < mokepones.length; i++) {
    if ( mascotaJugador == mokepones[i].nombre ) { 
      return mokepones[i]
    }
  }
}

const revisarColision = (enemigo) => { 

  const arribaEnemigo = enemigo.y
  const abajoEnemigo = enemigo.y + enemigo.alto
  const derechaEnemigo = enemigo.x + enemigo.ancho
  const izquierdaEnemigo = enemigo.x

  const arribaMascota = mascotaJugadorObjeto.y
  const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
  const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
  const izquierdaMascota = mascotaJugadorObjeto.x

  if (
    abajoMascota < arribaEnemigo || 
    arribaMascota > abajoEnemigo || 
    derechaMascota < izquierdaEnemigo || 
    izquierdaMascota > derechaEnemigo
  ) { 
    return
  }

  detenerMovimiento()
  clearInterval(intervalo)  // Esto detiene el intervalo que pinta a el mapa.
  seccionAtaque.style.display = 'flex'  // Esto mostrara la seccion de combate entre mokepones
  sectionVerMapa.style.display = 'none'  // Esto esconde el mapa donde se genero la colicion
  seleccionarMascotaEnemigo(enemigo)
  // alert(`Hay colicion con ${enemigo.nombre}`)
}

window.addEventListener('load', iniciarJuego)  // ? Asi podemos escuchar cuando el documento de Html este por completo cargado y ejecutar el JS 