import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';

function Canvas() {
    const canvasRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        const parent = canvasRef.current.parentNode;
        renderer.setSize(parent.clientWidth, 600);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        // Create three rotating boxes
        const boxes = [];
        for (let i = 0; i < 3; i++) {
            const box = new THREE.Mesh(geometry, material);
            box.position.x = (i - 1) * 2;
            scene.add(box); // ERROR : WebGL: INVALID_OPERATION: uniformMatrix4fv: location is not from current program
            boxes.push(box);
        }

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);

            boxes.forEach((box, index) => {
                box.rotation.x += 0.01 * (index + 1);
                box.rotation.y += 0.01 * (index + 1);
            });

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize and adjust canvas size
        const handleResize = () => {
            const parent = canvasRef.current.parentNode;
            const newWidth = parent.clientWidth;
            const newHeight = parent.clientHeight;

            renderer.setSize(newWidth, newHeight);

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

        };

        handleResize(); // Initial size adjustment
        window.addEventListener('resize', handleResize);

        // Clean up on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef}></canvas>;
}

export default Canvas
