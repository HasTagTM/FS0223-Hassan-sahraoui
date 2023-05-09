let lista = []
let inputName = document.querySelector('#name')
let button1 = document.querySelector('#btn1')
let button2 = document.querySelector('#btn2')
let paragrafo = document.querySelector('#paragNome')


button1.addEventListener('click' , function(e){
    e.preventDefault()
    let newName = {
        nome : inputName.value
    } 
    lista.push(newName)
    let listaIsAsetting = JSON.stringify(lista)
    localStorage.setItem("nomi salvati:",listaIsAsetting)
    inputName.value = ''
    let ultimoDato = JSON.parse(localStorage.getItem("nomi salvati:"))

    paragrafo.innerHTML = ultimoDato[ultimoDato.length - 1].nome
    
})



button2.addEventListener('click' , function(e){
    e.preventDefault()
    let deleteName =  JSON.parse(localStorage.getItem("nomi salvati:"))
    deleteName.pop()
    JSON.stringify(deleteName)
    localStorage.setItem("nomi salvati:", deleteName)
    paragrafo.innerHTML = deleteName[deleteName.length - 1].nome
})

