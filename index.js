let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")
let option3 = document.querySelector("#option3")
let calculator = document.querySelector("#calculator")
let calculatorTop = document.querySelector("#calculator__top")
let optionsContainer = document.querySelector("#options__container")
let screen = document.querySelector("#screen")
let keyboard = document.querySelector("#keyboard")
let items = document.querySelectorAll(".grid__item-1")

function remover(c) {
    calculator.classList.remove("calculator--@".replace("@", c))
    calculatorTop.classList.remove("calculator__top--@".replace("@", c))
    optionsContainer.classList.remove("options__container--@".replace("@", c))
    screen.classList.remove("calculator__view--@".replace("@", c))
    keyboard.classList.remove("calculator__keyboard--@".replace("@", c))
}

function adder(c) {
    calculator.classList.add("calculator--@".replace("@",c))
    calculatorTop.classList.add("calculator__top--@".replace("@",c))
    optionsContainer.classList.add("options__container--@".replace("@",c))
    screen.classList.add("calculator__view--@".replace("@",c))
    keyboard.classList.add("calculator__keyboard--@".replace("@",c))
}

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

const removeActive1 = () => {
    option2.classList.remove("options--active--2")
    option3.classList.remove("options--active--3")
    option1.classList.add("options--active")
    remover("2")
    remover("3")

    removerItem("2", "3", "1")

}

const removeActive2 = () => {
    option1.classList.remove("options--active")
    option3.classList.remove("options--active--3")
    option2.classList.add("options--active--2")
    remover("3")
    adder("2")
    removerItem("1", "3", "2")

}

const removeActive3 = () => {
    option1.classList.remove("options--active")
    option2.classList.remove("options--active--2")
    option3.classList.add("options--active--3")

    remover("2")
    adder("3")

    removerItem("1", "2", "3")

}

option1.addEventListener("click", removeActive1)
option2.addEventListener("click", removeActive2)
option3.addEventListener("click", removeActive3)



let number1 = document.querySelector("#number1")
let number2 =document.querySelector("#number2")
let number3 =document.querySelector("#number3")
let number4 =document.querySelector("#number4")
let number5 =document.querySelector("#number5")
let number6 =document.querySelector("#number6")
let number7 =document.querySelector("#number7")
let number8 =document.querySelector("#number8")
let number9 =document.querySelector("#number9")
let number0 =document.querySelector("#number0")
let sum =document.querySelector("#sum")
let resta =document.querySelector("#rest")
let div =document.querySelector("#div")
let mult =document.querySelector("#mult")

number1.addEventListener("click", eventClick)
number2.addEventListener("click", eventClick)
number3.addEventListener("click", eventClick)
number4.addEventListener("click", eventClick)
number5.addEventListener("click", eventClick)
number6.addEventListener("click", eventClick)
number7.addEventListener("click", eventClick)
number8.addEventListener("click", eventClick)
number9.addEventListener("click", eventClick)
number0.addEventListener("click", eventClick)

function eventClick(){
    let hel = document.querySelector("#hel")
    let value = this.dataset.number
    
    let text = document.createTextNode(value)

    hel.append(text)
    this.classList.add("scale")
    setTimeout( () => {
        this.classList.remove("scale")
    }, 100)
}