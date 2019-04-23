import * as THREE from 'three'

//jupiter
import jupiter from '../images/textures/jupiter/jupiter.jpg'
//saturn
import saturn from '../images/textures/saturn/saturn.jpg'
import rings from '../images/textures/saturn/rings.png'
//uranus
import uranus from '../images/textures/uranus/uranus.jpg'
//neptune
import neptune from '../images/textures/neptune/neptune.jpg'

export default class Space
{
    constructor(_options)
    {
        this.textureLoader = _options.textureLoader

        this.container = new THREE.Object3D()

        this.setJupiter()
        this.setSaturn()
        this.setRings()
        this.setUranus()
        this.setNeptune()
        this.setAnimation()
    }

    setJupiter()
    {
        this.jupiter = {}
        this.jupiter.geometry = new THREE.SphereBufferGeometry(1.2, 45, 45)
        this.jupiter.material = new THREE.MeshStandardMaterial({
            map: this.textureLoader.load(jupiter),
        })
        this.jupiter.mesh = new THREE.Mesh(this.jupiter.geometry, this.jupiter.material)
        this.jupiter.mesh.position.x = 13
        this.jupiter.receiveShadow = true
        this.container.add(this.jupiter.mesh)
    }

    setSaturn()
    {
        this.saturn = {}
        this.saturn.geometry = new THREE.SphereBufferGeometry(1.2, 45, 45)
        this.saturn.material = new THREE.MeshStandardMaterial({
            map: this.textureLoader.load(saturn),
        })
        this.saturn.mesh = new THREE.Mesh(this.saturn.geometry, this.saturn.material)
        this.saturn.mesh.position.x = 18
        this.saturn.receiveShadow = true
        this.container.add(this.saturn.mesh)
    }

    setRings()
    {
        this.rings = {}
        this.rings.geometry = new THREE.TorusGeometry(1, 1, 2, 100)
        this.rings.material = new THREE.MeshStandardMaterial({
            map: this.textureLoader.load(rings)})
        this.rings.mesh = new THREE.Mesh(this.rings.geometry, this.rings.material)
        this.rings.mesh.position.x = 18
        this.rings.mesh.rotation.x = 30
        this.rings.receiveShadow = true
        this.container.add(this.rings.mesh)
    }

    setUranus()
    {
        this.uranus = {}
        this.uranus.geometry = new THREE.SphereBufferGeometry(0.7, 45, 45)
        this.uranus.material = new THREE.MeshStandardMaterial({
            map: this.textureLoader.load(uranus)})
        this.uranus.mesh = new THREE.Mesh(this.uranus.geometry, this.uranus.material)
        this.uranus.mesh.position.x = 21
        this.uranus.receiveShadow = true
        this.container.add(this.uranus.mesh)
    }
  
    setNeptune()
    {
        this.neptune = {}
        this.neptune.geometry = new THREE.SphereBufferGeometry(0.68, 45, 45)
        this.neptune.material = new THREE.MeshStandardMaterial({
            map: this.textureLoader.load(neptune)})
        this.neptune.mesh = new THREE.Mesh(this.neptune.geometry, this.neptune.material)
        this.neptune.mesh.position.x = 23
        this.neptune.receiveShadow = true
        this.container.add(this.neptune.mesh)
    }
  

    setAnimation(){
        const loop = () => 
        { 
            const time = Date.now() * 0.00003
            const time2 = Date.now() * 0.00009
            const time3 = Date.now() * 0.000007
            const time4 = Date.now() * 0.000009
            window.requestAnimationFrame(loop)
            this.jupiter.mesh.position.x =Math.sin(time2 + 0.5) * 13
            this.jupiter.mesh.position.z =Math.cos(time2 + 0.5) * 13
            this.saturn.mesh.position.x =Math.sin(time + 0.5) * 18
            this.saturn.mesh.position.z =Math.cos(time + 0.5) * 18
            this.rings.mesh.position.x =Math.sin(time + 0.5) * 18
            this.rings.mesh.position.z =Math.cos(time + 0.5) * 18
            this.uranus.mesh.position.x =Math.sin(time3 + 0.5) * 21
            this.uranus.mesh.position.z =Math.cos(time3 + 0.5) * 21
            this.neptune.mesh.position.x =Math.sin(time4 + 0.5) * 23
            this.neptune.mesh.position.z =Math.cos(time4 + 0.5) * 23
        }
        loop()
    }
}