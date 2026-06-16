import gsap from 'gsap'
// import SplitType from 'split-type'

import fadeSlideIn from '../home/fadeSlideIn'

const ui_section = document.querySelector('.ui-section')
const slide_sections = document.querySelectorAll('.slide-section')
const contentHeadings = document.querySelectorAll('.content-h')
const contentPs = document.querySelectorAll('.content-p')
const contentImgs = document.querySelectorAll('.content-img')
// UI
const ui_title = document.querySelector('.title-h')
// const ui_highlight = document.querySelector('.green-highlight')

// let splitHeadings = []
// contentHeadings.forEach((h) => {
//   const splitH = new SplitType(h, {
//     types: 'lines',
//   })
//   splitHeadings.push(splitH.lines)
// })

function fadeSlideOut(previousState, currentState) {
  ui_section.style.pointerEvents = 'auto'

  // UI!
  gsap.to(ui_section, {
    delay: 1.32,
    opacity: 1,
    duration: 1.6,
    ease: 'linear',
  })

  // SPLIT ELEMENTS INTO CORRESPONDING SLIDES
  const contentHeadings_1 = [contentHeadings[0], contentHeadings[1]]
  const contentPs_1 = [contentPs[0], contentPs[1]]
  const contentImgs_1 = [contentImgs[0]]

  const contentHeadings_2 = [contentHeadings[2], contentHeadings[3]]
  const contentPs_2 = [
    contentPs[2],
    contentPs[3],
    contentPs[4],
    contentPs[5],
    contentPs[6],
    contentPs[7],
    contentPs[8],
  ]
  const contentImgs_2 = [contentImgs[1]]

  const contentHeadings_3 = [contentHeadings[2], contentHeadings[3]]
  const contentPs_3 = [
    contentPs[2],
    contentPs[3],
    contentPs[4],
    contentPs[5],
    contentPs[6],
    contentPs[7],
    contentPs[8],
  ]
  const contentImgs_3 = [contentImgs[1]]

  // SWITCH

  const titleRevealDuration = 1
  const titleRevealEase = 'power2.inOut'

  switch (previousState) {
    case 0: {
      setTimeout(() => {
        fadeSlideIn(currentState)
      }, 1600)
      break
    }
    case 1: {
      const tl = gsap.timeline({
        onComplete: () => {
          console.log('finished')
          fadeSlideIn(currentState)
        },
      })

      tl.to(ui_title, {
        yPercent: 20,
        opacity: 0,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      })

        .to(
          slide_sections[0],
          {
            opacity: 0,
            duration: 0.8,
            ease: 'none',
          },
          0
        )

        .to(
          contentHeadings_1,
          {
            opacity: 0,
            duration: 0.8,
            ease: 'none',
          },
          0
        )

        .to(
          contentPs_1,
          {
            opacity: 0,
            duration: 0.8,
            ease: 'none',
          },
          0
        )

        .to(
          contentImgs_1,
          {
            opacity: 0,
            duration: 0.8,
            ease: 'none',
          },
          0
        )

      break
    }
    case 2: {
      const tl = gsap.timeline({
        onComplete: () => {
          console.log('finished')
          fadeSlideIn(currentState)
        },
      })

      tl.to(ui_title, {
        yPercent: 20,
        opacity: 0,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      })

      tl.to(
        slide_sections[1],
        {
          opacity: 0,
          duration: 0.8,
          ease: 'none',
        },
        0
      )

      tl.to(
        contentHeadings_2,
        {
          opacity: 0,
          duration: 0.8,
          ease: 'none',
        },
        0
      )

        .to(
          contentPs_2,
          {
            opacity: 0,
            duration: 0.8,
            ease: 'none',
          },
          0
        )

        .to(
          contentImgs_2,
          {
            opacity: 0,
            duration: 0.8,
            ease: 'none',
          },
          0
        )
      break
    }
    case 3: {
      const tl = gsap.timeline({
        onComplete: () => {
          console.log('finished')
          fadeSlideIn(currentState)
        },
      })

      tl.to(ui_title, {
        yPercent: 20,
        opacity: 0,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      })

      tl.to(
        slide_sections[2],
        {
          opacity: 0,
          duration: 0.8,
          ease: 'none',
        },
        0
      )

      tl.to(
        contentHeadings_3,
        {
          opacity: 0,
          duration: 0.8,
          ease: 'none',
        },
        0
      )

        .to(
          contentPs_3,
          {
            opacity: 0,
            duration: 0.8,
            ease: 'none',
          },
          0
        )

        .to(
          contentImgs_3,
          {
            opacity: 0,
            duration: 0.8,
            ease: 'none',
          },
          0
        )
      break
    }
  }
  // Choose slides
  // gsap.to(slide_section, {
  //   delay: 1.32,
  //   opacity: 1,
  //   duration: 1.6,
  //   ease: 'linear',
  // })
}

export default fadeSlideOut
