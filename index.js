//obtendo referencia dos botões e numero
const contadorElement = document.getElementById('numero')
const botaoAumentar = document.getElementById('aumentar')
const botaoDiminuir = document.getElementById('diminuir')
const botaoResetar = document.getElementById('resetar')

//variável do contador 
let contador = 0

//funcao aumentar
botaoAumentar.addEventListener('click', () =>{
    contador++
    contadorElement.textContent = contador
})

//funcao diminuir
botaoDiminuir.addEventListener('click', () =>{
    contador--
    contadorElement.textContent = contador
})

//resetar
botaoResetar.addEventListener('click',() =>{
    contador = 0
    contadorElement.textContent = contador
})