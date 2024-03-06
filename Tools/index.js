const cars = document.getElementById('cars')
const conver = document.getElementById('conver')
const suv = document.getElementById('suv')
const sedan = document.getElementById('sedan')
const muscle = document.getElementById('muscle')
const electric = document.getElementById('electric')
const sports = document.getElementById('sports')


/*menu.addEventListener('mouseover', () => {
  calc.style.transform = 'translateX(300px)'
})

manu.addEventListener('mouseout', () => {
  calc.style.transform = 'translateX(0)'
})*/

cars.addEventListener('mouseover', () => {
    conver.classList.add('animateconver')
} )

cars.addEventListener('mouseover', () => {
    suv.classList.add('animatesuv')
} )

cars.addEventListener('mouseover', () => {
    electric.classList.add('animateelectric')
} )

cars.addEventListener('mouseover', () => {
    sedan.classList.add('animatesedan')
} )

cars.addEventListener('mouseover', () => {
    sports.classList.add('animatesports')
} )

cars.addEventListener('mouseover', () => {
    muscle.classList.add('animatemuscle')
} )