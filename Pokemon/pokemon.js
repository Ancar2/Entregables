let url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=24'
let next = document.getElementById('next')
let atras = document.getElementById('atras')
let number = document.getElementById('number')
let mensaje = document.getElementById('mensaje')
let contenedor = document.getElementById('contenedor-general')
let titulo = document.getElementById('titulo')
let check = document.querySelectorAll('.checkbox')
let porNombre = document.getElementById('por-nombre')
let numberPokemon = 0
let pagina = 1

const solicitarApi = async api => {
  try {
    const solicitud = await fetch(api)
    const convert = await solicitud.json()
    return convert
  } catch (error) {
    console.log('error de trycath')
  }
}

const fetchDeFetch = (url, nameGenerador, filtroNombre, filtroId, filtro1, filtro2, filtro3, filtro4, filtro5, filtro6, filtro7,filtro8) => {
  titulo.innerHTML = `<h1 class="titulo">CaRdS Of PoKeMoN</h1><P class="tituloT">BY ANCAR</P>`
  contenedor.innerHTML = `<div class="loader"><img src="https://media.tenor.com/4K2_dLLq-pwAAAAm/charmander-chases-tail.webp" alt=""></div>`
  // next.disabled = true;
  atras.disabled = true;
  solicitarApi(url).then(async convert => {
    const results = convert.results
    // console.log(next.disabled);

    let promesas = []

    for (let i = 0; i < results.length; i++) {
      const pokemon = results[i]
      promesas.push(solicitarApi(pokemon.url))
    }

    const arraySolucion = await Promise.all(promesas)
    // next.disabled = false;
    atras.disabled = false;
    contenedor.innerHTML = ''
    // console.log(next.disabled);
    // console.log(arraySolucion);
    

    nameGenerador(arraySolucion, filtroNombre, filtroId, filtro1, filtro2, filtro3, filtro4, filtro5, filtro6, filtro7, filtro8)
  })
}

const generarTarjetas = (array, filtroNombre, filtroId, filtro1, filtro2, filtro3, filtro4, filtro5, filtro6, filtro7, filtro8) => {
  contenedor.innerHTML = ''
  for (let i = 0; i < array.length; i++) {
    const convert = array[i]
    let imagen = convert.sprites.other.dream_world.front_default
    let imagenTwo = convert.sprites.other.showdown.front_default
    let tipo = convert.types[0].type.name
    let nombre = convert.name
    let id = convert.id
    // console.log(parseInt(filtroId));
    
    if (filtroId == id || filtroNombre == nombre || filtroNombre == tipo|| filtro1 == tipo || filtro2 == tipo || filtro3 == tipo || filtro4 == tipo || filtro5 == tipo || filtro6 == tipo || filtro7 == tipo || filtro8 == tipo) {
      if (imagen == null) {
        imagen = convert.sprites.front_default
        imagenTwo = convert.sprites.front_default
        console.log(`no hay imagenGIFT`)
      }

      contenedor.innerHTML += crearTarjetaHTML(convert, imagen, imagenTwo, tipo)
     
    } else if (filtro1 == 'all' || filtro2 == 'all' || filtro3 == 'all' || filtro4 == 'all' || filtro5 == 'all' || filtro6 == 'all' || filtro7 == 'all' ||filtro8 == 'all') {
      if (imagen == null) {
        imagen = convert.sprites.front_default
        imagenTwo = convert.sprites.front_default
        console.log(`no hay imagenGIFT`)
      }

      contenedor.innerHTML += crearTarjetaHTML(convert, imagen, imagenTwo, tipo)
    }
  }

  let cerrar = document.querySelectorAll('.cerrar')
  for (let x = 0; x < cerrar.length; x++) {
    const boton = cerrar[x]
    // console.log(boton);

    boton.addEventListener('click', event => {
      // console.log(boton.parentElement);

      boton.parentElement.remove()
      console.log(`Tarjeta eliminada`)
    })
  }


   if (!porNombre.value == '' && contenedor.innerHTML == '') {
    console.log(``)
      contenedor.innerHTML = `<h2>Buscaste el POKEMON ${porNombre.value.toUpperCase()}<br> 
      No existe en esta pagina, tal vez <strong class= 'important' >en la siguiente </strong>o revisa tu escritura ! <br><br> 
      <img src="https://media.tenor.com/74l5y1hUdtwAAAAm/pokemon.webp" alt=""><br>
      estas buscando entre los pokemon <strong class= 'important' >${numberPokemon} y ${numberPokemon + 434}</strong></h2>`
    
   }

  for (let c = 0; c < check.length; c++) {
    const element = check[c]
    // console.log(element.checked);
    if (element.checked && contenedor.innerHTML == '') {
      
      contenedor.innerHTML = `<h2>Filtraste el tipo de POKEMON ${element.value.toUpperCase()} u otro<br> 
      En esta pagina no encuentras esos tipos de pokemon <br><br> 
      <img src="https://media.tenor.com/74l5y1hUdtwAAAAm/pokemon.webp" alt=""></h2>`
    }
  }
 
    
}

const crearTarjetaHTML = (convert, imagen, imagenTwo, tipo) => {
  return `<div class="container noselect">
    <button class="cerrar">
        <span class="texto-hover">x</span>
    </button>
    <div class="canvas">
        <div class="tracker tr-1"></div>
        <div class="tracker tr-2"></div>
        <div class="tracker tr-3"></div>
        <div class="tracker tr-4"></div>
        <div class="tracker tr-5"></div>
        <div class="tracker tr-6"></div>
        <div class="tracker tr-7"></div>
        <div class="tracker tr-8"></div>
        <div class="tracker tr-9"></div>
        <div id="card" class="${tipo}">
            <div class="card-content">
                <div class="card-glare"></div>
                <div class="cyber-lines"><span></span><span></span><span></span><span></span></div>
                <div id="prompt"><img class="avatar" src="${imagen}" alt="POKEMON"></div>
                <div class="title">${convert.stats[1].stat.name} : ${convert.stats[1].base_stat}<br/>
                    ${convert.stats[2].stat.name} : ${convert.stats[2].base_stat} <br/>
                    <img class="gift" src="${imagenTwo}" alt="POKEMON">
                </div>
                <div class="glowing-elements">
                    <div class="glow-1"></div><div class="glow-2"></div><div class="glow-3"></div>
                </div>
                <div class="subtitle">
                    <span>${convert.name}</span>
                    <span class="highlight">id: ${convert.id} <br> ${tipo}</span>
                </div>
                <div class="card-particles"><span></span><span></span><span></span></div>
                <div class="corner-elements"><span></span><span></span><span></span><span></span></div>
                <div class="scan-line"></div>
            </div>
        </div>
    </div>
</div>`
}

const generarFiltrado = (url, filtroNombre, filtroId,) => {
  number.value = pagina
  atras.innerHTML = 'ATRAS'
  next.innerHTML = 'SIGUIENTE'

  let marcado = false
  let cantidadCheck = 0
  let type1
  let type2
  let type3
  let type4
  let type5
  let type6
  let type7
  let type8

  for (let i = 0; i < check.length; i++) {
    const element = check[i]

    if (element.checked) {
      cantidadCheck += 1
      marcado = true
      type = element.value

      if (cantidadCheck === 1) {
        type1 = type
      } else if (cantidadCheck === 2) {
        type2 = type
      } else if (cantidadCheck === 3) {
        type3 = type
      } else if (cantidadCheck === 4) {
        type4 = type
      } else if (cantidadCheck === 5) {
        type5 = type
      } else if (cantidadCheck === 6) {
        type6 = type
      } else if (cantidadCheck === 7) {
        type7 = type
      } else if (cantidadCheck === 8) {
        type8 = type
      }
    }
  }

  if (marcado == true) {
    console.log(`estas filtrando por tipo ${type}`)
    console.log('------------------------------')
    mensaje.innerHTML = `estas filtrando por tipo ${type.toUpperCase()} u otros`
    contenedor.innerHTML = ''
    fetchDeFetch(url, generarTarjetas, filtroNombre, filtroId, type1, type2, type3, type4, type5, type6, type7, type8)
  } else {
    console.log('sin filtro')
    mensaje.innerHTML = ''
    contenedor.innerHTML = ''
    fetchDeFetch(url, generarTarjetas, filtroNombre, filtroId, 'all')
    console.log('------------------------------')
  }
}




next.addEventListener('click', event => {
  contenedor.innerHTML = ''
  mensaje.innerHTML = ''

  if (numberPokemon < 1278) {
    
    if (porNombre.value == '') {
      numberPokemon += 24
      pagina++

      url = `https://pokeapi.co/api/v2/pokemon?offset=${numberPokemon}&limit=24`
      console.log(`estas en la pagina ${pagina}`)

      generarFiltrado(url)
      console.log('------------------------------')

    }else if(!porNombre.value =='' && (numberPokemon + 434)!= 1302){
      numberPokemon += 434
      pagina++
      number.value = pagina

      url = `https://pokeapi.co/api/v2/pokemon?offset=${numberPokemon}&limit=434`
      console.log(`buscando entre ${numberPokemon} y ${numberPokemon + 434}`)
      fetchDeFetch(url, generarTarjetas, porNombre.value, parseInt(porNombre.value))
      console.log('--------------------------------')
     
    }

  }

if (contenedor.innerHTML == '') {
      contenedor.innerHTML = `<h2>No hay mas paginas que mostrar   <br><br> 
      <img src="https://media.tenor.com/74l5y1hUdtwAAAAm/pokemon.webp" alt=""></h2>`
    } 
})

atras.addEventListener('click', event => {  
  contenedor.innerHTML = ''
  mensaje.innerHTML = ''
  
  
  if (numberPokemon >= 0) {


    if(numberPokemon == 0 && porNombre.value == ''){
      numberPokemon = 0
      url = `https://pokeapi.co/api/v2/pokemon?offset=${numberPokemon}&limit=24`
      console.log(`estas en la pagina ${pagina}`)
      generarFiltrado(url)
      console.log('------------------------------')

    } else if (numberPokemon > 0 &&  porNombre.value == ''){
       numberPokemon -= 24
      pagina -= 1
      url = `https://pokeapi.co/api/v2/pokemon?offset=${numberPokemon}&limit=24`
      console.log(`estas en la pagina ${pagina}`)
      generarFiltrado(url)
      console.log('------------------------------')

    } else if (numberPokemon == 0 && !porNombre.value == '') {
      numberPokemon = 0
      pagina = 1
      number.value = pagina  
      atras.innerHTML = 'ATRAS'
      next.innerHTML = 'SIGUIENTE'
      url = `https://pokeapi.co/api/v2/pokemon?offset=${numberPokemon}&limit=434`
      console.log(`estas en la pagina ${pagina}`)
      fetchDeFetch(url, generarTarjetas, porNombre.value, parseInt(porNombre.value))
      console.log(`buscando entre ${numberPokemon} y ${numberPokemon + 434}`)

    } else if (numberPokemon > 0 && !porNombre.value == '') {
      numberPokemon-= 434
      pagina -=1 
      number.value = pagina
      url = `https://pokeapi.co/api/v2/pokemon?offset=${numberPokemon}&limit=434`
      console.log(`buscando entre ${numberPokemon} y ${numberPokemon + 434}`)
      fetchDeFetch(url, generarTarjetas, porNombre.value, parseInt(porNombre.value))
      console.log()
    }
   
  }
})

number.addEventListener('input', event => {
  let valor = parseInt(number.value)
  mensaje.innerHTML = ''

  if (isNaN(valor)) {
    number.value = 1
    pagina = ''
    numberPokemon = 0
  } else {
    pagina = valor
    numberPokemon = (pagina - 1) * 24
  }

  if (pagina <= 0 || pagina >= 56) {
    mensaje.innerHTML = 'NO EXISTE ESTA PAGINA'
  }

  console.log(`estas en la pagina ${pagina}`)

  url = `https://pokeapi.co/api/v2/pokemon?offset=${numberPokemon}&limit=24`

  generarFiltrado(url)
  console.log('------------------------------')
})

porNombre.addEventListener ( 'input', event => {

   porNombre.value = porNombre.value.toLowerCase()


  if (!porNombre.value == '' && atras.innerHTML == 'ATRAS') {

    mensaje.innerHTML = ''
    pagina = 1
    number.value = pagina  
    numberPokemon = 0
   let url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=434'
    console.log(`buscando ${porNombre.value}`)
   
    fetchDeFetch(url, generarTarjetas, porNombre.value, parseInt(porNombre.value))
    console.log()

  } else if (porNombre.value == '') {
    numberPokemon = 0
    number.value = pagina  
     pagina = 1
    url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=24'
    generarFiltrado(url)
  }
    
})

for (let i = 0; i < check.length; i++) {
  const element = check[i]

  element.addEventListener('input', event => {
    // if (!number.value == '') {
    //   number.disabled= true
      generarFiltrado(url)
    // } 
  })
}

