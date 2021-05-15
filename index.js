import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
// import * as dat from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/jsm/libs/dat.gui.module';
// import { GUI } from '/jsm/libs/dat.gui.module'
// import * as dat from 'dat.gui';
import { GUI } from './js/dat.gui.module.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
// import * as dat from 'dat.gui';

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
    // scene.add(helper);

    // var loader = new THREE.TextureLoader();
    // var texture = loader.load('grasslight-big.jpg');
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
    var loader = new THREE.TextureLoader();
    var texture = loader.load('/textures/light2.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    var repeatsX = 1;
    var repeatsY = 1;
    texture.repeat.set(repeatsX, repeatsY);

    var planeGeo = new THREE.PlaneGeometry(1, 1);
    var planeMat = new THREE.MeshPhongMaterial({
        map: texture,
        // side: THREE.DoubleSide,
        transparent: true,
        opacity: 2,
        color: 0xffffff
    });
    var mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.position.set(0, -1, 0);
    mesh.scale.set(5, 5, 5);

    mesh.rotation.x = Math.PI / 2;

    scene.add(mesh);
    var loader = new THREE.TextureLoader();
    var texture = loader.load('/textures/light2.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    var repeatsX = 1;
    var repeatsY = 1;
    texture.repeat.set(repeatsX, repeatsY);

    var planeGeo = new THREE.PlaneGeometry(1, 1);
    var planeMat = new THREE.MeshPhongMaterial({
        map: texture,
        // side: THREE.DoubleSide,
        transparent: true,
        opacity: 2
    });
    var mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI / 2;
    mesh.scale.set(5, 5, 5);
    mesh.position.set(-9, -1, 0);




    scene.add(mesh);
    var loader = new THREE.TextureLoader();
    var texture = loader.load('/textures/light2.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    var repeatsX = 1;
    var repeatsY = 1;
    texture.repeat.set(repeatsX, repeatsY);

    var planeGeo = new THREE.PlaneGeometry(1, 1);
    var planeMat = new THREE.MeshPhongMaterial({
        map: texture,
        // side: THREE.DoubleSide,
        transparent: true,
        opacity: 2
    });
    var mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.position.set(8, -1, 0);
    mesh.scale.set(5, 5, 5);

    mesh.rotation.x = Math.PI / 2;

    scene.add(mesh);
    var loader = new THREE.TextureLoader();
    var texture = loader.load('/textures/light2.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    var repeatsX = 1;
    var repeatsY = 1;
    texture.repeat.set(repeatsX, repeatsY);

    var planeGeo = new THREE.PlaneGeometry(1, 1);
    var planeMat = new THREE.MeshPhongMaterial({
        map: texture,
        // side: THREE.DoubleSide,
        transparent: true,
        opacity: 2
    });
    var mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.position.set(0, -3, 0);
    mesh.scale.set(5, 5, 5);

    mesh.rotation.x = Math.PI / 2;

    // scene.add(mesh);
    var loader = new THREE.TextureLoader();
    var texture = loader.load('/textures/light2.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    var repeatsX = 1;
    var repeatsY = 1;
    texture.repeat.set(repeatsX, repeatsY);

    var planeGeo = new THREE.PlaneGeometry(1, 1);
    var planeMat = new THREE.MeshPhongMaterial({
        map: texture,
        // side: THREE.DoubleSide,
        transparent: true,
        opacity: 2
    });
    var mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI / 2;
    mesh.scale.set(5, 5, 5);
    mesh.position.set(-9, -3, 0);




    // scene.add(mesh);
    var loader = new THREE.TextureLoader();
    var texture = loader.load('/textures/light2.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    var repeatsX = 1;
    var repeatsY = 1;
    texture.repeat.set(repeatsX, repeatsY);

    var planeGeo = new THREE.PlaneGeometry(1, 1);
    var planeMat = new THREE.MeshPhongMaterial({
        map: texture,
        // side: THREE.DoubleSide,
        transparent: true,
        opacity: 2
    });
    var mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.position.set(8, -3, 0);
    mesh.scale.set(5, 5, 5);

    mesh.rotation.x = Math.PI / 2;

    // scene.add(mesh);
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
        mesh.position.set(i, 0, 0)
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
        scene.add(mesh);
    }
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

    const color = 0xFFFFFF;
    const intensity = 1;
    // const light = new THREE.DirectionalLight(color, intensity);
    // light.position.set(-1, 2, 4);
    // scene.add(light);


    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
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

    function makeInstance(geometry, color, pos, scale = 2) {
        const material = new THREE.MeshPhongMaterial({ color });

        const cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);

        cube.position.x = pos[0];
        cube.position.y = pos[1];
        cube.position.z = 1;
        cube.scale.x = scale;
        cube.scale.y = scale;
        cube.scale.z = scale;
        allObjects.push(cube);
        return cube;
    }

    // const cubes = [
    //     makeInstance(geometry, 0x44aa88, 0),
    //     makeInstance(geometry, 0x8844aa, -1),
    //     makeInstance(geometry, 0xaa8844, 1),
    // ];
    var trains = [];
    var trainLeader = new THREE.Object3D();
    scene.add(trainLeader);
    trains.push(trainLeader);
    allObjects.push(trainLeader);
    for (var i = 0; i < 4; i++) {
        var k = makeInstance(geometry, new THREE.Color(Math.random(), Math.random(), Math.random()), [i * 0.5, 0, 0], 0.5);
        // k.receiveShadows()
        k.castShadow = true;
        trainLeader.add(k);
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
    spotLight.angle = 0.2;
    // spotLight.shadow.camera.near = 19;
    // spotLight.shadow.camera.far = 100;
    // spotLight.shadow.camera.fov = 30;

    spotLight.distance = 30;
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
            console.log("sphere");
            const radius = 7;

            const detail = 2;

            var avatarGeometry = new THREE.IcosahedronGeometry(radius);
            var k = makeInstance(avatarGeometry, new THREE.Color(Math.random(), Math.random(), Math.random()), [0, 0, 0], 0.1);
            k.position.set(0, 0, 1);
            // k.scale.set(6, 6, 6);
            scene.add(k);
            Avatar = k;
            isAvatar = true;
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

                        directionAvatar = rotate2d(directionAvatar, (-Math.PI / 2));
                        // console.log(directionAvatar);
                        var k1 = Avatar.position.x;
                        var k2 = Avatar.position.y;
                        if (directionAvatar[0] == 1 || directionAvatar[0] == -1) {
                            k1 += 1 * (directionAvatar[0]);
                        } else {
                            k2 += 1 * (directionAvatar[1]);
                        }
                        avatarCamera.lookAt(new THREE.Vector3(k1, k2, 0));
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
                        avatarCamera.lookAt(new THREE.Vector3(k1, k2, 0));
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
                        directionAvatar = rotate2d(directionAvatar, (Math.PI / 2));
                        // avatarCamera.lookAt(new THREE.Vector3(directionAvatar[0], directionAvatar[1], 0));
                        var k1 = Avatar.position.x;
                        var k2 = Avatar.position.y;
                        if (directionAvatar[0] == 1 || directionAvatar[0] == -1) {
                            k1 += 1 * (directionAvatar[0]);
                        } else {
                            k2 += 1 * (directionAvatar[1]);
                        }
                        avatarCamera.lookAt(new THREE.Vector3(k1, k2, 0));
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
                        avatarCamera.lookAt(new THREE.Vector3(k1, k2, 0));
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
        // light4: false,
    }
    var fppAvatar = false;
    var droneCamera;
    gui.add(settings, 'light1').onChange(function(value) {
        // rotateAvatar = true;
        var light1 = new THREE.PointLight(new THREE.Color(1, 1, 1), 2, 50, 2);
        light1.position.set(-9, -2, 1);
        scene.add(light1);


    }).name("StreetLight1");
    gui.add(settings, 'light2').onChange(function(value) {
        // rotateAvatar = true;

        var light2 = new THREE.PointLight(new THREE.Color(1, 1, 1), 2, 50, 2);
        light2.position.set(0, -2, 1);
        scene.add(light2);


    }).name("StreetLight2");
    gui.add(settings, 'light3').onChange(function(value) {

        var light3 = new THREE.PointLight(new THREE.Color(1, 1, 1, ), 2, 50, 2);
        light3.position.set(9, -2, 1);
        scene.add(light3);

    }).name("StreetLight3");
    gui.add(settings, 'rotate').onChange(function(value) {
        rotateAvatar = true;
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
        if (isAvatarAttached) {
            isAvatarAttached = false;
            leaderAttached.remove(Avatar);
            Avatar.position.x = leaderAttached.position.x;
            Avatar.position.y = leaderAttached.position.y;
            scene.add(Avatar);
        }
    }).name("Jump or Attach");
    var leaders = [];
    leaders.push(trainLeader);




    function isCollision(obj) {

        // var originPoint = obj.position.clone();
        if (settings.checkbox) {
            if (obj) {
                var firstObject = obj;

                for (var i = 0; i < leaders.length; i++) {
                    var secondObject = leaders[i];
                    var firstBB = new THREE.Box3().setFromObject(firstObject);

                    var secondBB = new THREE.Box3().setFromObject(secondObject);

                    var collision = firstBB.intersectsBox(secondBB);
                    if (collision == true) {
                        // console.log(allObjects);
                        // console.log("hit");
                        leaders[i].add(obj);
                        if (!isAvatarAttached) {
                            obj.position.x = 0;
                            obj.position.y = 0;
                        }
                        isAvatarAttached = true;
                        leaderAttached = leaders[i];
                        break;
                    }
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

    function render(time) {

        console.log(spotLight.target.position);

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
            console.log(Avatar.position);
        }
        time *= 0.001;
        if (jumpUp && isAvatarAttached && count > 0) {
            // throwBallUp(time);

            if (timett < 4) {
                Avatar.position.y += 0.01;
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
                Avatar.position.y -= 0.01;
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
            avatarCamera.position.z = Avatar.position.z;
            // avatarCamera.lookAt(new THREE.Vector3(0, 0, 0))

        } // if (noCollision(trainLeader,radiusTrain,angles)) {
        trainLeader.position.x = radiusTrain * (angles[0]);
        trainLeader.position.y = radiusTrain * (angles[1]);
        // }
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
                // const avatarCameraControls = new OrbitControls(avatarCamera, renderer.domElement);
                // avatarCameraControls.update();
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