
const express = require('express')  // llamamos a la libreria de express

const app = express() // inicamos express

app.get('/', (req, res) => { // Esta funcion escucha nuestras peticiones echas en la URL "/" que es el localhost, en el puerto 8080.
  res.send('Hooolaa')
})

app.listen(8080, () => { // Aqui le decimos que puerto debe escuchar nuestra aplicacion
  console.log('Servidor funcionando')
})