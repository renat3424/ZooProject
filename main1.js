import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );



const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xffffff );
renderer.shadowMap.enabled=true
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls( camera, renderer.domElement );



camera.position.z = 300;
controls.update();

const groundGeometry = new THREE.BoxGeometry(8, 0.5, 8);
const groundMaterial = new THREE.MeshPhongMaterial({ color: 0xfafafa });
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.receiveShadow = true;
groundMesh.position.y = -2;
scene.add(groundMesh);

const dl = new THREE.DirectionalLight(0xffffff, 0);

dl.position.set(0, 2, 2);


const dlHelper = new THREE.DirectionalLightHelper(dl, 3);
scene.add(dl);


const pl = new THREE.PointLight(0xffffff, 1, 8, 2);
pl.position.set(2, 2, 2);
const plHelper = new THREE.PointLightHelper(pl, 0.5);
scene.add(pl, plHelper);

function animate() {

	requestAnimationFrame( animate );
	
	
	controls.update();

	renderer.render( scene, camera );

}
animate()