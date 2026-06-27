import gsap from 'gsap'

import randomChar from '../functions/randomChar'

function isMobile() {
  return window.matchMedia('(max-width: 667px)').matches
}

function footer() {
  const footerPs = document.querySelectorAll('.footer-p')
  const contactButton = document.querySelector('.contact-button')
  const contactP = contactButton.firstElementChild
  const contactBall = contactP.nextElementSibling
  const popUpButton = document.querySelector('.pop-up-button')
  const popUpP = popUpButton.firstElementChild
  const popUpBall = popUpP.nextElementSibling
  const popUpButtonMobile = document.querySelector('.pop-up-button-hero')
  const popUpPMobile = popUpButtonMobile.firstElementChild

  // const spike = 'M0,0 C0.08,0 0.12,1.2 0.18,1.0 0.3,0.5 0.6,0.15 1,0'

  footerPs.forEach((p) => {
    p.addEventListener('mouseenter', () => {
      randomChar(p)
    })
  })

  contactButton.addEventListener('mouseenter', () => {
    if (isMobile()) return
    randomChar(contactP)
    gsap.to(contactBall, {
      yPercent: -50,
      duration: 0.8,
      ease: 'expo.inOut',
    })
    gsap.to(contactP, {
      delay: 0.1,
      color: '#000000',
      duration: 0.4,
      ease: 'power2.inOut',
    })
  })
  contactButton.addEventListener('mouseleave', () => {
    if (isMobile()) return
    gsap.to(contactBall, {
      yPercent: 0,
      duration: 0.8,
      ease: 'expo.inOut',
    })
    gsap.to(contactP, {
      delay: 0.1,
      color: '#00db4a',
      duration: 0.4,
      ease: 'power2.inOut',
    })
  })
  contactButton.addEventListener('click', () => {
    if (isMobile()) {
      randomChar(contactP)
    }
    gsap.to(contactButton, {
      scale: 0.985,
      duration: 0.1,
      ease: 'none',
      onComplete: () => {
        gsap.to(contactButton, {
          scale: 1,
          duration: 0.1,
          ease: 'none',
        })
      },
    })
  })

  popUpButton.addEventListener('mouseenter', () => {
    if (isMobile()) return
    randomChar(popUpP)
    gsap.to(popUpBall, {
      yPercent: -50,
      duration: 0.8,
      ease: 'expo.inOut',
    })
    gsap.to(popUpP, {
      delay: 0.1,
      color: '#000000',
      duration: 0.4,
      ease: 'power2.inOut',
    })
  })
  popUpButton.addEventListener('mouseleave', () => {
    if (isMobile()) return
    gsap.to(popUpBall, {
      yPercent: 0,
      duration: 0.8,
      ease: 'expo.inOut',
    })
    gsap.to(popUpP, {
      delay: 0.1,
      color: '#00db4a',
      duration: 0.4,
      ease: 'power2.inOut',
    })
  })
  popUpButton.addEventListener('click', () => {
    if (isMobile()) {
      randomChar(popUpP)
    }
    gsap.to(popUpButton, {
      scale: 0.985,
      duration: 0.1,
      ease: 'none',
      onComplete: () => {
        gsap.to(popUpButton, {
          scale: 1,
          duration: 0.1,
          ease: 'none',
        })
      },
    })
  })
  popUpButtonMobile.addEventListener('click', () => {
    if (isMobile()) {
      randomChar(popUpPMobile)
    }
    gsap.to(popUpButton, {
      scale: 0.985,
      duration: 0.1,
      ease: 'none',
      onComplete: () => {
        gsap.to(popUpButton, {
          scale: 1,
          duration: 0.1,
          ease: 'none',
        })
      },
    })
  })
}

export default footer
