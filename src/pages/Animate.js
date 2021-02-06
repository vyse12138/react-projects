import React from 'react'
import * as THREE from 'three';

function Animate() {
  React.useEffect(() => {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('x').appendChild(renderer.domElement);

    var lights = [];
    lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    function animate() {
      cube.rotateX(0.01);
      cube.rotateY(0.01);
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  })

  return (
    <div id='x'>

    </div>
  );
}

export default Animate
