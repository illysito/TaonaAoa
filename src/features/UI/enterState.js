import gsap from 'gsap'
// import SplitType from 'split-type'

import { chars } from './exitState.js'

// SLIDES
// 1
const slide1 = document.querySelector('.slide_1')
// 2
const slide2 = document.querySelector('.slide_2')
// const imageWrapper2 = slide2.querySelector('.left-column-2')
// const titleRow2 = slide2.querySelector('.fc-title-row')
// const contentRows2 = slide2.querySelectorAll('.fc-content-row')
// const cardContainer2 = slide2.querySelector('.features-card-container')
// const cardBulletPoints = cardContainer2.querySelectorAll('h2,p')
// cardBulletPoints.forEach((b) => {
//   gsap.set(b, {
//     yPercent: -100,
//     opacity: 0,
//   })
// })
// 3
const slide3 = document.querySelector('.slide_3')
// 4
const slide4 = document.querySelector('.slide_4')
// 5
const slide5 = document.querySelector('.slide_5')
// 6
const slide6 = document.querySelector('.slide_6')

// UI
const ui_title = document.querySelector('.title-h')
// const dots = [...document.querySelectorAll('.dot')]
const actualDots = [...document.querySelectorAll('.actual-dot')]

// HERO (SLIDE 0)
const heroHWrapper = document.querySelector('.hero-h-wrapper')
// const heroHeadings = document.querySelectorAll('.hero-h')
const UI_SECTION = document.querySelector('.ui-section')
const sideHeadings = document.querySelectorAll('.taona-h')
const arrowContainers = [...document.querySelectorAll('.arrow-container')]
// const chars = []

// heroHeadings.forEach((h) => {
//   const split = new SplitType(h, {
//     type: 'chars',
//   })

//   chars.push(...split.chars)
// })

function enterState(currentState) {
  console.log(chars)
  const spike = 'M0,0 C0.08,0 0.12,1.2 0.18,1.0 0.3,0.5 0.6,0.15 1,0'

  const titleRevealDuration = 2
  const titleRevealEase = spike

  let currentSlide = null
  let ui_title_content = null
  function selectSlide() {
    switch (currentState) {
      case 0: {
        ui_title_content = '·'
        break
      }
      case 1: {
        currentSlide = document.querySelector('.slide_1')
        ui_title_content = 'TAONA AOA'
        break
      }
      case 2: {
        currentSlide = document.querySelector('.slide_2')
        ui_title_content = 'WHY CANARIAS'
        break
      }
      case 3: {
        currentSlide = document.querySelector('.slide_3')
        ui_title_content = 'LAUNCH IN EUROPE'
        break
      }
      case 4: {
        currentSlide = document.querySelector('.slide_4')
        ui_title_content = 'ONE OPERATIONAL INTERFACE'
        break
      }
      case 5: {
        currentSlide = document.querySelector('.slide_5')
        ui_title_content = 'EUROPEAN FRAMEWORK'
        break
      }
      case 6: {
        currentSlide = document.querySelector('.slide_6')
        ui_title_content = '0 CAPEX MODEL'
        break
      }
    }
  }
  selectSlide()
  console.log(currentSlide)

  const tl = gsap.timeline({
    onStart: () => {
      if (currentSlide) ui_title.textContent = ui_title_content
    },
    onComplete: () => {
      if (currentSlide) {
        currentSlide.style.zIndex = 101
        currentSlide.style.pointerEvents = 'auto'
      }
    },
  })

  let opacityEase = 'power3.inOut'

  switch (currentState) {
    case 0: {
      tl.to(heroHWrapper, {
        scale: 1,
        duration: 2,
        ease: 'expo.inOut',
      })
        .to(
          UI_SECTION,
          {
            opacity: 0,
            duration: 1.4,
            ease: opacityEase,
          },
          0
        )
        .to(
          sideHeadings,
          {
            opacity: 1,
            duration: 1.4,
            ease: opacityEase,
          },
          0
        )
        .to(
          chars,
          {
            delay: 0.2,
            opacity: 1,
            duration: 1.4,
            ease: 'expo.inOut',
            stagger: {
              each: 0.03,
              from: 'random',
            },
          },
          0
        )
      tl.to(actualDots, {
        scale: 1,
        backgroundColor: '#d4d4d8',
        opacity: 0.25,
        duration: 0.12,
        ease: opacityEase,
      })
      actualDots.forEach((d) => {
        d.classList.remove('is--active')
      })
      arrowContainers.forEach((arrow) => {
        gsap.set(arrow, {
          pointerEvents: 'none',
        })
      })

      break
    }
    case 1: {
      tl.to(ui_title, {
        yPercent: 0,
        opacity: 1,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      })

      tl.to(
        slide1,
        {
          opacity: 1,
          duration: 0.8,
          ease: opacityEase,
        },
        0
      )

      break
    }
    case 2: {
      tl.to(ui_title, {
        yPercent: 0,
        opacity: 1,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      })

      tl.to(
        slide2,
        {
          opacity: 1,
          duration: 0.8,
          ease: opacityEase,
        },
        0
      )

      // tl.to(
      //   imageWrapper2,
      //   {
      //     opacity: 1,
      //     duration: 2,
      //     ease: 'linear',
      //   },
      //   0
      // )

      // tl.to(
      //   titleRow2,
      //   {
      //     opacity: 1,
      //     duration: 0.8,
      //     ease: spike,
      //   },
      //   0
      // )

      // tl.to(
      //   contentRows2,
      //   {
      //     delay: 0.05,
      //     opacity: 1,
      //     duration: 0.8,
      //     ease: spike,
      //     stagger: 0.08,
      //   },
      //   0
      // )

      // tl.to(
      //   cardBulletPoints,
      //   {
      //     opacity: 1,
      //     yPercent: 0,
      //     duration: 1,
      //     ease: spike,
      //     stagger: 0.08,
      //   },
      //   0
      // )

      break
    }
    case 3: {
      tl.to(ui_title, {
        yPercent: 0,
        opacity: 1,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      })

      tl.to(
        slide3,
        {
          opacity: 1,
          duration: 0.8,
          ease: opacityEase,
        },
        0
      )

      break
    }
    case 4: {
      tl.to(ui_title, {
        yPercent: 0,
        opacity: 1,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      })

      tl.to(
        slide4,
        {
          opacity: 1,
          duration: 0.8,
          ease: opacityEase,
        },
        0
      )

      break
    }
    case 5: {
      tl.to(ui_title, {
        yPercent: 0,
        opacity: 1,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      })

      tl.to(
        slide5,
        {
          opacity: 1,
          duration: 0.8,
          ease: opacityEase,
        },
        0
      )

      break
    }
    case 6: {
      tl.to(ui_title, {
        yPercent: 0,
        opacity: 1,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      })

      tl.to(
        slide6,
        {
          opacity: 1,
          duration: 0.8,
          ease: opacityEase,
        },
        0
      )

      break
    }
  }
  return tl
}

export default enterState
