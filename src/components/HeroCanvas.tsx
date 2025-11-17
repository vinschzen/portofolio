import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { styles } from "../styles/layout";

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const mount = mountRef.current!;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(new THREE.Color(0x05070f));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      2000
    );
    camera.position.set(0, 1.2, 6);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);
    const point = new THREE.PointLight(0x88c4ff, 1.1);
    point.position.set(4, 4, 4);
    scene.add(point);

    // === Dynamic 3D Math Grid Surface ===
    const gridSize = 200;
    const geometry = new THREE.PlaneGeometry(10, 10, gridSize, gridSize);
    const posAttr = geometry.attributes.position as THREE.BufferAttribute;

    const material = new THREE.MeshStandardMaterial({
      wireframe: true,
      color: 0xffffff,
      emissive: 0x000000,
    });

    const gridMesh = new THREE.Mesh(geometry, material);
    gridMesh.rotation.x = -Math.PI / 2;
    scene.add(gridMesh);

    // === Floating 3D Rainbow Curve ===
    const curvePoints: THREE.Vector3[] = [];
    for (let i = 0; i < 200; i++) {
      const t = i * 0.03;
      curvePoints.push(
        new THREE.Vector3(
          Math.sin(t) * 1.5,
          Math.cos(t * 0.6) * 1.0 + 1.2,
          t * 0.15
        )
      );
    }

    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeom = new THREE.TubeGeometry(curve, 300, 0.05, 16, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.3,
      roughness: 0.2,
    });
    const tube = new THREE.Mesh(tubeGeom, tubeMat);
    scene.add(tube);

    // === Animation Setup ===
    let t = 0;
    const mouse = new THREE.Vector2(0, 0);

    function onMouseMove(e: MouseEvent) {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    }
    mount.addEventListener('mousemove', onMouseMove);

    function animate() {
      t += 0.02;

      // Update grid surface height using a ripple equation
      for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);
        const wave = Math.sin((x * 2 + t) * 1.2) * 0.15 + Math.cos((y * 3 - t) * 0.7) * 0.12;
        posAttr.setZ(i, wave);
      }
      posAttr.needsUpdate = true;

      // Rainbow color cycling
      const hue = (t * 12) % 360;
      gridMesh.material.color.setStyle(`hsl(${hue}, 80%, 65%)`);
      tube.material.color.setStyle(`hsl(${(hue + 120) % 360}, 80%, 60%)`);

      // Camera parallax
      camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.04;
      camera.position.y += (1 + mouse.y - camera.position.y) * 0.04;
      camera.lookAt(0, 0.3, 0);

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      mount.removeChild(renderer.domElement);
      mount.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
      geometry.dispose();
      tubeGeom.dispose();
    };
  }, []);

  return (
    <div style={styles.heroWrap}>
      <div ref={mountRef} style={styles.canvasContainer} />
    </div>
  );
}

