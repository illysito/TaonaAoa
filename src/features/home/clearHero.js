import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

// gsap.registerPlugin(ScrollTrigger)

const heroHWrapper = document.querySelector('.hero-h-wrapper')
const heroHeadings = document.querySelectorAll('.hero-h')
const dot_trail_container = document.querySelector('.dot-trail-container')
const arrowContainers = document.querySelectorAll('.arrow-container')
const sideHeadings = document.querySelectorAll('.taona-h')
const chars = []

heroHeadings.forEach((h) => {
  const split = new SplitType(h, {
    type: 'chars',
  })

  chars.push(...split.chars)
})

function clearHero() {
  // Hide
  // gsap.to(chars, {
  //   delay: 0.4,
  //   opacity: 0,
  //   yPercent: -100,
  //   duration: 0.8,
  //   ease: 'expo.inOut',
  //   stagger: 0.032,
  // })

  // Zoom out
  gsap.to(heroHWrapper, {
    scale: 0,
    duration: 2,
    ease: 'expo.inOut',
  })
  gsap.to([dot_trail_container, arrowContainers], {
    opacity: 1,
    duration: 1.4,
    ease: 'linear',
  })
  gsap.to(sideHeadings, {
    opacity: 0,
    duration: 1.4,
    ease: 'linear',
  })
  gsap.to(chars, {
    delay: 0.2,
    opacity: 0,
    duration: 1.4,
    ease: 'expo.inOut',
    stagger: {
      each: 0.03,
      from: 'random',
    },
  })
}

export default clearHero
