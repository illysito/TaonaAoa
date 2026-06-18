import gsap from 'gsap'

function dotTrail() {
  const dots = [...document.querySelectorAll('.dot')]
  const actualDots = [...document.querySelectorAll('.actual-dot')]
  const arrowContainers = [...document.querySelectorAll('.arrow-container')]

  let activeIndex = null
  let isAnimating = false

  dots.forEach((d, i) => {
    d.addEventListener('mouseover', () => {
      if (isAnimating) return
      gsap.to(actualDots[i], {
        opacity: 0.8,
        duration: 0.1,
        ease: 'none',
      })
    })

    d.addEventListener('mouseleave', () => {
      if (isAnimating) return
      if (i === activeIndex) return
      if (actualDots[i].classList.contains('is--active')) return
      gsap.to(actualDots[i], {
        opacity: 0.25,
        duration: 0.1,
        ease: 'none',
      })
    })

    d.addEventListener('click', () => {
      if (isAnimating) return
      isAnimating = true
      activeIndex = i

      actualDots.forEach((dot) => {
        if (dot.classList.contains('is--active')) {
          dot.classList.remove('is--active')
        }
      })

      window.dispatchEvent(
        new CustomEvent('changeState', {
          detail: {
            state: activeIndex + 1,
          },
        })
      )
      gsap.to(actualDots, {
        scale: 1,
        backgroundColor: '#d4d4d8',
        opacity: 0.25,
        duration: 0.12,
        ease: 'none',
      })
      gsap.to(actualDots[i], {
        scale: 1.8,
        opacity: 1,
        backgroundColor: '#00db4a',
        duration: 0.12,
        ease: 'none',
      })

      setTimeout(() => {
        isAnimating = false
      }, 2000)
    })
  })

  arrowContainers.forEach((a, i) => {
    // const arrowImg = a.firstElementChild
    a.addEventListener('mouseover', () => {
      if (isAnimating) return
      gsap.to(a, {
        opacity: 0.98,
        scale: 0.98,
        duration: 0.1,
        ease: 'none',
      })
    })

    a.addEventListener('mouseleave', () => {
      if (isAnimating) return
      gsap.to(a, {
        opacity: 1,
        scale: 1,
        duration: 0.1,
        ease: 'none',
      })
    })

    a.addEventListener('click', () => {
      if (isAnimating) return
      isAnimating = true

      if (i === 0) {
        activeIndex -= 1
        if (activeIndex == 0) {
          activeIndex = 7
        }
      } else {
        activeIndex += 1
        if (activeIndex == 7) {
          activeIndex = 1
        }
      }

      console.log('active index', activeIndex)

      // arrow animation
      gsap.to(a, {
        opacity: 0.92,
        scale: 0.98,
        duration: 0.1,
        ease: 'none',
        onComplete: () => {
          gsap.to(a, {
            opacity: 0.98,
            scale: 0.98,
            duration: 0.1,
            ease: 'none',
          })
        },
      })

      // dot animation
      gsap.to(actualDots, {
        scale: 1,
        backgroundColor: '#d4d4d8',
        opacity: 0.25,
        duration: 0.12,
        ease: 'none',
      })
      gsap.to(actualDots[activeIndex - 1], {
        scale: 1.8,
        opacity: 1,
        backgroundColor: '#00db4a',
        duration: 0.12,
        ease: 'none',
      })

      window.dispatchEvent(
        new CustomEvent('changeState', {
          detail: {
            state: activeIndex,
          },
        })
      )

      setTimeout(() => {
        isAnimating = false
      }, 2000)
    })
  })

  window.addEventListener('clearHero', (e) => {
    const index = e.detail.state
    const selectedDot = actualDots[index - 1]
    console.log(index, 'index', selectedDot)
    activeIndex = index
    selectedDot.classList.add('is--active')
  })
}

export default dotTrail
