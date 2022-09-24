
const iniciarJuego = () => { 


  const selectionarMascotaJugador = () => { 

    const seleccionado = (mascota) => { 
      return document.getElementById(mascota).checked
    }

    if ( seleccionado('hipodoge') ) { 
      alert('Selectionaste a Hipodoge !')
    } else if ( seleccionado('capipepo') ) {
      alert('Seleccionaste a Capipepo')
    } else if ( seleccionado('ratigueya') ) { 
      alert('Seleccionaste a Ratiguyeya')
    } else {
      alert('No has selecionado nada !!!')
    }
  }


  let botonMascotaJugador = document.getElementById('boton-mascota');
  botonMascotaJugador.addEventListener('click', selectionarMascotaJugador);



}



window.addEventListener('load', iniciarJuego)  // ? Asi podemos escuchar cuando el documento de Html este por completo cargado y ejecutar el JS 