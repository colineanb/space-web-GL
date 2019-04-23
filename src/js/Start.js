import * as THREE from 'three'

export default class AnimationStars
{
    constructor(_options)
    {
        this.textureLoader = _options.textureLoader

        this.container = new THREE.Object3D()

        this.setAnimationStars()
        this.setAnimation()
    }
    
    setAnimationStars()
    {
        this.stars = {}
        this.stars.geometry = new THREE.Geometry() 
        
        for ( let i = 0; i < 20000; i ++ ) {

            var star = new THREE.Vector3();
            star.x = THREE.Math.randFloatSpread( 2000 );
            star.y = THREE.Math.randFloatSpread( 2000 );
            star.z = THREE.Math.randFloatSpread( 15000 );
        
            this.stars.geometry.vertices.push( star );
        }
        this.stars.material =  new THREE.PointsMaterial( { color: 0x888888 } );
        this.stars.mesh = new THREE.Points( this.stars.geometry, this.stars.material );
        this.container.add(this.stars.mesh)
    }
    
    setAnimation()
    {
         const loop = () => 
        { 
            window.requestAnimationFrame(loop)
            this.stars.mesh.position.z += 7
        }
        loop()
    }
}
