import * as THREE from "three";
import {OrbitControls} from "./assets/scripts/three.modules.js";
import SplineLoader from "@splinetool/loader";

// camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 5, 100000);
camera.position.set(373.77, 27.36, -19.43);
camera.quaternion.setFromEuler(new THREE.Euler(0, 1.57, 0));

// scene
const scene = new THREE.Scene();

// spline scene
const loader = new SplineLoader();
loader.load("https://prod.spline.design/4-UzVbzMpUZ7aLxY/scene.splinecode", (splineScene) => {
	scene.add(splineScene);
});

// renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// scene settings
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

scene.background = new THREE.Color("#e4ebf5");
renderer.setClearAlpha(1);

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.125;

window.addEventListener("resize", onWindowResize);
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate(time) {
	controls.update();
	renderer.render(scene, camera);
}
