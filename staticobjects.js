import * as THREE from 'three';
import woodMat from '../ZooProject/images/wood.jpg'
import leavesMat from '../ZooProject/images/leaves.jpg'
import treeMat from '../ZooProject/images/tree.jpg'
const textureLoader= new THREE.TextureLoader()
let bar=new THREE.Group()
let fence1=new THREE.Mesh( new THREE.CylinderGeometry( 1.5,1.5,20 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(woodMat)})); 
let fence2=new THREE.Mesh( new THREE.CylinderGeometry( 1,1,7 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(woodMat)} ));
fence2.rotateX(Math.PI/2)
let fence3=fence2.clone()
fence2.position.y=7
fence3.position.y=-7

fence1.castShadow=true
fence2.castShadow=true
fence3.castShadow=true

bar.add(fence1)
bar.add(fence2)
bar.add(fence3)
export function makeFence(numPickets, x, y, z) {
    
    bar.position.x=x
    bar.position.y=y

    bar.position.z=z
    let fence = new THREE.Group();
 
    
    let picket=bar.clone();
    fence.add(picket);
    let i;
    for( i = 0; i < numPickets-1; ++i ) {
        
        picket = picket.clone();
        picket.position.z+=7;  
        fence.add(picket);
    }
    
    return fence;
}


const trunk = new THREE.Mesh( new THREE.CylinderGeometry( 3,3,70 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(treeMat)} )); 


const bush = new THREE.Mesh( new THREE.SphereGeometry( 20 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(leavesMat)} ));

export const tree=new THREE.Group()
const clock=new THREE.Clock()


tree.add( trunk );
tree.add( bush );
trunk.castShadow=true
bush.castShadow=true


bush.position.y=35

const cyl = new THREE.Mesh( new THREE.CylinderGeometry( 1,1,30 ), new THREE.MeshStandardMaterial( {color: 0x000000} )); 


const lamp = new THREE.Mesh( new THREE.SphereGeometry( 5 ), new THREE.MeshBasicMaterial( {color: 0xFFDF24} ));



export const flashlight=new THREE.Group();
flashlight.add(cyl)
flashlight.add(lamp)
lamp.position.y=10

