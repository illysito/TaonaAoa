import gsap from 'gsap'

// import randomChar from '../functions/randomChar'

function preloader() {
  const button = document.querySelector('.circular-button')
  const preloaderSection = document.querySelector('.preloader-section')

  // const spike = 'M0,0 C0.08,0 0.12,1.2 0.18,1.0 0.3,0.5 0.6,0.15 1,0'

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
}

export default preloader
