// Recuperando mis elementos html
let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")
let option3 = document.querySelector("#option3")
let calculator = document.querySelector("#calculator")
let calculatorTop = document.querySelector("#calculator__top")
let optionsContainer = document.querySelector("#options__container")
let screen = document.querySelector("#screen")
let keyboard = document.querySelector("#keyboard")
let items = document.querySelectorAll(".grid__item-1")

// Funcion para cambiar los template, elimina las clases.
function removeClass(c) {
    calculator.classList.remove("calculator--@".replace("@", c))
    calculatorTop.classList.remove("calculator__top--@".replace("@", c))
    optionsContainer.classList.remove("options__container--@".replace("@", c))
    screen.classList.remove("calculator__view--@".replace("@", c))
    keyboard.classList.remove("calculator__keyboard--@".replace("@", c))
}

// Funcion para cambiar los template, agrega las clases.
function addClass(c) {
    calculator.classList.add("calculator--@".replace("@",c))
    calculatorTop.classList.add("calculator__top--@".replace("@",c))
    optionsContainer.classList.add("options__container--@".replace("@",c))
    screen.classList.add("calculator__view--@".replace("@",c))
    keyboard.classList.add("calculator__keyboard--@".replace("@",c))
}

// Función para cambiar estilos, agregar y remover de los otros template
const removerItem = (remove1, remove2, insert) => {

    for(let i of items) {
        if(i.classList.contains("grid__item-@--complete".replace("@", remove1)) || i.classList.contains("grid__item-@--complete".replace("@", remove2))) {
            i.classList.remove("grid__item-@--complete".replace("@", remove1))
            i.classList.remove("grid__item-@--complete".replace("@", remove2))
            i.classList.add("grid__item-@--complete".replace("@", insert))
        }
        if(i.classList.contains("grid__item-@--result".replace("@", remove1)) || i.classList.contains("grid__item-@--result".replace("@", remove2))) {
            i.classList.remove("grid__item-@--result".replace("@", remove1))
            i.classList.remove("grid__item-@--result".replace("@", remove2))
            i.classList.add("grid__item-@--result".replace("@", insert))

        }
        if(i.classList.contains("grid__item-@".replace("@", remove1)) || i.classList.contains("grid__item-@".replace("@", remove2))) {
            i.classList.remove("grid__item-@".replace("@", remove1))
            i.classList.remove("grid__item-@".replace("@", remove2))
            i.classList.add("grid__item-@".replace("@", insert))

        }
    }
    
}

//Función callback para el evento
const removeActive1 = () => {
    option2.classList.remove("options--active--2")
    option3.classList.remove("options--active--3")
    option1.classList.add("options--active")
    removeClass("2")
    removeClass("3")

    removerItem("2", "3", "1")

}

//Función callback para el evento
const removeActive2 = () => {
    option1.classList.remove("options--active")
    option3.classList.remove("options--active--3")
    option2.classList.add("options--active--2")
    removeClass("3")
    addClass("2")
    removerItem("1", "3", "2")

}

//Función callback para el evento
const removeActive3 = () => {
    option1.classList.remove("options--active")
    option2.classList.remove("options--active--2")
    option3.classList.add("options--active--3")

    removeClass("2")
    addClass("3")

    removerItem("1", "2", "3")

}

//Agregando mis eventos
option1.addEventListener("click", removeActive1)
option2.addEventListener("click", removeActive2)
option3.addEventListener("click", removeActive3)


//funcion reset
let reset = document.querySelector("#reset")
reset.addEventListener("click", deleted)

//funcion resultado
let resultado = document.querySelector("#igual")
resultado.addEventListener("click", result)

//Valores de la pantalla
let pantalla = document.querySelector("#hel")
let pantallaContent  = pantalla.textContent

//eventos sobre la calculadora
app.addEventListener("click", eventClick) //Numeros - punto - DEL
app.addEventListener("click", calc) // Operadores

//Para tener control de los operadores y solo agregar uno
let valores = []
let cont = 0
//Para seleccionar el operador
let operador = ""

//Función para agregar efecto al presionar boton
function styles(item){
    // let styled = item.target
    item.classList.add("scale")
    setTimeout( () => {
        item.classList.remove("scale")
    }, 100)
}

//Función para limpiar pantalla
function deleted(ev){
        pantalla.textContent = ""
        pantallaContent = ""
        operador = ""
        cont = 0
        styles(ev.target)
}

//Función para escoger el operador del teclado y ejecutar su función
function calc(ev){
    //Suma
    if(ev.target.classList.contains("grid__item-1--plus")) {
        let sum = ev.target
        sumar(sum)
    } else if(ev.target.classList.contains("grid__item-1--menos")) {
        let menos = ev.target
        restar(menos)
    } else if(ev.target.dataset.number == "*") {
        let mult = ev.target
        multiplicar(mult)
    } else if(ev.target.dataset.number == "/") {
        let division = ev.target
        dividir(division)
    }
}

//Funciones operadoras
function sumar(ev){
    operador = "+"
    ++cont
    if(cont <= 1) {
        let valor1 = Number(pantalla.outerText)
        pantalla.innerText+= "+"
        valores.unshift(valor1)
        styles(ev)
    } 
}

function restar(menos){
    operador = "-"
    ++cont
    if(cont <= 1) {
        let valor1 = Number(pantalla.outerText)
        pantalla.innerText += "-"
        valores.unshift(valor1)
        styles(menos)
    } 
}

function multiplicar(mult){
    operador = "*"
    ++cont
    if(cont <= 1) {
        let valor1 = Number(pantalla.outerText)
        pantalla.innerText += "*"
        valores.unshift(valor1)
        styles(mult)
    }
}

function dividir(div){
    operador = "/"
    ++cont
    if(cont <= 1 ) {
        let valor1 = Number(pantalla.outerText)
        pantalla.innerText += "/"
        valores.unshift(valor1)
        styles(div)

    }
}

//Boton result
function result(ev){
    let val1 = valores[0]
    let valor2 = Number(pantalla.outerText.replace(val1 + operador, " ").trim())
    pantalla.innerText= ""
    pantallaContent = ""

    if(operador === "+") {
        let resultadito = val1 + valor2;
        pantalla.append(resultadito)
        operador = ""
    } else if(operador === "-") {
        let resultadito = val1 - valor2;
        pantalla.append(resultadito)
        operador = ""
    } else if(operador === "*") {
        let resultadito = val1 * valor2;
        pantalla.append(resultadito)
        operador = ""
    } else if (operador === "/") {
        if(valor2 === 0) {
            pantalla.append("NaN")
            operador = ""  
        } else {
            let resultadito = val1 / valor2
            pantalla.append(resultadito)
            operador = ""  
        }
    }

    styles(ev.target)

    cont = 0
    valores.pop()
}

////Función para leer los numeros
function eventClick(ev){
    // Condicional para saber si es un numero
    if(ev.target.classList.contains("number")){
        // agrego target a una variable
        let number = ev.target
        styles(number)
        //condicional para que no me escriba infinitos numeros
        if(pantallaContent.length < 12) {
            // le paso el valor del textcontent a mi variable global
            pantallaContent = pantalla.textContent
            let value = number.dataset.number
            let text = document.createTextNode(value)
        
            pantalla.append(text)
        } else {
            return 0
        }
        //Otro condicional para verificar si clicó un punto
    } else if(ev.target.dataset.number === "."){
        // 
            let point = ev.target
            styles(point)

            if(pantallaContent.length < 12) {
                pantallaContent = pantalla.textContent
                let value = point.dataset.number
                let text = document.createTextNode(value)
                pantalla.append(text)
            } else {
                return 0
            }
            //boton DEL
    } else if (ev.target.classList.contains("grid__item-1--del")) {
        if(pantalla.textContent === ""){
            ev.preventDefault()
        } else {
            let del = ev.target

            pantalla.lastChild.remove()

            styles(del)
        }
        
    }
}