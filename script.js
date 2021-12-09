const main = document.getElementsByTagName('main')[0];

//2 e 3.
const colorPalette = document.createElement('div');
colorPalette.id = 'color-palette';
main.appendChild(colorPalette);

function criaCores(lista){
  const colorLine = document.createElement('div');
  colorPalette.appendChild(colorLine);
  for(let i=0; i < lista.length; i+=1){
    const colors = document.createElement('div');
    colors.className = 'color';
    colors.style.backgroundColor = lista[i];
    colorLine.appendChild(colors);
  }
}

let cores = ['black','red','blue','green','yellow'];

criaCores(cores);

//4.
const canvas = document.createElement('div');
canvas.id = 'pixelboard';
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


