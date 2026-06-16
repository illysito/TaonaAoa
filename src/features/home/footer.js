import randomChar from '../functions/randomChar'

function footer() {
  const footerPs = document.querySelectorAll('.footer-p')

  footerPs.forEach((p) => {
    p.addEventListener('mouseenter', () => {
      randomChar(p)
    })
  })
}

export default footer
