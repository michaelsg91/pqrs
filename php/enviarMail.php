<?php
if(isset($_POST["nombre"])){
  $destinatario="michael91sg@gmail.com";
  $asunto=$_POST["opcion"];
  $remitente=$_POST["correo"];
  $mensaje .="Tipo de documento: ". $_POST['documento'] . "\n";
  $mensaje .="Número de documento: ". $_POST['numDoc'] . "\n";
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
