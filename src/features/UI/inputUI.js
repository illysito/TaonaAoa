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
  // const arrowContainers = [...document.querySelectorAll('.arrow-container')]

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
  // arrowContainers.forEach((a, i) => {
  //   // Arrow hover
  //   a.addEventListener('mouseover', () => {
  //     if (isAnimating) return
  //     gsap.to(a, {
  //       opacity: 0.98,
  //       scale: 0.98,
  //       duration: 0.1,
  //       ease: 'none',
  //     })
  //   })
  //   a.addEventListener('mouseleave', () => {
  //     if (isAnimating) return
  //     gsap.to(a, {
  //       opacity: 1,
  //       scale: 1,
  //       duration: 0.1,
  //       ease: 'none',
  //     })
  //   })
  //   // Arrow click
  //   a.addEventListener('click', () => {
  //     if (isAnimating) return
  //     isAnimating = true

  //     if (i === 0) {
  //       activeIndex -= 1
  //       if (activeIndex == 0) {
  //         activeIndex = 6
  //       }
  //     } else {
  //       activeIndex += 1
  //       if (activeIndex == 7) {
  //         activeIndex = 1
  //       }
  //     }

  //     console.log('active index', activeIndex)

  //     // arrow animation
  //     gsap.to(a, {
  //       opacity: 0.92,
  //       scale: 0.98,
  //       duration: 0.1,
  //       ease: 'none',
  //       onComplete: () => {
  //         gsap.to(a, {
  //           opacity: 0.98,
  //           scale: 0.98,
  //           duration: 0.1,
  //           ease: 'none',
  //         })
  //       },
  //     })

  //     // dot animation
  //     gsap.to(actualDots, {
  //       scale: 1,
  //       backgroundColor: '#d4d4d8',
  //       opacity: 0.25,
  //       duration: 0.12,
  //       ease: 'none',
  //     })
  //     gsap.to(actualDots[activeIndex - 1], {
  //       scale: 1.8,
  //       opacity: 1,
  //       backgroundColor: '#00db4a',
  //       duration: 0.12,
  //       ease: 'none',
  //     })

  //     window.dispatchEvent(
  //       new CustomEvent('changeState', {
  //         detail: {
  //           state: activeIndex + 1,
  //         },
  //       })
  //     )

  //     setTimeout(() => {
  //       isAnimating = false
  //     }, 2000)
  //   })
  // })
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
