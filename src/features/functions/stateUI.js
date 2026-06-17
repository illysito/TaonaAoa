// import gsap from 'gsap'

// import fadeSlideIn from '../home/fadeSlideIn'
import fadeSlideOut from '../home/fadeSlideOut'

function stateUI() {
  let previousState = 0
  let currentState = 0

  let isAnimating = false

  // ---- Change state via THREE.JS & Dots

  window.addEventListener('changeState', (e) => {
    if (isAnimating) return

    currentState = e.detail.state

    if (currentState === previousState) return

    isAnimating = true

    fadeSlideOut(previousState, currentState)

    previousState = currentState

    setTimeout(() => {
      isAnimating = false
    }, 2000)
  })
}

export default stateUI
