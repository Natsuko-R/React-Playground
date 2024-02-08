import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import React, { useEffect, useRef, useState } from 'react';

function Canvas() {
    const canvasRef = useRef();
    const [isMount, setIsMount] = useState(false);
    let camera, scene, renderer;

    function init() {

        camera = new THREE.PerspectiveCamera(45, 1080 / 720, 1, 10000);
        camera.position.set(0, - 400, 600);

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0);

        const loader = new FontLoader();
        loader.load('fonts/helvetiker_regular.typeface.json', function (font) {

            const color = 0x006699;

            const matDark = new THREE.LineBasicMaterial({
                color: color,
                side: THREE.DoubleSide
            });

            const matLite = new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.4,
                side: THREE.DoubleSide
            });

            const message = '   Hello \nNatsuki.';

            const shapes = font.generateShapes(message, 100);

            const geometry = new THREE.ShapeGeometry(shapes);

            geometry.computeBoundingBox();

            const xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

            geometry.translate(xMid, 0, 0);

            // make shape ( N.B. edge view not visible )

            const text = new THREE.Mesh(geometry, matLite);
            text.position.z = - 150;
            scene.add(text);

            // make line shape ( N.B. edge view remains visible )

            const holeShapes = [];

            for (let i = 0; i < shapes.length; i++) {

                const shape = shapes[i];

                if (shape.holes && shape.holes.length > 0) {

                    for (let j = 0; j < shape.holes.length; j++) {

                        const hole = shape.holes[j];
                        holeShapes.push(hole);

                    }

                }

            }

            shapes.push.apply(shapes, holeShapes);

            const lineText = new THREE.Object3D();

            for (let i = 0; i < shapes.length; i++) {

                const shape = shapes[i];

                const points = shape.getPoints();
                const geometry = new THREE.BufferGeometry().setFromPoints(points);

                geometry.translate(xMid, 0, 0);

                const lineMesh = new THREE.Line(geometry, matDark);
                lineText.add(lineMesh);

            }

            scene.add(lineText);

            render();

        }); //end load function

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        // console.log(canvasRef.current.clientWidth, canvasRef.current);
        canvasRef.current.style.height = '720px'; // init时canvasRef.current还没初始化成功，所以height为0
        renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
        canvasRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 0, 0);
        controls.update();

        controls.addEventListener('change', render);
    } // end init

    function onWindowResize() {
        camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
        render();
    }

    function render() {
        renderer.render(scene, camera);
    }

    useEffect(() => {
        if (isMount) {
            init();
            window.addEventListener('resize', onWindowResize);
        }
        setIsMount(true)

        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, [isMount]);

    if (!isMount) return null;

    return <div ref={canvasRef} />;
}

export default Canvas
