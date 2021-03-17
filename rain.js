$(window).resize(() => {
  setTimeout(() => location.reload(true), 2000);
});

const w = $(window).width() - 25;
const h = $(window).height() - 25;

const ww = w / 50;
let arr, y;
let flag = true;

const ascii_arr = [];
for (let i = 32; i < 127; i++) {
  ascii_arr.push(String.fromCharCode(i));
}

setup = () => {
  createCanvas(w, h);

  const d = new Date();
  const hr = d.getHours();
  let hrs;

  // 6am – 12am
  if (hr >= 6) { hrs = 6 + (23 - hr); }
  // 12am – 6am
  if (hr < 6) { hrs = 5 - hr; }
  const m = ((hrs * 60) + (59 - d.getMinutes()) + d.getSeconds() / 3600) / 1440;

  textSize(8);
  fill((20 * m) + 2.5, (36 * m) + 4.5, (82 * m) + 10.25);
  for (let i = 0; i < w; i += 8) {
    for (let j = 0; j < h; j += 8) {
      text(ascii_arr[Math.floor(Math.random() * 95) % 95], i, j);
    }
  }
  arr = ws();
  y = 0;
}

ws = () => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.random() * w);
  }
  return arr;
}

draw = () => {

  const j0 = Math.random() * (w / 75);
  const j1 = Math.random() * (w / 40);

  if (y < h) {
    noStroke();
    fill(70, 100, 140, 100);

    for (let i = 0; i < 10; i++) {
      const j = i % 2 == 0 ? j0 : j1;
      const x = arr[i] + j;
      rect(x, y, ww, 10);
    }
    y += 5;
  }
  else { setup(); }
}
