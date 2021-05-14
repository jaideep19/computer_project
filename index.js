import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
// import * as dat from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/jsm/libs/dat.gui.module';
// import { GUI } from '/jsm/libs/dat.gui.module'
// import * as dat from 'dat.gui';
import { GUI } from './js/dat.gui.module.js';
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
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    const scene = new THREE.Scene();

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
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);


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
        return cube;

    }

    function makeInstance(geometry, color, pos, scale = 0.2) {
        const material = new THREE.MeshPhongMaterial({ color });

        const cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);

        cube.position.x = pos[0];
        cube.position.y = pos[1];
        cube.position.z = pos[2];
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
        var k = makeInstance(geometry, new THREE.Color(Math.random(), Math.random(), Math.random()), [i * 0.1, 0, 0], 0.1);
        trainLeader.add(k);
        // train.push(k);
        // makeInstance(geometry, new THREE.Color(Math.random(), Math.random(), Math.random()), [i * 0.1, 0, 0], 0.1);

    }

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
            var k = makeInstance(avatarGeometry, new THREE.Color(Math.random(), Math.random(), Math.random()), [0, 0, 0], 0.01);
            scene.add(k);
            Avatar = k;
            isAvatar = true;
        }
    };
    var obj3 = {
        add: function() {
            // renderer.setClearColor("#e5e5e5");
            console.log("cuboid");
            const radius = 7;

            const detail = 2;

            var avatarGeometry = new THREE.IcosahedronGeometry(radius, detail);
            var k = makeInstance(avatarGeometry, new THREE.Color(Math.random(), Math.random(), Math.random()), [0, 0, 0], 0.01);
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
    var radiusTrain = 0.7;
    var time = 0;
    var jumpUp = false;
    window.onload = () => {
        window.addEventListener('keydown', function(event) {
            switch (true) {
                case event.key == "ArrowLeft" && !isAvatarAttached:
                    Avatar.position.x -= 0.1;
                    break;
                case event.key == "ArrowDown" && !isAvatarAttached:
                    Avatar.position.y -= 0.1;
                    break;
                case event.key == "ArrowRight" && !isAvatarAttached:
                    Avatar.position.x += 0.1;
                    break;
                case event.key == "ArrowUp" && !isAvatarAttached:
                    Avatar.position.y += 0.1;
                    break;
                case event.key == "f" && !isAvatarAttached:
                    Avatar.position.z += 0.1;
                    break;
                case event.key == "b" && !isAvatarAttached:
                    Avatar.position.z -= 0.1;
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
    for (var i = 0; i < 5; i++) {
        scene.add(loveShape());
    }
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
        rotate: false
    }
    gui.add(settings, 'rotate').onChange(function(value) {
        rotateAvatar = true;
    }).name("onRotation");
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

    function toRadians(angle) {
        return angle * (Math.PI / 180);
    }
    document.addEventListener('mousedown', function(e) {
        isDragging = true;
    }, false);
    document.addEventListener('mousemove', function(e) {
        //console.log(e);
        if (isAvatarAttached && settings.rotate) {
            var deltaMove = {
                x: e.offsetX - previousMousePosition.x,
                y: e.offsetY - previousMousePosition.y
            };

            if (isDragging) {

                var deltaRotationQuaternion = new THREE.Quaternion()
                    .setFromEuler(new THREE.Euler(
                        toRadians(deltaMove.y * 1),
                        toRadians(deltaMove.x * 1),
                        0,
                        'XYZ'
                    ));

                Avatar.quaternion.multiplyQuaternions(deltaRotationQuaternion, Avatar.quaternion);
            }

            previousMousePosition = {
                x: e.offsetX,
                y: e.offsetY
            };
        }
    }, false);

    function render(time) {
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




        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
        // trainLeader.rotation.x += 0.01;
        theta += 0.1;
        var angles = getAnglevalues(theta);
        isCollision(Avatar);
        // if (noCollision(trainLeader,radiusTrain,angles)) {
        trainLeader.position.x = radiusTrain * (angles[0]);
        trainLeader.position.y = radiusTrain * (angles[1]);
        // }

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

main();