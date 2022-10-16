
const express = require('express')  // llamamos a la libreria de express

const app = express() // inicamos express

const jugadores = []

// app.get('/', (req, res) => {   // Esta funcion escucha nuestras peticiones echas en la URL "/" que es el localhost, en el puerto 8080.
//   res.send('Hooolaa')
// })


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

app.listen(8080, () => { // Aqui le decimos que puerto debe escuchar nuestra aplicacion
  console.log('Servidor funcionando')
})