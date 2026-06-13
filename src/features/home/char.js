// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

import randomChar from '../functions/randomChar'

function char() {
  const headings = document.querySelectorAll('.h')

  headings.forEach((h) => {
    // revealLines(h)
    randomChar(h)
  })
}

export default char
