// import char from './features/home/char'
// HOME
import clearHero from './features/home/clearHero'
import dotTrail from './features/home/dotTrail'
import footer from './features/home/footer'
import showInfo from './features/home/showInfo'
// THREE
import worldHome from './features/world/world'

import './styles/style.css'

console.log('Taona Aoa')

worldHome()
dotTrail()
footer()

window.addEventListener('clearHero', () => {
  clearHero()
  showInfo()
})
// clearHero()
// char()
