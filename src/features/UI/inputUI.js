import gsap from 'gsap'

import { changeState } from './stateStore'
import { getCurrentState } from './stateStore'
import { getIsTransitioning } from './stateStore'

const dots = [...document.querySelectorAll('.dot')]
const actualDots = [...document.querySelectorAll('.actual-dot')]

export function activateDot(i) {
  const dotIndex = i - 1
  gsap.set(actualDots[dotIndex], {
    scale: 1.8,
    opacity: 1,
    backgroundColor: '#00db4a',
  })
}

function inputUI() {
  const arrowContainers = [...document.querySelectorAll('.arrow-container')]

  //#region NAV
  const logoImg = document.querySelector('.logo-img')

  logoImg.addEventListener('mouseenter', () => {
    gsap.to(logoImg, {
      duration: 0.4,
      ease: 'power2.out',
      scale: 0.98,
    })
  })
  logoImg.addEventListener('mouseleave', () => {
    gsap.to(logoImg, {
      duration: 0.4,
      ease: 'power2.out',
      scale: 1,
    })
  })
  logoImg.addEventListener('click', () => {
    console.log('should go to 0')
    changeState(0)
    gsap.to(logoImg, {
      scale: 0.94,
      duration: 0.1,
      ease: 'none',
      onComplete: () => {
        gsap.to(logoImg, {
          scale: 0.98,
          duration: 0.1,
          ease: 'none',
        })
      },
    })
  })

  //#endregion

  //#region DOTS
  dots.forEach((d, i) => {
    const stateDot = i + 1
    // Dot hover
    d.addEventListener('mouseover', () => {
      if (getIsTransitioning()) return
      if (stateDot === getCurrentState()) return // avoid hovering on ACTUAL dot
      gsap.to(actualDots[i], {
        opacity: 0.8,
        duration: 0.1,
        ease: 'none',
      })
    })
    d.addEventListener('mouseleave', () => {
      if (getIsTransitioning()) return
      if (stateDot === getCurrentState()) return // avoid mouseleaving or still hovering on ACTUAL dot
      if (actualDots[i].classList.contains('is--active')) return

      console.log('hovering out')

      gsap.to(actualDots[i], {
        opacity: 0.25,
        duration: 0.1,
        ease: 'none',
      })
    })
    // Dot click
    d.addEventListener('click', () => {
      if (getIsTransitioning()) return

      // I'll erase the is active from any DOT because later it would create duplicate active dots
      actualDots.forEach((dot) => {
        if (dot.classList.contains('is--active')) {
          dot.classList.remove('is--active')
        }
      })

      // Move to selected state
      changeState(stateDot)

      gsap.to(actualDots, {
        scale: 1,
        backgroundColor: '#d4d4d8',
        opacity: 0.25,
        duration: 0.12,
        ease: 'none',
      })
      gsap.to(actualDots[i], {
        scale: 1.8,
        opacity: 1,
        backgroundColor: '#00db4a',
        duration: 0.12,
        ease: 'none',
      })
    })
  })
  //#endregion

  //#region ARROWS
  arrowContainers.forEach((a, i) => {
    // Arrow hover
    a.addEventListener('mouseover', () => {
      if (getCurrentState() == 0) return
      if (getIsTransitioning()) return
      gsap.to(a, {
        opacity: 0.98,
        scale: 0.98,
        duration: 0.1,
        ease: 'none',
      })
    })
    a.addEventListener('mouseleave', () => {
      if (getCurrentState() == 0) return
      if (getIsTransitioning()) return
      gsap.to(a, {
        opacity: 1,
        scale: 1,
        duration: 0.1,
        ease: 'none',
      })
    })
    // Arrow click
    a.addEventListener('click', () => {
      if (getIsTransitioning()) return
      if (getCurrentState() == 0) return

      let goTo = getCurrentState()

      if (i === 0) {
        // left
        goTo -= 1
        if (goTo == 0) {
          goTo = 6
        }
      } else {
        // right
        goTo += 1
        if (goTo == 7) {
          goTo = 1
        }
      }

      console.log('should go to', goTo)

      // arrow animation
      gsap.to(a, {
        opacity: 0.92,
        scale: 0.92,
        duration: 0.1,
        ease: 'none',
        onComplete: () => {
          gsap.to(a, {
            opacity: 0.98,
            scale: 0.98,
            duration: 0.1,
            ease: 'none',
          })
        },
      })

      // dot animation
      gsap.to(actualDots, {
        scale: 1,
        backgroundColor: '#d4d4d8',
        opacity: 0.25,
        duration: 0.12,
        ease: 'none',
      })
      gsap.to(actualDots[goTo - 1], {
        scale: 1.8,
        opacity: 1,
        backgroundColor: '#00db4a',
        duration: 0.12,
        ease: 'none',
      })

      changeState(goTo)
    })
  })

  window.addEventListener('keydown', (e) => {
    if (getIsTransitioning()) return
    if (getCurrentState() == 0) return
    let goTo = getCurrentState()
    if (e.key === 'ArrowRight') {
      // right
      goTo += 1
      if (goTo == 7) {
        goTo = 1
      }
      // arrow animation
      gsap.to(arrowContainers[1], {
        opacity: 0.92,
        scale: 0.92,
        duration: 0.1,
        ease: 'none',
        onComplete: () => {
          gsap.to(arrowContainers[1], {
            opacity: 0.98,
            scale: 0.98,
            duration: 0.1,
            ease: 'none',
          })
        },
      })
    }

    if (e.key === 'ArrowLeft') {
      // left
      goTo -= 1
      if (goTo == 0) {
        goTo = 6
      }
      // arrow
      gsap.to(arrowContainers[0], {
        opacity: 0.92,
        scale: 0.98,
        duration: 0.1,
        ease: 'none',
        onComplete: () => {
          gsap.to(arrowContainers[0], {
            opacity: 0.98,
            scale: 0.98,
            duration: 0.1,
            ease: 'none',
          })
        },
      })
    }

    // dot animation
    gsap.to(actualDots, {
      scale: 1,
      backgroundColor: '#d4d4d8',
      opacity: 0.25,
      duration: 0.12,
      ease: 'none',
    })
    gsap.to(actualDots[goTo - 1], {
      scale: 1.8,
      opacity: 1,
      backgroundColor: '#00db4a',
      duration: 0.12,
      ease: 'none',
    })

    changeState(goTo)
  })
  //#endregion

  //   window.addEventListener('clearHero', (e) => {
  //     const index = e.detail.state
  //     const selectedDot = actualDots[index - 1]
  //     console.log(index, 'index', selectedDot)
  //     activeIndex = index
  //     selectedDot.classList.add('is--active')
  //   })
}

export default inputUI
