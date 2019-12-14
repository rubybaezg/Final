<?php
header("Content-type: text/html;charset=\"utf-8\"");
/// Estos 5 campos de abajo son los mismos que estan en el formualrio identificados por el atributo name
$nombre = $_POST['nombre'];
$celular = $_POST['celular'];
$mail = $_POST['mail'];
$localidad = $_POST['localidad'];
$consulta = $_POST['consulta'];
​
$header = 'From: ' . 'tls@gmx.es' . " \r\n"; /// Aca podes poner otro email tuyo o la variable $mail y se va a reemplazar con el correo que ponga el usuario en el formulario. Personalmente pongo un email mio por el tema del spam. 
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";
​
/// Estos 5 campos de abajo son los mismos que estan en el formualrio identificados por el atributo name
$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Celular: " . $celular . " \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Localidad: " . $localidad . " \r\n";
$mensaje .= "Mensaje: " . $consulta . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());
​
$para = 'rubybaez@gmx.es'; /// Aca pones el email donde van a llegar los mensajes
$asunto = 'CONSULTA WEB'; /// Aca pones el titulo (asunto) que te va a aparecer en el email
​
if (mail($para, $asunto, utf8_decode($mensaje), $header))
echo "<script type='text/javascript'>alert('Tu mensaje ha sido enviado exitosamente');</script>";
echo "<script type='text/javascript'>window.location.href='http://rseba.com.ar';</script>"; /// Aca pone la url donde queres que redirija na vez que el usuario envio el mensaje. Puede ser el home o la pagina que vos quieres.
​
?>