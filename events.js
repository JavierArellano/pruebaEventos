/*1. Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert.
2. Captura el movimiento del ratón, para que se muestre la posición en la que se
encuentra en cada momento.
4. Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón
en dos colores diferentes. Para ello primero simularemos que disponemos de un
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño
(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la
tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada.
5. Añade las siguientes funcionalidades al ejercicio anterior:
◦ Borrado de lineas con el ratón (mediante la pulsación del botón que tú
decidas)
◦ Borrar por completo el canvas (con un botón).
9. Crea una página web que haciendo uso de eventos permita arrastrar una imagen
haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
el botón).
10.Mejora el ejercicio anterior para que se pueda hacer en una página con un número
cualquiera de imágenes.*/

/*1
document.addEventListener("click", alerta);
function alerta(event){
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    alert("X coords: " + x + ", Y coords: " + y);
}
*/
/*2
document.addEventListener("mousemove", coords);
function coords(event){
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;
    document.getElementById('prueba').innerHTML = "X coords: " + x + ", Y coords: " + y;
}
*/
//shift 16
//ctrl 17
var color = '';
document.addEventListener("keydown", tecla);
document.addEventListener("keyup", notecla);
function createTabla(tamaño) {
    let tabla = document.createElement('table');
    tabla.id = 'tabla';
    for (let i=0; i<tamaño; i++) {
		let tr = tabla.insertRow();
		for (let j=0;j<tamaño; j++){
            let td = tr.insertCell();
            td.addEventListener("mouseover", dibuja);
        }
    }
    document.body.appendChild(tabla);
}
function notecla(){
    color = '';
}
function tecla(e){
    switch (e.keyCode){
        case 16:
            color = 'blue';
            break;
        case 17:
            color = 'red';
            break;
    }
}
function dibuja(e){
    e.currentTarget.style.backgroundColor = color;
}
window.onload = function(){
    createTabla(100);
}