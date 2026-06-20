const custom_cursor = document.querySelector('.custom-cursor')

export function customCursor() {
  let x = 0
  let y = 0
  let offset = 8
  function animate() {
    custom_cursor.style.transform = `translate(${x}px, ${y}px)`
    if (y <= 0 + offset) {
      custom_cursor.style.opacity = 0
    } else {
      custom_cursor.style.opacity = 1
    }
    requestAnimationFrame(animate)
  }
  animate()

  window.addEventListener('mousemove', (e) => {
    x = e.clientX
    y = e.clientY
  })
}

export default customCursor
