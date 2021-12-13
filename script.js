const main = document.getElementsByTagName('main')[0];

//2 e 3.
const colorPalette = document.createElement('div');
colorPalette.id = 'color-palette';
main.appendChild(colorPalette);

function criaCores(lista) {
  for(i = 0; i < lista.length; i += 1){
    const colors = document.createElement('div');
    colors.className = 'color';
    colors.style.backgroundColor = lista[i];
    colorPalette.appendChild(colors);
  }
}

const listaCores = ['yellow', 'red', 'blue', 'green','antiquewhite', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'gold', 'greenyellow', 'indigo', 'lightsalmon', 'magenta', 'orchid', 'seagreen', 'slateblue', 'tomato', 'turquoise'];
let cores = ['black']

function escolheCores(lista, cores){
  let temp = 0;
  for (let index = 0; index < 3; index += 1){
    let aleatorio = Math.floor(Math.random() * 20);
    if(aleatorio == temp){
      aleatorio = Math.floor(Math.random() * 20);
    }
    cores.push(listaCores[aleatorio]);
    temp = aleatorio;
  }
  criaCores(cores);
}
escolheCores(listaCores, cores);

//9.
const resetBtn = document.createElement('button');
resetBtn.id = 'clear-board';
resetBtn.innerText = 'Limpar';
resetBtn.addEventListener('click', resetColors);
main.appendChild(resetBtn);

//4 e 5.
function criaPixel(num){
  const canvas = document.createElement('div');
  canvas.id = 'pixel-board';
  main.appendChild(canvas);
  for (let x = 0; x < num; x += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'canvas-line';
    canvas.appendChild(pixelLine);
    for (let j = 0; j < num; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
  }
}

criaPixel(5);

//6.
const colorBlack = document.getElementsByClassName('color')[0];
colorBlack.classList.add('selected');

//7.
const allColors = document.getElementsByClassName('color');
for (let i = 0; i < allColors.length; i += 1) {
  allColors[i].addEventListener('click', colorSelected);
}

function colorSelected(event) {
  const tempselected = document.getElementsByClassName('selected')[0];
  tempselected.classList.remove('selected');
  event.target.classList.add('selected');
}

//8.
const canvasPixels = document.getElementsByClassName('pixel');
for(i = 0; i < canvasPixels.length; i += 1) {
  canvasPixels[i].addEventListener('click', alteraCorPx);
}

function alteraCorPx(event) {
  event.target.style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}


function resetColors(){
  for(i = 0; i < canvasPixels.length; i += 1){
    canvasPixels[i].style.backgroundColor = 'white';
  }
}

//10.
const input = document.createElement('input');
input.type = 'number';
input.min = '1';
input.placeholder = 'Qual a nova altura? (O quadro sempre será quadrado)';
input.id = 'board-size';
const quadro = document.getElementById('pixel-board');
main.insertBefore(input, quadro);

const attBtn = document.createElement('button');
attBtn.id = 'generate-board';
attBtn.innerText = 'VQV';
attBtn.addEventListener('click', novoQuadro);
main.insertBefore(attBtn, quadro);

function novoQuadro() {
  const num = document.getElementById('board-size').value;
  if (num >=5 && num <= 50) {
    apagaQuadro(num);
  }else if (num < 5 && num != false) {
    apagaQuadro(5);
  }else if (num > 50) {
    apagaQuadro(50);
  }else {
    alert('Board inválido!')
  }
}

function apagaQuadro(num) {
  const quadro = document.getElementById('pixel-board');
  quadro.remove();
  criaPixel(num);
}