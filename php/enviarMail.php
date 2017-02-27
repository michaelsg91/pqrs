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

$documento=$_POST['documento'];
if($documento==""){
  $documento="No especificado";
}
$doc=$_POST['doc'];
if($doc==""){
  $doc="No especificado";
}
$nombre=$_POST['nombre'];
if($nombre==""){
  $nombre="No especificado";
}
$apellido=$_POST['apellido'];
if($apellido==""){
  $apellido="No especificado";
}
  $destinatario="michael91sg@gmail.com";
  $remitente=$_POST["correo"];
  $mensaje .="Motivo: ". $motivo . "\n";
  $mensaje .="Tipo de documento: ". $documento . "\n";
  $mensaje .="Número de documento: ". $doc . "\n";
  $mensaje .="Nombre: ". $nombre . "\n";
  $mensaje .="Apellido(s): ". $apellido . "\n\n\n";
  $mensaje .="Comentario: \n". $_POST['comentarios'] . "\n";

  $headers="From: " . $remitente . "\r\n" .
            "Reply-To:" . $remitente . "\r\n" .
            "X-Mailer: PHP/". phpversion();

  mail($destinatario,$asunto,$mensaje,$headers); //funcion mail para enviar el correo
  echo "La información se ha enviado con éxito";

}
?>
