const buttons = document.querySelectorAll('.btn')
const functions = document.querySelectorAll('.function')
const display = document.querySelector('.display')
const clear = document.querySelector('.clear')
const add = document.querySelector('.add')
const subtract = document.querySelector('.subtract')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const answer = document.querySelector('.equals')
let func

const displayInput = (btn) => {
    display.innerHTML += btn.value
}

const operatorClick = (btn) => {
    display.innerHTML += btn.value

    if (btn.value == "+") {
        func = "add"
    }

    if (btn.value == "-") {
        func = "subtract"
    }

    if (btn.value == "*") {
        func = "multiply"
    }

    if (btn.value == "/") {
        func = "divide"
    }
}


const acFunc = () => {
    display.innerHTML = ''
}


const equalsFunc = () => {
    if (func == "add") {
        let values = display.innerHTML
        let digits = values.split(/[^\d]/)
        sum(parseInt(digits[0]), parseInt(digits[1]))
    }

    if (func == "subtract") {
        let values = display.innerHTML
        let digits = values.split(/[^\d]/)
        difference(parseInt(digits[0]), parseInt(digits[1]))
    }

    if (func == "multiply") {
        let values = display.innerHTML
        let digits = values.split(/[^\d]/)
        product(parseInt(digits[0]), parseInt(digits[1]))
    }

    if (func == "divide") {
        let values = display.innerHTML
        let digits = values.split(/[^\d]/)
        division(parseInt(digits[0]), parseInt(digits[1]))
    }
}


const sum = (...args) => {
    let add = args.reduce((a, b) => {
        return a + b
    })
    display.innerHTML = add
}

const difference = (...args) => {
    let sub = args.reduce((a, b) => {
        return a - b
    })
    display.innerHTML = sub
}

const product = (...args) => {
    let mult = args.reduce((a, b) => {
        return a * b
    })
    display.innerHTML = mult
}

const division = (...args) => {
    let div = args.reduce((a, b) => {
        return a / b
    })
    display.innerHTML = div
}



buttons.forEach((btn) => {
    btn.addEventListener('click', () => { displayInput(btn) })
})

functions.forEach((btn) => {
    btn.addEventListener('click', () => { operatorClick(btn) })
})
clear.addEventListener('click', acFunc)

answer.addEventListener('click', equalsFunc)