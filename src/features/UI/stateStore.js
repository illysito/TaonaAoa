// stateStore.js

let currentState = 0
let isTransitioning = false

export function getIsTransitioning() {
  return isTransitioning
}

export function getCurrentState() {
  return currentState
}

export function changeState(nextState) {
  if (isTransitioning) return
  if (nextState === currentState) return

  isTransitioning = true

  window.dispatchEvent(
    new CustomEvent('changeState', {
      detail: {
        previousState: currentState,
        currentState: nextState,
      },
    })
  )

  currentState = nextState
}

export function completeTransition() {
  isTransitioning = false
}
