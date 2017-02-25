$(document).ready(function(){

//------ Start toggle function ---------------------------
//Ocultando objetos iniciales
$(".volver").hide();
$("#form").hide();
$("#op").hide();
$(".motPet").hide();
$(".motQej").hide();
$(".motRec").hide();
$(".motSug").hide();


//------------------------

var elementos=document.querySelectorAll("h2");//Seleccionando todos los elementos h2

$(".opcion").click(function(e){ //funcion de accion de dos cliks
  $("#form").fadeIn(1000);
  $(".opcion").fadeOut(1000);
  $(this).fadeIn(1000);
  if(e.target==elementos[0]){
  document.getElementById('label').innerHTML="Petición"; //Escribiendo en el objeto
  $(".motPet").show();
  }else if(e.target==elementos[1]){
  document.getElementById('label').innerHTML="Queja";
  $(".motQej").show();
}else if(e.target==elementos[2]){
  document.getElementById('label').innerHTML="Reclamo";
  $(".motRec").show();
}else if(e.target==elementos[3]){
  document.getElementById('label').innerHTML="Sugerencia";
  $(".motSug").show();
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
  $(".motPet").hide();
  $(".motQej").hide();
  $(".motRec").hide();
  $(".motSug").hide();

});
//------- End toggle function -----------------------------


//------- Start validate function ------------------

jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Solo letras");


$("#form").validate({
  rules:{
    nombre:"lettersonly",
    apellido: "lettersonly",
    doc:{
      number: true,
      minlength: 6,
      maxlength: 13,
    },
    correo:{
      email: true,
    },
    comentarios:"required"

  },//end rules

  messages:{
    nombre:"Formato no valido",
    apellido:"Formato no valido",
    doc:{
      number:"Formato no válido",
      minlength: "Mínimo 6 digitos",
      maxlength: "Máximo 13 digitos",
    },

    correo:{
      email:"Formato no válido",
    },
    comentarios:"Campo requerido"
  }
});//-------- End validate function

});//--End document
