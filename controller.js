////////////////////////////////////
// 焦点を合わせるとSNSへ移動
////////////////////////////////////
const layout = document.querySelector("#layout");
layout.addEventListener("click", function () {
  // location.href = "https://www.tradewaltz.com/";
  console.log("visit 'https://www.tradewaltz.com/'");
});

////////////////////////////////////
// 焦点を合わせると色変化
////////////////////////////////////
// var targetEl = document.querySelector("#target");
// targetEl.addEventListener("click", function () {
//     targetEl.setAttribute("material", {
//         color: "red"
//     });
//     console.log("clicked");
// });

////////////////////////////////////
// タッチ機能の検証
////////////////////////////////////
// AFRAME.registerComponent("cursor-listener", {
//     init: function () {
//         let self = this;
//         this.el.addEventListener("click", function (e) {
//             self.el.setAttribute("color", "#f0f");
//         }, false);
//         this.el.addEventListener("raycaster-intersected", function (e) {
//             self.el.setAttribute("color", "#00f");
//         }, false);
//         this.el.addEventListener("raycaster-intersected-cleared", function (e) {
//             self.el.setAttribute("color", "#fff");
//         }, false);
//     }
// });

////////////////////////////////////
//加速度センサの情報取得の許可
////////////////////////////////////
document
  .getElementById("request_permission")
  .addEventListener("click", function () {
    if (
      DeviceMotionEvent &&
      DeviceMotionEvent.requestPermission &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      DeviceMotionEvent.requestPermission();
    }
    if (
      DeviceOrientationEvent &&
      DeviceOrientationEvent.requestPermission &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      DeviceOrientationEvent.requestPermission();
    }
  });
