const menu = document.getElementById('menu')
const calc = document.getElementById('calc')
const tour = document.getElementById('tour')
const clock = document.getElementById('clock')
const currency = document.getElementById('currency')
const weather = document.getElementById('weather')
const timer = document.getElementById('timer')


/*menu.addEventListener('mouseover', () => {
  calc.style.transform = 'translateX(300px)'
})

manu.addEventListener('mouseout', () => {
  calc.style.transform = 'translateX(0)'
})*/

menu.addEventListener('mouseover', () => {
    calc.classList.add('animateCalc')
} )

menu.addEventListener('mouseover', () => {
    tour.classList.add('animateTour')
} )

menu.addEventListener('mouseover', () => {
    weather.classList.add('animateWeather')
} )

menu.addEventListener('mouseover', () => {
    clock.classList.add('animateClock')
} )

menu.addEventListener('mouseover', () => {
    timer.classList.add('animateTimer')
} )

menu.addEventListener('mouseover', () => {
    currency.classList.add('animateCurrency')
} )