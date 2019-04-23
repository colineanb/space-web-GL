import * as THREE from 'three'
// //sun
import sun from '../images/textures/sun/sun.jpg'
import sunNormalSource from '../images/textures/sun/sun-normal.jpg'
//mercury
import mercury from '../images/textures/mercury/mercury.png'
import mercuryNormalSource from '../images/textures/mercury/normal-mercury.jpg'
import mercuryRoughnessSource from '../images/textures/mercury/roughness-mercury.png'
//venus
import venus from '../images/textures/venus/venus.jpg'
import venusNormalSource from '../images/textures/venus/normal-venus.jpg'
import venusRoughnessSource from '../images/textures/venus/roughness-venus.jpg'
//earth
import globe from '../images/textures/globe/diffuse.jpg'
import globeNormalSource from '../images/textures/globe/normal.jpg'
import globeRoughnessSource from '../images/textures/globe/roughness.jpg'
import cloudsAlphaSource from '../images/textures/clouds/alpha.jpg'
// //mars
import mars from '../images/textures/mars/marss.jpg'
import marsRoughnessSource from '../images/textures/mars/roughness-mars.jpg'

export default class Space
{
    constructor(_options)
    {
        this.textureLoader = _options.textureLoader

        this.container = new THREE.Object3D()

        this.setSun() 
        this.setMercury()
        this.setVenus()
        this.setGlobe()
        this.setClouds()
        this.setMars()
        this.setAnimation()
    }

    setSun()
    {
        this.sun = {}
        this.sun.geometry = new THREE.SphereBufferGeometry(2, 45, 45)
        this.sun.material = new THREE.MeshStandardMaterial({
            map: this.textureLoader.load(sun),
            normalMap: this.textureLoader.load(sunNormalSource)
        })
        this.sun.mesh = new THREE.Mesh(this.sun.geometry, this.sun.material)
        this.sun.mesh.position.x = 0
        this.container.add(this.sun.mesh)
    }

    setMercury()
    {
        this.mercury = {}
        this.mercury.geometry = new THREE.SphereBufferGeometry(0.3, 45, 45)
        this.mercury.material = new THREE.MeshStandardMaterial({
            map: this.textureLoader.load(mercury),
            normalMap: this.textureLoader.load(mercuryNormalSource),
            roughness: this.textureLoader.load(mercuryRoughnessSource)
        })
        this.mercury.mesh = new THREE.Mesh(this.mercury.geometry, this.mercury.material)
        this.mercury.mesh.position.x = 2
        this.mercury.receiveShadow = true
        this.container.add(this.mercury.mesh)
    }

    setVenus()
    {
        this.venus = {}
        this.venus.geometry = new THREE.SphereBufferGeometry(0.5, 45, 45)
        this.venus.material = new THREE.MeshStandardMaterial({
            map: this.textureLoader.load(venus),
            normalMap: this.textureLoader.load(venusNormalSource),
            roughness: this.textureLoader.load(venusRoughnessSource)
        })
        this.venus.mesh = new THREE.Mesh(this.venus.geometry, this.venus.material)
        this.venus.mesh.position.x = 5
        this.venus.receiveShadow = true
        this.container.add(this.venus.mesh)
    }

    setGlobe()
    {
        this.globe = {}
        this.globe.geometry = new THREE.SphereBufferGeometry(0.6, 45, 45)
        this.globe.material = new THREE.MeshStandardMaterial({
            map: this.textureLoader.load(globe),
            normalMap: this.textureLoader.load(globeNormalSource),
            roughnessMap: this.textureLoader.load(globeRoughnessSource),
            metalnessMap: this.textureLoader.load(globeRoughnessSource)
        })
        this.globe.mesh = new THREE.Mesh(this.globe.geometry, this.globe.material)
        this.globe.mesh.position.x = 8
        this.globe.receiveShadow = true
        this.container.add(this.globe.mesh)
    }
       setClouds()
    {
        this.clouds = {}
        this.clouds.geometry = new THREE.SphereBufferGeometry(0.6, 45, 45)
        this.clouds.material = new THREE.MeshStandardMaterial({
            alphaMap: this.textureLoader.load(cloudsAlphaSource),
            transparent: true
        })
        this.clouds.mesh = new THREE.Mesh(this.clouds.geometry, this.clouds.material)
        this.clouds.mesh.position.x = 8
        this.clouds.receiveShadow = true
        this.container.add(this.clouds.mesh)
    }

        setMars()
    {
        this.mars = {}
        this.mars.geometry = new THREE.SphereBufferGeometry(0.3, 45, 45)
        this.mars.material = new THREE.MeshStandardMaterial({
            map: this.textureLoader.load(mars),
            roughnessMap: this.textureLoader.load(marsRoughnessSource)
        })
        this.mars.mesh = new THREE.Mesh(this.mars.geometry, this.mars.material)
        this.mars.mesh.position.x = 10
        this.mars.receiveShadow = true
        this.container.add(this.mars.mesh)
    }
  

    setAnimation(){
        const loop = () => 
        { 
            const time2 = Date.now() * 0.0009
            const time = Date.now() * 0.0005
            const time3 = Date.now() * 0.0003
            const time4 = Date.now() * 0.0001
            window.requestAnimationFrame(loop)
            this.mercury.mesh.position.x = Math.sin(time2 + 0.5) * 3
            this.mercury.mesh.position.z =Math.cos(time2 + 0.5) * 3
            this.venus.mesh.position.x =Math.sin(time + 0.5) * 5
            this.venus.mesh.position.z =Math.cos(time + 0.5) * 5
            this.globe.mesh.position.x =Math.sin(time3 + 0.5) * 8
            this.globe.mesh.position.z =Math.cos(time3 + 0.5) * 8
            this.clouds.mesh.position.x =Math.sin(time3 + 0.5) * 8
            this.clouds.mesh.position.z =Math.cos(time3 + 0.5) * 8
            this.mars.mesh.position.x =Math.sin(time4 + 0.5) * 10
            this.mars.mesh.position.z =Math.cos(time4 + 0.5) * 10         
        }
    loop()
    }   
}