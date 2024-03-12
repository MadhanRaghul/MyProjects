const cars = document.getElementById('cars')
const conver = document.getElementById('conver')
const suv = document.getElementById('suv')
const sedan = document.getElementById('sedan')
const muscle = document.getElementById('muscle')
const electric = document.getElementById('electric')
const sports = document.getElementById('sports')
const container = document.getElementsByClassName('container')
const carsbtn= document.getElementsByClassName('carsbtn')

const top1 = document.getElementById('top')
const mid1 = document.getElementById('mid')
const below1 = document.getElementById('below')

/*menu.addEventListener('mouseover', () => {
  calc.style.transform = 'translateX(300px)'
})

manu.addEventListener('mouseout', () => {
  calc.style.transform = 'translateX(0)'
})*/

/* MENU HOVER */

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

/* CURVY FRAMES */

conver.addEventListener('mouseover', () => {
    top1.style.backgroundColor = 'hsl(52, 100%, 73%)'
    mid1.style.backgroundColor = 'hsl(52, 100%, 70%)'
    below1.style.display = 'block'
    mid1.style.display = 'block'
    top1.style.display = 'block'
})

sports.addEventListener('mouseover', () => {
    top1.style.backgroundColor = 'hsl(269, 100%, 73%)'
    mid1.style.backgroundColor = 'hsl(269, 100%, 70%)'
    below1.style.display = 'block'
    mid1.style.display = 'block'
    top1.style.display = 'block'
})

electric.addEventListener('mouseover', () => {
    top1.style.backgroundColor = 'hsl(161, 100%, 73%)'
    mid1.style.backgroundColor = 'hsl(161, 100%, 70%)'
    below1.style.display = 'block'
    mid1.style.display = 'block'
    top1.style.display = 'block'
})

muscle.addEventListener('mouseover', () => {
    top1.style.backgroundColor = 'hsl(321, 100%, 73%)'
    mid1.style.backgroundColor = 'hsl(321, 100%, 70%)'
    below1.style.display = 'block'
    mid1.style.display = 'block'
    top1.style.display = 'block'
})

sedan.addEventListener('mouseover', () => {
    top1.style.backgroundColor = 'hsl(211, 100%, 73%)'
    mid1.style.backgroundColor = 'hsl(211, 100%, 70%)'
    below1.style.display = 'block'
    mid1.style.display = 'block'
    top1.style.display = 'block'
})

suv.addEventListener('mouseover', () => {
    top1.style.backgroundColor = 'hsl(18, 100%, 73%)'
    mid1.style.backgroundColor = 'hsl(18, 100%, 70%)'
    below1.style.display = 'block'
    mid1.style.display = 'block'
    top1.style.display = 'block'
})
