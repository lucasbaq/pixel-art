const main = document.getElementsByTagName('main')[0];

//2 e 3.
const colorPalette = document.createElement('div');
colorPalette.id = 'color-palette';
main.appendChild(colorPalette);

function criaCores(lista){
  for(i=0; i < lista.length; i+=1){
    const colors = document.createElement('div');
    colors.className = 'color';
    colors.style.backgroundColor = lista[i];
    colorPalette.appendChild(colors);
  }
}

let cores = ['black','red','blue','green'];

criaCores(cores);

//4 e 5.
const canvas = document.createElement('div');
canvas.id = 'pixel-board';
main.appendChild(canvas);

function criaPixel(){
  for (let x=0; x<5; x+=1){
    const pixelLine = document.createElement('div');
    pixelLine.className = 'canvas-line';
    canvas.appendChild(pixelLine);
    for (let j=0; j<5; j+=1){
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
  }
}

criaPixel();

//6.
const colorBlack = document.getElementsByClassName('color')[0];
colorBlack.classList.add('selected');

//7.
const allColors = document.getElementsByClassName('color');
for (let i=0; i < allColors.length; i+=1){
  allColors[i].addEventListener('click', colorSelected);
}

function colorSelected(event){
  const item = event.target;
  let tempselected = document.getElementsByClassName('selected')[0];
  tempselected.classList.remove('selected');
  item.classList.add('selected');
}