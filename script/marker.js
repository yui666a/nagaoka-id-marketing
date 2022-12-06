const { useEffect, useState, useMemo } = React;
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
      alpha-test
    ></a-image>
  );
};

const Entities = () => {
  const objects = [
    { id: "telu1", position: { x: -2, y: -10, z: 0 } },
    { id: "telu2", position: { x: -1, y: -7, z: 0 } },
    { id: "telu3", position: { x: 0, y: -4, z: 0 } },
    { id: "telu4", position: { x: 1, y: -1, z: 0 } },
    { id: "telu5", position: { x: 2, y: 2, z: 0 } },
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
        position="0 1.2 -2"
        rotation="0 0 0"
        scale="1 1 1"
      ></a-image>

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
      <img id="telu" src="./assets/design1.jpg"></img>
      <img id="telutelu" src="./assets/design2.jpg"></img>
      {/* <video id="video_namahage" src="./assets/video_namahage.mp4" loop="true"></video>  */}
    </a-assets>
  );
  //   ),
  //   []
  // );
  return assets;
};

const Nft = () => {
  // url="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/yui666a/telutelu-ar/master/nft/picture/telupic"

  const nft = (
    <a-nft
      type="nft"
      url="/nft/picture/telupic"
      smooth="true"
      smoothCount="10"
      smoothTolerance=".01"
      smoothThreshold="5"
    >
      <a-box color="tomato" depth="2" height="4" width="0.5"></a-box>
      {/* <a-image
        id="nft-picture"
        src="#telutelu"
        position="1 1 1"
        rotation="0 0 0"
        scale="2 2 2"
      ></a-image> */}
    </a-nft>
  );
  // ),
  // []
  // );

  return nft;
};

const Camera = () => {
  const camera = (
    //  useMemo(
    //   () => (
    <a-entity id="cameraRig" position="0 1.6 0">
      <a-camera
        look-controls=""
        wasd-controls=""
        position="0 0 5"
        camera=""
        rotation=""
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
    // <a-scene
    //   embedded
    //   arjs="debugUIEnabled:false;trackingMethod:best;patternRatio:0.90;sourceType: webcam;"
    //   vr-mode-ui="enabled: false"
    //   gesture-detector
    //   inspector=""
    //   keyboard-shortcuts=""
    //   screenshot=""
    //   device-orientation-permission-ui=""
    //   renderer="logarithmicDepthBuffer: true;"
    // >
    //   <Assets />
    //   <Entities />
    //   {/* <Nft /> */}
    //   {/* Camera + cursor */}
    //   <Camera />
    // </a-scene>
    <a-scene embedded arjs="debugUIEnabled:false;trackingMethod:best;patternRatio:0.90;sourceType: webcam;">
    <a-marker type='pattern' url='./assets/marker/pattern-tradewaltz.patt'>
      <a-box position="0 0.5 0" wireframe="true"></a-box>
    </a-marker>
    <a-entity camera></a-entity>
  </a-scene>
    //   ),
    //   []

  );

  return scene;
};

// ReactDOM.render(<Console />, document.querySelector("#console"));
// ReactDOM.render(<AFrameScene />, document.querySelector("#a-frame-area"));
ReactDOM.render(<AFrameScene />, document.body);
