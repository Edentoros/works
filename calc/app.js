const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')

const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const multBtn = document.querySelector('#mult')
const divBtn = document.querySelector('#div')

const output = document.querySelector('#output')

function getValues() {
  const value1 = parseFloat(num1.value)
  const value2 = parseFloat(num2.value)
  console.log(value1, value2)
  return [value1, value2]
}

function addHandler() {
  const values = getValues()
  const result = Math.trunc((values[0] + values[1]) * 100) / 100
  document.querySelector('#result').style.transitionDuration = '0.5s'
  document.querySelector('#result').style.opacity = 1
  output.innerHTML = `Result: ${result}`
}
function subHandler() {
  const values = getValues()
  const result = Math.trunc((values[0] - values[1]).toFixed(2) * 100) / 100
  document.querySelector('#result').style.transitionDuration = '0.5s'
  document.querySelector('#result').style.opacity = 1
  output.innerHTML = `Result: ${result}`
}
function multHandler() {
  const values = getValues()
  const result = Math.trunc(values[0] * values[1] * 100) / 100
  document.querySelector('#result').style.transitionDuration = '0.5s'
  document.querySelector('#result').style.opacity = 1
  output.innerHTML = `Result: ${result}`
}
function divHandler() {
  const values = getValues()
  let result = 0
  const check = values[0] / values[1]
  if ((check ^ 0) !== 0) {
    result = Math.round(values[0] / values[1])
  } else {
    result = (values[0] / values[1]).toFixed(4)
  }

  document.querySelector('#result').style.transitionDuration = '0.5s'
  document.querySelector('#result').style.opacity = 1
  output.innerHTML = `Result: ${result}`
}
addBtn.addEventListener('click', addHandler)
subBtn.addEventListener('click', subHandler)
multBtn.addEventListener('click', multHandler)
divBtn.addEventListener('click', divHandler)
