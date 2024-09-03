<template>
    <div class="model-container" ref="modelContainer"></div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
  
  export default defineComponent({
    name: 'ThreeDModel',
    setup() {
      const modelContainer = ref<HTMLDivElement | null>(null);
      let gltf: GLTF | null = null;
  
      onMounted(() => {
        const container = modelContainer.value;
        if (!container) return;
  
        // Scene
        const scene = new THREE.Scene();
  
        // Camera
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(0, 1, 5);
  
        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
  
        // OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = false;
        controls.enablePan = false; // Disable panning
        controls.maxPolarAngle = Math.PI / 2; // Lock the vertical rotation
  
        // Light
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1).normalize();
        scene.add(light);
  
        // Load Model
        const loader = new GLTFLoader();
        loader.load(
          new URL('@/public/stylized_planet.glb', import.meta.url).href,
          (loadedGltf) => {
            gltf = loadedGltf;
            gltf.scene.scale.set(3, 3, 3);
            scene.add(gltf.scene);
            console.log('Model loaded successfully');
            animate();
          },
          undefined,
          (error) => {
            console.error('An error happened', error);
          }
        );
  
        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          if (gltf && gltf.scene) {
            gltf.scene.rotation.y += 0.001;
          }
          controls.update();
          renderer.render(scene, camera);
        };
  
        animate();
      });
  
      return {
        modelContainer
      };
    }
  });
  </script>
  
  <style scoped>
  .model-container {
    width: 100%;
    height: 70vh;
    background-color: transparent; /* Torna o fundo transparente */
  }
  </style>