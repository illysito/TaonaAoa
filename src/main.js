// FUNCTIONS
import stateUI from './features/functions/stateUI'
// HOME
import clearHero from './features/home/clearHero'
import dotTrail from './features/home/dotTrail'
import footer from './features/home/footer'
// THREE
import worldHome from './features/world/world'

import './styles/style.css'

console.log('Taona Aoa')

worldHome()
dotTrail()
footer()
stateUI()

window.addEventListener('clearHero', () => {
  clearHero()
  // showInfo()
})
// clearHero()
// char()
