// import gsap from 'gsap'

// import fadeSlideIn from '../home/fadeSlideIn'
import fadeSlideOut from '../home/fadeSlideOut'

function stateUI() {
  let previousState = 0
  let currentState = 0

  // ---- Change state via THREE.JS & Dots

  window.addEventListener('changeState', (e) => {
    currentState = e.detail.state

    console.log('received event!')

    if (currentState === previousState) return

    // fadeSlideOut(previousState)
    fadeSlideOut(previousState, currentState)

    previousState = currentState
  })
}

export default stateUI
