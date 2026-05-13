<?php
// Conexión a la base de datos
$conexion = mysqli_connect("localhost", "root", "", "sistema_web");

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

// Recibir los datos del formulario de clientes
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // IMPORTANTE: Estos nombres deben coincidir con el 'name' de tu HTML
    $nombre   = $_POST['nombre_cliente'];
    $telefono = $_POST['telefono_cliente'];
    $correo   = $_POST['correo_cliente'];
    $mensaje  = $_POST['mensaje_cliente'];

    // Insertar en la tabla tb_clientes
    $sql = "INSERT INTO tb_clientes (nombre, telefono, correo, mensaje) 
            VALUES ('$nombre', '$telefono', '$correo', '$mensaje')";

    if (mysqli_query($conexion, $sql)) {
        echo "<script>
                alert('¡Cliente registrado en la base de datos!');
                window.location.href='clientes.html';
              </script>";
    } else {
        echo "Error al guardar: " . mysqli_error($conexion);
    }
}

mysqli_close($conexion);
?>