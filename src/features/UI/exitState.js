import gsap from 'gsap'
import SplitType from 'split-type'

// SLIDES
const slide1 = document.querySelector('.slide_1')
const slide2 = document.querySelector('.slide_2')
const slide3 = document.querySelector('.slide_3')
const slide4 = document.querySelector('.slide_4')
const slide5 = document.querySelector('.slide_5')
const slide6 = document.querySelector('.slide_6')

// UI
const ui_title = document.querySelector('.title-h')

// HERO (SLIDE 0)
const heroHWrapper = document.querySelector('.hero-h-wrapper')
const heroHeadings = document.querySelectorAll('.hero-h')
const UI_SECTION = document.querySelector('.ui-section')
const sideHeadings = document.querySelectorAll('.taona-h')
export const chars = []

heroHeadings.forEach((h) => {
  const split = new SplitType(h, {
    type: 'chars',
  })

  chars.push(...split.chars)
})

function exitState(previousState) {
  // SWITCH
  const spike = 'M0,0 C0.08,0 0.12,1.2 0.18,1.0 0.3,0.5 0.6,0.15 1,0'

  const titleRevealDuration = 1
  const titleRevealEase = spike

  let currentSlide = null
  function selectSlide() {
    switch (previousState) {
      case 1: {
        currentSlide = document.querySelector('.slide_1')
        break
      }
      case 2: {
        currentSlide = document.querySelector('.slide_2')
        break
      }
      case 3: {
        currentSlide = document.querySelector('.slide_3')
        break
      }
      case 4: {
        currentSlide = document.querySelector('.slide_4')
        break
      }
      case 5: {
        currentSlide = document.querySelector('.slide_5')
        break
      }
      case 6: {
        currentSlide = document.querySelector('.slide_6')
        break
      }
    }
  }
  selectSlide()
  console.log(currentSlide)

  const tl = gsap.timeline({
    onStart: () => {
      if (currentSlide) {
        currentSlide.style.zIndex = 0
        currentSlide.style.pointerEvents = 'none'
      }
    },
  })

  switch (previousState) {
    case 0: {
      tl.to(heroHWrapper, {
        scale: 0,
        duration: 2,
        ease: 'expo.inOut',
      })
        .to(
          UI_SECTION,
          {
            opacity: 1,
            duration: 2,
            ease: 'linear',
          },
          '-=0.4'
        )
        .to(
          sideHeadings,
          {
            opacity: 1,
            duration: 1.4,
            ease: 'linear',
          },
          0
        )
        .to(
          chars,
          {
            delay: 0.2,
            opacity: 0,
            duration: 1.4,
            ease: 'expo.inOut',
            stagger: {
              each: 0.03,
              from: 'random',
            },
          },
          0
        )
      break
    }
    case 1: {
      tl.to(ui_title, {
        yPercent: 20,
        opacity: 0,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      }).to(
        slide1,
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
      tl.to(ui_title, {
        yPercent: 20,
        opacity: 0,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      }).to(
        slide2,
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
      tl.to(ui_title, {
        yPercent: 20,
        opacity: 0,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      }).to(
        slide3,
        {
          opacity: 0,
          duration: 0.8,
          ease: 'none',
        },
        0
      )
      break
    }
    case 4: {
      tl.to(ui_title, {
        yPercent: 20,
        opacity: 0,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      }).to(
        slide4,
        {
          opacity: 0,
          duration: 0.8,
          ease: 'none',
        },
        0
      )
      break
    }
    case 5: {
      tl.to(ui_title, {
        yPercent: 20,
        opacity: 0,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      }).to(
        slide5,
        {
          opacity: 0,
          duration: 0.8,
          ease: 'none',
        },
        0
      )
      break
    }
    case 6: {
      tl.to(ui_title, {
        yPercent: 20,
        opacity: 0,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      }).to(
        slide6,
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
  return tl
}

export default exitState
