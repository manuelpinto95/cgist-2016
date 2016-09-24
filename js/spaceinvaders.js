var camera, scene, renderer;

function createScene() {
	scene = new THREE.Scene();
}

function renderer() {
	renderer.render(scene,camera);
}

function init() {
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innderWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	createScene();
	render();
}
