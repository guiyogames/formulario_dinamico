//Datos del formulario//

var form = document.getElementById("form");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var edad = document.getElementById("edad");
var texto = document.getElementById("mensaje");
var envio = document.getElementById("envio");
var submit = document.getElementById("submit");
var label_nombre = document.getElementById("label_nombre");
var label_apellidos = document.getElementById("label_apellidos");
var label_edad = document.getElementById("label_edad");
var label_mensaje = document.getElementById("label_mensaje");

//Botones de acción//


var button_blue = document.getElementById("start");
var button_retro = document.getElementById("retro");
var button_neon = document.getElementById("neon");

//Boton con los etilos principales//

button_blue.addEventListener("click", function(){

    label_nombre.style.color = "white";
    label_apellidos.style.color = "white";
    label_edad.style.color = "white";
    label_mensaje.style.color = "white";
    envio.style.color = "white";
    form.style.background = "#43439d";
    form.style.borderRadius = "20px";
    form.style.borderStyle = "solid";
    form.style.borderWidth = "1px";
    form.style.borderColor = "wheat";
    nombre.style.borderRadius = "20px";
    nombre.style.borderStyle = "solid";
    nombre.style.borderWidth = "1px";
    nombre.style.borderColor = "wheat";
    nombre.style.background ="white";
    apellidos.style.borderRadius = "20px";
    apellidos.style.borderStyle = "solid";
    apellidos.style.borderWidth = "1px";
    apellidos.style.borderColor = "wheat";
    apellidos.style.background ="white";
    edad.style.borderRadius = "20px";
    edad.style.borderStyle = "solid";
    edad.style.borderWidth = "1px";
    edad.style.borderColor = "wheat";
    edad.style.background ="white";
    texto.style.borderRadius = "20px";
    texto.style.borderStyle = "solid";
    texto.style.borderWidth = "1px";
    texto.style.borderColor = "wheat";
    texto.style.background ="white";
    envio.style.borderRadius = "20px";
    envio.style.borderStyle = "solid";
    envio.style.borderWidth = "1px";
    envio.style.borderColor = "wheat";
    envio.style.background = "#3a599c";

  });

//Boton en función click para retro//
button_retro.addEventListener("click", function () {
  label_nombre.style.color = "black";
  label_apellidos.style.color = "black";
  label_edad.style.color = "black";
  label_mensaje.style.color = "black";
  form.style.background = "white";
  form.style.borderRadius = "0px";
  form.style.border = "2px solid black";
  nombre.style.border = "2px solid black";
  nombre.style.borderRadius = "0px";
  nombre.style.background ="white";
  apellidos.style.border = "2px solid black";
  apellidos.style.borderRadius = "0px";
  apellidos.style.background ="white";
  edad.style.border = "2px solid black";
  edad.style.borderRadius = "0px";
  edad.style.background ="white";
  texto.style.border = "2px solid black";
  texto.style.borderRadius = "0px";
  texto.style.background ="white";
  envio.style.border = "2px solid black";
  envio.style.borderRadius = "0px";
  envio.style.background = "#ccc";
  envio.style.color = "black";
  
});

//Tercer boton Neon//

button_neon.addEventListener("click", function(){

    label_nombre.style.color = "yellow";
    label_apellidos.style.color = "yellow";
    label_edad.style.color = "yellow";
    label_mensaje.style.color = "yellow";
    form.style.background = "black";
    form.style.borderRadius = "20px";
    form.style.border = "2px solid black";
    nombre.style.border = "2px solid black";
    nombre.style.borderRadius = "20px";
    nombre.style.background="#f6e82a";
    apellidos.style.border = "2px solid black";
    apellidos.style.borderRadius = "20px";
    apellidos.style.background="#f6e82a";
    edad.style.border = "2px solid black";
    edad.style.borderRadius = "20px";
    edad.style.background="#f6e82a";
    texto.style.border = "2px solid black";
    texto.style.borderRadius = "20px";
    texto.style.background="#f6e82a";
    envio.style.border = "2px solid black";
    envio.style.borderRadius = "20px";
    envio.style.background = "yellow";
    envio.style.color = "black";
    
});

