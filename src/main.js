// FUNCTIONS
import audio from './features/functions/audio'
import stateUI from './features/functions/stateUI'
// HOME
import clearHero from './features/home/clearHero'
import dotTrail from './features/home/dotsAndArrows'
import footer from './features/home/footer'
import nav from './features/home/nav'
// THREE
import worldHome from './features/world/world'

import './styles/style.css'

console.log('Taona Aoa')

worldHome()
nav()
dotTrail()
footer()
stateUI()
audio()

window.addEventListener('clearHero', () => {
  clearHero()
  // showInfo()
})
// clearHero()
// char()
