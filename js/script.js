$(document).ready(function(){

//------ Start toggle function ---------------------------
//Ocultando objetos iniciales
$(".volver").hide();
$("#form").hide();
$("#op").hide();
//------------------------

var elementos=document.querySelectorAll("h2");//Seleccionando todos los elementos h2

$(".opcion").click(function(e){ //funcion de accion de dos cliks
  $("#form").fadeIn(1000);
  $(".opcion").fadeOut(1000);
  $(this).fadeIn(1000);
  if(e.target==elementos[0]){
  document.getElementById('label').innerHTML="Petición"; //Escribiendo en el objeto
  }else if(e.target==elementos[1]){
  document.getElementById('label').innerHTML="Queja";
}else if(e.target==elementos[2]){
  document.getElementById('label').innerHTML="Reclamo";
}else if(e.target==elementos[3]){
  document.getElementById('label').innerHTML="Sugerencia";
  }
  $("#op").val(document.getElementById('label').innerHTML); //Guardando valor del label
  $(".volver").show();
});

$(".volver").click(function(e){
  elementos[0].innerHTML="Peticiones";
  elementos[1].innerHTML="Quejas";
  elementos[2].innerHTML="Reclamos";
  elementos[3].innerHTML="Sugerencias";

  $("#form").fadeOut(1000);
  $(".opcion").fadeIn(1000);
  $(".volver").hide();
});
//------- End toggle function -----------------------------


//------- Start validate function ------------------
$("#form").validate({
  rules:{
    nombre:"required",
    apellido:"required",
    doc:{
      number: true,
      minlength: 6,
      maxlength: 14,
      required: true
    },

    correo:{
      email: true,
      required: true
    },
    comentarios:"required"

  },//end rules

  messages:{
    nombre:"Campo requerido",
    apellido:"Campo requerido",
    doc:{
      number:"Formato no válido",
      minlength: "Mínimo 6 digitos",
      maxlength: "Máximo 14 digitos",
      required:"Campo requerido"
    },

    correo:{
      email:"Formato no válido",
      required:"Campo requerido"
    },
    comentarios:"Campo requerido"
  }
});//-------- End validate function

});//--End document
