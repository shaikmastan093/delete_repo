<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />


  <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.1/dist/mindar-image-aframe.prod.js"></script>
  <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/dist/mindar-image.prod.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v7.0.0/dist/aframe-extras.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/dist/mindar-image-aframe.prod.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-aframe.prod.js"></script>
  <script defer src="./assets/scripts/index.js"></script>
  <title>My Business Card - Selvendran S</title>
  <link rel="stylesheet" href="assets/styles/index.css" />
  <link rel="stylesheet" href="assets/styles/style.css" />
</head>

<script>
  AFRAME.registerComponent("video-controller", {
      init: function () {
          const target = document.getElementById("target");
          const video = document.getElementById("myVideo");

          // Detect when the target is found
          target.addEventListener("targetFound", event => {
              console.log("target found");
              this.found = true;
              video.play();
          });

          // Detect when the target is lost
          target.addEventListener("targetLost", event => {
              console.log("target lost");
              this.found = false;
              video.pause();
          });
      }
  });
</script>

<body>
  <!-- Scanning Overlay -->
  <div id="example-scanning-overlay" class="hidden">
    <div class="inner">
      <img src="./assets/target/Wall.jpg" />
      <div class="scanline"></div>
    </div>
  </div>

  <!-- A-Frame Scene -->
  <a-scene
    mindar-image="imageTargetSrc: ./assets/target/paint.mind; filterMinCF:0.001; filterBeta: 0.09; uiScanning: #example-scanning-overlay"
    color-space="sRGB"
    renderer="colorManagement: true, physicallyCorrectLights"
    vr-mode-ui="enabled: false"
    device-orientation-permission-ui="enabled: false"
  >
    <!-- Assets -->
    <a-assets>

      <video id="myVideo" src="./assets/videos/peacock.mp4" preload loop></video>
    </a-assets>

    <!-- Camera -->
    <a-camera
      position="0 0 0"
      look-controls="enabled: false"
      cursor="fuse: false; rayOrigin: mouse;"
      raycaster="far: 10000; objects: .clickable;"
    ></a-camera>

    <!-- Image Target Entity -->
    <a-entity mindar-image-target="targetIndex: 0">
      <!-- Video displayed on detection of image target -->
      <a-video
      src="#myVideo"
      position="0 0.3 -0.5"
      width="1.5"
      height="1.5"
      loop="true"
      video.play();
    ></a-video>
      
     
    </a-entity>
  </a-scene>
</body>
</html>