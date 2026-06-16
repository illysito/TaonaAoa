import gsap from 'gsap'

function dotTrail() {
  const dots = [...document.querySelectorAll('.dot')]
  const actualDots = [...document.querySelectorAll('.actual-dot')]

  let activeIndex = null

  dots.forEach((d, i) => {
    d.addEventListener('mouseover', () => {
      gsap.to(actualDots[i], {
        opacity: 0.8,
        duration: 0.1,
        ease: 'none',
      })
    })
    d.addEventListener('mouseleave', () => {
      if (i === activeIndex) return
      gsap.to(actualDots[i], {
        opacity: 0.25,
        duration: 0.1,
        ease: 'none',
      })
    })
    d.addEventListener('click', () => {
      activeIndex = i
      window.dispatchEvent(
        new CustomEvent('changeState', {
          detail: {
            state: activeIndex + 1,
          },
        })
      )
      gsap.to(actualDots, {
        width: 6,
        height: 6,
        backgroundColor: '#d4d4d8',
        opacity: 0.25,
        duration: 0.12,
        ease: 'none',
      })
      gsap.to(actualDots[i], {
        width: 10,
        height: 10,
        opacity: 1,
        backgroundColor: '#00db4a',
        duration: 0.12,
        ease: 'none',
      })
    })
  })

  window.addEventListener('clearHero', (e) => {
    const index = e.detail.state
    const selectedDot = actualDots[index - 1]
    console.log(index, 'index', selectedDot)
    selectedDot.classList.add('is--active')
  })
}

export default dotTrail
