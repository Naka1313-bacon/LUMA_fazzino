import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { LumaSplatsThree } from '@lumaai/luma-web';

const canvas = document.querySelector('canvas');
const renderer = new WebGLRenderer({ canvas, antialias: false });
renderer.setSize(window.innerWidth, window.innerHeight, false);

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const splat = new LumaSplatsThree({
  source: 'https://lumalabs.ai/capture/ca9ea966-ca24-4ec1-ab0f-af665cb546ff',
  particleRevealEnabled: true,
});
scene.add(splat);

renderer.setAnimationLoop(() => {
  controls.update();
  renderer.render(scene, camera);
});
