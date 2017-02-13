$(document).ready(function(){

//Ocultando objetos iniciales
$("#form").hide();
$("#op").hide();
//------------------------

var elementos=document.querySelectorAll("h2");//Seleccionando todos los elementos h2

$(".opcion").toggle(function(e){ //funcion de accion de dos cliks
  $("#form").fadeIn(1000);
  $(".opcion").fadeOut(1000);
  $(this).fadeIn(1000);
  if(e.target==elementos[0]){
  document.getElementById('label').innerHTML="Petición"; //Escribiendo en el objeto
  elementos[0].innerHTML="Peticiones - (Volver)";
  }else if(e.target==elementos[1]){
  document.getElementById('label').innerHTML="Queja";
  elementos[1].innerHTML="Quejas - (Volver)";
}else if(e.target==elementos[2]){
  document.getElementById('label').innerHTML="Reclamo";
  elementos[2].innerHTML="Reclamos - (Volver)";
}else if(e.target==elementos[3]){
  document.getElementById('label').innerHTML="Sugerencia";
  elementos[3].innerHTML="Sugerencias - (Volver)";
  }
  $("#op").val(document.getElementById('label').innerHTML); //Guardando valor del label

},
function(e){ //Funcion de regreso
  elementos[0].innerHTML="Peticiones";
  elementos[1].innerHTML="Quejas";
  elementos[2].innerHTML="Reclamos";
  elementos[3].innerHTML="Sugerencias";

  $("#form").fadeOut(1000);
  $(".opcion").fadeIn(1000);
}
);

});
