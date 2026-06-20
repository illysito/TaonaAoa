const custom_cursor = document.querySelector('.custom-cursor')

export function customCursor() {
  let x = 0
  let y = 0
  function animate() {
    custom_cursor.style.transform = `translate(${x}px, ${y}px)`
    requestAnimationFrame(animate)
  }
  animate()

  window.addEventListener('mousemove', (e) => {
    x = e.clientX
    y = e.clientY
  })
}

export default customCursor
