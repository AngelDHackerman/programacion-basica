
// 1 es piedra, 2 es papel, 3 es tijera.

let jugador = 0;
let pc = 2

jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
// alert(`Elegiste: ${jugador}`)

if ( jugador == 1 ) { 
  alert("Elegiste Piedra")
} else if ( jugador == 2 ) { 
  alert("Elegiste Papel")
} else if ( jugador == 3 ) { 
  alert("Elegiste Tijera")
} else {
  alert("Elegiste SUFRIMIENTO INTERMINABLE")
}