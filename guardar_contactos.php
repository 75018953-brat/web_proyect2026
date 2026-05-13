
<?php

$conexion = new mysqli("localhost","root","","sistema_web");

if($conexion->connect_error){
    die("Error de conexión");
}

$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$sql = "INSERT INTO tb_contactos
(nombre, telefono, correo, mensaje)

VALUES

('$nombre','$telefono','$correo','$mensaje')";

if($conexion->query($sql)===TRUE){

    echo "Datos guardados correctamente";

}else{

    echo "Error al guardar";

}

?>





