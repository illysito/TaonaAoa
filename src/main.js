// import char from './features/home/char'
import clearHero from './features/home/clearHero'
import showInfo from './features/home/showInfo'
import worldHome from './features/world/world'

import './styles/style.css'

console.log('Taona Aoa')

worldHome()

window.addEventListener('clearHero', () => {
  clearHero()
  showInfo()
})
// clearHero()
// char()
