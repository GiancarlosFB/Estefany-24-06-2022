const maquina1 = document.getElementById('maquina-escribir1')
const maquina2 = document.getElementById('maquina-escribir2')
const maquina3 = document.getElementById('maquina-escribir3')
const maquina4 = document.getElementById('maquina-escribir4')
const maquina5 = document.getElementById('maquina-escribir5')

const maquinaEscribir1 = (text = '',tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML = ''
  let cont = 0
  let escribir = setInterval(function(){
    etiqueta.innerHTML += arrayCaracteres[cont]
    cont++
    if (cont === arrayCaracteres.length) {
      clearInterval(escribir)
    }
  }, tiempo)
}

const maquinaEscribir2 = (text = '',tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML = ''
  let cont = 0
  let escribir = setInterval(function(){
    etiqueta.innerHTML += arrayCaracteres[cont]
    cont++
    if (cont === arrayCaracteres.length) {
      cont = 0
      etiqueta.innerHTML = ''
    }
  }, tiempo)
}

const maquinaEscribir3 = (text = '',tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML = ''
  let i = 0
  let j = text.length
  let escribir = setInterval(function(){
    if (i === arrayCaracteres.length) {
      etiqueta.innerHTML = text.substring(0,j)
      j--
      if (j === 0) {
        etiqueta.innerHTML = ''
        i = 0
        j = text.length
      }
    } else {
      etiqueta.innerHTML += arrayCaracteres[i]
      i++
    }
  }, tiempo)
}

const maquinaEscribir4 = (text = '',tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML = ''
  let i = 0
  let escribir = setInterval(function(){
    if (arrayCaracteres[i] === '*') {
      etiqueta.innerHTML += '</br>'
    } else {
      etiqueta.innerHTML += arrayCaracteres[i]
    }
    if (i === arrayCaracteres.length) {
      etiqueta.innerHTML = ''
      i = 0
    }
    i++
  }, tiempo)
}

maquinaEscribir1("Estefany 😬😁",300, maquina1)

maquinaEscribir2("Espero te guste 😍   ",200, maquina2)


