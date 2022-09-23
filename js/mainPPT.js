
    // Functions and global variables.

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1 ) + min)  // this creates a randon number between 1 up to 3.
}

const eleccion = (jugada) => { 
  let resultado = "";
  if ( jugada == 1 ) { 
    resultado = "Piedra"
  } else if ( jugada == 2 ) { 
    resultado = "Papel"
  } else if ( jugada == 3 ) { 
    resultado = "Tijera"
  } else {
    resultado = "MAL ELEGIDO"
  }
  return resultado;
}

let jugador = 0;
let pc = random(1, 3);  

jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")


    // Fight !!! 

alert(`Pc elige: ${eleccion(pc)}`);
alert(`Tu eliges: ${eleccion(jugador)}`);


if ( pc == jugador ) { 
  alert("EMPATE !!!")
} else if ( jugador == 1 && pc == 3 ) {
  alert("GANASTE !!!")
} else if ( jugador == 2 && pc == 1 ) { 
  alert("GANASTE !!!")
} else if ( jugador == 3 && pc == 2 ) {
  alert("GANASTE !!!")
} else { 
  alert("PERDISTE :( ")
}

