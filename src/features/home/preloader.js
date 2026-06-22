import gsap from 'gsap'

// import randomChar from '../functions/randomChar'

function preloader() {
  const button = document.querySelector('.circular-button')
  const preloaderSection = document.querySelector('.preloader-section')

  // const spike = 'M0,0 C0.08,0 0.12,1.2 0.18,1.0 0.3,0.5 0.6,0.15 1,0'

  const count = document.querySelector('.preloader-h')
  // const header = document.querySelector('.preloader-h')

  let progress = 0
  let speed = 0.8
  let isTexturesLoaded = false

  function fakePreloader() {
    progress += speed
    if (progress > 100) progress = 100

    count.textContent = `${Math.floor(progress)}`

    if (!isTexturesLoaded && progress > 72) {
      progress = 72
    }

    if (progress < 100) {
      requestAnimationFrame(fakePreloader)
    } else {
      count.textContent = 'START'
    }
  }
  fakePreloader()

  button.addEventListener('click', () => {
    gsap.to(preloaderSection, {
      // delay: 3,
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        window.dispatchEvent(
          new CustomEvent('preloaderIsFinished', {
            // detail: {
            //   previousState: currentState,
            //   currentState: nextState,
            // },
          })
        )
        gsap.set(preloaderSection, {
          zIndex: -1,
        })
      },
    })
  })

  window.addEventListener('texturesLoaded', () => {
    isTexturesLoaded = true
  })
}

export default preloader
