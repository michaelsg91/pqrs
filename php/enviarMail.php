<?php
if(isset($_POST["nombre"])){
  $asunto=$_POST["opcion"];

if($asunto=="Petición"){
  $motivo=$_POST["motPet"];
}else if($asunto=="Queja"){
  $motivo=$_POST["motQej"];
}else if($asunto=="Reclamo"){
  $motivo=$_POST["motRec"];
}else if($asunto=="Sugerencia"){
  $motivo=$_POST["motSug"];
}

  $destinatario="michael91sg@gmail.com";
  $remitente=$_POST["correo"];
  $mensaje .="Motivo: ". $motivo . "\n";
  $mensaje .="Tipo de documento: ". $_POST['documento'] . "\n";
  $mensaje .="Número de documento: ". $_POST['doc'] . "\n";
  $mensaje .="Nombre: ". $_POST['nombre'] . "\n";
  $mensaje .="Apellido(s): ". $_POST['apellido'] . "\n\n\n";
  $mensaje .="Comentario: \n". $_POST['comentarios'] . "\n";

  $headers="From: " . $remitente . "\r\n" .
            "Reply-To:" . $remitente . "\r\n" .
            "X-Mailer: PHP/". phpversion();

  mail($destinatario,$asunto,$mensaje,$headers); //funcion mail para enviar el correo
  echo "La información se ha enviado con éxito";

}
?>
