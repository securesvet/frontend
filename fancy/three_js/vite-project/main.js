import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

// Creating camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

// Adding object
const geometry = new THREE.TorusGeometry(15, 5, 20, 100);

const material = new THREE.MeshStandardMaterial({color: 0x7f7fff});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// Light

const pointLight = new THREE.PointLight(0xffffff);

pointLight.position.set(5,5,5);

scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(ambientLight);


function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 1;

    renderer.render(scene, camera);
}

animate();