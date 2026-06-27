import gsap from 'gsap'

// import randomChar from '../functions/randomChar'

function popupModal() {
  const modal = document.querySelector('.pop-up-modal')
  const footerButton = document.querySelector('.pop-up-button')
  const closeButton = document.querySelector('.close-button')
  const closeButtonX1 = closeButton.firstElementChild
  const closeButtonX2 = closeButton.lastElementChild

  gsap.set(modal, {
    scale: 0,
    zIndex: -1,
  })

  footerButton.addEventListener('click', () => {
    const tl = gsap.timeline()
    // tl.set(modal, {
    //   zIndex: 401,
    // })
    modal.style.zIndex = 401
    tl.to(modal, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'expo.inOut',
    })
  })

  closeButton.addEventListener('click', () => {
    const tl = gsap.timeline()

    gsap.to(closeButton, {
      scale: 0.96,
      duration: 0.1,
      ease: 'none',
      onComplete: () => {
        gsap.to(closeButton, {
          scale: 1,
          duration: 0.1,
          ease: 'none',
        })
      },
    })

    tl.to(modal, {
      scale: 0,
      duration: 1,
      ease: 'expo.inOut',
      onComplete: () => {
        gsap.set(modal, {
          opacity: 0,
        })
      },
    })

    // tl.set(modal, {
    //   zIndex: -1,
    // })
  })
  closeButton.addEventListener('mouseenter', () => {
    gsap.to(closeButtonX1, {
      rotation: -45,
      duration: 0.4,
      ease: 'power2.inOut',
    })
    gsap.to(closeButtonX2, {
      rotation: 225,
      duration: 0.6,
      ease: 'power2.inOut',
    })
  })
  closeButton.addEventListener('mouseleave', () => {
    gsap.to(closeButtonX1, {
      rotation: 45,
      duration: 0.4,
      ease: 'power2.inOut',
    })
    gsap.to(closeButtonX2, {
      rotation: -45,
      duration: 0.6,
      ease: 'power2.inOut',
    })
  })
}

export default popupModal
