import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
// import SplitType from 'split-type'

// gsap.registerPlugin(ScrollTrigger)

const ui_section = document.querySelector('.ui-section')
const mapImage = document.querySelector('.map-image')

// const chars = []

// heroHeadings.forEach((h) => {
//   const split = new SplitType(h, {
//     type: 'chars',
//   })

//   chars.push(...split.chars)
// })

function showInfo() {
  ui_section.style.pointerEvents = 'auto'
  gsap.to(ui_section, {
    delay: 1.32,
    opacity: 1,
    duration: 1.6,
    ease: 'linear',
  })
  gsap.to(mapImage, {
    delay: 1.32,
    opacity: 1,
    duration: 1.6,
    ease: 'linear',
  })
}

export default showInfo
