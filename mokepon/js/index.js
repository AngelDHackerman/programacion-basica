const express = require('express')  // llamamos a la libreria de express
const cors = require('cors')

const app = express() // inicamos express

app.use(cors())  // asi le decimos a la app que use la nueva libreria de cors, y con esto eliminamos los errores de cors
app.use(express.json())  // Especificamos que debe usar formato tipo JSON.

const jugadores = []

// Esta clase representa a todos los jugadores:

class Jugador { 
  constructor(id) { 
    this.id = id
  }

  asignarMokepon(mokepon) {  // este es un metodo de la clase jugador que nos permitira asignar un mokepon
    this.mokepon = mokepon
  }

  actualizarPosicion(x, y) { 
    this.x = x
    this.y = y
  }

  asignarAtaques(ataques) {
    this.ataques = ataques
  }
}

class Mokepon { 
  constructor(nombre) { 
    this.nombre = nombre
  }
}

app.get('/unirse', (req, res) => { 
  const id = `${Math.random()}`  // creamos un id, usando el metodo random

  const jugador = new Jugador(id)
  jugadores.push(jugador)

  // Con este header se evita el error Access-Control-Allow-Origin:
  res.setHeader('Access-Control-Allow-Origin', '*')

  res.send(id)
})


app.post('/mokepon/:jugadorId', (req, res) => { 
  const jugadorId = req.params.jugadorId || ""  // asi es como accedemos a la variable que se envio en la url, que esta en la peticion de post
  const nombre = req.body.mokepon || ""
  const mokepon = new Mokepon(nombre)

  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)  // aqui verificamos si el jugador ya existe en nuestra lista de jugadores
  if (jugadorIndex >= 0) { 
    jugadores[jugadorIndex].asignarMokepon(mokepon)
  }

  console.log(jugadores)
  console.log(jugadorId)
  res.end()
})

app.post('/mokepon/:jugadorId/posicion', (req, res) => { 
  const jugadorId = req.params.jugadorId || ""
  const x = req.body.x || 0
  const y = req.body.y || 0

  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

  if (jugadorIndex >= 0 ) {
    jugadores[jugadorIndex].actualizarPosicion(x, y)
  }

  const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)

  res.send({
    enemigos
  })
})

app.post('/mokepon/:jugadorId/ataques', (req, res) => { 
  const jugadorId = req.params.jugadorId || ""  // asi es como accedemos a la variable que se envio en la url, que esta en la peticion de post
  const ataques = req.body.ataques || []

  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)  // aqui verificamos si el jugador ya existe en nuestra lista de jugadores
  if (jugadorIndex >= 0) { 
    jugadores[jugadorIndex].asignarAtaques(ataques)
  }

  res.end()
})

app.get('/mokepon/:jugadoreId/ataques', (req, res) => { 
  const jugadorId = req.params.jugadoreId || ""
  const jugador = jugadores.find((jugador) => jugador.id === jugadorId)

  res.send({
    ataques: jugador.ataques
  })
})

app.listen(8080, () => { // Aqui le decimos que puerto debe escuchar nuestra aplicacion
  console.log('Servidor funcionando')
})