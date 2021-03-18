$(window).resize(() => setTimeout(() => location.reload(true), 1500) );

const w = $(window).width() - 25;
const h = $(window).height() - 25;

const ww = w / 50;
let arr, y;
let flag = true;

const ascii_arr = [];
for (let i = 32; i < 127; i++) {
  ascii_arr.push(String.fromCharCode(i));
}

times = {
  '0': '63.75, 63.75, 63.75',
  '1': '42.5, 42.5, 42.5',
  '2': '21.25, 21.25, 21.25',
  '3': '0, 0, 0',
  '4': '21.25, 21.25, 21.25',
  '5': '42.5, 42.5, 42.5',
  '6': '63.75, 63.75, 63.75',
  '7': '85, 85, 85',
  '8': '106.25, 106.25, 106.25',
  '9': '127.5, 127.5, 127.5',
  '10': '148.75, 148.75, 148.75',
  '11': '170, 170, 170',
  '12': '191.25, 191.25, 191.25',
  '13': '212.5, 212.5, 212.5',
  '14': '233.75, 233.75, 233.75',
  '15': '255, 255, 255',
  '16': '233.75, 233.75, 233.75',
  '17': '212.5, 212.5, 212.5',
  '18': '191.25, 191.25, 191.25',
  '19': '170, 170, 170',
  '20': '148.75, 148.75, 148.75',
  '21': '127.5, 127.5, 127.5',
  '22': '106.25, 106.25, 106.25',
  '23': '85, 85, 85'
}

setup = () => {
  createCanvas(w, h);

  const d = new Date();
  const hr = d.getHours();

  const bg = times[hr].split(',');
  background(bg[0], bg[1], bg[2]);

  textSize(10);
  textFont('Courier New');

  const ffill = times[(hr + 1) % 24].split(',');
  fill(ffill[0], ffill[1], ffill[2]);

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
