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
  console.log(jugadores)
  console.log(jugadorId)
  res.end()
})

app.listen(8080, () => { // Aqui le decimos que puerto debe escuchar nuestra aplicacion
  console.log('Servidor funcionando')
})