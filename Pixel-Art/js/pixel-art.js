//Guardo paleta y grilla en variables globales
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];


function crearPaleta(){
for( var i= 0; i < nombreColores.length; i++){
var divsPixeles = document.createElement('div');
divsPixeles.style.background = nombreColores[i];
divsPixeles.className = 'color-paleta';
paleta.appendChild(divsPixeles);
 };


};


function crearGrilla(){
  for (var i = 0; i < 1750; i++) {
    var pixeles = document.createElement('div');
    pixeles.className = "pixeles";
    grillaPixeles.appendChild(pixeles);    
  };
};


//al hacer click en un color el indicador cambia de color
var indicador = document.getElementById('indicador-de-color');
paleta.addEventListener('click', cambiaColor);

function cambiaColor(e){
 indicador.style.backgroundColor = e.target.style.backgroundColor;

}

//cambia color de la grilla
grillaPixeles.addEventListener('click', pintado);

function pintado(e){
e.target.style.backgroundColor = indicador.style.backgroundColor;

}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
(function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicador.style.backgroundColor = colorActual;
})

);


//arrastrar color
var mauseApretado = false;
grillaPixeles.addEventListener("mousedown", apretar);
grillaPixeles.addEventListener("mouseup", suelto);
grillaPixeles.addEventListener("mouseover", mover);

function apretar(e){
  mouseApretado=true;
}

function suelto(e){
  mouseApretado=false;
}

function mover(e) {
  if (mouseApretado) {
    pintado(e);
}
}

//animar el borrado

$("#borrar").click (function () {
  var $pixelBorrado = $("#grilla-pixeles div").animate({"background-color": "#ffffff"},2000);
});

//cargar superhéroe

$("#batman").click (function () {
  cargarSuperheroe(batman);
});

$("#wonder").click (function () {
  cargarSuperheroe(wonder);
});

$("#flash").click (function () {
  cargarSuperheroe(flash);
});

$("#invisible").click (function () {
  cargarSuperheroe(invisible);
});

//guardar

$("#guardar").click (function () {
  guardarPixelArt();
});

window.onload = function () {
crearGrilla();
crearPaleta();
}













