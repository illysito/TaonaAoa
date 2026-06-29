import gsap from 'gsap'

function isMobile() {
  return window.matchMedia('(max-width: 667px)').matches
}

const w = window.innerWidth
const h = window.innerHeight
const res = w / h

function popupModal() {
  const modal = document.querySelector('.pop-up-modal')
  const modalMob = document.querySelector('.pop-up-modal-mobile')
  const footerButton = document.querySelector('.pop-up-button')
  const heroButton = document.querySelector('.pop-up-button-hero')
  const closeButton = document.querySelector('.close-button')
  const closeButtonMob = document.querySelector('.close-button-mobile')
  const closeButtonX1 = closeButton.firstElementChild
  const closeButtonX2 = closeButton.lastElementChild

  if (res > 1.7) {
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.top = 0
    modal.style.top = 0
  }

  gsap.set(modal, {
    scale: 0,
    zIndex: -1,
  })

  gsap.set(modalMob, {
    yPercent: -100,
    zIndex: -1,
  })

  footerButton.addEventListener('click', () => {
    console.log('yeka')
    const tl = gsap.timeline()
    // tl.set(modal, {
    //   zIndex: 401,
    // })
    if (!isMobile()) {
      modal.style.zIndex = 401
      tl.to(modal, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'expo.inOut',
      })
    } else {
      modalMob.style.zIndex = 401
      tl.to(modalMob, {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: 'expo.inOut',
      })
    }
  })

  heroButton.addEventListener('click', () => {
    console.log('yeka')
    const tl = gsap.timeline()
    // tl.set(modal, {
    //   zIndex: 401,
    // })
    if (!isMobile()) {
      modal.style.zIndex = 401
      tl.to(modal, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'expo.inOut',
      })
    } else {
      modalMob.style.zIndex = 401
      tl.to(modalMob, {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: 'expo.inOut',
      })
    }
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
  closeButtonMob.addEventListener('click', () => {
    const tl = gsap.timeline()

    gsap.to(closeButtonMob, {
      scale: 0.96,
      duration: 0.1,
      ease: 'none',
      onComplete: () => {
        gsap.to(closeButtonMob, {
          scale: 1,
          duration: 0.1,
          ease: 'none',
        })
      },
    })

    tl.to(modalMob, {
      yPercent: -100,
      duration: 1,
      ease: 'expo.inOut',
      onComplete: () => {
        gsap.set(modalMob, {
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
