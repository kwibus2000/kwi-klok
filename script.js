const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = [
  'zondag',
  'maandag',
  'dinsdag',
  'woensdag',
  'donderdag',
  'vrijdag',
  'zaterdag',
]
const months = [
  'januari',
  'februari',
  'maart',
  'april',
  'mei',
  'juni',
  'juli',
  'augustus',
  'september',
  'oktober',
  'november',
  'december',
]

toggle.addEventListener('click', () => {
  const html = document.querySelector('html')
  html.classList.toggle('dark')
  toggle.innerText = html.classList.contains('dark') ? 'Licht aan' : 'Licht uit'
})

function setTime() {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  hourEl.style.transform = `translate(-50%, -100%) rotate(${
    hoursForClock * 30
  }deg)`
  hourEl.style.transition = `${
    hoursForClock === 0 ? 'none' : 'all 0.5s ease-in'
  }`

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`
  minuteEl.style.transition = `${minutes === 0 ? 'none' : 'all 0.5s ease-in'}`

  secondEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`
  secondEl.style.transition = `${seconds === 0 ? 'none' : 'all 0.5s ease-in'}`

  timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
  dateEl.innerHTML = `${days[day]} <span class='circle'>${date}</span> ${months[month]}`
}

setInterval(setTime, 1000)
