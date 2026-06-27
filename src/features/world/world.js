import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

// Data
import PROJECTS, { ALPHA_MAP } from '../data/textures'
// Functions
import randomChar from '../functions/randomChar'
import { activateDot } from '../UI/inputUI'
import { changeState } from '../UI/stateStore'
import { getIsTransitioning } from '../UI/stateStore'
// Shaders
import frag from './shaders/gradient_fragShader'
// import vert from './shaders/gradient_vertexShader'
import vert_2 from './shaders/gradient_vertexShader_2'

const UNIFORMS = {
  u_cycleSpeed: { value: 0.4 },
  u_cycleTime: { value: 0.8 },
  u_powerFactor: { value: 4.0 },
  u_blueFactor: { value: 0.4235 },
}

function isMobile() {
  return window.matchMedia('(max-width: 667px)').matches
}

async function worldHome() {
  //#region SETUP

  // -------------------------------------------------------------- Setup --------------------------------------------------------------

  const canvas = document.getElementById('canvas')

  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()

  // Scene
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x060606)

  let resolution = { x: 0, y: 0 }
  if (isMobile()) {
    resolution.x = canvas.clientWidth
    resolution.y = canvas.clientHeight
  } else {
    resolution.x = window.innerWidth
    resolution.y = window.innerHeight
  }

  // Camera
  const camera = new THREE.PerspectiveCamera(
    45,
    resolution.x / resolution.y,
    1,
    2000
  )
  console.log(canvas.clientHeight)
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
  renderer.setSize(resolution.x, resolution.y)
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  //#endregion

  //#region BACKGROUND PLANE

  // -------------------------------------------------------------- Background Plane --------------------------------------------------------------

  const segments = isMobile() ? 60 : 140

  const verticalSegments = segments
  let horizontalSegments = 0

  if (isMobile()) {
    horizontalSegments = Math.round(
      (verticalSegments * window.innerWidth) / window.innerHeight
    )
  } else {
    horizontalSegments = 140
  }

  console.log('v ', verticalSegments)
  console.log('h ', horizontalSegments)

  const planeGeometry = new THREE.PlaneGeometry(
    canvas.clientWidth,
    canvas.clientHeight,
    horizontalSegments,
    verticalSegments
  )
  const seed = Math.random() * 20
  // console.log('Seed: ', seed)
  const planeMaterial = new THREE.ShaderMaterial({
    fragmentShader: frag,
    vertexShader: vert_2,
    uniforms: {
      u_time: { value: 0 },
      u_seed: { value: seed },
      u_cycleTime: { value: UNIFORMS.u_cycleTime.value },
      u_cycleSpeed: { value: UNIFORMS.u_cycleSpeed.value },
      u_powerFactor: { value: UNIFORMS.u_powerFactor.value },
      u_blueFactor: { value: UNIFORMS.u_blueFactor.value },
    },
  })
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  let planeScale = 2.4
  if (isMobile()) {
    planeScale = 1.8
  }
  plane.rotation.x = 0.1
  plane.rotation.z = Math.PI
  plane.position.x = -100
  plane.scale.set(planeScale, planeScale, planeScale)

  // Avoid the plane from going OVER the SPHERE
  plane.renderOrder = 0
  plane.material.depthWrite = false
  plane.material.depthTest = true
  scene.add(plane)

  //#endregion

  //#region TEXTURE LOADING

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

  //#endregion

  //#region SPHERE

  // -------------------------------------------------------------- Create Sphere --------------------------------------------------------------

  // const spike = 'M0,0 C0.08,0 0.12,1.2 0.18,1.0 0.3,0.5 0.6,0.15 1,0'
  const sphereGroup = new THREE.Group()
  scene.add(sphereGroup)

  let radiusDivider = 3.4
  let planeSizeDivider = 14
  let verticalOffset = 0
  if (isMobile()) {
    radiusDivider = 4.2
    planeSizeDivider = 24
    verticalOffset = 40
  }

  sphereGroup.position.y = verticalOffset

  const count = 36
  const radius = canvas.clientHeight / radiusDivider
  const planeSize = (1.2 * canvas.clientHeight) / planeSizeDivider

  // Keep a list of my planes to then raycast them and do stuff
  const spherePlanes = []

  // Create the planes with the textures
  const geometry = new THREE.PlaneGeometry(planeSize, planeSize)
  for (let i = 0; i < count; i++) {
    const currentTexture = PROJECTS[i].texture

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

    plane.userData.amp = 12 * Math.random()
    plane.userData.freq = 10

    sphereGroup.add(plane)
    spherePlanes.push(plane)
  }

  async function layoutDot() {
    // layout = 'sphere'
    const zStep = 0.2
    spherePlanes.forEach((plane, i) => {
      // const phi = Math.acos(1 - (2 * i) / count)
      // const theta = Math.PI * (1 + Math.sqrt(5)) * i

      const target = new THREE.Vector3(0, 0, 0)

      // plane.userData.basePosition = target.clone()
      // plane.userData.heightFactor = 1 + target.y / radius

      gsap.to(plane.position, {
        x: target.x,
        y: target.y,
        z: i * zStep,
        duration: 1,
        ease: 'expo.inOut',
      })
    })
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

      plane.material.depthWrite = false
      plane.material.depthTest = true

      plane.renderOrder = 1000 + target.z

      gsap.to(plane.position, {
        delay: 0.12,
        x: target.x,
        y: target.y,
        z: target.z,
        duration: 1,
        ease: 'expo.inOut',
        onComplete: () => {},
      })
    })
  }
  // layoutSphere()

  function layoutRing(orientation) {
    let yRotation = null
    let radiusDivider = null
    let excentricityX = null
    if (orientation === 'vertical') {
      yRotation = Math.PI * 0.38
      radiusDivider = 5.2
      excentricityX = 1.6
    } else {
      yRotation = 0
      radiusDivider = 3
      excentricityX = 1
    }

    const ringRadius = canvas.clientHeight / radiusDivider

    sphereGroup.rotation.z = yRotation

    spherePlanes.forEach((plane, i) => {
      const angle = (i / count) * Math.PI * 2

      const target = new THREE.Vector3(
        Math.cos(angle) * ringRadius * excentricityX,
        Math.sin(angle) * ringRadius * -0.2,
        // (Math.sin(angle) * ringRadius * 0.8 * Math.PI) / 4,
        Math.sin(angle) * ringRadius
      )

      plane.material.depthWrite = false
      plane.material.depthTest = true

      plane.renderOrder = 1000 + target.z

      gsap.to(plane.position, {
        delay: 0.12,
        x: target.x,
        y: target.y,
        z: target.z,
        duration: 1,
        ease: 'expo.inOut',
      })
    })

    // gsap.to(sphereGroup.rotation, {
    //   // delay: 0.12,
    //   z: 2,
    //   duration: 1,
    //   ease: 'expo.inOut',
    // })
  }

  // #region unused shapes!

  // function layoutSpiral() {
  //   const spiralRadius = window.innerHeight / 2
  //   // const height = window.innerHeight / 1.6
  //   const turns = 2

  //   spherePlanes.forEach((plane, i) => {
  //     const t = i / (count - 1)
  //     const angle = t * Math.PI * 2 * turns
  //     const r = spiralRadius * (0.5 + 0.5 * t)

  //     const target = new THREE.Vector3(
  //       Math.cos(angle) * r * t,
  //       0,
  //       Math.sin(angle) * r * t
  //     )

  //     gsap.killTweensOf(plane.position)

  //     gsap.to(plane.position, {
  //       x: target.x,
  //       y: target.y,
  //       z: target.z,
  //       duration: 1.4,
  //       ease: 'power2.inOut',
  //     })
  //   })
  // }

  // function layoutCylinder() {
  //   const cylinderRadius = window.innerHeight / 3
  //   const rows = 6

  //   spherePlanes.forEach((plane, i) => {
  //     const col = i % (count / rows)
  //     const row = Math.floor(i / (count / rows))

  //     const angle = (col / (count / rows)) * Math.PI * 2

  //     const target = new THREE.Vector3(
  //       Math.cos(angle) * cylinderRadius,
  //       (row - rows / 2) * 80,
  //       Math.sin(angle) * cylinderRadius
  //     )

  //     gsap.to(plane.position, {
  //       x: target.x,
  //       y: target.y,
  //       z: target.z,
  //       duration: 1,
  //       ease: 'expo.inOut',
  //     })
  //   })
  // }
  //#endregion

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

  //#endregion

  //#region LOOP

  // -------------------------------------------------------------- Loop --------------------------------------------------------------

  // normal counter
  let planeCounter = 0
  let sphereCounter = 0
  let preloaderIsFinished = false
  let animationStarted = false

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

  await layoutDot()
  window.dispatchEvent(new CustomEvent('worldReady', {}))

  function animate() {
    if (!animationStarted) return
    planeCounter = (planeCounter + 0.001) % 5000 // safeguard to not let counter evolve endlessly
    planeMaterial.uniforms.u_time.value = planeCounter
    planeMaterial.uniforms.u_cycleSpeed.value = UNIFORMS.u_cycleSpeed.value
    planeMaterial.uniforms.u_cycleTime.value = UNIFORMS.u_cycleTime.value
    planeMaterial.uniforms.u_powerFactor.value = UNIFORMS.u_powerFactor.value
    planeMaterial.uniforms.u_blueFactor.value = UNIFORMS.u_blueFactor.value
    if (!isMobile()) {
      plane.rotation.z = Math.PI * Math.cos(0.25 * planeCounter)
    }

    // Quaternion handling to make each plane look always to the FRONT
    camera.getWorldQuaternion(cameraQuat)
    sphereGroup.getWorldQuaternion(parentQuat)
    inverseParentQuat.copy(parentQuat).invert()

    // Planes inside the sphere animations
    sphereCounter = (sphereCounter + 0.001) % 5000

    //   // Keep billboard position
    sphereGroup.children.forEach((plane, i) => {
      plane.quaternion.copy(inverseParentQuat).multiply(cameraQuat)

      if (!isMobile()) {
        plane.scale.x += 0.00012 * Math.sin(sphereCounter + i)
        plane.scale.y += 0.00012 * Math.sin(sphereCounter + i)
        plane.scale.z += 0.00012 * Math.sin(sphereCounter + i)
      }

      // plane.position.x =
      //   plane.userData.basePosition.x +
      //   plane.userData.amp * Math.sin(plane.userData.freq * sphereCounter)
      // plane.position.y =
      //   plane.userData.basePosition.y +
      //   plane.userData.amp * Math.cos(plane.userData.freq * sphereCounter)
    })

    // Whole sphere animation
    sphereGroup.rotation.y =
      1.2 * sphereCounter + 0.6 * dragRotationX + clickRotation.value

    if (isSphere) {
      if (isMobile()) {
        sphereGroup.rotation.y = 2 * sphereCounter
        sphereGroup.rotation.x = 0.6 * sphereCounter
      } else {
        sphereGroup.rotation.x =
          -0.2 * Math.sin(sphereCounter) + 1.6 * dragRotationY
      }
    } else if (isRing) {
      sphereGroup.rotation.x =
        -0.2 * Math.sin(1 * sphereCounter) + 1.6 * dragRotationY
    }
    dragRotationX += dragVelocityX
    dragRotationY += dragVelocityY
    dragVelocityX *= 0.95
    dragVelocityY *= 0.95

    // Render and RAF
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  // animate()

  //#endregion

  //#region RESIZE

  // -------------------------------------------------------------- Resize --------------------------------------------------------------

  window.addEventListener('resize', () => {
    if (isMobile()) {
      resolution.x = canvas.clientWidth
      resolution.y = canvas.clientHeight
    } else {
      resolution.x = window.innerWidth
      resolution.y = window.innerHeight
    }
    camera.aspect = resolution.x / resolution.y
    camera.updateProjectionMatrix()
    renderer.setSize(resolution.x, resolution.y)
  })

  //#endregion

  //#region EVENTS

  // ------------------------------------------------------------- Drag & Raycast Events --------------------------------------------------------------

  let currentPlaneMesh = null

  // DRAGGING
  let pointerDownTime = 0
  // let latestPlane = null
  window.addEventListener('pointerdown', (event) => {
    pointerDownTime = performance.now()
    isDragging = true
    previousX = event.clientX
    previousY = event.clientY
  })

  window.addEventListener('pointermove', (event) => {
    // RAYCASTER LOGIC
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    raycaster.setFromCamera(mouse, camera)

    const intersects = raycaster.intersectObjects(spherePlanes)

    if (intersects.length > 0) {
      currentPlaneMesh = intersects[0].object
      if (preloaderIsFinished) {
        document.body.style.cursor = 'pointer'
      }
      // latestPlane = currentPlaneMesh
      // gsap.to(currentPlaneMesh.scale, {
      //   x: 1.05,
      //   y: 1.05,
      //   duration: 0.4,
      //   ease: 'power2.out',
      // })
    } else {
      currentPlaneMesh = null
      document.body.style.cursor = 'default'
      // gsap.to(latestPlane.scale, {
      //   x: 1.05,
      //   y: 1.05,
      //   duration: 0.4,
      //   ease: 'power2.out',
      // })
    }

    // DRAGGING LOGIC

    // if (!isDragging) return
    // console.log(isDragging)

    const movementX = event.clientX - previousX
    const movementY = event.clientY - previousY
    previousX = event.clientX
    previousY = event.clientY

    let velocityMultiplierX = 0
    let velocityMultiplierY = 0

    if (!isDragging) {
      velocityMultiplierX = 0.00002
      velocityMultiplierY = 0.000004
    } else {
      velocityMultiplierX = 0.00025
      velocityMultiplierY = 0.000025
    }

    dragVelocityX += movementX * velocityMultiplierX
    dragVelocityY += movementY * velocityMultiplierY
  })

  window.addEventListener('pointerup', () => {
    isDragging = false
  })

  window.addEventListener('pointerleave', () => {
    isDragging = false
  })

  // MOTION
  function expandSphere() {
    // ZOOM IN AGGRESSIVE
    gsap.to(sphereGroup.position, {
      z: 900,
      // scale: 2.8,
      duration: 2,
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
    if (isRing) {
      layoutRing('horizontal')
    }
    gsap.set(sphereGroup, {
      visible: true,
    })
    gsap.to(sphereGroup.position, {
      z: 80,
      // scale: 1,
      duration: 2,
      ease: 'expo.inOut',
    })
  }

  // PLANE SELECTION
  window.addEventListener('click', () => {
    if (isMobile()) return
    const heldTime = performance.now() - pointerDownTime
    if (heldTime > 180) return
    if (currentPlaneMesh && !getIsTransitioning() && preloaderIsFinished) {
      expandSphere()
      if (isRing) {
        layoutSphere()
      }
      changeState(currentPlaneMesh.userData.state)
      activateDot(currentPlaneMesh.userData.state)
    }
  })

  // CIRCULARITY SELECTION
  const button = document.querySelector('.circularity-button')
  const circBall = button.firstElementChild
  const toggleText = [...document.querySelectorAll('.is--toggle')][0]
  const spike = 'M0,0 C0.08,0 0.12,1.2 0.18,1.0 0.3,0.5 0.6,0.15 1,0'

  button.addEventListener('click', () => {
    if (isSphere) {
      layoutRing('horizontal')
      gsap.to(circBall, {
        x: 26,
        // opacity: 1,
        duration: 0.4,
        ease: spike,
      })
      randomChar(toggleText, 0.5, 18, '·RING·\u00A0\u00A0\u00A0')
      isRing = true
      isSphere = false
    } else {
      layoutSphere()
      gsap.to(circBall, {
        x: 4,
        duration: 0.4,
        // opacity: 0.4,
        ease: spike,
      })
      randomChar(toggleText, 0.5, 18, '·SPHERE·')
      isRing = false
      isSphere = true
    }
  })
  button.addEventListener('mouseover', () => {
    gsap.to(circBall, {
      scale: 0.9,
      duration: 0.4,
    })
  })
  button.addEventListener('mouseleave', () => {
    gsap.to(circBall, {
      scale: 1,
      duration: 0.4,
    })
  })

  // FROM OUTER SPACE
  window.addEventListener('changeState', (e) => {
    console.log(e.detail)
    if (e.detail.currentState === 0) {
      restoreSphere()
    }
  })

  window.addEventListener('updateGradients', (e) => {
    const { cycleTime, cycleSpeed, powerFactor, blueFactor } = e.detail
    gsap.to(UNIFORMS.u_cycleSpeed, {
      value: cycleSpeed,
      duration: 2.8,
      ease: 'power2.inOut',
    })
    gsap.to(UNIFORMS.u_cycleTime, {
      value: cycleTime,
      duration: 2.8,
      ease: 'power2.inOut',
    })
    gsap.to(UNIFORMS.u_powerFactor, {
      value: powerFactor,
      duration: 2.8,
      ease: 'power2.inOut',
    })
    gsap.to(UNIFORMS.u_blueFactor, {
      value: blueFactor,
      duration: 4,
      ease: 'power2.inOut',
    })
    console.log(
      'speed: ',
      cycleSpeed,
      'time: ',
      cycleTime,
      'power: ',
      powerFactor
    )
  })

  window.addEventListener('preloaderIsFinished', () => {
    if (isMobile()) {
      // layoutRing('vertical')
      layoutSphere()
    } else {
      layoutSphere()
    }
    preloaderIsFinished = true
    animationStarted = true
    animate()
  })

  // SCROLL (MOBILE)
  if (isMobile()) {
    const trigger = document.querySelector('.slide_1')
    gsap.to(sphereGroup.position, {
      z: 900,
      // scale: 2.8,
      // duration: 2,
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: trigger,
        start: 'top 1400',
        end: 'top top',
        scrub: true,
      },
      // onComplete: () => {
      //   gsap.set(sphereGroup, {
      //     visible: false,
      //   })
      // },
    })
    // gsap.to(clickRotation, {
    //   value: Math.PI / 8,
    //   duration: 1.8,
    //   ease: 'expo.inOut',
    // })
  }
  //#endregion
}

export default worldHome
