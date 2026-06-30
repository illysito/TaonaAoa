// FUNCTIONS
// import audio from './features/functions/audio'
// import customCursor from './features/functions/customCursor'
// HOME
import footer from './features/home/footer'
import mobile from './features/home/mobile'
import popupModal from './features/home/popupModal'
import preloader from './features/home/preloader'
// UI
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
  import('./features/functions/audio2').then(({ default: audio }) => {
    audio()
  })
  import('./features/UI/stateUI').then(({ default: stateUI }) => {
    stateUI()
  })
  import('./features/UI/inputUI').then(({ default: inputUI }) => {
    inputUI()
  })
  console.log('not mobile')
} else {
  mobile()
  console.log('mobile')
}

// MODAL
popupModal()

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    worldHome()
  })
})
