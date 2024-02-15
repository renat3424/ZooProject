import * as THREE from 'three';
import hipoSkin from '../ZooProject/images/hippo.jpg'
const textureLoader= new THREE.TextureLoader()
const body = new THREE.Mesh( new THREE.BoxGeometry( 15,40,20 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(hipoSkin)} )); 
const leg1 = new THREE.Mesh( new THREE.CylinderGeometry( 4,4,5 ), new THREE.MeshStandardMaterial( {color: 0xBBB9B9} )); 
const leg2 = new THREE.Mesh( new THREE.CylinderGeometry( 4,4,5 ), new THREE.MeshStandardMaterial( {color: 0xBBB9B9} ));
const leg3 = new THREE.Mesh( new THREE.CylinderGeometry( 4,4,5 ), new THREE.MeshStandardMaterial( {color: 0xBBB9B9} ));
const leg4 = new THREE.Mesh( new THREE.CylinderGeometry( 4,4,5 ), new THREE.MeshStandardMaterial( {color: 0xBBB9B9} ));
const neck = new THREE.Mesh( new THREE.CylinderGeometry( 2,3,2 ), new THREE.MeshStandardMaterial( {color: 0xBBB9B9} ));
const face = new THREE.Mesh( new THREE.CylinderGeometry( 10,7,20 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(hipoSkin)} ));

body.castShadow=true
face.castShadow=true
leg1.castShadow=true
leg2.castShadow=true
leg3.castShadow=true
leg4.castShadow=true
neck.castShadow=true
leg1.geometry.translate(0,-2.5, 0)
leg2.geometry.translate(0,-2.5, 0)
leg3.geometry.translate(0,-2.5, 0)
leg4.geometry.translate(0,-2.5, 0)
const head=new THREE.Group()
export const hipo=new THREE.Group()
const clock=new THREE.Clock()
hipo.add( body );
hipo.add( leg1 );
hipo.add( leg2 );
hipo.add( leg3 );
hipo.add( leg4 );

neck.position.y=17
face.position.y=22
face.position.x=17
head.add(neck)
head.add(face)

hipo.add(head)

face.rotateZ(Math.PI/2)

head.position.y=-18
head.position.x=7

leg1.position.x=15
leg1.position.y=-7
leg1.position.z=7


leg2.position.x=-15
leg2.position.y=-7
leg2.position.z=7



leg3.position.x=15
leg3.position.y=-7
leg3.position.z=-7



leg4.position.x=-15
leg4.position.y=-7
leg4.position.z=-7



body.rotateZ(Math.PI/2)


export const hipoAnimate=(value) => {

            const t =clock.getElapsedTime()
            leg1.rotation.z=0.2*Math.sin(2*t*value)
            leg2.rotation.z=-0.2*Math.sin(2*t*value)
            leg3.rotation.z=-0.2*Math.sin(2*t*value)
            leg4.rotation.z=0.2*Math.sin(2*t*value)
            head.rotation.z=0.02*Math.sin(2*t*value)

}