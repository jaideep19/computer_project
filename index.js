import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
// import * as dat from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/jsm/libs/dat.gui.module';
// import { GUI } from '/jsm/libs/dat.gui.module'
// import * as dat from 'dat.gui';
import { GUI } from './js/dat.gui.module.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
// import * as dat from 'dat.gui';
import { OBJLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/loaders/MTLLoader.js';
const gui = new GUI();

function main() {

    var isAvatar = false;
    var Avatar;
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ canvas });

    const fov = 75;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 10;
    const cameraControls = new OrbitControls(camera, renderer.domElement);

    const scene = new THREE.Scene();
    var avatarCamera = new THREE.PerspectiveCamera(150, aspect, near, 100);
    var droneCamera = new THREE.PerspectiveCamera(fov, aspect, near, 1000);
    droneCamera.position.z = 7;
    const helper = new THREE.CameraHelper(avatarCamera);
    avatarCamera.up = new THREE.Vector3(0, 0, 1);
    avatarCamera.lookAt(new THREE.Vector3(1, 0, 0));
    // var 
    // var planeGeo = new THREE.SphereGeometry(10, 12, 6);
    // var planeMat = new THREE.MeshPhongMaterial({
    //     map: texture,
    //     side: THREE.DoubleSide,
    // });
    // var mesh = new THREE.Mesh(planeGeo, planeMat);
    // scene.add(helper);

    var loader = new THREE.TextureLoader();
    var texture = loader.load('textures/light2.png');
    var material = new THREE.MeshBasicMaterial({
        map: texture,
        shading: THREE.FlatShading,
        side: THREE.FrontSide,
    });
    console.log(material);
    var geometry = new THREE.SphereGeometry(10, 12, 6);
    // var geometry = new THREE.ConeGeometry(5, 20, 32);
    console.log(geometry);

    function assignUVs(geometry) {

        geometry.at.faceVertexUvs[0] = [];

        geometry.faces.forEach(function(face) {

            var uvs = [];
            var ids = ['a', 'b', 'c'];
            for (var i = 0; i < ids.length; i++) {
                var vertex = geometry.vertices[face[ids[i]]].clone();

                var n = vertex.normalize();
                var yaw = .5 - Math.atan(n.z, -n.x) / (2.0 * Math.PI);
                var pitch = .5 - Math.asin(n.y) / Math.PI;

                var u = yaw,
                    v = pitch;
                uvs.push(new THREE.Vector2(u, v));
            }
            geometry.faceVertexUvs[0].push(uvs);
        });

        geometry.uvsNeedUpdate = true;
    }
    // assignUVs(geometry);
    // var mesh = new THREE.Mesh(geometry, material);
    // mesh.position.set(0, 0, 0)
    // scene.add(mesh);

    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.magFilter = THREE.NearestFilter;
    // var repeatsX = 1;
    // var repeatsY = 1;
    // texture.repeat.set(repeatsX, repeatsY);

    // var planeGeo = new THREE.PlaneGeometry(1, 1);
    // var planeMat = new THREE.MeshPhongMaterial({
    //     map: texture,
    //     side: THREE.DoubleSide,
    // });
    // var mesh = new THREE.Mesh(planeGeo, planeMat);
    // scene.add(mesh);
    // for (var i = -100; i < 100; i++) {
    //     for (var j = 1; j > 100; j++) {
    //         var loader = new THREE.TextureLoader();
    //         var texture = loader.load('/textures/grass.jpeg');
    //         texture.wrapS = THREE.RepeatWrapping;
    //         texture.wrapT = THREE.RepeatWrapping;
    //         texture.magFilter = THREE.NearestFilter;
    //         var repeatsX = 1;
    //         var repeatsY = 1;
    //         texture.repeat.set(repeatsX, repeatsY);

    //         var planeGeo = new THREE.PlaneGeometry(1, 1);
    //         var planeMat = new THREE.MeshPhongMaterial({
    //             map: texture,
    //             side: THREE.DoubleSide,
    //         });
    //         var mesh = new THREE.Mesh(planeGeo, planeMat);
    //         mesh.position.set(i, j, 0)
    //         scene.add(mesh);
    //     }
    // }


    var mtl_loader = new MTLLoader();
    // mtl_loader.setTexturePath('Character/');
    // mtl_loader.setPath('Character/');
    mtl_loader.load('streetlight/streetlight.mtl', function(materials) {

        // Add this (see link below for more detail)
        materials.preload()

        const obj_loader = new OBJLoader();
        obj_loader.setMaterials(materials);
        obj_loader.setPath('streetlight/');
        obj_loader.load('streetlight.obj', function(mesh) {

            mesh.position.set(0, -1, 0);
            mesh.scale.set(0.09, 0.09, 0.09);
            mesh.castShadow = true;
            mesh.rotation.x = Math.PI / 2;

            scene.add(mesh);

        })
    });
    var mtl_loader = new MTLLoader();
    // mtl_loader.setTexturePath('Character/');
    // mtl_loader.setPath('Character/');
    mtl_loader.load('streetlight/streetlight.mtl', function(materials) {

        // Add this (see link below for more detail)
        materials.preload()

        const obj_loader = new OBJLoader();
        obj_loader.setMaterials(materials);
        obj_loader.setPath('streetlight/');
        obj_loader.load('streetlight.obj', function(mesh) {

            mesh.position.set(-9, -1, 0);
            mesh.scale.set(0.09, 0.09, 0.09);
            mesh.castShadow = true;
            mesh.rotation.x = Math.PI / 2;

            scene.add(mesh);

        })
    });
    var mtl_loader = new MTLLoader();
    // mtl_loader.setTexturePath('Character/');
    // mtl_loader.setPath('Character/');
    mtl_loader.load('streetlight/streetlight.mtl', function(materials) {

        // Add this (see link below for more detail)
        materials.preload()

        const obj_loader = new OBJLoader();
        obj_loader.setMaterials(materials);
        console.log(materials);
        obj_loader.setPath('streetlight/');
        obj_loader.load('streetlight.obj', function(mesh) {

            mesh.position.set(8, -1, 0);
            mesh.scale.set(0.09, 0.09, 0.09);
            mesh.castShadow = true;
            mesh.rotation.x = Math.PI / 2;

            scene.add(mesh);

        })
    });
    // var loader = new THREE.TextureLoader();
    // var texture = loader.load('/textures/light2.png');
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.magFilter = THREE.NearestFilter;
    // var repeatsX = 1;
    // var repeatsY = 1;
    // texture.repeat.set(repeatsX, repeatsY);

    // var planeGeo = new THREE.PlaneGeometry(1, 1);
    // var planeMat = new THREE.MeshPhongMaterial({
    //     map: texture,
    //     // side: THREE.DoubleSide,
    //     transparent: true,
    //     opacity: 2,
    //     color: 0xffffff
    // });
    // var mesh = new THREE.Mesh(planeGeo, planeMat);
    // mesh.position.set(0, -1, 1.8);
    // mesh.scale.set(5, 5, 5);

    // mesh.rotation.x = Math.PI / 2;

    // scene.add(mesh);

    // var loader = new THREE.TextureLoader();
    // var texture = loader.load('/textures/light2.png');
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.magFilter = THREE.NearestFilter;
    // var repeatsX = 1;
    // var repeatsY = 1;
    // texture.repeat.set(repeatsX, repeatsY);

    // var planeGeo = new THREE.PlaneGeometry(1, 1);
    // var planeMat = new THREE.MeshPhongMaterial({
    //     map: texture,
    //     // side: THREE.DoubleSide,
    //     transparent: true,
    //     opacity: 2
    // });
    // var mesh = new THREE.Mesh(planeGeo, planeMat);
    // mesh.rotation.x = Math.PI / 2;
    // mesh.scale.set(5, 5, 5);
    // mesh.position.set(-9, -1, 1.8);




    // scene.add(mesh);
    // var loader = new THREE.TextureLoader();
    // var texture = loader.load('/textures/light2.png');
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.magFilter = THREE.NearestFilter;
    // var repeatsX = 1;
    // var repeatsY = 1;
    // texture.repeat.set(repeatsX, repeatsY);

    // var planeGeo = new THREE.PlaneGeometry(1, 1);
    // var planeMat = new THREE.MeshPhongMaterial({
    //     map: texture,
    //     // side: THREE.DoubleSide,
    //     transparent: true,
    //     opacity: 2
    // });
    // var mesh = new THREE.Mesh(planeGeo, planeMat);
    // mesh.position.set(8, -1, 1.8);
    // mesh.scale.set(5, 5, 5);

    // mesh.rotation.x = Math.PI / 2;

    // scene.add(mesh);
    // var loader = new THREE.TextureLoader();
    // var texture = loader.load('/textures/light2.png');
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.magFilter = THREE.NearestFilter;
    // var repeatsX = 1;
    // var repeatsY = 1;
    // texture.repeat.set(repeatsX, repeatsY);

    // var planeGeo = new THREE.PlaneGeometry(1, 1);
    // var planeMat = new THREE.MeshPhongMaterial({
    //     map: texture,
    //     // side: THREE.DoubleSide,
    //     transparent: true,
    //     opacity: 2
    // });
    // var mesh = new THREE.Mesh(planeGeo, planeMat);
    // mesh.position.set(0, -3, 0);
    // mesh.scale.set(5, 5, 5);

    // mesh.rotation.x = Math.PI / 2;

    // // scene.add(mesh);
    // var loader = new THREE.TextureLoader();
    // var texture = loader.load('/textures/light2.png');
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.magFilter = THREE.NearestFilter;
    // var repeatsX = 1;
    // var repeatsY = 1;
    // texture.repeat.set(repeatsX, repeatsY);

    // var planeGeo = new THREE.PlaneGeometry(1, 1);
    // var planeMat = new THREE.MeshPhongMaterial({
    //     map: texture,
    //     // side: THREE.DoubleSide,
    //     transparent: true,
    //     opacity: 2
    // });
    // var mesh = new THREE.Mesh(planeGeo, planeMat);
    // mesh.rotation.x = Math.PI / 2;
    // mesh.scale.set(5, 5, 5);
    // mesh.position.set(-9, -3, 0);




    // // scene.add(mesh);
    // var loader = new THREE.TextureLoader();
    // var texture = loader.load('/textures/light2.png');
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.magFilter = THREE.NearestFilter;
    // var repeatsX = 1;
    // var repeatsY = 1;
    // texture.repeat.set(repeatsX, repeatsY);

    // var planeGeo = new THREE.PlaneGeometry(1, 1);
    // var planeMat = new THREE.MeshPhongMaterial({
    //     map: texture,
    //     // side: THREE.DoubleSide,
    //     transparent: true,
    //     opacity: 2
    // });
    // var mesh = new THREE.Mesh(planeGeo, planeMat);
    // mesh.position.set(8, -3, 0);
    // mesh.scale.set(5, 5, 5);

    // mesh.rotation.x = Math.PI / 2;

    // scene.add(mesh);



    function assignSphericalUVs(geometry) {

        geometry.computeBoundingBox();

        var max = geometry.boundingBox.max;
        var min = geometry.boundingBox.min;

        var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
        var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
        console.log(geometry.attributes);
        console.log(geometry.attributes.uv);
        // geometry.attributes.uv[0] = [];
        var faces = geometry.faces;
        var positions = Array.from(geometry.attributes.position.array);
        for (var i = 0; i < positions.length / 3; i++) {
            var x = positions[i * 3];
            var y = positions[i * 3 + 1];
            var z = positions[i * 3 + 2];
            var U = Math.atan2(z, x) / Math.PI * 0.5 - 0.5;
            var V = 0.5 - Math.asin(y) / Math.PI;
            console.log(x, y, z, U, V);
            geometry.attributes.uv.array[i * 2] = U;
            geometry.attributes.uv.array[i * 2 + 1] = V;
        }

        // for (i = 0; i < geometry.faces.length; i++) {

        //     var v1 = geometry.vertices[faces[i].a];
        //     var v2 = geometry.vertices[faces[i].b];
        //     var v3 = geometry.vertices[faces[i].c];

        //     geometry.faceVertexUvs[0].push([
        //         new THREE.Vector2((v1.x + offset.x) / range.x, (v1.y + offset.y) / range.y),
        //         new THREE.Vector2((v2.x + offset.x) / range.x, (v2.y + offset.y) / range.y),
        //         new THREE.Vector2((v3.x + offset.x) / range.x, (v3.y + offset.y) / range.y)
        //     ]);

        // }

        geometry.uvsNeedUpdate = true;
        console.log(geometry.attributes.uv.array);
    }

    function assignCylindricalUVs(geometry) {

        geometry.computeBoundingBox();

        var max = geometry.boundingBox.max;
        var min = geometry.boundingBox.min;

        var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
        var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
        console.log(geometry.attributes);
        console.log(geometry.attributes.uv);
        // geometry.attributes.uv[0] = [];
        var faces = geometry.faces;
        var positions = Array.from(geometry.attributes.position.array);
        for (var i = 0; i < positions.length / 3; i++) {
            var x = positions[i * 3];
            var y = positions[i * 3 + 1];
            var z = positions[i * 3 + 2];
            var U = Math.atan2(x, z) / Math.PI * 0.5 + 0.5
            var V = y
            console.log(x, y, z, U, V);
            geometry.attributes.uv.array[i * 2] = U;
            geometry.attributes.uv.array[i * 2 + 1] = V;
        }

        // for (i = 0; i < geometry.faces.length; i++) {

        //     var v1 = geometry.vertices[faces[i].a];
        //     var v2 = geometry.vertices[faces[i].b];
        //     var v3 = geometry.vertices[faces[i].c];

        //     geometry.faceVertexUvs[0].push([
        //         new THREE.Vector2((v1.x + offset.x) / range.x, (v1.y + offset.y) / range.y),
        //         new THREE.Vector2((v2.x + offset.x) / range.x, (v2.y + offset.y) / range.y),
        //         new THREE.Vector2((v3.x + offset.x) / range.x, (v3.y + offset.y) / range.y)
        //     ]);

        // }

        geometry.uvsNeedUpdate = true;
        console.log(geometry.attributes.uv.array);
    }
    var roads = [];

    var loader = new THREE.TextureLoader();
    var texture = loader.load('/textures/road.jpeg');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    var repeatsX = 1;
    var repeatsY = 1;
    texture.repeat.set(repeatsX, repeatsY);

    var planeGeo = new THREE.BoxGeometry(1, 1, 1);
    assignCylindricalUVs(planeGeo);
    var planeMat = new THREE.MeshPhongMaterial({
        map: texture,
        side: THREE.DoubleSide,
    });
    var mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.position.set(5, -2, 0.5);
    mesh.rotation.z = -Math.PI / 2;
    // roads.add(mesh);
    roads.push(mesh);
    scene.add(mesh);
    var loader = new THREE.TextureLoader();
    var texture = loader.load('/textures/road.jpeg');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    var repeatsX = 1;
    var repeatsY = 1;
    texture.repeat.set(repeatsX, repeatsY);

    var planeGeo = new THREE.BoxGeometry(1, 1, 1);
    assignSphericalUVs(planeGeo);
    var planeMat = new THREE.MeshPhongMaterial({
        map: texture,
        side: THREE.DoubleSide,
    });
    var mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.position.set(-5, -2, 0.5);
    mesh.rotation.z = -Math.PI / 2;
    // roads.add(mesh);
    roads.push(mesh);
    scene.add(mesh);
    var loader = new THREE.TextureLoader();
    var texture = loader.load('/textures/road.jpeg');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    var repeatsX = 1;
    var repeatsY = 1;
    texture.repeat.set(repeatsX, repeatsY);

    var planeGeo = new THREE.BoxGeometry(1, 1, 1);
    // assignSphericalUVs(planeGeo);
    var planeMat = new THREE.MeshPhongMaterial({
        map: texture,
        side: THREE.DoubleSide,
    });
    var mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.position.set(0, -2, 0.5);
    mesh.rotation.z = -Math.PI / 2;
    // roads.add(mesh);
    roads.push(mesh);
    scene.add(mesh);

    for (var i = -10; i < 10; i++) {
        var loader = new THREE.TextureLoader();
        var texture = loader.load('/textures/road.jpeg');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.magFilter = THREE.NearestFilter;
        var repeatsX = 1;
        var repeatsY = 1;
        texture.repeat.set(repeatsX, repeatsY);

        var planeGeo = new THREE.PlaneGeometry(1, 1);
        var planeMat = new THREE.MeshPhongMaterial({
            map: texture,
            side: THREE.DoubleSide,
        });
        var mesh = new THREE.Mesh(planeGeo, planeMat);
        mesh.position.set(i, 0, 0);
        roads.push(mesh);
        scene.add(mesh);
    }
    for (var i = -10; i < 10; i++) {
        var loader = new THREE.TextureLoader();
        var texture = loader.load('/textures/road.jpeg');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.magFilter = THREE.NearestFilter;
        var repeatsX = 1;
        var repeatsY = 1;
        texture.repeat.set(repeatsX, repeatsY);

        var planeGeo = new THREE.PlaneGeometry(1, 1);
        var planeMat = new THREE.MeshPhongMaterial({
            map: texture,
            side: THREE.DoubleSide,
        });
        var mesh = new THREE.Mesh(planeGeo, planeMat);
        mesh.position.set(i, -4, 0)
            // roads.add(mesh);
        roads.push(mesh);
        scene.add(mesh);
    }
    for (var i = 0; i < 5; i++) {

        var loader = new THREE.TextureLoader();
        var texture = loader.load('/textures/road.jpeg');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.magFilter = THREE.NearestFilter;
        var repeatsX = 1;
        var repeatsY = 1;
        texture.repeat.set(repeatsX, repeatsY);

        var planeGeo = new THREE.PlaneGeometry(1, 1);
        var planeMat = new THREE.MeshPhongMaterial({
            map: texture,
            side: THREE.DoubleSide,
        });
        var mesh = new THREE.Mesh(planeGeo, planeMat);
        mesh.position.set(-10, -i, 0);
        mesh.rotation.z = -Math.PI / 2;
        // roads.add(mesh);
        roads.push(mesh);
        scene.add(mesh);
    }
    for (var i = 0; i < 5; i++) {

        var loader = new THREE.TextureLoader();
        var texture = loader.load('/textures/road.jpeg');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.magFilter = THREE.NearestFilter;
        var repeatsX = 1;
        var repeatsY = 1;
        texture.repeat.set(repeatsX, repeatsY);

        var planeGeo = new THREE.PlaneGeometry(1, 1);
        var planeMat = new THREE.MeshPhongMaterial({
            map: texture,
            side: THREE.DoubleSide,
        });
        var mesh = new THREE.Mesh(planeGeo, planeMat);
        mesh.position.set(9, -i, 0);
        mesh.rotation.z = -Math.PI / 2;
        // roads.add(mesh);
        roads.push(mesh);
        scene.add(mesh);
    }
    var grass = [];
    for (var i = -9; i < 9; i++) {
        for (var j = 1; j < 4; j++) {
            var loader = new THREE.TextureLoader();
            var texture = loader.load('/textures/grass.jpeg');
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.magFilter = THREE.NearestFilter;
            var repeatsX = 1;
            var repeatsY = 1;
            texture.repeat.set(repeatsX, repeatsY);

            var planeGeo = new THREE.PlaneGeometry(1, 1);
            var planeMat = new THREE.MeshPhongMaterial({
                map: texture,
                side: THREE.DoubleSide,
            });
            var mesh = new THREE.Mesh(planeGeo, planeMat);
            mesh.position.set(i, -j, 0)
            grass.push(mesh);
            scene.add(mesh);
        }
    }
    // const loader = new THREE.TextureLoader();
    // const groundTexture = loader.load('wood.jpeg');
    // groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    // groundTexture.repeat.set(25, 25);
    // // groundTexture.anisotropy = 16;
    // // groundTexture.encoding = THREE.sRGBEncoding;

    // const groundMaterial = new THREE.MeshLambertMaterial({ map: groundTexture });

    // let mesh = new THREE.Mesh(new THREE.PlaneGeometry(20000, 20000), groundMaterial);
    // mesh.position.y = ;
    // mesh.rotation.x = -Math.PI / 2;
    // mesh.receiveShadow = true;
    // scene.add(mesh);

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function getAnglevalues(angleInDegrees) {
        var angleInRadians = angleInDegrees * Math.PI / 180;
        var s = Math.sin(angleInRadians);
        var c = Math.cos(angleInRadians);
        // var c = Math.cos(angleInRadians);
        // var s = Math.sin(angleInRadians);
        return [c, s];
    }




    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    var geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    var allObjects = [];

    function loveShape() {
        const shape = new THREE.Shape();

        function randomNumber() {
            var max = 1;
            var min = -1;
            return Math.random() * (max - min) + min;
        }
        const x = 100 * (randomNumber());
        const y = 100 * (randomNumber());
        shape.moveTo(x + randomNumber(), y + randomNumber());

        shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
        shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
        shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
        shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
        shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
        shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

        const extrudeSettings = {
            steps: 2,

            depth: 2,

            bevelEnabled: true,
            bevelThickness: 1,

            bevelSize: 1,

            bevelSegments: 2,

        };

        var g = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        // return new THREE.Mesh(shape, material);
        var color = 0x8844aa;
        const material = new THREE.MeshPhongMaterial({ color });

        const cube = new THREE.Mesh(g, material);
        var scale = 0.01;
        cube.scale.x = scale;
        cube.scale.y = scale;
        cube.scale.z = scale;
        allObjects.push(cube);
        cube.castShadow = true;
        return cube;

    }

    function makeInstance(geometry, color, pos, scale = 0.01) {

        const loader = new OBJLoader();

        // load a resource
        loader.load(
            // resource URL
            'flight/flight.obj',
            // called when resource is loaded
            function(cube) {
                cube.position.x = pos[0];
                cube.position.y = pos[1];
                cube.position.z = 1;
                cube.scale.x = scale;
                cube.scale.y = scale;
                cube.scale.z = scale;
                allObjects.push(cube);
                // return cube;
                // scene.add(object);
                // cube.rotation.z = -Math.PI / 2;
                cube.castShadow = true;
                trainLeader.add(cube);

            },
            // called when loading is in progresses
            function(xhr) {

                console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            },
            // called when loading has errors
            function(error) {

                console.log('An error happened');

            }
        );



        // const material = new THREE.MeshPhongMaterial({ color });

        // const cube = new THREE.Mesh(geometry, material);
        // // scene.add(cube);

        // cube.position.x = pos[0];
        // cube.position.y = pos[1];
        // cube.position.z = 1;
        // cube.scale.x = scale;
        // cube.scale.y = scale;
        // cube.scale.z = scale;
        // allObjects.push(cube);
        // return cube;
    }

    // const cubes = [
    //     makeInstance(geometry, 0x44aa88, 0),
    //     makeInstance(geometry, 0x8844aa, -1),
    //     makeInstance(geometry, 0xaa8844, 1),
    // ];
    var trains = [];
    var trainLeader = new THREE.Object3D();
    trainLeader.scale.set(0.1, 0.1, 0.1);
    scene.add(trainLeader);
    trains.push(trainLeader);
    allObjects.push(trainLeader);
    for (var i = 0; i < 4; i++) {
        var k = makeInstance(geometry, new THREE.Color(Math.random(), Math.random(), Math.random()), [4 * i, 0, 0], 0.5);
        // k.receiveShadows()
        // k.castShadow = true;
        // trainLeader.add(k);
        // train.push(k);
        // makeInstance(geometry, new THREE.Color(Math.random(), Math.random(), Math.random()), [i * 0.1, 0, 0], 0.1);

    }
    // for (var i = -8; i < 9; i += 6) {
    //     var light1 = new THREE.PointLight(new THREE.Color(1, 1, 1), 2, 50, 2);
    //     light1.position.set(i, -2, 1);
    //     scene.add(light1);
    //     var pointLightHelper = new THREE.PointLightHelper(light1, 1);
    //     scene.add(pointLightHelper);
    // }


    // var light4 = new THREE.PointLight(new THREE.Color(1, 1, 1), 1, 10, 2);
    // light4.position.set(0, -1, 1);
    // scene.add(light4);

    // var pointLightHelper = new THREE.PointLightHelper(light1, 1);
    // scene.add(pointLightHelper);
    // var pointLightHelper = new THREE.PointLightHelper(light2, 1);
    // scene.add(pointLightHelper);
    // var pointLightHelper = new THREE.PointLightHelper(light3, 1);
    // scene.add(pointLightHelper);
    // var pointLightHelper = new THREE.PointLightHelper(light4, 1);
    // scene.add(pointLightHelper);
    var spotLight = new THREE.SpotLight(0xff0000);

    spotLight.position.set(0, 0, 20);
    spotLight.castShadow = true;
    spotLight.angle = 0.1;
    // spotLight.shadow.camera.near = 19;
    // spotLight.shadow.camera.far = 100;
    // spotLight.shadow.camera.fov = 30;

    spotLight.distance = 100;
    scene.add(spotLight);
    const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    // scene.add(spotLightHelper);



    // var gui = new da / t.GUI();
    // gui.add()
    var obj1 = {
        add: function() {
            // renderer.setClearColor("#e5e5e5");
            console.log("cube");
            const radius = 7;

            const detail = 2;

            var avatarGeometry = new THREE.IcosahedronGeometry(radius, detail);
            var k = makeInstance(avatarGeometry, new THREE.Color(Math.random(), Math.random(), Math.random()), [0, 0, 0], 0.01);
            scene.add(k);
            isAvatar = true;
            Avatar = k;

        }
    };
    var obj2 = {
        add: function() {
            // renderer.setClearColor("#e5e5e5");
            // console.log("sphere");
            // const radius = 7;

            // const detail = 2;

            // var avatarGeometry = new THREE.IcosahedronGeometry(radius);
            // var k = makeInstance(avatarGeometry, new THREE.Color(Math.random(), Math.random(), Math.random()), [0, 0, 0], 0.1);
            // k.position.set(0, 0, 1);
            const loader = new OBJLoader();

            // load a resource
            const mtl_loader = new MTLLoader();
            // mtl_loader.setTexturePath('Character/');
            // mtl_loader.setPath('Character/');
            mtl_loader.load('Character/Character.mtl', function(materials) {

                // Add this (see link below for more detail)
                materials.preload()

                const obj_loader = new OBJLoader();
                obj_loader.setMaterials(materials);
                obj_loader.setPath('Character/');
                obj_loader.load('Character.obj', function(cube) {
                    var scale = 0.01;
                    cube.position.x = 0;
                    cube.position.y = 0;
                    cube.position.z = 0;
                    cube.scale.x = scale;
                    cube.scale.y = scale;
                    cube.scale.z = scale;
                    allObjects.push(cube);
                    // return cube;
                    // scene.add(object);
                    // cube.rotation.z = -Math.PI / 2;
                    cube.castShadow = true;
                    cube.position.set(0, 0, 0);
                    cube.rotation.x = Math.PI / 2;
                    cube.rotation.y = Math.PI / 2;
                    // trainLeader.add(cube);
                    scene.add(cube);
                    Avatar = cube;
                    isAvatar = true;
                    // scene.add(object);
                })
            });
            // loader.load(
            //     // resource URL
            //     'Character/Character.obj',
            //     // called when resource is loaded
            //     function(cube) {
            //         var scale = 0.01;
            //         cube.position.x = 0;
            //         cube.position.y = 0;
            //         cube.position.z = 0;
            //         cube.scale.x = scale;
            //         cube.scale.y = scale;
            //         cube.scale.z = scale;
            //         allObjects.push(cube);
            //         // return cube;
            //         // scene.add(object);
            //         // cube.rotation.z = -Math.PI / 2;
            //         cube.castShadow = true;
            //         cube.position.set(0, 0, 0);
            //         cube.rotation.x = Math.PI / 2;
            //         // trainLeader.add(cube);
            //         scene.add(cube);
            //         Avatar = cube;
            //         isAvatar = true;

            //     },
            //     // called when loading is in progresses
            //     function(xhr) {

            //         console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            //     },
            //     // called when loading has errors
            //     function(error) {

            //         console.log('An error happened');

            //     }
            // );
            // k.scale.set(6, 6, 6);

        }
    };
    // renderer.toneMapping = THREE.ReinhardToneMapping;
    // renderer.outputEncoding = THREE.sRGBEncoding;
    var obj3 = {
        add: function() {
            // renderer.setClearColor("#e5e5e5");
            console.log("cuboid");
            const radius = 7;

            const detail = 2;

            var avatarGeometry = new THREE.IcosahedronGeometry(radius, detail);
            var k = makeInstance(avatarGeometry, new THREE.Color(Math.random(), Math.random(), Math.random()), [0, 0, 0], 0.01);
            k.scale.set(4, 4, 4);
            scene.add(k);
            isAvatar = true;
            Avatar = k;

        }
    };
    var avatars = gui.addFolder("Avatar");
    avatars.add(obj1, 'add').name('Cube');
    avatars.add(obj2, 'add').name('Sphere');
    avatars.add(obj3, 'add').name('Cuboid');
    console.log(scene);
    var theta = 0;
    var radiusTrain = 7;
    var time = 0;
    var jumpUp = false;
    var directionAvatar = [1, 0];
    var directionAvatar = [1, 0];

    function rotate2d(p, angle) {
        // angle *= 2;
        var s = Math.sin(angle); // angle is in radians
        var c = Math.cos(angle); // angle is in radians
        // console.log(s, c);
        var xnew = p[0] * c - p[1] * s;
        var ynew = p[0] * s + p[1] * c;
        return [xnew, ynew];
    }
    var moveAvatar = false;
    window.onload = () => {
        window.addEventListener('keydown', function(event) {
            switch (true) {
                case event.key == "ArrowLeft" && (!isAvatarAttached || settings.drone):
                    // console.log("left");
                    if (settings.drone) {
                        droneCamera.position.x -= 0.1;
                    } else {
                        // Avatar.position.x -= 0.1;
                        // moveAvatar = true;
                        // console.log(directionAvatar);

                        directionAvatar = rotate2d(directionAvatar, (Math.PI / 2));
                        // console.log(directionAvatar);
                        var k1 = Avatar.position.x;
                        var k2 = Avatar.position.y;
                        if (directionAvatar[0] == 1 || directionAvatar[0] == -1) {
                            k1 += 1 * (directionAvatar[0]);
                        } else {
                            k2 += 1 * (directionAvatar[1]);
                        }
                        avatarCamera.lookAt(new THREE.Vector3(k1, k2, 2));
                        Avatar.rotation.y += Math.PI / 2;
                    }
                    break;
                case event.key == "ArrowDown" && (!isAvatarAttached || settings.drone):
                    if (settings.drone) {
                        droneCamera.position.y -= 0.1;
                    } else {
                        // Avatar.position.y -= 0.1;
                        moveAvatar = true;
                        directionAvatar = rotate2d(directionAvatar, (Math.PI));
                        var k1 = Avatar.position.x;
                        var k2 = Avatar.position.y;
                        if (directionAvatar[0] == 1 || directionAvatar[0] == -1) {
                            k1 += 1 * (directionAvatar[0]);
                        } else {
                            k2 += 1 * (directionAvatar[1]);
                        }
                        avatarCamera.lookAt(new THREE.Vector3(k1, k2, 2));
                        Avatar.rotation.y += -Math.PI;
                        // avatarCamera.lookAt(new THREE.Vector3(directionAvatar[0], directionAvatar[1], 0));
                    }
                    // Avatar.position.y -= 0.1;
                    break;
                case event.key == "ArrowRight" && (!isAvatarAttached || settings.drone):
                    // Avatar.position.x += 0.1;
                    if (settings.drone) {
                        droneCamera.position.x += 0.1;
                    } else {
                        // Avatar.position.x += 0.1;
                        // moveAvatar = true;
                        directionAvatar = rotate2d(directionAvatar, (-Math.PI / 2));
                        // avatarCamera.lookAt(new THREE.Vector3(directionAvatar[0], directionAvatar[1], 0));
                        var k1 = Avatar.position.x;
                        var k2 = Avatar.position.y;
                        if (directionAvatar[0] == 1 || directionAvatar[0] == -1) {
                            k1 += 1 * (directionAvatar[0]);
                        } else {
                            k2 += 1 * (directionAvatar[1]);
                        }
                        avatarCamera.lookAt(new THREE.Vector3(k1, k2, 2));
                        Avatar.rotation.y += -Math.PI / 2;
                    }
                    break;
                case event.key == "ArrowUp" && (!isAvatarAttached || settings.drone):
                    // Avatar.position.y += 0.1;
                    if (settings.drone) {
                        droneCamera.position.y += 0.1;
                    } else {
                        // Avatar.position.y += 0.1;
                        moveAvatar = true;
                        var k1 = Avatar.position.x;
                        var k2 = Avatar.position.y;
                        if (directionAvatar[0] == 1 || directionAvatar[0] == -1) {
                            k1 += 1 * (directionAvatar[0]);
                        } else {
                            k2 += 1 * (directionAvatar[1]);
                        }
                        avatarCamera.lookAt(new THREE.Vector3(k1, k2, 2));
                        // avatarCamera.lookAt(new THREE.Vector3(directionAvatar[0], directionAvatar[1], 0));

                    }
                    break;
                case event.key == "f" && (!isAvatarAttached || settings.drone):
                    // Avatar.position.z += 0.1;
                    if (settings.drone) {
                        droneCamera.position.z += 0.1;
                    } else {
                        Avatar.position.z += 0.1;
                    }
                    break;
                case event.key == "b" && (!isAvatarAttached || settings.drone):
                    // Avatar.position.z -= 0.1;
                    if (settings.drone) {
                        droneCamera.position.z -= 0.1;
                    } else {
                        Avatar.position.z -= 0.1;
                    }
                    break;
                case event.key == "u" && isAvatarAttached:

                    // time += 1;
                    jumpUp = true;
                    count = 2;
                    jumpDown = false;


                    break;
                case event.key == "d" && isAvatarAttached:

                    // time += 1;
                    jumpDown = true;
                    jumpUp = false;
                    count = 2;



                    break;
            }
        });
    };


    // scene.add(loveShape());
    // for (var i = 0; i < 5; i++) {
    //     scene.add(loveShape());
    // }
    var obj4 = {
        add: function() {

            console.log("Jump or Attach");


        }
    };
    // gui.add(obj4, 'add').name('Jump or Attach');
    var isAvatarAttached = false;
    var leaderAttached;
    var rotateAvatar = false;
    var settings = {
        checkbox: false,
        rotate: false,
        fpp: false,
        drone: false,
        light1: false,
        light2: false,
        light3: false,
        roadTexture: false,
        grassTexture: false,
        onLights: false
            // light4: false,
    }
    var fppAvatar = false;
    var droneCamera;

    function delete3DOBJ(objName) {
        var selectedObject = scene.getObjectByName(objName);
        scene.remove(selectedObject);

    }
    // gui.add(settings, 'fpp').onChange(function(value) {
    // fppAvatar = true;
    // }).name("fpp");

    gui.add(settings, 'light1').onChange(function(value) {
        // rotateAvatar = true;
        var light1 = new THREE.PointLight(new THREE.Color(1, 1, 1), 2, 50, 2);
        light1.position.set(-9, -2, 1);
        light1.name = "light1";

        // console.log(scene.getObjectByName(light3))
        if (!settings.light1) {
            if (scene.getObjectByName('light1')) {
                console.log("removed");
                // scene.remove(light3);
                delete3DOBJ('light1');
            }
        } else {
            scene.add(light1);
        }


    }).name("StreetLight1");
    gui.add(settings, 'light2').onChange(function(value) {
        // rotateAvatar = true;

        var light2 = new THREE.PointLight(new THREE.Color(1, 1, 1), 2, 50, 2);
        light2.position.set(0, -2, 1);
        light2.name = "light2";

        // console.log(scene.getObjectByName(light3))
        if (!settings.light2) {
            if (scene.getObjectByName('light2')) {
                console.log("removed");
                // scene.remove(light3);
                delete3DOBJ('light2');
            }
        } else {
            scene.add(light2);
        }


    }).name("StreetLight2");


    gui.add(settings, 'light3').onChange(function(value) {

        var light3 = new THREE.PointLight(new THREE.Color(1, 1, 1, ), 2, 50, 2);
        light3.position.set(9, -2, 1);
        light3.name = "light3";

        // console.log(scene.getObjectByName(light3))
        if (!settings.light3) {
            if (scene.getObjectByName('light3')) {
                console.log("removed");
                // scene.remove(light3);
                delete3DOBJ('light3');
            }
        } else {
            scene.add(light3);
        }

    }).name("StreetLight3");
    gui.add(settings, 'rotate').onChange(function(value) {
        // var k = avatarCamera.copy();
        // rotateAvatar = true;
        if (!settings.rotate) {

            Avatar.scale.set(0.01, 0.01, 0.01);
            Avatar.rotation.x = Math.PI / 2;
            Avatar.rotation.y = Math.PI / 2;
            avatarCamera.lookAt(new THREE.Vector3(1, 0, 0));
            directionAvatar = [1, 0];
        } //     avatarCamera = k;
        // }
        console.log(directionAvatar);

    }).name("onRotation");
    gui.add(settings, 'fpp').onChange(function(value) {
        fppAvatar = true;
    }).name("fpp");
    gui.add(settings, 'drone').onChange(function(value) {
        fppAvatar = true;
        //     const radius = 7;

        //     const detail = 2;

        //     var avatarGeometry = new THREE.IcosahedronGeometry(radius, detail);
        //     var k = makeInstance(avatarGeometry, new THREE.Color(Math.random(), Math.random(), Math.random()), [0, 0, 0], 0.01);
        //    droneCamera = k;
        //     scene.add(k);
    }).name("droneView");
    // var IsJumpAttach = false;
    gui.add(settings, 'checkbox').onChange(function(value) {
        // init();
        console.log(settings.checkbox);
        if (!settings.checkbox) {
            Avatar.scale.set(0.01, 0.01, 0.01);
            Avatar.rotation.x = Math.PI / 2;
            Avatar.rotation.y = Math.PI / 2;
            avatarCamera.lookAt(new THREE.Vector3(1, 0, 0));
            directionAvatar = [1, 0];
        }
        if (isAvatarAttached) {
            isAvatarAttached = false;
            leaderAttached.remove(Avatar);
            Avatar.position.x = leaderAttached.position.x;
            Avatar.position.y = leaderAttached.position.y;
            scene.add(Avatar);
        }
    }).name("Jump or Attach");
    gui.add(settings, 'roadTexture').onChange(function(value) {
        // rotateAvatar = true;


    }).name("roadTexture");
    gui.add(settings, 'grassTexture').onChange(function(value) {
        // rotateAvatar = true;


    }).name("landTexture");
    gui.add(settings, 'onLights').onChange(function(value) {
        // rotateAvatar = true;
        var color = 0xFFFFFF;
        var intensity = 1;
        var light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        light.name = "biglight1";
        // scene.add(light);
        if (!settings.onLights) {
            if (scene.getObjectByName('biglight1')) {
                console.log("removed");
                // scene.remove(light3);
                delete3DOBJ('biglight1');
            }
        } else {
            scene.add(light);
        }
        color = 0xFFFFFF;
        intensity = 1;
        light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, -4, 0);
        light.name = "biglight2";
        // scene.add(light);

        if (!settings.onLights) {
            if (scene.getObjectByName('biglight2')) {
                console.log("removed");
                // scene.remove(light3);
                delete3DOBJ('biglight2');
            }
        } else {
            scene.add(light);
        }
        color = 0xFFFFFF;
        intensity = 1;
        light = new THREE.DirectionalLight(color, intensity);
        light.position.set(10, -4, 0);
        light.name = "biglight3";
        // scene.add(light);

        if (!settings.onLights) {
            if (scene.getObjectByName('biglight3')) {
                console.log("removed");
                // scene.remove(light3);
                delete3DOBJ('biglight3');
            }
        } else {
            scene.add(light);
        }


    }).name("on external lights");
    var leaders = [];
    leaders.push(trainLeader);




    function isCollision(obj) {

        // var originPoint = obj.position.clone();
        if (settings.checkbox) {
            if (obj) {
                var firstObject = obj;

                for (var i = 0; i < leaders.length; i++) {
                    var secondObject = leaders[i];

                    // secondObject.children.forEach(function(pChild) {
                    if (!isAvatarAttached) {
                        var firstBB = new THREE.Box3().setFromObject(firstObject);
                        // var box1 = new THREE.BoxHelper(firstObject, 0xffff00);
                        // scene.add(box1);
                        var secondBB = new THREE.Box3().setFromObject(secondObject);
                        // var box2 = new THREE.BoxHelper(pChild, 0xffff00);
                        // scene.add(box2);
                        var collision = firstBB.intersectsBox(secondBB);
                        if (collision == true) {
                            // console.log(allObjects);
                            console.log("hit");
                            leaders[i].add(obj);
                            if (!isAvatarAttached) {
                                obj.position.x = 0;
                                obj.position.y = 0;
                            }
                            isAvatarAttached = true;
                            leaderAttached = leaders[i];

                        }
                    }
                    // });


                }
            }
        }

    }

    function throwBallUp(time) {
        var intialVelocity = 10;
        var time = intialVelocity / 10;
        var velocity = intialVelocity - (10) * (time);
        var dist = intialVelocity * intialVelocity / (2 * 10);
        for (var i = 0; i < dist; i += 0.1) {
            console.log(i);

            Avatar.position.y = i;




        }

        // while (dist > 0) {
        //     dist -= 0.1;
        //     Avatar.position.y -= 0.1;
        // }
    }
    var timett = 0;
    var jumpDown = false;
    var count;
    var isDragging = false;
    var previousMousePosition = {
        x: 0,
        y: 0
    };
    var avatarQuat = false;
    // document.body.appendChild(renderer.domElement);




    // scene.background = new THREE.Color(0xf20000);








    scene.fog = new THREE.Fog(0xf2f7ff, 1, 25000);

    function toRadians(angle) {
        return angle * (Math.PI / 180);
    }
    document.addEventListener('mousedown', function(e) {
        isDragging = true;
    }, false);
    document.addEventListener('mousemove', function(e) {
        //console.log(e);
        if (Avatar && settings.rotate) {
            var deltaMove = {
                x: e.offsetX - previousMousePosition.x,
                y: e.offsetY - previousMousePosition.y
            };

            if (isDragging) {

                var deltaRotationQuaternion = new THREE.Quaternion()
                    .setFromEuler(new THREE.Euler(
                        toRadians(deltaMove.y * 0.11),
                        toRadians(deltaMove.x * 0.11),
                        0,
                        'XYZ'
                    ));

                Avatar.quaternion.multiplyQuaternions(deltaRotationQuaternion, Avatar.quaternion);
                avatarCamera.quaternion.multiplyQuaternions(deltaRotationQuaternion, avatarCamera.quaternion);
                avatarCamera.updateProjectionMatrix();

                avatarQuat = true;
            }

            previousMousePosition = {
                x: e.offsetX,
                y: e.offsetY
            };
        }
    }, false);
    var grasstexture = THREE.ImageUtils.loadTexture('textures/grass.jpeg', {}, function() {
        // renderer.render(scene);
    });
    var stonetexture = THREE.ImageUtils.loadTexture('textures/stones1.jpeg', {}, function() {
        // renderer.render(scene);
    });

    var traintexture = THREE.ImageUtils.loadTexture('textures/train.jpg', {}, function() {
        // renderer.render(scene);
    });
    var roadtexture = THREE.ImageUtils.loadTexture('textures/road.jpeg', {}, function() {
        // renderer.render(scene);
    });
    var finalTexture1;
    var finalTexture2;

    function render(time) {
        if (!settings.grassTexture) {
            finalTexture2 = grasstexture;

        } else {
            finalTexture2 = stonetexture;
        }
        for (var i = 0; i < grass.length; i++) {

            grass[i].material.map = finalTexture2;
            // roads[i].material.map.needsUpdate = true;

            // roads[i].updateProjectionMatrix();
        }
        if (settings.roadTexture) {
            finalTexture1 = traintexture;

        } else {
            finalTexture1 = roadtexture;
        }
        for (var i = 0; i < roads.length; i++) {

            roads[i].material.map = finalTexture1;
            // roads[i].material.map.needsUpdate = true;

            // roads[i].updateProjectionMatrix();
        }
        // console.log(roads[0].material.map);
        if (Avatar) {
            var box1 = new THREE.BoxHelper(Avatar, 0xffff00);
            box1.name = 'box1';
            // console.log(box1);
            delete3DOBJ('box1');
            // if (!scene.getObjectByName('box1')) {
            scene.add(box1);
            // }
            var box2 = new THREE.BoxHelper(leaders[0], 0xffff00);
            delete3DOBJ('box2');
            box2.name = 'box2';
            // scene.add(box2);
            // if (!scene.getObjectByName('box2')) {
            scene.add(box2);
            // } else {
            // console.log(box1.position)
            // }
        }
        // console.log(spotLight.target.position);

        // console.log(avatar.position);
        if (moveAvatar) {
            // console.log(directionAvatar);
            if (directionAvatar[0] == 1 || directionAvatar[0] == -1) {
                Avatar.position.x += 1 * (directionAvatar[0]);
            } else {
                Avatar.position.y += 1 * (directionAvatar[1]);
            }
            moveAvatar = false;
        }

        // console.log(directionAvatar);
        if (Avatar) {
            if (isAvatarAttached) {
                Avatar.scale.set(0.05, 0.05, 0.05);
                Avatar.rotation.x += 0.01 * (Math.PI / 2);
                // console.log(Avatar.rotation.x);
                // Avatar.updateProjectionMatrix();
            } else {

            }
            // console.log(Avatar.scale);
            // console.log(trainLeader.scale);
            // console.log(Avatar.position);
        }
        time *= 0.001;
        if (jumpUp && isAvatarAttached && count > 0) {
            // throwBallUp(time);

            if (timett < 4) {
                Avatar.position.y += 0.1;
                timett += 0.1;
            } else {
                jumpUp = false;
                jumpDown = true;
                timett = 0;
                count -= 1;
            }
        }
        if (jumpDown && isAvatarAttached && count > 0) {
            // throwBallUp(time);
            console.log(Avatar.position.y, timett);
            if (timett < 4) {
                Avatar.position.y -= 0.1;
                timett += 0.1;
            } else {
                jumpDown = false;
                jumpUp = true;
                timett = 0;
                count -= 1;
            }
        }

        if (!settings.rotate) {
            avatarQuat = false;
        }

        // console.log(avatarCamera);
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
        // trainLeader.rotation.x += 0.01;
        theta += 0.1;
        var angles = getAnglevalues(theta);
        isCollision(Avatar);
        if (Avatar) {
            avatarCamera.position.x = Avatar.position.x;
            avatarCamera.position.y = Avatar.position.y;
            avatarCamera.position.z = Avatar.position.z + 2;
            // avatarCamera.lookAt(new THREE.Vector3(0, 0, 0))

        } // if (noCollision(trainLeader,radiusTrain,angles)) {
        trainLeader.position.x = radiusTrain * (angles[0]);
        trainLeader.position.y = radiusTrain * (angles[1]);
        trainLeader.position.z = 2;
        // trainLeader.rotation.x = 0.1 * theta;
        // trainLeader.rotation.z = 0.1 * theta;
        trainLeader.rotation.y = 0.013 * theta;
        // trainLeader.rotation.y = radiusTrain * (angles[1]);
        // }
        // Avatar.scale.set(100, 100, 100);

        if (settings.fpp && isAvatarAttached) {

            if (!avatarQuat) {
                var k = theta + 0.1;
                var angles = getAnglevalues(k);
                avatarCamera.position.x = Avatar.position.x;
                avatarCamera.position.y = Avatar.position.y;
                // avatarCamera.position.z=Avatar.position.z;
                avatarCamera.position.x = radiusTrain * (angles[0]);
                avatarCamera.position.y = radiusTrain * (angles[1]);
                avatarCamera.lookAt(new THREE.Vector3(radiusTrain * (angles[0]), radiusTrain * (angles[0]), 0));
                avatarCamera.up = new THREE.Vector3(0, 0, 1);

            } else {
                avatarCamera.position.x = Avatar.position.x;
                avatarCamera.position.y = Avatar.position.y;
                avatarCamera.updateProjectionMatrix();
            }

            renderer.render(scene, avatarCamera);


        } else if (settings.fpp && Avatar) {

            // avatarCamera.lookAt(new THREE.Vector3(0, 0, -5));
            // const avatarCameraControls = new OrbitControls(avatarCamera, renderer.domElement);
            // avatarCameraControls.update();
            renderer.render(scene, avatarCamera);

        } else if (settings.drone) {

            droneCamera.position.x = droneCamera.position.x;
            droneCamera.position.y = droneCamera.position.y;
            droneCamera.lookAt(new THREE.Vector3(droneCamera.position.x, droneCamera.position.y, 0));
            droneCamera.position.z = droneCamera.position.z;
            // droneCamera.up = new THREE.Vector3(0, 0, 1);
            renderer.render(scene, droneCamera);

        } else {
            renderer.render(scene, camera);
        }
        spotLight.target = trainLeader;
        helper.update();
        // console.log(droneCamera.position);
        requestAnimationFrame(render);

    }
    // var flight =scene.getObjectByName(trainLeader);


    requestAnimationFrame(render);
}

main();