// import gsap from 'gsap'
import * as THREE from 'three'

// Data
import TEXTURES from '../data/textures'
// Shaders
import frag from './shaders/gradient_fragShader'
import vert from './shaders/gradient_vertexShader'

async function worldHome() {
  const canvas = document.getElementById('canvas')

  // Scene
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x060606)

  // Camera
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    100,
    2000
  )
  camera.position.z = 600
  function updateCamera() {
    camera.fov =
      (2 * Math.atan(window.innerHeight / 2 / camera.position.z) * 180) /
      Math.PI
    camera.updateProjectionMatrix()
  }
  updateCamera()

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Main plane creation
  const planeGeometry = new THREE.PlaneGeometry(
    window.innerWidth,
    window.innerHeight,
    300,
    300
  )
  const seed = Math.random() * 20
  console.log('Seed: ', seed)
  const planeMaterial = new THREE.ShaderMaterial({
    fragmentShader: frag,
    vertexShader: vert,
    uniforms: {
      u_time: { value: 0 },
      u_seed: { value: seed },
    },
    // transparent: true,
    // blending: THREE.AdditiveBlending,
    // depthWrite: false,
    // wireframe: true,
  })
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  const planeScale = 2.4
  plane.rotation.x = 0.1
  plane.scale.set(planeScale, planeScale, planeScale)

  // Avoid the plane from going OVER the SPHERE
  plane.renderOrder = 0
  plane.material.depthWrite = false
  plane.material.depthTest = true
  scene.add(plane)

  // Function to load textures
  const textures = {}
  const imgLoader = new THREE.TextureLoader()
  function loadTexture(name, url) {
    return new Promise((resolve, reject) => {
      imgLoader.load(
        url,
        (texture) => {
          texture.minFilter = THREE.LinearFilter
          texture.magFilter = THREE.LinearFilter
          texture.generateMipmaps = false
          texture.colorSpace = THREE.SRGBColorSpace

          textures[name] = texture
          resolve(texture)
        },
        undefined,
        reject
      )
    })
  }

  // Wait until every CRITICAL texture is loaded into the textures object
  await Promise.all(
    Object.entries(TEXTURES).map(([name, url]) => loadTexture(name, url))
  )
  // console.log(textures)

  // SPHERE
  const sphereGroup = new THREE.Group()
  scene.add(sphereGroup)

  const count = 54
  const radius = 240

  // Scatter planes in a sphere layout
  const entries = Object.entries(textures)
  // console.log(entries)
  for (let i = 0; i < count; i++) {
    const currentTexturePair = entries[i]
    const geometry = new THREE.PlaneGeometry(40, 50)
    const material = new THREE.MeshBasicMaterial({
      // color: new THREE.Color().setHSL(i / count - 0.1, 1, 0.5),
      // color: new THREE.Color('#0e0e0e'),
      map: currentTexturePair[1],
      side: THREE.DoubleSide,
      // wireframe: true,
    })
    const plane = new THREE.Mesh(geometry, material)

    // Fibonacci sphere
    const phi = Math.acos(1 - (2 * i) / count)
    const theta = Math.PI * (1 + Math.sqrt(5)) * i
    plane.position.set(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      1.05 * radius * Math.sin(phi) * Math.sin(theta)
    )

    // Store basePositions and Heights for uneven rotation later
    plane.userData.basePosition = plane.position.clone()
    plane.userData.heightFactor = 1 + plane.position.y / radius // 0 to 2

    sphereGroup.add(plane)
  }
  sphereGroup.position.z = 80
  sphereGroup.renderOrder = 10

  // Restore original depth calculation for INSIDE the sphere
  sphereGroup.traverse((child) => {
    if (child.isMesh) {
      child.renderOrder = 10

      child.material.depthTest = true
      child.material.depthWrite = true
    }
  })

  // Loop
  let counter = 0
  let isDragging = false
  let previousX = 0
  let dragRotation = 0
  // Quaternion handling to make each plane look always to the FRONT
  const cameraQuat = new THREE.Quaternion()
  const parentQuat = new THREE.Quaternion()
  const inverseParentQuat = new THREE.Quaternion()

  function animate() {
    counter = (counter + 0.001) % 5000 // safeguard to not let counter evolve endlessly

    planeMaterial.uniforms.u_time.value = counter

    // Quaternion handling to make each plane look always to the FRONT
    camera.getWorldQuaternion(cameraQuat)
    sphereGroup.getWorldQuaternion(parentQuat)
    inverseParentQuat.copy(parentQuat).invert()

    sphereGroup.children.forEach((plane) => {
      // Calculations to make each "layer" of the sphere revolve differently
      const base = plane.userData.basePosition
      const y = base.y + 0.4 * Math.sin(counter)

      const heightFactor = plane.userData.heightFactor

      // different speed depending on height
      const speed = 0.0015 + heightFactor * 0.0008

      const angle = -counter * speed * 340

      const x =
        // Math.cos(counter) *
        base.x * Math.cos(angle) - base.z * Math.sin(angle)
      const z =
        // Math.cos(counter) *
        base.x * Math.sin(angle) + base.z * Math.cos(angle)

      plane.position.set(x, y, z)

      const scaleFactor = heightFactor - 1
      const planeScaleAnimated =
        1.2 + 0.24 * Math.sin(counter * 16) * scaleFactor
      plane.scale.set(
        planeScaleAnimated,
        planeScaleAnimated,
        planeScaleAnimated
      )

      // Keep billboard position
      plane.quaternion.copy(inverseParentQuat).multiply(cameraQuat)
    })

    sphereGroup.rotation.y = 2 * counter * Math.max(1, dragRotation)
    sphereGroup.rotation.x = -0.2 * counter
    dragRotation *= 0.999

    // if (isDragging) {
    //   sphereGroup.rotation.y += 6 * counter
    // }

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  // Drag
  window.addEventListener('pointerdown', (event) => {
    isDragging = true
    previousX = event.clientX
  })

  window.addEventListener('pointermove', (event) => {
    if (!isDragging) return

    const movementX = event.clientX - previousX
    previousX = event.clientX

    dragRotation += movementX * 0.0025
  })

  window.addEventListener('pointerup', () => {
    isDragging = false
  })

  window.addEventListener('pointerleave', () => {
    isDragging = false
  })

  // Mousemove
  // window.addEventListener('mousemove', (e) => {
  //   currentX = 1 + e.clientX / window.innerWidth
  //   currentY = 1 + e.clientY / window.innerWidth
  // })
}

export default worldHome
