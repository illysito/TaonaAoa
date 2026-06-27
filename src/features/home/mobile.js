// import gsap from 'gsap'

// import randomChar from '../functions/randomChar'

function mobile() {
  const navImg = document.querySelector('.logo-img')

  navImg.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
}

export default mobile
