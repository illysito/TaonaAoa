import randomChar from '../functions/randomChar'

function footer() {
  const footerPs = document.querySelectorAll('.footer-p')
  const contactButton = document.querySelector('.contact-button')
  const conatactP = contactButton.firstElementChild

  footerPs.forEach((p) => {
    p.addEventListener('mouseenter', () => {
      randomChar(p)
    })
  })

  contactButton.addEventListener('mouseenter', () => {
    randomChar(conatactP)
  })
  // contactButton.addEventListener('mouseleave', () => {
  //   randomChar(conatactP)
  // })
  // contactButton.addEventListener('mouseenter', () => {
  //   randomChar(conatactP)
  // })
}

export default footer
