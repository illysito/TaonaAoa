import gsap from 'gsap'
import * as THREE from 'three'

// Data
import PROJECTS, { ALPHA_MAP } from '../data/textures'
// Shaders
import frag from './shaders/gradient_fragShader'
import vert from './shaders/gradient_vertexShader'

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

  // -------------------------------------------------------------- Background Plane --------------------------------------------------------------
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

  const count = 54
  const radius = 250
  const planeSize = 54

  // Keep a list of my planes to then raycast them and do stuff
  const spherePlanes = []
  // Scatter planes in a sphere layout
  for (let i = 0; i < count; i++) {
    const currentTexture = PROJECTS[i].texture // to avoid first one which is alpha map
    const geometry = new THREE.PlaneGeometry(planeSize, planeSize)
    const material = new THREE.MeshBasicMaterial({
      // color: new THREE.Color().setHSL(i / count - 0.1, 1, 0.5),
      // color: new THREE.Color('#0e0e0e'),
      alphaMap: alphaMapTexture,
      map: currentTexture,
      side: THREE.DoubleSide,
      transparent: true,
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
    plane.userData.name = PROJECTS[i].id
    plane.userData.basePosition = plane.position.clone()
    plane.userData.heightFactor = 1 + plane.position.y / radius // 0 to 2

    sphereGroup.add(plane)
    spherePlanes.push(plane)
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

  // -------------------------------------------------------------- Loop --------------------------------------------------------------

  // normal counter
  let planeCounter = 0
  let sphereCounter = 0

  // dragging variables
  let isDragging = false
  let previousX = 0
  let dragRotation = 0
  let dragVelocity = 0

  // click variables
  let isMotionStopped = false

  // Quaternion handling to make each plane look always to the FRONT
  const cameraQuat = new THREE.Quaternion()
  const parentQuat = new THREE.Quaternion()
  const inverseParentQuat = new THREE.Quaternion()

  function animate() {
    planeCounter = (planeCounter + 0.001) % 5000 // safeguard to not let counter evolve endlessly
    planeMaterial.uniforms.u_time.value = planeCounter

    // Quaternion handling to make each plane look always to the FRONT
    camera.getWorldQuaternion(cameraQuat)
    sphereGroup.getWorldQuaternion(parentQuat)
    inverseParentQuat.copy(parentQuat).invert()

    if (!isMotionStopped) {
      // Planes inside the sphere animations
      sphereCounter = (sphereCounter + 0.001) % 5000

      sphereGroup.children.forEach((plane) => {
        // Calculations to make each "layer" of the sphere revolve differently
        const base = plane.userData.basePosition
        const y = base.y + 0.4 * Math.sin(sphereCounter)

        const heightFactor = plane.userData.heightFactor

        // different speed depending on height
        const speed = 0.0015 + heightFactor * 0.0008

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

      // Whole sphere animation
      sphereGroup.rotation.y = 1.2 * sphereCounter + 0.6 * dragRotation
      sphereGroup.rotation.x = -0.2 * Math.sin(sphereCounter)
      dragRotation += dragVelocity
      dragVelocity *= 0.95
    }

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

  //-------------------------------------------------------------- Drag & Raycast Events --------------------------------------------------------------

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
    previousX = event.clientX

    dragVelocity += movementX * 0.00025
  })

  window.addEventListener('pointerup', () => {
    isDragging = false
  })

  window.addEventListener('pointerleave', () => {
    isDragging = false
  })

  // Raycaster

  // OPACITY
  function lowerPlanesOpacity() {
    spherePlanes.forEach((plane) => {
      if (plane !== currentPlaneMesh) {
        gsap.to(plane.material, {
          opacity: 0,
          duration: 1.2,
          ease: 'power3.inOut',
          onComplete: () => (isMotionStopped = true),
        })
      }
    })
  }

  function restorePlanesOpacity() {
    spherePlanes.forEach((plane) => {
      if (plane !== currentPlaneMesh) {
        gsap.to(plane.material, {
          opacity: 1,
          duration: 1.2,
          ease: 'power3.inOut',
        })
      }
    })
  }

  // MOTION
  // function stopCircularMotion() {
  //   isMotionStopped = true
  //   // gsap.to(isMotionStopped, {
  //   //   value: 0,
  //   //   duration: 1.2,
  //   //   ease: 'expo.inOut',
  //   // })
  // }

  function restoreCircularMotion() {
    isMotionStopped = false
    // gsap.to(isMotionStopped, {
    //   value: 1,
    //   duration: 1.2,
    //   ease: 'expo.inOut',
    // })
  }

  // PLANE SELECTION
  function putPlaneIntoView(plane) {
    plane.userData.originalParent = plane.parent

    plane.userData.originalPosition = plane.position.clone()
    plane.userData.originalScale = plane.scale.clone()

    scene.attach(plane)

    // plane.renderOrder = 100

    // plane.material.depthTest = false
    // plane.material.depthWrite = false

    gsap.to(plane.position, {
      delay: 0.1,
      x: 0,
      y: 0,
      z: 200,
      duration: 1.2,
      ease: 'expo.inOut',
    })

    gsap.to(plane.scale, {
      delay: 0.1,
      x: 6,
      y: 6,
      z: 6,
      duration: 1.2,
      ease: 'expo.inOut',
      onComplete: () => {
        gsap.set(plane, {
          renderOrder: 100,
        })
        gsap.set(plane.material, {
          depthTest: false,
          depthWrite: false,
        })
      },
    })
  }

  // function putPlaneBackIntoSphere() {}

  window.addEventListener('click', () => {
    if (currentPlaneMesh) {
      // meaning if a plane is HOVERED when user clicks
      lowerPlanesOpacity()
      // stopCircularMotion()
      putPlaneIntoView(currentPlaneMesh)
    } else {
      restorePlanesOpacity()
      restoreCircularMotion()
      // putPlaneBackIntoSphere()
    }
  })
}

export default worldHome
