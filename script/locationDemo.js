// import SelectItem from './script/SelectItem.js';

const { Fragment, useEffect, useState, useMemo } = React;
const useInterval = (callback, delay) => {
  useEffect(() => {
    const interval = setInterval(() => callback(), delay || 0);
    return () => clearInterval(interval);
  }, [callback, delay]);
};

const Character = (props) => {
  const [position, setPosition] = useState(props.position);
  // const [object, setObject] = useState(document.getElementById(props.objectId));

  useInterval(() => {
    const object = document.getElementById(props.objectId);
    let pos = position;
    // pos.y += 0.05;
    // if (pos.y > 20) pos.y = -20;
    pos.y += 0.03;
    if (pos.y > 10) pos.y = -10;
    object.setAttribute("position", pos);
    setPosition(pos);
  }, 10);

  return (
    <a-image
      id={props.objectId}
      src="#telu"
      position={position.x + " " + position.y + " " + position.z}
      rotation="0 0 0"
      scale="1 1 1"
      transparent="true"
    ></a-image>
  );
};

const Entities = () => {
  const objects = [
    { id: "telu1", position: { x: -2, y: -10, z: -5 } },
    { id: "telu2", position: { x: -1, y: -7, z: -5 } },
    { id: "telu3", position: { x: 0, y: -4, z: -5 } },
    { id: "telu4", position: { x: 1, y: -1, z: -5 } },
    { id: "telu5", position: { x: 2, y: 2, z: -5 } },
  ];
  const entities = (
    // useMemo(() => {
    <a-entity id="baseArea" position="0 0 0">
      {/* 3Dモデル  */}
      {/* x:右 y:上 z:手前 */}
      {/* <a-video src="#video_namahage" position="0 2.5 -3" rotation="0 0 0" width="4" height="2.25"></a-video>  */}
      <a-image
        id="picture"
        src="#telutelu"
        position="0 1.2 -6"
        rotation="0 0 0"
        scale="1 1 1"
      ></a-image>
      {/* 西船橋 */}
      <a-image
        id="nishifuna"
        src="#telu"
        gps-entity-place="latitude: 35.710876; longitude: 139.953462;"
        look-at="[gps-camera]"
        animation-mixer
        position="0 40 0"
        rotation="0 0 0"
        scale="10 10 10"
        transparent="true"
      ></a-image>
      <a-box
        gps-entity-place="latitude: 35.710876; longitude: 139.953462;"
        look-at="[gps-camera]"
        animation-mixer
        color="#f60"
        width="10"
        height="10"
        depth="10"
        position="0 0 0"
        rotation="0 0 0"
      ></a-box>
      {/* 翔太さん */}
      <a-image
        id="niigata"
        src="#telu"
        gps-entity-place="latitude: 37.904209; longitude: 139.080664;"
        look-at="[gps-camera]"
        animation-mixer
        position="0 40 0"
        rotation="0 0 0"
        scale="10 10 10"
        transparent="true"
      ></a-image>
      <a-box
        gps-entity-place="latitude: 37.904209; longitude: 139.080664;"
        look-at="[gps-camera]"
        animation-mixer
        color="#f60"
        width="10"
        height="10"
        depth="10"
        position="0 0 0"
        rotation="0 0 0"
      ></a-box>
      {objects.map((object) => {
        return (
          <Character
            key={object.id}
            objectId={object.id}
            position={object.position}
          />
        );
      })}
    </a-entity>
  );
  // }, []);

  return entities;
};

const Assets = () => {
  const assets = (
    //  useMemo(
    //   () => (
    <a-assets timeout="10000">
      <img id="telu" src="./assets/main-character.png"></img>
      <img id="telutelu" src="./assets/telutelu.jpg"></img>
      {/* <video id="video_namahage" src="./assets/video_namahage.mp4" loop="true"></video>  */}
    </a-assets>
  );
  //   ),
  //   []
  // );
  return assets;
};

const Nft = () => {
  const nft = (
    <a-nft
      type="nft"
      url="/nft/picture/nft_picture"
      smooth="true"
      smoothCount="10"
      smoothTolerance="0.01"
      smoothThreshold="5"
    >
      <a-image
        id="nft-picture"
        src="#telu"
        position="0 5 0"
        rotation="270 0 0"
        scale="200 200 200"
        transparent="true"
      ></a-image>
    </a-nft>
  );

  return nft;
};

const Camera = () => {
  const camera = (
    //  useMemo(
    //   () => (
    <a-entity id="cameraRig" position="0 0 0">
      <a-camera
        look-controls=""
        wasd-controls=""
        position="0 0 5"
        camera=""
        rotation=""
        gps-camera="minDistance:0; maxDistance:100"
        rotation-reader
      >
        <a-entity
          id="cursor"
          fuse="true"
          fuse-timeout="1000"
          design="ring"
          raycaster="objects: .clickable"
          cursor="rayOrigin: mouse"
        ></a-entity>
        {/* /cursor  */}
      </a-camera>
      {/* /camera */}
    </a-entity>
  );
  // ),
  // []
  // );

  return camera;
};

const AFrameScene = () => {
  const scene = (
    // useMemo(
    //   () => (
    <a-scene
      id="ar-scene"
      embedded
      arjs="debugUIEnabled:false;trackingMethod:best;sourceType: webcam;"
      // arjs="debugUIEnabled:false;trackingMethod:best;patternRatio:0.90;sourceType: webcam;"
      vr-mode-ui="enabled: false"
      gesture-detector
      inspector=""
      keyboard-shortcuts=""
      screenshot=""
      device-orientation-permission-ui=""
      renderer="logarithmicDepthBuffer: true;"
    >
      <Assets />
      <Entities />
      {/* <Nft /> */}
      {/* Camera + cursor */}
      <Camera />
      {/* <a-entity camera></a-entity> */}
    </a-scene>
  );

  return scene;
};

const Window = () => {
  let delete_photo_btn = document.querySelector("#delete-photo");

  //スナップショットボタン
  function onTakePhoto(e) {
    let image = document.querySelector("#snap");

    e.preventDefault();
    let video = document.querySelector("video");
    let snap = takeSnapshot(video);
    console.log("l.193");
    console.log(snap.substring(0, 100));
    //スナップショット表示.
    image.setAttribute("src", snap);
    image.classList.add("visible");

    // 削除ボタンと保存ボタン有効
    // delete_photo_btn.classList.remove("disabled");
    // download_photo_btn.classList.remove("disabled");

    // 保存ボタンにスナップショットを渡す
    let download_photo_btn = document.querySelector("#download-photo");
    download_photo_btn.href = snap;
  }

  //削除ボタン
  function onDeletePhoto(e) {
    console.log("onDeletePhoto");
    e.preventDefault();
    let image = document.querySelector("#snap");

    // スナップショットを隠す
    image.setAttribute("src", "");
    image.classList.remove("visible");

    // 削除ボタンと保存ボタン無効
    // delete_photo_btn.classList.add("disabled");
    // download_photo_btn.classList.add("disabled");
    console.log("onDeletePhoto");
  }

  //スナップショットを撮る
  function takeSnapshot(video) {
    let resizedCanvas = document.createElement("canvas");
    let resizedContext = resizedCanvas.getContext("2d");
    let width = video.videoWidth;
    let height = video.videoHeight;
    let aScene = document
      .querySelector("a-scene")
      .components.screenshot.getCanvas("perspective");
    if (width && height) {
      //videoのサイズをキャンバスにセット
      resizedCanvas.width = width;
      resizedCanvas.height = height;
      //キャンバスにvideoをコピー
      resizedContext.drawImage(video, 0, 0, width, height);
      //カメラの画角でar側の縮小処理を変える
      if (width > height) {
        // 横長（PC)
        resizedContext.drawImage(aScene, 0, 0, width, height);
      } else {
        // 縦長（スマホ）
        let scale = height / width;
        let scaledWidth = height * scale;
        let marginLeft = (width - scaledWidth) / 2;
        resizedContext.drawImage(aScene, marginLeft, 0, scaledWidth, height);
      }
      return resizedCanvas.toDataURL("image/png");
    }
  }

  return (
    <Fragment>
      <div class="arjs-loader">
        <div>Loading, please wait...</div>
      </div>
      <AFrameScene />
    </Fragment>
  );
};

ReactDOM.render(<Window />, document.body);
