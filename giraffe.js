import * as THREE from 'three';
import giraffeSkin from '../ZooProject/images/giraffe.jpg'
const textureLoader= new THREE.TextureLoader()
const body = new THREE.Mesh( new THREE.CylinderGeometry( 5,5,20 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(giraffeSkin)} )); 
const leg1 = new THREE.Mesh( new THREE.CylinderGeometry( 1,1,25 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(giraffeSkin)} )); 
const leg2 = new THREE.Mesh( new THREE.CylinderGeometry( 1,1,25 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(giraffeSkin)} ));
const leg3 = new THREE.Mesh( new THREE.CylinderGeometry( 1,1,25 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(giraffeSkin)} ));
const leg4 = new THREE.Mesh( new THREE.CylinderGeometry( 1,1,25 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(giraffeSkin)} ));
const neck = new THREE.Mesh( new THREE.CylinderGeometry( 2,3,30 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(giraffeSkin)} ));
const face = new THREE.Mesh( new THREE.CylinderGeometry( 3,2,10 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(giraffeSkin)} ));

body.castShadow=true
face.castShadow=true
leg1.castShadow=true
leg2.castShadow=true
leg3.castShadow=true
leg4.castShadow=true
neck.castShadow=true
leg1.geometry.translate(0,-12.5, 0)
leg2.geometry.translate(0,-12.5, 0)
leg3.geometry.translate(0,-12.5, 0)
leg4.geometry.translate(0,-12.5, 0)
const head=new THREE.Group()
export const giraffe=new THREE.Group()
const clock=new THREE.Clock()
giraffe.add( body );
giraffe.add( leg1 );
giraffe.add( leg2 );
giraffe.add( leg3 );
giraffe.add( leg4 );

neck.position.y=33
face.position.y=48
face.position.x=3
head.add(neck)
head.add(face)

giraffe.add(head)

face.rotateZ(Math.PI/2)

head.position.y=-18
head.position.x=7

leg1.position.x=8
leg1.position.y=0
leg1.position.z=5


leg2.position.x=-8
leg2.position.y=0
leg2.position.z=5



leg3.position.x=8
leg3.position.y=0
leg3.position.z=-5



leg4.position.x=-8
leg4.position.y=0
leg4.position.z=-5



body.rotateZ(Math.PI/2)


export const girrafeAnimate=(value) => {

            const t =clock.getElapsedTime()
            leg1.rotation.z=0.2*Math.sin(2*t*value)
            leg2.rotation.z=-0.2*Math.sin(2*t*value)
            leg3.rotation.z=-0.2*Math.sin(2*t*value)
            leg4.rotation.z=0.2*Math.sin(2*t*value)
            head.rotation.z=0.02*Math.sin(2*t*value)

}