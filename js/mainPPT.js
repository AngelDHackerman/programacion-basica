
// 1 es piedra, 2 es papel, 3 es tijera.

let jugador = 0;
let pc = 2

jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
// alert(`Elegiste: ${jugador}`)

    // Jugador options

if ( jugador == 1 ) { 
  alert("Elegiste  Piedra")
} else if ( jugador == 2 ) { 
  alert("Elegiste Papel")
} else if ( jugador == 3 ) { 
  alert("Elegiste Tijera")
} else {
  alert("Elegiste SUFRIMIENTO INTERMINABLE")
}

    // Pc options

if ( pc == 1 ) { 
  alert("PC  Piedra")
} else if ( pc == 2 ) { 
  alert("PC Papel")
} else if ( pc == 3 ) { 
  alert("PC Tijera")
}

    // Fight !!! 

if ( pc == jugador ) { 
  alert("EMPATE !!!")
} else if ( jugador == 1 && pc == 3 ) {
  alert("GANASTE")
} else if ( jugador == 2 && pc == 1 ) { 
  alert("GANASTE")
} else if ( jugador == 3 && pc == 2 ) {
  alert("GANASTE")
} else { 
  alert("PERDISTE :( ")
}