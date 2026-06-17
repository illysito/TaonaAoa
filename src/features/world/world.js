import gsap from 'gsap'
import * as THREE from 'three'

// Data
import PROJECTS, { ALPHA_MAP } from '../data/textures'
// Shaders
import frag from './shaders/gradient_fragShader'
// import vert from './shaders/gradient_vertexShader'
import vert_2 from './shaders/gradient_vertexShader_2'

async function worldHome() {
  // -------------------------------------------------------------- Setup --------------------------------------------------------------

  const canvas = document.getElementById('canvas')

  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()

  // Scene
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x060606)

  // Camera
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
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

  // -------------------------------------------------------------- Background Plane --------------------------------------------------------------
  const planeGeometry = new THREE.PlaneGeometry(
    window.innerWidth,
    window.innerHeight,
    320,
    320
  )
  const seed = Math.random() * 20
  console.log('Seed: ', seed)
  const planeMaterial = new THREE.ShaderMaterial({
    fragmentShader: frag,
    vertexShader: vert_2,
    uniforms: {
      u_time: { value: 0 },
      u_seed: { value: seed },
    },
  })
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  const planeScale = 2.6
  plane.rotation.x = 0.1
  plane.rotation.z = Math.PI
  plane.position.x = -100
  plane.scale.set(planeScale, planeScale, planeScale)

  // Avoid the plane from going OVER the SPHERE
  plane.renderOrder = 0
  plane.material.depthWrite = false
  plane.material.depthTest = true
  scene.add(plane)

  // -------------------------------------------------------------- Load Textures --------------------------------------------------------------

  const imgLoader = new THREE.TextureLoader()

  function loadTexture(url) {
    return new Promise((resolve, reject) => {
      imgLoader.load(
        url,
        (texture) => {
          texture.minFilter = THREE.LinearFilter
          texture.magFilter = THREE.LinearFilter
          texture.generateMipmaps = false
          texture.colorSpace = THREE.SRGBColorSpace

          resolve(texture)
        },
        undefined,
        reject
      )
    })
  }

  const alphaMapTexture = await loadTexture(ALPHA_MAP)

  // Adds texture property with loaded texture to the PROJECTS array
  await Promise.all(
    PROJECTS.map(async (project) => {
      project.texture = await loadTexture(project.image)
    })
  )

  // -------------------------------------------------------------- Create Sphere --------------------------------------------------------------

  const sphereGroup = new THREE.Group()
  scene.add(sphereGroup)

  const count = 36
  const radius = window.innerHeight / 3.4
  const planeSize = window.innerHeight / 14

  // Keep a list of my planes to then raycast them and do stuff
  const spherePlanes = []

  // Create the planes with the textures
  for (let i = 0; i < count; i++) {
    const currentTexture = PROJECTS[i].texture
    const geometry = new THREE.PlaneGeometry(planeSize, planeSize)

    const material = new THREE.MeshBasicMaterial({
      alphaMap: alphaMapTexture,
      map: currentTexture,
      side: THREE.DoubleSide,
      transparent: true,
    })

    const plane = new THREE.Mesh(geometry, material)

    plane.userData.name = PROJECTS[i].id
    plane.userData.state = PROJECTS[i].state
    plane.userData.index = i

    sphereGroup.add(plane)
    spherePlanes.push(plane)
  }

  function layoutSphere() {
    // layout = 'sphere'

    spherePlanes.forEach((plane, i) => {
      const phi = Math.acos(1 - (2 * i) / count)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i

      const target = new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        1.05 * radius * Math.sin(phi) * Math.sin(theta)
      )

      plane.userData.basePosition = target.clone()
      plane.userData.heightFactor = 1 + target.y / radius

      gsap.to(plane.position, {
        x: target.x,
        y: target.y,
        z: target.z,
        duration: 1.4,
        ease: 'expo.inOut',
      })
    })
  }
  layoutSphere()

  function layoutRing() {
    // layout = 'ring'

    const ringRadius = window.innerHeight / 2.8

    spherePlanes.forEach((plane, i) => {
      const angle = (i / count) * Math.PI * 2

      const target = new THREE.Vector3(
        Math.cos(angle) * ringRadius,
        Math.sin(angle) * ringRadius * 0.25,
        Math.sin(angle) * ringRadius * 0.65
      )

      gsap.to(plane.position, {
        x: target.x,
        y: target.y,
        z: target.z,
        duration: 1.4,
        ease: 'expo.inOut',
      })
    })
  }
  // layoutRing()
  // Scatter planes in a sphere layout
  // for (let i = 0; i < count; i++) {
  //   const currentTexture = PROJECTS[i].texture // to avoid first one which is alpha map
  //   const geometry = new THREE.PlaneGeometry(planeSize, planeSize)
  //   const material = new THREE.MeshBasicMaterial({
  //     // color: new THREE.Color().setHSL(i / count - 0.1, 1, 0.5),
  //     // color: new THREE.Color('#0e0e0e'),
  //     alphaMap: alphaMapTexture,
  //     map: currentTexture,
  //     side: THREE.DoubleSide,
  //     transparent: true,
  //     // wireframe: true,
  //   })
  //   const plane = new THREE.Mesh(geometry, material)

  //   // Fibonacci sphere
  //   const phi = Math.acos(1 - (2 * i) / count)
  //   const theta = Math.PI * (1 + Math.sqrt(5)) * i
  //   plane.position.set(
  //     radius * Math.sin(phi) * Math.cos(theta),
  //     radius * Math.cos(phi),
  //     1.05 * radius * Math.sin(phi) * Math.sin(theta)
  //   )

  //   // Store basePositions and Heights for uneven rotation later
  //   plane.userData.name = PROJECTS[i].id
  //   plane.userData.basePosition = plane.position.clone()
  //   plane.userData.heightFactor = 1 + plane.position.y / radius // 0 to 2

  //   sphereGroup.add(plane)
  //   spherePlanes.push(plane)
  // }
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

  // -------------------------------------------------------------- Loop --------------------------------------------------------------

  // normal counter
  let planeCounter = 0
  let sphereCounter = 0

  // dragging variables
  let isDragging = false
  let previousX = 0
  let previousY = 0
  let dragRotationX = 0
  let dragRotationY = 0
  let dragVelocityX = 0
  let dragVelocityY = 0

  // click variables
  let isSphere = true
  let isRing = false
  let clickRotation = { value: 0 }

  // Quaternion handling to make each plane look always to the FRONT
  const cameraQuat = new THREE.Quaternion()
  const parentQuat = new THREE.Quaternion()
  const inverseParentQuat = new THREE.Quaternion()

  function animate() {
    planeCounter = (planeCounter + 0.001) % 5000 // safeguard to not let counter evolve endlessly
    planeMaterial.uniforms.u_time.value = planeCounter
    plane.rotation.z = Math.PI * Math.cos(0.25 * planeCounter)

    // Quaternion handling to make each plane look always to the FRONT
    camera.getWorldQuaternion(cameraQuat)
    sphereGroup.getWorldQuaternion(parentQuat)
    inverseParentQuat.copy(parentQuat).invert()

    // Planes inside the sphere animations
    sphereCounter = (sphereCounter + 0.001) % 5000

    // sphereGroup.children.forEach((plane) => {
    //   //   // Keep billboard position
    //   plane.quaternion.copy(inverseParentQuat).multiply(cameraQuat)
    // })

    if (isSphere) {
      sphereGroup.children.forEach((plane) => {
        // Calculations to make each "layer" of the sphere revolve differently
        const base = plane.userData.basePosition
        const y = base.y + 0.4 * Math.sin(sphereCounter)

        const heightFactor = plane.userData.heightFactor

        // different speed depending on height
        const speed = 0.0015 + heightFactor * 0.0004 * dragRotationX

        const angle = -sphereCounter * speed * 340

        const x =
          // Math.cos(counter) *
          base.x * Math.cos(angle) - base.z * Math.sin(angle)
        const z =
          // Math.cos(counter) *
          base.x * Math.sin(angle) + base.z * Math.cos(angle)

        plane.position.set(x, y, z)

        const scaleFactor = heightFactor - 1
        const planeScaleAnimated =
          1.2 + 0.12 * Math.sin(sphereCounter * 8) * scaleFactor
        plane.scale.set(
          planeScaleAnimated,
          planeScaleAnimated,
          planeScaleAnimated
        )

        // Keep billboard position
        plane.quaternion.copy(inverseParentQuat).multiply(cameraQuat)
      })
    }

    // Whole sphere animation
    sphereGroup.rotation.y =
      1.2 * sphereCounter + 0.6 * dragRotationX + clickRotation.value
    if (isSphere) {
      sphereGroup.rotation.x =
        -0.2 * Math.sin(sphereCounter) + 1.6 * dragRotationY
    } else if (isRing) {
      sphereGroup.rotation.x = -0.2 * Math.sin(sphereCounter)
    }
    dragRotationX += dragVelocityX
    dragRotationY += dragVelocityY
    dragVelocityX *= 0.95
    dragVelocityY *= 0.95

    // Render and RAF
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()

  // -------------------------------------------------------------- Resize --------------------------------------------------------------

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  // ------------------------------------------------------------- Drag & Raycast Events --------------------------------------------------------------

  let currentPlaneMesh = null
  // let isIntersecting = false

  window.addEventListener('pointerdown', (event) => {
    isDragging = true
    previousX = event.clientX
  })

  window.addEventListener('pointermove', (event) => {
    // RAYCASTER LOGIC
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    raycaster.setFromCamera(mouse, camera)

    const intersects = raycaster.intersectObjects(spherePlanes)

    if (intersects.length > 0) {
      currentPlaneMesh = intersects[0].object
      console.log(currentPlaneMesh.userData.name)
    } else {
      currentPlaneMesh = null
    }

    // DRAGGING LOGIC

    if (!isDragging) return

    const movementX = event.clientX - previousX
    const movementY = event.clientY - previousY
    previousX = event.clientX
    previousY = event.clientY

    dragVelocityX += movementX * 0.00025
    dragVelocityY += movementY * 0.000025
  })

  window.addEventListener('pointerup', () => {
    isDragging = false
  })

  window.addEventListener('pointerleave', () => {
    isDragging = false
  })

  // Raycaster

  // OPACITY

  // MOTION
  function expandSphere() {
    // ZOOM IN AGGRESSIVE
    gsap.to(sphereGroup.position, {
      z: 840,
      // scale: 2.8,
      duration: 1.8,
      ease: 'expo.inOut',
      onComplete: () => {
        gsap.set(sphereGroup, {
          visible: false,
        })
      },
    })
    gsap.to(clickRotation, {
      value: Math.PI / 8,
      duration: 1.8,
      ease: 'expo.inOut',
    })
  }

  function restoreSphere() {
    gsap.set(sphereGroup, {
      visible: true,
    })
    gsap.to(sphereGroup.position, {
      z: 80,
      // scale: 1,
      duration: 1.8,
      ease: 'expo.inOut',
    })
  }

  // PLANE SELECTION
  window.addEventListener('click', () => {
    if (currentPlaneMesh) {
      expandSphere()
      window.dispatchEvent(
        new CustomEvent('clearHero', {
          detail: {
            state: currentPlaneMesh.userData.state,
          },
        })
      )
      window.dispatchEvent(
        new CustomEvent('changeState', {
          detail: {
            state: currentPlaneMesh.userData.state,
          },
        })
      )
    }
  })

  window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r') {
      layoutRing()
      isSphere = false
      isRing = true
    }

    if (e.key.toLowerCase() === 's') {
      layoutSphere()
      isSphere = true
      isRing = false
    }

    if (e.key.toLowerCase() === 't') {
      restoreSphere()
    }
  })
}

export default worldHome
