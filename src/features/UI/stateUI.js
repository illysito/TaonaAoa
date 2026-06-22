import gsap from 'gsap'

// import fadeSlideIn from '../home/fadeSlideIn'
import enterState from './enterState'
import exitState from './exitState'
import { completeTransition } from './stateStore'

function stateUI() {
  window.addEventListener('changeState', (e) => {
    const { previousState, currentState } = e.detail

    if (previousState === currentState) return

    const masterTl = gsap.timeline({
      onComplete: () => {
        completeTransition()
        console.log('transition complete:', previousState, '→', currentState)
      },
    })

    let delay = null
    if (previousState == 0) {
      delay = '-=1.6'
    } else if (currentState == 0) {
      delay = '-=1'
    } else {
      delay = '+=0.2'
    }

    masterTl
      .add(exitState(previousState, currentState))
      .add(enterState(currentState), delay)
  })
}

export default stateUI
