import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// import randomChar from '../functions/randomChar'

function mobile() {
  const navImg = document.querySelector('.logo-img')
  const trigger = document.querySelector('.slide_1')
  const heroH = document.querySelectorAll('.hero-h-wrapper')
  const heroButton = document.querySelector('.pop-up-button-hero')
  // const headingWrapper = document.querySelector('.heading-wrapper')

  navImg.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })

  gsap.fromTo(
    [heroH, heroButton],
    {
      scale: 1,
      opacity: 1,
    },
    {
      scale: 0.65,
      opacity: 0,
      ease: 'none',
      immediateRender: false,
      overwrite: 'auto',
      scrollTrigger: {
        trigger,
        start: 'top 150%',
        end: 'top 75%',
        scrub: true,
      },
    }
  )
}

export default mobile
