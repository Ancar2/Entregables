const api = 'https://dragonball-api.com/api/characters?limit=5'
let apiAvatar = 'https://dragonball-api.com/api/characters/1'
let containerTarjetas = document.getElementById('containerg')
let container = document.getElementById('container-superior')

const solicitarApi = async api => {
  try {
    const solicitar = await fetch(api)
    const convertir = await solicitar.json()
    console.log(convertir)
    return convertir
  } catch (error) {
    console.log('error del trycatch')
  }
}

solicitarApi(api).then(convertir => {
  resultados = convertir.items
  console.log(resultados)
  let id

  for (let i = 0; i < resultados.length; i++) {
    const element = resultados[i]
    id = element.id

    containerTarjetas.innerHTML += `<div class="tarjeta noselect" data-id="${element.id}">
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
                <div id="card">
                    <div class="card-content">
                        <div class="card-glare"></div>
                        <div class="cyber-lines">
                            <span></span><span></span><span></span><span></span>
                        </div>
                        <div id="prompt">
                            <img class="avatar" src='${element.image}'
                                alt="avatar">
                        </div>
                        <button class="title">Seleccionar</button>
                        <div class="glowing-elements">
                            <div class="glow-1"></div>
                            <div class="glow-2"></div>
                            <div class="glow-3"></div>
                        </div>
                        <div class="subtitle">
                            <span>${element.name.toUpperCase()}</span> <br>
                            <span class="highlight">${element.race.toUpperCase()}  id: ${id}</span>
                        </div>
                        <div class="card-particles">
                            <span></span><span></span><span></span> <span></span><span></span><span></span>
                        </div>
                        <div class="corner-elements">
                            <span></span><span></span><span></span><span></span>
                        </div>
                        <div class="scan-line"></div>
                    </div>
                </div>
            </div>
        </div>`
  }

  const tarjeta = document.querySelectorAll('.tarjeta')
  for (let i = 0; i < tarjeta.length; i++) {
    const seleccion = tarjeta[i]

    seleccion.addEventListener('click', event => {
      container.innerHTML = ''
      let idSeleccionado = seleccion.getAttribute('data-id')
      console.log(idSeleccionado)

      apiAvatar = `https://dragonball-api.com/api/characters/${idSeleccionado}`
      solicitarApi(apiAvatar).then(convertir => {
        console.log(convertir.transformations)

        resultados = convertir.transformations

        for (let i = 0; i < resultados.length; i++) {
          const element = resultados[i]
          console.log(element)

          container.innerHTML += ` <img class="evolution" src="${element.image}" alt="">`
        }
      })
    })
  }
})


