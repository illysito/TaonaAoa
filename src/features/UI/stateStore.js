// stateStore.js

let currentState = 0
let isTransitioning = false

let cycleTime = 0
let cycleSpeed = 0
let powerFactor = 4
let blueFactor = 0.4235

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

  switch (nextState) {
    case 0: {
      cycleTime = 0.4
      cycleSpeed = 0.2
      powerFactor = 4
      blueFactor = 0.4235
      break
    }
    case 1: {
      cycleTime = 0.2
      cycleSpeed = 0.1
      powerFactor = 3
      blueFactor = 0.4035
      break
    }
    case 2: {
      cycleTime = 0.4
      cycleSpeed = 0.2
      powerFactor = 2.6
      blueFactor = 0.3835
      break
    }
    case 3: {
      cycleTime = 0.8
      cycleSpeed = 0.3
      powerFactor = 2.2
      blueFactor = 0.3635
      break
    }
    case 4: {
      cycleTime = 1.2
      cycleSpeed = 0.4
      powerFactor = 1.8
      blueFactor = 0.3435
      break
    }
    case 5: {
      cycleTime = 1.6
      cycleSpeed = 0.5
      powerFactor = 1.2
      blueFactor = 0.3235
      break
    }
    case 6: {
      cycleTime = 2.0
      cycleSpeed = 0.6
      powerFactor = 0.8
      blueFactor = 0.3035
      break
    }
  }
  window.dispatchEvent(
    new CustomEvent('updateGradients', {
      detail: {
        cycleTime: cycleTime,
        cycleSpeed: cycleSpeed,
        powerFactor: powerFactor,
        blueFactor: blueFactor,
      },
    })
  )

  currentState = nextState
}

export function completeTransition() {
  isTransitioning = false
}
