import * as THREE from 'three'

export default class Circles
{
    constructor(_options)
    {
        this.textureLoader = _options.textureLoader

        this.container = new THREE.Object3D()

        this.setCircle1()
        this.setCircle2()
        this.setCircle3()
        this.setCircle4()
        this.setCircle5()
        this.setCircle6()
        this.setCircle7()
        this.setCircle8()
     
    }

    setCircle1()
    {
        this.circle = {}
        this.circle.geometry = new THREE.TorusGeometry(3, 0.01, 2, 100)
        this.circle.material = new THREE.MeshLambertMaterial({color: 0xffffff})
        this.circle.mesh = new THREE.Mesh(this.circle.geometry, this.circle.material)
        this.circle.mesh.rotation.x = 20.4
        this.container.add(this.circle.mesh)
    }

    setCircle2()
    {
        this.circle2 = {}
        this.circle2.geometry = new THREE.TorusGeometry(5, 0.01, 2, 100)
        this.circle2.material = new THREE.MeshLambertMaterial({color: 0xffffff})
        this.circle2.mesh = new THREE.Mesh(this.circle2.geometry, this.circle2.material)
        this.circle2.mesh.rotation.x = 20.4
        this.container.add(this.circle2.mesh)
    }

    setCircle3()
    {
        this.circle3 = {}
        this.circle3.geometry = new THREE.TorusGeometry(8,0.01, 2, 100)
        this.circle3.material = new THREE.MeshLambertMaterial({color: 0xffffff})
        this.circle3.mesh = new THREE.Mesh(this.circle3.geometry, this.circle3.material)
        this.circle3.mesh.rotation.x = 20.4
        this.container.add(this.circle3.mesh)
    }
    
    setCircle4()
    {
        this.circle4 = {}
        this.circle4.geometry = new THREE.TorusGeometry(10, 0.01, 2, 100)
        this.circle4.material = new THREE.MeshLambertMaterial({color: 0xffffff})
        this.circle4.mesh = new THREE.Mesh(this.circle4.geometry, this.circle4.material)
        this.circle4.mesh.rotation.x = 20.4
        this.container.add(this.circle4.mesh)
    }

    setCircle5()
    {
        this.circle5 = {}
        this.circle5.geometry = new THREE.TorusGeometry(13, 0.01, 2, 100)
        this.circle5.material = new THREE.MeshLambertMaterial({color: 0xffffff})
        this.circle5.mesh = new THREE.Mesh(this.circle5.geometry, this.circle5.material)
        this.circle5.mesh.rotation.x = 20.4
        this.container.add(this.circle5.mesh)
    }

    setCircle6()
    {
        this.circle6 = {}
        this.circle6.geometry = new THREE.TorusGeometry(18, 0.01, 2, 100)
        this.circle6.material = new THREE.MeshLambertMaterial({color: 0xffffff})
        this.circle6.mesh = new THREE.Mesh(this.circle6.geometry, this.circle6.material)
        this.circle6.mesh.rotation.x = 20.4
        this.container.add(this.circle6.mesh)
    }

    setCircle7()
    {
        this.circle7 = {}
        this.circle7.geometry = new THREE.TorusGeometry(21, 0.01, 2, 100)
        this.circle7.material = new THREE.MeshLambertMaterial({color: 0xffffff})
        this.circle7.mesh = new THREE.Mesh(this.circle7.geometry, this.circle7.material)
        this.circle7.mesh.rotation.x = 20.4
        this.container.add(this.circle7.mesh)
    }

    setCircle8()
    {
        this.circle8 = {}
        this.circle8.geometry = new THREE.TorusGeometry(23, 0.01, 2, 100)
        this.circle8.material = new THREE.MeshLambertMaterial({color: 0xffffff})
        this.circle8.mesh = new THREE.Mesh(this.circle8.geometry, this.circle8.material)
        this.circle8.mesh.rotation.x = 20.4
        this.container.add(this.circle8.mesh)
    }
    
}