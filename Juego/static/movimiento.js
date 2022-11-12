var character = document.querySelector(".character");
var map = document.querySelector(".map");

//comienza en el centro del mapa
var x = 90;
var y = 34;
var held_directions = []; //Que botonoes estamos apretando
var speed = 1; // Razón de movimiento del personaje

const placeCharacter = () => {

    var pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
);

const held_direction = held_directions[0];
if (held_direction) {
    if (held_direction === directions.right) {x += speed;}
    if (held_direction === directions.left) {x -= speed;}
    if (held_direction === directions.down) {y += speed;}
    if (held_direction === directions.up) {y -= speed;}
    character.setAttribute("facing", held_direction);
}
character.setAttribute("walking",held_direction ? "true" : "false");

//limits
    var leftLimit = -8;
    var rightLimit = (16 * 11)+8;
    var topLimit = -8 + 32;
    var bottomLimit = (16 * 7);
    if (x < leftLimit) { x = leftLimit; }
    if (x > rightLimit) { x = rightLimit; }
    if (y < topLimit) { y = topLimit; }
    if (y > bottomLimit) { y = bottomLimit; }


   var camera_left = pixelSize * 66;
   var camera_top = pixelSize * 42;

    map.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0 )`;
    character.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`; 
}
//. loop del juego
const directions = {
    up:"up",
    down:"down",
    left:"left",
    right:"right",
}
const keys = {
    38:directions.up,
    37:directions.left,
    39:directions.right,
    40:directions.down
}
document.addEventListener("keydown", (e) => {   //Cuando apretas un boton
    var dir= keys[e.which];
    if(dir && held_directions.indexOf(dir) === -1) {
        held_directions.unshift(dir)
    }
})

document.removeEventListener("keyup", (e) => {  //cuando dejas de apretar un boton
    var dir = keys[e.which];
    var index = held_directions.indexOf(dir)
    if (index > -1) {
        held_directions.splice(index,1)
    }
});