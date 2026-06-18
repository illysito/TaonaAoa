import gsap from 'gsap'

function nav() {
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
    window.dispatchEvent(
      new CustomEvent('changeState', {
        detail: {
          state: 0,
        },
      })
    )
  })
}

export default nav
