import './css/style.styl'
import './js/Info.js'
import * as THREE from 'three'
import Space from './js/Space'
import SpaceTwo from './js/SpaceTwo'
import Stars from './js/Stars'
import Circles from './js/Circles'
import AnimationStars from './js/Start'
import OrbitControls from './js/OrbitControls'

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0
// window.addEventListener('mousemove', (_event) =>
// {
//     cursor.x = _event.clientX / sizes.width - 0.5
//     cursor.y = _event.clientY / sizes.height - 0.5
// })

/**
 * Scene
 */
const scene = new THREE.Scene()
scene.background = new THREE.Color( 0x011326 )

const univers = new THREE.Object3D()
scene.remove(univers)


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(100, sizes.width / sizes.height)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 0
scene.add(camera)


//OrbitControls 
const controls = new THREE.OrbitControls( camera )
controls.minDistance = 1.5
controls.maxDistance = 35

camera.position.set( 0, 0, 900 )
controls.update()

controls.autoRotate = true
controls.autoRotateSpeed = 0.6

/**
 * Zoom on planet
 */
  const mercury = document.querySelector('.mercury')
  mercury.addEventListener('click', () =>{
    camera.position.z = 4
  })

  const venus = document.querySelector('.venus')
  venus.addEventListener('click', () =>{
    camera.position.z = 6
  })

  const earth = document.querySelector('.earth')
  earth.addEventListener('click', () =>{
    camera.position.z = 9
  })

  const mars = document.querySelector('.mars')
  mars.addEventListener('click', () =>{
    camera.position.z = 11
  })

  const jupiter = document.querySelector('.jupiter')
  jupiter.addEventListener('click', () =>{
    camera.position.z = 15
  })

  const saturn = document.querySelector('.saturn')
  saturn.addEventListener('click', () =>{
    camera.position.z = 21
  })

  const uranus = document.querySelector('.uranus')
  uranus.addEventListener('click', () =>{
    camera.position.z = 23
  })

  const neptune = document.querySelector('.neptune')
  neptune.addEventListener('click', () => {
    camera.position.z = 24
  })

const animate  = () => {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
}

/**
 * First page before the solar system
 */
const instruction = document.querySelector('h5')
const title = document.querySelector('h1')
const planet = document.querySelectorAll('h2')

window.addEventListener('keydown',(event)=>{
    
   if(event.keyCode == 32)
   {
    for (let i = 0; i <planet.length; i++)
    {
     planet[i].style.display="block"
    }
    scene.add(space.container)
    scene.add(space2.container)
    scene.add(stars.container)
    scene.add(circles.container)
    title.style.display = 'block'
    instruction.style.display = 'none'
    scene.remove(start.container)
   }
})

/**
 * Class
 */

//Class Start 
const start = new AnimationStars
(
    {
        textureLoader : textureLoader
    }
)
scene.add(start.container)


// class Space Mercury - Mars
const space = new Space
(
    {
        textureLoader : textureLoader
    }
)
univers.add(space.container)
// space.container.position.z = -30



// class Space Jupiter - Uranus
const space2 = new SpaceTwo
(
    {
        textureLoader : textureLoader
    }
)
univers.add(space2.container)

// class Stars
const stars = new Stars
(
    {
        textureLoader : textureLoader
    }
)
univers.add(stars.container)

// class Circles
const circles = new Circles
(
    {
        textureLoader : textureLoader
    }
)
univers.add(circles.container)



/**
 * Lights
 */

const light = new THREE.AmbientLight( 0xffffff, 2)
scene.add( light )

const pointLight = new THREE.PointLight( 0xf16821, 0.4, 100 ) 
pointLight.position.set( 0, 0, 0 )
scene.add( pointLight )


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)

/**
 * Loop
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Update camera
    // camera.position.x = cursor.x * 3
    // camera.position.y = - cursor.y * 3

    camera.lookAt(new THREE.Vector3())

    // Renderer
    renderer.render(scene, camera)
}
loop()


