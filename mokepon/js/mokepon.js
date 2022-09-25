
const iniciarJuego = () => { 


  const selectionarMascotaJugador = () => { 

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
  }


  let botonMascotaJugador = document.getElementById('boton-mascota');
  botonMascotaJugador.addEventListener('click', selectionarMascotaJugador);


}



window.addEventListener('load', iniciarJuego)  // ? Asi podemos escuchar cuando el documento de Html este por completo cargado y ejecutar el JS 