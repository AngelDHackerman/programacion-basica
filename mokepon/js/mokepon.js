
const iniciarJuego = () => { 

  // Seleccionando la mascota del jugador

  const seleccionarMascotaJugador = () => { 

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

    seleccionarMascotaEnemigo()
  }

  let botonMascotaJugador = document.getElementById('boton-mascota');
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);


  // Seleccionando la mascota del enemigo

  const seleccionarMascotaEnemigo = () => { 
    let ataqueAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if ( ataqueAleatorio == 1 ) { 
      spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if ( ataqueAleatorio == 2 ) { 
      spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
      spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
  }

  const aleatorio = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}



window.addEventListener('load', iniciarJuego)  // ? Asi podemos escuchar cuando el documento de Html este por completo cargado y ejecutar el JS 