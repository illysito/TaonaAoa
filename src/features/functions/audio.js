import gsap from 'gsap'

import randomChar from '../functions/randomChar'

function audio() {
  // function isMobile() {
  //   return window.matchMedia('(max-width: 768px)').matches
  // }
  const spike = 'M0,0 C0.08,0 0.12,1.2 0.18,1.0 0.3,0.5 0.6,0.15 1,0'

  function isDesktop() {
    return window.innerWidth >= 992
  }

  // console.log('Audio: is it mobile?: ' + isMobile())

  if (isDesktop()) {
    let audio = document.querySelector('#taona-ambient')

    audio.volume = 0.2

    const button = document.querySelector('.audio-button')
    const audioBall = button.firstElementChild
    const audioAccepted = localStorage.getItem('audioAccepted')
    const toggleText = document.querySelector('.is--toggle')

    if (audio) {
      // fade in
      // gsap.to(button, {
      //   opacity: 1,
      //   duration: 0.8,
      //   delay: 0.4,
      // })

      // movement
      // gsap.to(button, {
      //   rotation: 12,
      //   duration: 4,
      //   repeat: -1,
      //   yoyo: true,
      //   ease: 'linear',
      // })

      // initial state
      if (audioAccepted === 'true') {
        // Play the appropriate audio for this page
        audio.play()
      }

      // event listeners
      button.addEventListener('click', () => {
        if (audio.paused) {
          localStorage.setItem('audioAccepted', 'true')
          audio.play()
          console.log('audio played')
          gsap.to(audioBall, {
            x: 26,
            opacity: 1,
            duration: 0.4,
            ease: spike,
          })
          randomChar(toggleText, 0.5, 18, '(ON)\u00A0')
          // gsap.to(soundOff, {
          //   opacity: 0,
          //   duration: 0.4,
          //   ease: 'power1.inOut',
          // })
        } else {
          localStorage.setItem('audioAccepted', 'false')
          audio.pause()
          console.log('audio paused')
          gsap.to(audioBall, {
            x: 4,
            duration: 0.4,
            opacity: 0.4,
            ease: spike,
          })
          randomChar(toggleText, 0.5, 18, '(OFF)')

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
  }
}

export default audio
