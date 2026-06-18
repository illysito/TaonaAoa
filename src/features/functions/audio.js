import gsap from 'gsap'

import randomChar from '../functions/randomChar'

function githubToJsDelivr(permalink) {
  return permalink
    .replace('github.com', 'cdn.jsdelivr.net/gh')
    .replace('/blob/', '@')
}

function audio() {
  // function isMobile() {
  //   return window.matchMedia('(max-width: 768px)').matches
  // }

  let audioIsOn = false

  const spike = 'M0,0 C0.08,0 0.12,1.2 0.18,1.0 0.3,0.5 0.6,0.15 1,0'

  const footerPs = document.querySelectorAll('.footer-p')

  function isDesktop() {
    return window.innerWidth >= 992
  }

  // console.log('Audio: is it mobile?: ' + isMobile())

  if (isDesktop()) {
    const ambient = new Audio(
      'https://cdn.jsdelivr.net/gh/illysito/TaonaAoa@cc868d6ae60bb39ca67f20ffd0ade0e4367c234b/web-audio/TaonaAoa-Ambient.opus'
    )
    const typeFX_1 = new Audio(
      githubToJsDelivr(
        'https://github.com/illysito/TaonaAoa/blob/60d066c5a7006cba518d42534d9a55e2bccab7e8/web-audio/Taona-Type-1.opus'
      )
    )
    const typeFX_2 = new Audio(
      githubToJsDelivr(
        'https://github.com/illysito/TaonaAoa/blob/60d066c5a7006cba518d42534d9a55e2bccab7e8/web-audio/Taona-Type-2.opus'
      )
    )
    const typeFX_3 = new Audio(
      githubToJsDelivr(
        'https://github.com/illysito/TaonaAoa/blob/60d066c5a7006cba518d42534d9a55e2bccab7e8/web-audio/Taona-Type-3.opus'
      )
    )
    const typeFX_4 = new Audio(
      githubToJsDelivr(
        'https://github.com/illysito/TaonaAoa/blob/60d066c5a7006cba518d42534d9a55e2bccab7e8/web-audio/Taona-Type-4.opus'
      )
    )
    const typeFXs = [typeFX_1, typeFX_2, typeFX_3, typeFX_4]

    for (let i = 0; i < typeFXs.length; i++) {
      typeFXs[i].volume = 0.32
    }

    ambient.loop = true
    ambient.volume = 0.1

    const button = document.querySelector('.audio-button')
    const audioBall = button.firstElementChild
    // const audioAccepted = localStorage.getItem('audioAccepted')
    const toggleText = document.querySelector('.is--toggle')

    if (ambient) {
      // event listeners
      button.addEventListener('click', () => {
        if (ambient.paused) {
          audioIsOn = true
          // localStorage.setItem('audioAccepted', 'true')
          ambient.play()
          console.log('audio played')
          gsap.to(audioBall, {
            x: 26,
            opacity: 1,
            duration: 0.4,
            ease: spike,
          })
          const r = Math.floor(4 * Math.random())
          const fx = typeFXs[r]
          fx.play()
          randomChar(toggleText, 0.5, 18, '·ON·\u00A0')
          // gsap.to(soundOff, {
          //   opacity: 0,
          //   duration: 0.4,
          //   ease: 'power1.inOut',
          // })
        } else {
          // localStorage.setItem('audioAccepted', 'false')
          audioIsOn = false
          ambient.pause()
          console.log('audio paused')
          gsap.to(audioBall, {
            x: 4,
            duration: 0.4,
            opacity: 0.4,
            ease: spike,
          })
          randomChar(toggleText, 0.5, 18, '·OFF·')

          // gsap.to(soundOff, {
          //   opacity: 1,
          //   duration: 0.4,
          //   ease: 'power1.inOut',
          // })
        }
      })
      button.addEventListener('mouseover', () => {
        gsap.to(audioBall, {
          scale: 0.9,
          duration: 0.4,
        })
      })
      button.addEventListener('mouseleave', () => {
        gsap.to(audioBall, {
          scale: 1,
          duration: 0.4,
        })
      })
    }

    footerPs.forEach((p) => {
      p.addEventListener('mouseenter', () => {
        if (audioIsOn) {
          const r = Math.floor(4 * Math.random())
          const fx = typeFXs[r]
          fx.play()
        }
      })
    })
  }
}

export default audio
