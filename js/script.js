$(document).ready(function(){
$("#form").hide();
$("#volver").hide();

var elementos=document.querySelectorAll("h2");

$(".opcion").toggle(function(e){
  $("#volver").fadeIn(1000);
  $("#form").fadeIn(1000);
  $(".opcion").fadeOut(1000);
  $(this).fadeIn(1000);
  if(e.target==elementos[0]){
  document.getElementById('label').innerHTML="Petición:";
  }else if(e.target==elementos[1]){
  document.getElementById('label').innerHTML="Queja:";
}else if(e.target==elementos[2]){
  document.getElementById('label').innerHTML="Reclamo:";
}else if(e.target==elementos[3]){
  document.getElementById('label').innerHTML="Sugerencia:";
  }
},
function(){
  $("#volver").fadeOut(1000);
  $("#form").fadeOut(1000);
  $(".opcion").fadeIn(1000);
}
);


$("#volver").click(function(){
  $("#volver").fadeOut(1000);
  $("#form").fadeOut(1000);
  $(".opcion").fadeIn(1000);
  return false;
});


});
