import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

// gsap.registerPlugin(ScrollTrigger)

const heroHeadings = document.querySelectorAll('.hero-h')
const chars = []

heroHeadings.forEach((h) => {
  const split = new SplitType(h, {
    type: 'chars',
  })

  chars.push(...split.chars)
})

function clearHero() {
  gsap.to(chars, {
    delay: 0.4,
    opacity: 0,
    yPercent: -100,
    duration: 0.8,
    ease: 'expo.inOut',
    stagger: 0.032,
  })
}

export default clearHero
