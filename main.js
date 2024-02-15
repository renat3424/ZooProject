import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import gsap from 'gsap';
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { giraffe, girrafeAnimate } from './giraffe';
import { hipo, hipoAnimate } from './hipo';
import { girl, girlAnimate } from './girl';
import { tree, makeFence, flashlight } from './staticobjects';
import * as dat from "dat.gui";
import asphaltMat from '../ZooProject/images/asphalt.jpg'
import grassMat from '../ZooProject/images/grass.jpg'
import Power2 from 'gsap'
import { Tween } from 'gsap/gsap-core';

const textureLoader= new THREE.TextureLoader()

const loader=new RGBELoader()

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const fontLoader=new FontLoader();


fontLoader.load("src/fonts/LoveDays_Regular.json", function (font) {
	
	const geometry =new TextGeometry('ZOO', {
		font: font,
		size: 30,
		height: 15,
		
	});

	const materials = [
		new THREE.MeshPhongMaterial({ color: 0xff6600 }),
		new THREE.MeshPhongMaterial({ color: 0x0000ff }) 
	];
	const textMesh1 = new THREE.Mesh(geometry, materials);
	textMesh1.position.y+=10
	textMesh1.position.x+=100
	textMesh1.position.z-=50

	textMesh1.rotateY(Math.PI/2)
	scene.add(textMesh1)
	
});

loader.load("src/delta_2_4k.hdr", function(texture){

		texture.mapping=THREE.EquirectangularReflectionMapping
		scene.background=texture

})
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xffffff );
renderer.shadowMap.enabled=true
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls( camera, renderer.domElement );



camera.position.z = 300;
controls.update();
window.addEventListener( 'resize', onWindowResize, false );
var elem = document.documentElement;
var fullOpen=false
function openFullscreen() {
	if (elem.requestFullscreen) {
	  elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) { /* Safari */
	  elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE11 */
	  elem.msRequestFullscreen();
	}
  }
function closeFullscreen() {
	if (document.exitFullscreen) {
	  document.exitFullscreen();
	} else if (document.webkitExitFullscreen) { /* Safari */
	  document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { /* IE11 */
	  document.msExitFullscreen();
	}
  }
document.addEventListener('dblclick', event => {

	if(!fullOpen){
		openFullscreen()
		fullOpen=true
	}else{
		closeFullscreen()
		fullOpen=false
	}

  }, false)




function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

const plane1 = new THREE.Mesh( new THREE.PlaneGeometry( 150, 200 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(grassMat), side: THREE.DoubleSide} ) );
const plane2 = new THREE.Mesh( new THREE.PlaneGeometry( 40, 200 ), new THREE.MeshStandardMaterial( {map: textureLoader.load(asphaltMat), side: THREE.DoubleSide} ) );
plane1.rotateX(Math.PI/2)
plane1.receiveShadow=true
plane2.rotateX(Math.PI/2)
plane2.position.x=95
plane2.receiveShadow=true
const land=new THREE.Group()
land.add( plane1 );
land.add( plane2);

scene.add(land)

let flashlight1=flashlight.clone()

flashlight1.position.x=80
flashlight1.position.z=40
flashlight1.position.y=15


flashlight.position.x=80
flashlight.position.z=-40
flashlight.position.y=15



scene.add(makeFence(30, 75, 10, -100))
scene.add(flashlight)
scene.add(flashlight1)

girl.position.x=90
girl.position.z=10
girl.position.y=10


girl.rotateY(Math.PI/2)
scene.add(girl)


hipo.position.x=50
hipo.position.z=-70
hipo.position.y=11
hipo.rotateY(-Math.PI/2)


scene.add(hipo)
const giraffe1=giraffe.clone()

giraffe.position.x=10
giraffe.position.z=70
giraffe.position.y=23
giraffe.rotateY(Math.PI/2)


scene.add(giraffe)



giraffe1.position.x=-40
giraffe1.position.z=70
giraffe1.position.y=23
giraffe1.rotateY(5*Math.PI/4)


scene.add(giraffe1)


const tree1=tree.clone()
const tree2=tree.clone()
const tree3=tree.clone()
const tree4=tree.clone()
tree.position.x=-65
tree.position.z=90
tree.position.y=35

tree1.scale.x=2
tree1.scale.z=2
tree1.position.x=-65
tree1.position.z=-90
tree1.position.y=35
scene.add(tree)

scene.add(tree1)

tree2.scale.x=3
tree2.scale.z=3
tree2.scale.y=3
tree2.position.x=-65
tree2.position.z=0
tree2.position.y=105


tree3.scale.x=0.5
tree3.scale.z=0.5
tree3.scale.y=0.5
tree3.position.x=65
tree3.position.z=-90
tree3.position.y=17.5


tree4.scale.x=0.8
tree4.scale.z=0.8
tree4.scale.y=0.8
tree4.position.x=65
tree4.position.z=90
tree4.position.y=27
scene.add(tree1)
scene.add(tree2)
scene.add(tree3)
scene.add(tree4)


const directionLight=new THREE.DirectionalLight(0xFFFFFF, 1)
scene.add(directionLight)
directionLight.position.set(0, 700, 0)

//const dLightHelper=new THREE.DirectionalLightHelper(directionLight, 15, 0xFFFFFF)
//scene.add(dLightHelper)
directionLight.shadow.camera.scale.x=50
directionLight.shadow.camera.scale.y=50
directionLight.shadow.camera.scale.z=50
directionLight.castShadow=true
//const dLightShadowHelper=new THREE.CameraHelper(directionLight.shadow.camera)
//scene.add(dLightShadowHelper)







const pointLight1=new THREE.PointLight(0xffffff, 1500, 100, 2)
scene.add(pointLight1)
pointLight1.position.set(80, 25, 40)
pointLight1.castShadow=true
//const LightHelper1=new THREE.PointLightHelper(pointLight1, 10, 0xFFFFFF)
//scene.add(LightHelper1)

const pointLight2=new THREE.PointLight(0xffffff, 1500, 100, 2)
scene.add(pointLight2)
pointLight2.position.set(80, 25, -40)
pointLight2.castShadow=true
//const LightHelper2=new THREE.PointLightHelper(pointLight2, 10, 0xFFFFFF)
//scene.add(LightHelper2)

let value1=1
let value2=1



const tl = gsap.timeline({repeat:-1});
tl.to(giraffe.position, {z: -70, duration: 15}).to(giraffe.rotation, {y: -Math.PI/2, duration: 0.5}).to(giraffe.position, {z: 70, duration: 15}).to(giraffe.rotation, {y: Math.PI/2, duration: 0.5})
const tl1 = gsap.timeline({repeat:-1});
tl1.to(hipo.position, {z: 70, duration: 20}).to(hipo.rotation, {y: Math.PI/2, duration: 0.5}).to(hipo.position, {z: -70, duration: 20}).to(hipo.rotation, {y: -Math.PI/2, duration: 0.5})


const gui = new dat.GUI()
const options={
	intensity: 1,
	intensityPoint1: 1500,
	intensityPoint2: 1500,
	speedGiraffe: 1,
	speedHipo: 1
}

gui.add(options, "intensity", 0, 3).onChange(function(e){

		directionLight.intensity=e;
		
});

gui.add(options, "intensityPoint1", 0, 3000).onChange(function(e){

	pointLight1.intensity=e;
	
});
gui.add(options, "intensityPoint2", 0, 3000).onChange(function(e){

	pointLight2.intensity=e;
	
});

gui.add(options, "speedGiraffe", 0, 3).onChange(function(e){
	
	value1=e;
	tl.timeScale(value1)
	
});

gui.add(options, "speedHipo", 0, 3).onChange(function(e){

	value2=e;
	tl1.timeScale(value2)
		
});

var tween=gsap.timeline().to(girl.position, {
	y: 15,
	duration: 0.4, 
	ease: Power2.easeOut
  }).to(girl.position, {
	y: 10,
	duration: 0.2, ease: Power2.easeIn
  })
document.addEventListener('keyup', (e) => {
	if (e.code === "Space")        {
		
		if(!tween.isActive()){
		tween.restart()}
		
	
	}else if(e.code === "KeyA"){
		
		if(pointLight1.intensity>0){
			
			pointLight1.intensity=0
			
			
		}else{

			pointLight1.intensity=1500
			
		}


	}else if(e.code === "KeyS"){
		if(pointLight2.intensity>0){
			
			pointLight2.intensity=0
			
			
		}else{

			pointLight2.intensity=1500
			
		}


	}
	
  
	
  });
function animate() {

	requestAnimationFrame( animate );
	
	girrafeAnimate(value1)
	hipoAnimate(value2)
	girlAnimate()
	controls.update();

	renderer.render( scene, camera );

}
animate()