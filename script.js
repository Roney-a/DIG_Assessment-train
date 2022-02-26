'use strict';
// please do not delete the 'use strict' line above


/////////////////基礎6・中級4/////////////////////////
//機能：お気に入りの色と運命的に出会ってRGB値を取得するプログラム
//
//Change colorボタン => 1秒毎に色がランダム遷移
//Set colorボタン => ランダム遷移ストップとコンソールへその時のRGB取得
//所感：もっと凝りたかったけどMDNから読み解けず。。。
//     アセスメントとは別でグラデーションなども追加して遊びます
////////////////////////////////////////////////////

/////////////////アセスメント外///////////////////////
//機能：上記のものにグラデーションを加えちょっとお化粧
//そこそこネットでカンニング実施(MDNメイン)
////////////////////////////////////////////////////

const change = document.getElementById('color-button');
const set = document.getElementById('set-button');
const bkcr = document.querySelectorAll('body')[0];

let rgb = {
  "r1" : 0,
  "g1" : 0,
  "b1" : 0,
  "r2" : 0,
  "g2" : 0,
  "b2" : 0
}

let mode = 0;

change.addEventListener('click',changeColor);
set.addEventListener('click',quit);

async function changeColor() {
  change.removeEventListener('click', changeColor);
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  for (let key in rgb) {
    rgb[key] = Math.floor(Math.random() * 256);
  }

  while (mode === 0) {
    rgb["r1"] = Math.floor(Math.random() * 256);
    rgb["g1"] = Math.floor(Math.random() * 256);
    rgb["b1"] = Math.floor(Math.random() * 256);

    for (let i = -300; i <= 300; i += 1) {
      bkcr.style.background = `linear-gradient(45deg,rgb(${rgb["r1"]},${rgb["g1"]},${rgb["b1"]},0.8) ${i}%, rgb(${rgb["r2"]},${rgb["g2"]},${rgb["b2"]},0.8)`;
      if (i > 0 && i < 100) {
        await wait(10);
      }
      if (mode === 1) {
        setColor();
        break;
      }
      await wait(1);
    }
    rgb["r2"] = rgb["r1"];
    rgb["g2"] = rgb["g1"];
    rgb["b2"] = rgb["b1"];
  }
  mode = 0;
}

function quit(){
  mode = 1;
  change.addEventListener('click',changeColor);
}

const setColor = function(){
  window.alert("You choiced that => " + bkcr.style.background)
}


