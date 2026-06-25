import gsap from 'gsap'

import randomChar from '../functions/randomChar'

function preloader() {
  // const button = document.querySelector('.circular-button')
  const preloaderSection = document.querySelector('.preloader-section')
  const circle = document.getElementById('loader-circle')
  const heroH = document.querySelector('.hero-h')
  const preloaderH = document.querySelector('.preloader-h')
  const footer = document.querySelector('.footer-section')
  const nav = document.querySelector('.nav')
  // const spike = 'M0,0 C0.08,0 0.12,1.2 0.18,1.0 0.3,0.5 0.6,0.15 1,0'
  gsap.to(circle, {
    rotation: 360,
    duration: 18,
    ease: 'linear',
    repeat: -1,
  })

  const count = document.querySelector('.preloader-h')
  // const header = document.querySelector('.preloader-h')

  let progress = 0
  // console.log(progress)
  // let speed = 0.8
  let targetProgress = 0
  let isWorldReady = false
  let isReadyToRandomChar = false

  const circumference = circle.firstElementChild.getTotalLength()
  // if (localStorage.getItem('preloaderHasBeenShown') === 'true') {
  //   progress = 100
  //   circle.style.strokeDasharray = 0
  //   circle.style.strokeDashoffset = 0
  // } else {
  circle.style.strokeDasharray = circumference
  circle.style.strokeDashoffset = circumference
  // }

  function setProgress(percent, duration) {
    gsap.to(circle, {
      opacity: percent,
      strokeDashoffset: circumference * (1 - percent),
      duration: duration,
    })
  }

  // function fakePreloader() {
  //   progress += speed

  //   if (!isWorldReady && progress > 72) {
  //     progress = 72
  //   }

  //   if (progress > 100) progress = 100

  //   count.textContent = `${Math.floor(progress)}`
  //   setProgress(progress / 100)

  //   if (progress < 100) {
  //     requestAnimationFrame(fakePreloader)
  //   } else {
  //     count.style.cursor = 'pointer'
  //     isReadyToRandomChar = true
  //     count.textContent = 'START'
  //   }
  // }
  // fakePreloader()

  function fakePreloader() {
    // target moves in chunks, like real loading
    if (!isWorldReady) {
      targetProgress += Math.random() * 0.8
      targetProgress = Math.min(targetProgress, 72)
    } else {
      targetProgress = 100
    }

    // progress catches up smoothly
    progress += (targetProgress - progress) * 0.052

    if (isWorldReady && progress > 99.5) {
      progress = 100
    }

    count.textContent = `${Math.floor(progress)}`
    setProgress(progress / 100, 0.3)

    if (progress < 100) {
      requestAnimationFrame(fakePreloader)
    } else {
      count.style.cursor = 'pointer'
      isReadyToRandomChar = true
      count.textContent = 'START'
    }
  }

  fakePreloader()

  let wasClicked = false
  preloaderH.addEventListener('click', () => {
    if (wasClicked) return
    const tl = gsap.timeline()
    preloaderH.style.pointerEvents = 'none'
    tl.to(circle, {
      opacity: 0.42,
      strokeDashoffset: -circumference,
      duration: 2,
      ease: 'expo.inOut',
    })
    randomChar(count, 0.5, 12, '\u00A0\u00A0\u00A0\u00A0\u00A0')
    tl.to(preloaderSection, {
      // delay: 3,
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      onStart: () => {
        window.dispatchEvent(
          new CustomEvent('preloaderIsFinished', {
            // detail: {
            //   previousState: currentState,
            //   currentState: nextState,
            // },
          })
        )
      },
      onComplete: () => {
        gsap.set(preloaderSection, {
          zIndex: -1,
        })
      },
    })
    tl.to(
      heroH,
      {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: 'expo.inOut',
      },
      '<'
    )
    tl.to(
      footer,
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: 'power2.inOut',
      },
      '<'
    )
    tl.to(
      nav,
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: 'power2.inOut',
      },
      '<'
    )
    localStorage.setItem('preloaderHasBeenShown', 'true')
    wasClicked = true
  })

  window.addEventListener('worldReady', () => {
    isWorldReady = true
  })

  count.addEventListener('mouseenter', () => {
    if (wasClicked) return
    if (isReadyToRandomChar) {
      randomChar(count, 0.5, 15, 'START')
    }
  })
}

export default preloader
