import gsap from 'gsap'
// import SplitType from 'split-type'

function fadeSlideIn(currentState) {
  const ui_section = document.querySelector('.ui-section')
  ui_section.style.pointerEvents = 'auto'
  const slide_sections = document.querySelectorAll('.slide-section')
  const contentHeadings = document.querySelectorAll('.content-h')
  const contentPs = document.querySelectorAll('.content-p')
  const contentImgs = document.querySelectorAll('.content-img')
  // UI
  const ui_title = document.querySelector('.title-h')
  const ui_number = document.querySelector('.number-h')

  // SPLIT ELEMENTS INTO CORRESPONDING SLIDES
  const contentHeadings_1 = [contentHeadings[0], contentHeadings[1]]
  console.log(contentHeadings_1)
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

  // SWITCH!

  const titleRevealDuration = 2
  const titleRevealEase = 'power2.inOut'

  switch (currentState) {
    case 1: {
      // UI!
      // gsap.to(ui_section, {
      //   opacity: 1,
      //   duration: 1.6,
      //   ease: 'linear',
      // })

      const tl = gsap.timeline({
        onComplete: () => {
          console.log('finished')
        },
      })

      ui_title.textContent = 'TAONA AOA'
      ui_number.textContent = '01'

      tl.to(ui_title, {
        yPercent: 0,
        opacity: 1,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      })

      tl.to(
        slide_sections[0],
        {
          opacity: 1,
          duration: 0.8,
          ease: 'none',
        },
        0
      )

      tl.to(
        contentHeadings_1,
        {
          opacity: 1,
          duration: 0.8,
          ease: 'none',
        },
        0
      )

        .to(
          contentPs_1,
          {
            opacity: 1,
            duration: 0.8,
            ease: 'none',
          },
          0
        )

        .to(
          contentImgs_1,
          {
            opacity: 1,
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
        },
      })

      ui_title.textContent = 'WHY CANARIAS'
      ui_number.textContent = '02'

      tl.to(ui_title, {
        yPercent: 0,
        opacity: 1,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      })

      tl.to(
        slide_sections[1],
        {
          opacity: 1,
          duration: 0.8,
          ease: 'none',
        },
        0
      )

      tl.to(
        contentHeadings_2,
        {
          opacity: 1,
          duration: 0.8,
          ease: 'none',
        },
        0
      )

        .to(
          contentPs_2,
          {
            opacity: 1,
            duration: 0.8,
            ease: 'none',
          },
          0
        )

        .to(
          contentImgs_2,
          {
            opacity: 1,
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
        },
      })

      ui_title.textContent = 'LAUNCH IN EUROPE'
      ui_number.textContent = '03'

      tl.to(ui_title, {
        yPercent: 0,
        opacity: 1,
        duration: titleRevealDuration,
        ease: titleRevealEase,
      })

      tl.to(
        slide_sections[2],
        {
          opacity: 1,
          duration: 0.8,
          ease: 'none',
        },
        0
      )

      tl.to(
        contentHeadings_3,
        {
          opacity: 1,
          duration: 0.8,
          ease: 'none',
        },
        0
      )

        .to(
          contentPs_3,
          {
            opacity: 1,
            duration: 0.8,
            ease: 'none',
          },
          0
        )

        .to(
          contentImgs_3,
          {
            opacity: 1,
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

export default fadeSlideIn
