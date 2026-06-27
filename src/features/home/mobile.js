import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// import randomChar from '../functions/randomChar'

function mobile() {
  const navImg = document.querySelector('.logo-img')
  const trigger = document.querySelector('.slide_1')
  const heroH = document.querySelectorAll('.hero-h-wrapper')
  const heroButton = document.querySelector('.pop-up-button-hero')

  //#region SLIDES OPACITY WTF
  // const slides = []
  // const slide1 = document.querySelector('.slide_1')
  // const slide2 = document.querySelector('.slide_2')
  // const slide3 = document.querySelector('.slide_3')
  // const slide4 = document.querySelector('.slide_4')
  // const slide5 = document.querySelector('.slide_5')
  // const slide6 = document.querySelector('.slide_6')

  // gsap.set([slide1, slide2, slide3, slide4, slide5, slide6], {
  //   autoAlpha: 0,
  // })

  // gsap.to(slide1, {
  //   autoAlpha: 1,
  //   scrollTrigger: {
  //     trigger: slide1,
  //     start: 'top 100%',
  //     // end: 'top 40%',
  //     scrub: true,
  //   },
  // })

  // gsap.to(slide2, {
  //   autoAlpha: 1,
  //   scrollTrigger: {
  //     trigger: slide2,
  //     start: 'top 100%',
  //     end: 'top 40%',
  //     scrub: true,
  //   },
  // })

  // gsap.to(slide3, {
  //   autoAlpha: 1,
  //   scrollTrigger: {
  //     trigger: slide3,
  //     start: 'top 100%',
  //     end: 'top 40%',
  //     scrub: true,
  //     markers: true,
  //   },
  // })

  // gsap.to(slide4, {
  //   autoAlpha: 1,
  //   scrollTrigger: {
  //     trigger: slide4,
  //     start: 'top 100%',
  //     end: 'top 40%',
  //     scrub: true,
  //     markers: true,
  //   },
  // })

  // gsap.to(slide5, {
  //   autoAlpha: 1,
  //   scrollTrigger: {
  //     trigger: slide5,
  //     start: 'top 100%',
  //     end: 'top 40%',
  //     scrub: true,
  //     markers: true,
  //   },
  // })

  // gsap.to(slide6, {
  //   autoAlpha: 1,
  //   scrollTrigger: {
  //     trigger: slide6,
  //     start: 'top 100%',
  //     end: 'top 40%',
  //     scrub: true,
  //     markers: true,
  //   },
  // })
  //#endregion
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
