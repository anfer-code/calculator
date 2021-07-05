let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")
let option3 = document.querySelector("#option3")
let calculator = document.querySelector("#calculator")
let calculatorTop = document.querySelector("#calculator__top")
let optionsContainer = document.querySelector("#options__container")
let screen = document.querySelector("#screen")
let keyboard = document.querySelector("#keyboard")
let items = document.querySelectorAll(".grid__item")

function remove(c) {
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

const removeActive1 = () => {
    option2.classList.remove("options--active--2")
    option3.classList.remove("options--active--3")
    option1.classList.add("options--active")
    remove("2")
    remove("3")

    for(let i of items) {
        if(i.classList.contains("grid__item-2--complete") || i.classList.contains("grid__item-3--complete")) {
            i.classList.remove("grid__item-3--complete")
            i.classList.remove("grid__item-2--complete")
            i.classList.add("grid__item--complete")
        }
        if(i.classList.contains("grid__item-3--result") || i.classList.contains("grid__item-2--result")) {
            i.classList.remove("grid__item-3--result")
            i.classList.remove("grid__item-2--result")
            i.classList.add("grid__item--result")

        }
        if(i.classList.contains("grid__item-2") || i.classList.contains("grid__item-3")
        ) {
            i.classList.remove("grid__item-2")
            i.classList.remove("grid__item-3")
            i.classList.add("grid__item")

        }
    }
}

const removeActive2 = () => {
    option1.classList.remove("options--active")
    option3.classList.remove("options--active--3")
    option2.classList.add("options--active--2")
    remove("3")
    adder("2")
    for(let i of items) {
        if(i.classList.contains("grid__item--complete") || i.classList.contains("grid__item-3--complete")) {
            i.classList.remove("grid__item--complete")
            i.classList.remove("grid__item-3--complete")
            i.classList.add("grid__item-2--complete")
        }
        if(i.classList.contains("grid__item--result") || i.classList.contains("grid__item-3--result")) {
            i.classList.remove("grid__item--result")
            i.classList.remove("grid__item-3--result")
            i.classList.add("grid__item-2--result")

        }
        if(i.classList.contains("grid__item-3") || i.classList.contains("grid__item")) {
            i.classList.remove("grid__item-3")
            i.classList.add("grid__item-2")

        }
    }
}

const removeActive3 = () => {
    option1.classList.remove("options--active")
    option2.classList.remove("options--active--2")
    option3.classList.add("options--active--3")

    remove("2")
    adder("3")

    for(let i of items) {
        if(i.classList.contains("grid__item--complete") || i.classList.contains("grid__item-2--complete")) {
            i.classList.remove("grid__item--complete")
            i.classList.remove("grid__item-2--complete")
            i.classList.add("grid__item-3--complete")
        }
        if(i.classList.contains("grid__item--result") || i.classList.contains("grid__item-2--result")) {
            i.classList.remove("grid__item--result")
            i.classList.remove("grid__item-2--result")
            i.classList.add("grid__item-3--result")

        }
        if(i.classList.contains("grid__item-2") || i.classList.contains("grid__item")) {
            i.classList.remove("grid__item-2")
            i.classList.add("grid__item-3")

        }
    }
}

option1.addEventListener("click", removeActive1)
option2.addEventListener("click", removeActive2)
option3.addEventListener("click", removeActive3)
