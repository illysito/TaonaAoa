import gsap from 'gsap'

import randomChar from '../functions/randomChar'

function githubToJsDelivr(permalink) {
  return permalink
    .replace('github.com', 'cdn.jsdelivr.net/gh')
    .replace('/blob/', '@')
}

let preloaderIsReady = false

function audio() {
  // function isMobile() {
  //   return window.matchMedia('(max-width: 768px)').matches
  // }

  let audioIsOn = false
  let volumeMultiplier = 1.4

  const spike = 'M0,0 C0.08,0 0.12,1.2 0.18,1.0 0.3,0.5 0.6,0.15 1,0'

  const footerPs = document.querySelectorAll('.footer-p')
  const contactPs = document.querySelectorAll('.contact-p')

  const preloaderH = document.querySelector('.preloader-h')

  // function isDesktop() {
  //   return window.innerWidth >= 992
  // }

  // console.log('Audio: is it mobile?: ' + isMobile())

  // if (isDesktop()) {
  const ambient = new Audio(
    githubToJsDelivr(
      'https://github.com/illysito/TaonaAoa/blob/f8c31047f109d28e721c8b4c530af60e7475bcd0/web-audio/TaonaAoaLoop.opus'
    )
  )
  const clickFX = new Audio(
    githubToJsDelivr(
      'https://github.com/illysito/TaonaAoa/blob/78d52fedd9a08f338362374cb779227117f33d16/web-audio/clickFX.mp3'
    )
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
    typeFXs[i].volume = 0.32 * volumeMultiplier
  }

  function playFX() {
    const r = Math.floor(typeFXs.length * Math.random())
    const fx = typeFXs[r]

    fx.pause()
    fx.currentTime = 0
    fx.play()
  }

  ambient.loop = true
  ambient.volume = 0

  clickFX.volume = 0.26 * volumeMultiplier

  const audioButton = document.querySelector('.audio-button')
  const circularityButton = document.querySelector('.circularity-button')
  const contactButton = document.querySelector('.contact-button')
  const audioBall = audioButton.firstElementChild
  // const audioAccepted = localStorage.getItem('audioAccepted')
  const toggleText = [...document.querySelectorAll('.is--toggle')][1]
  const popUpButton = document.querySelector('.pop-up-button')
  const closeButton = document.querySelector('.close-button')

  if (ambient) {
    // event listeners
    audioButton.addEventListener('click', () => {
      if (ambient.paused) {
        audioIsOn = true
        gsap.to(ambient, {
          volume: 0.32 * volumeMultiplier,
          duration: 0.4,
        })
        // localStorage.setItem('audioAccepted', 'true')
        ambient.play()
        console.log('audio played')
        gsap.to(audioBall, {
          x: 26,
          opacity: 1,
          duration: 0.4,
          ease: spike,
        })
        clickFX.play()
        playFX()
        randomChar(toggleText, 0.5, 18, '·ON·\u00A0')
        // gsap.to(soundOff, {
        //   opacity: 0,
        //   duration: 0.4,
        //   ease: 'power1.inOut',
        // })
      } else {
        // localStorage.setItem('audioAccepted', 'false')
        audioIsOn = false
        clickFX.play()
        gsap.to(ambient, {
          volume: 0,
          duration: 0.4,
          onComplete: () => {
            ambient.pause()
          },
        })
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
    audioButton.addEventListener('mouseover', () => {
      gsap.to(audioBall, {
        scale: 0.9,
        duration: 0.4,
      })
    })
    audioButton.addEventListener('mouseleave', () => {
      gsap.to(audioBall, {
        scale: 1,
        duration: 0.4,
      })
    })

    circularityButton.addEventListener('click', () => {
      if (audioIsOn) {
        audioIsOn = true
        clickFX.play()
        // playFX()
      }
    })

    contactButton.addEventListener('click', () => {
      if (audioIsOn) {
        audioIsOn = true
        clickFX.play()
        // playFX()
      }
    })

    popUpButton.addEventListener('click', () => {
      if (audioIsOn) {
        audioIsOn = true
        clickFX.play()
        // playFX()
      }
    })

    closeButton.addEventListener('click', () => {
      if (audioIsOn) {
        audioIsOn = true
        clickFX.play()
        // playFX()
      }
    })
  }

  footerPs.forEach((p) => {
    p.addEventListener('mouseenter', () => {
      if (audioIsOn) {
        playFX()
      }
    })
  })
  contactPs.forEach((p) => {
    p.addEventListener('mouseenter', () => {
      if (audioIsOn) {
        playFX()
      }
    })
  })

  window.addEventListener('preloaderIsReadyToClick', () => {
    preloaderIsReady = true
  })
  preloaderH.addEventListener('click', () => {
    if (!preloaderIsReady) return
    if (ambient.paused) {
      audioIsOn = true
      gsap.to(ambient, {
        volume: 0.32 * volumeMultiplier,
        duration: 0.4,
      })
      // localStorage.setItem('audioAccepted', 'true')
      ambient.play()
      console.log('audio played')
      gsap.to(audioBall, {
        x: 26,
        opacity: 1,
        duration: 0.4,
        ease: spike,
      })
      clickFX.play()
      playFX()
      randomChar(toggleText, 0.5, 18, '·ON·\u00A0')
    } else {
      audioIsOn = false
      clickFX.play()
      gsap.to(ambient, {
        volume: 0,
        duration: 0.4,
        onComplete: () => {
          ambient.pause()
        },
      })
      console.log('audio paused')
      gsap.to(audioBall, {
        x: 4,
        duration: 0.4,
        opacity: 0.4,
        ease: spike,
      })
      randomChar(toggleText, 0.5, 18, '·OFF·')
    }
  })
}

export default audio
