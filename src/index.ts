//https://blog.csdn.net/ithanmang/article/details/81531822?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param

import * as THREE from "three";

//创建场景.
const scene = new THREE.Scene();
//相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
//渲染器
const renderer = new THREE.WebGLRenderer();
//设置画布大小
renderer.setSize(window.innerWidth, window.innerHeight);
//加入到body
document.body.appendChild(renderer.domElement);

//第二步,创建几何体.
const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: false,
  transparent: true
});
const cube = new THREE.Mesh(geometry, material);
//加入到场景
scene.add(cube);
cube.material.wireframe = true;

const geometry2 = new THREE.BoxGeometry(5, 5, 5);
const material2 = new THREE.MeshBasicMaterial({
  color: 0x00ff00
});
const cube2 = new THREE.Mesh(geometry2, material2);
//加入到场景
scene.add(cube2);

const cubeEdges = new THREE.EdgesGeometry(geometry2,1);
const edgesMtl = new THREE.LineBasicMaterial({color:0xff0000});
const cubeLine = new THREE.LineSegments(cubeEdges,edgesMtl);
cube2.add(cubeLine); 

//设置相机位置
camera.position.z = 40;

//创建一个线
// const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
// const points = [
//   new THREE.Vector3(-20, 0, 0),
//   new THREE.Vector3(0, 20, 0),
//   new THREE.Vector3(20, 0, 0),
// ];

// const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
// const line = new THREE.Line(lineGeometry, lineMaterial);
// scene.add(line);

//渲染循环
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  cube2.rotation.x -= 0.01;
  cube2.rotation.y -= 0.01;
  cube2.rotation.z -= 0.01;

  renderer.render(scene, camera);
}
animate();
