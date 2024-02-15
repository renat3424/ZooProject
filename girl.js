import * as THREE from 'three';
import dressMat from '../ZooProject/images/dress.jpg'
const textureLoader= new THREE.TextureLoader()
const body = new THREE.Mesh( new THREE.CylinderGeometry( 3,5,13 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(dressMat)} )); 
const leg1 = new THREE.Mesh( new THREE.CylinderGeometry( 1,0.6,5 ), new THREE.MeshStandardMaterial( {color: 0xD7BF7E} )); 
const leg2 = new THREE.Mesh( new THREE.CylinderGeometry( 1,0.6,5 ), new THREE.MeshStandardMaterial( {color: 0xD7BF7E} ));
const leg3 = new THREE.Mesh( new THREE.CylinderGeometry( 1,0.4,7 ), new THREE.MeshStandardMaterial( {color: 0xD7BF7E} ));
const leg4 = new THREE.Mesh( new THREE.CylinderGeometry( 1,0.4,7 ), new THREE.MeshStandardMaterial( {color: 0xD7BF7E} ));

const face = new THREE.Mesh( new THREE.SphereGeometry( 5 ), new THREE.MeshStandardMaterial( {color: 0xD7BF7E} ));
body.castShadow=true
face.castShadow=true
leg1.castShadow=true
leg2.castShadow=true
leg3.castShadow=true
leg4.castShadow=true
leg3.geometry.translate(0,-2.5, 0)
leg4.geometry.translate(0,-2.5, 0)

export const girl=new THREE.Group()
const clock=new THREE.Clock()
girl.add( body );
girl.add( leg1 );
girl.add( leg2 );
girl.add( leg3 );
girl.add( leg4 );
girl.add( face );

face.position.y=22
face.position.x=17



leg1.position.x=3
leg1.position.y=-8
leg1.position.z=0


leg2.position.x=-3
leg2.position.y=-8
leg2.position.z=0


leg3.rotateZ(Math.PI/2)
leg3.position.x=3
leg3.position.y=4.5
leg3.position.z=0


leg4.rotateZ(-Math.PI/2)
leg4.position.x=-3
leg4.position.y=4.5
leg4.position.z=0

face.position.x=0
face.position.y=10

export const girlAnimate=() => {

            const t =clock.getElapsedTime()
            
            leg3.rotation.z=Math.PI/2-0.3*Math.sin(5*t)
            leg4.rotation.z=-Math.PI/2-0.3*Math.sin(5*t)
            

}