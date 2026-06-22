// FUNCTIONS
import audio from './features/functions/audio'
// import customCursor from './features/functions/customCursor'
// HOME
import footer from './features/home/footer'
import preloader from './features/home/preloader'
// UI
import inputUI from './features/UI/inputUI'
import stateUI from './features/UI/stateUI'
// THREE
import worldHome from './features/world/world'

import './styles/style.css'

console.log('Taona Aoa')

function isMobile() {
  return window.matchMedia('(max-width: 667px)').matches
}

preloader()
// Home
// worldHome()
footer()
if (!isMobile()) {
  audio()
}
// customCursor()
// UI
stateUI()
inputUI()

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    worldHome()
  })
})
