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


/* DROPDOWN */

const navCartypes = document.getElementById('navCartypes')
const cartypes = document.getElementById('cartypes')

navCartypes.addEventListener('click', () => {
    if (cartypes.style.display === 'flex') {
        cartypes.style.display = 'none'
    } 
    else {
        cartypes.style.display = 'flex'
    }
})


/* MENU HOVER */

cars.addEventListener('mouseover', () => {
    conver.classList.add('animateconver')
    conver.style.display = 'block'
} )

cars.addEventListener('mouseover', () => {
    suv.classList.add('animatesuv')
    suv.style.display = 'block'
} )

cars.addEventListener('mouseover', () => {
    electric.classList.add('animateelectric')
    electric.style.display = 'block'
} )

cars.addEventListener('mouseover', () => {
    sedan.classList.add('animatesedan')
    sedan.style.display = 'block'
} )

cars.addEventListener('mouseover', () => {
    sports.classList.add('animatesports')
    sports.style.display = 'block'
} )

cars.addEventListener('mouseover', () => {
    muscle.classList.add('animatemuscle')
    muscle.style.display = 'block'
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


// Function to add class on scroll
function navBlur() {
    var navbar = document.querySelector('.navbar')
    
    if (!navbar) return;
    var scrollTop = window.scrollY;

    if (scrollTop > 600) {
      navbar.classList.add('nav-blur')
    } else {
      navbar.classList.remove('nav-blur')
    }
  }
window.addEventListener('scroll', navBlur)
  
/* 
function specsPop() {
    var specs = document.querySelector('.specs')
    
    if (!specs) return;
    var scrollTop = window.scrollY;

    if (scrollTop > 600) {
      specs.classList.add('nav-blur')
    } else {
      specs.classList.remove('nav-blur')
    }
  }
window.addEventListener('scroll', specsPop) */
  
