<?php 

session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css">
    <link rel="stylesheet" href="style_home.css">
    <title>Bienvenido</title>
</head>
<body>
      <!--encabezado-->   
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#"><?php echo "<h1>Bienvenido(a) " . $_SESSION['username'] . " a tu lista de que haceres.</h1>"; ?></a>
      </div>
      <button type="button" class="btn btn-warning"><a href="logout.php">Cerrar sesion</a></button>

    </nav>
    </body>
     <!--contenedor principal-->

    <div class="container">
      <div class="row my-5">
        <div class="col-md-4">

          <div class="card">
            <div class="card-body">
              <!-- contenido del registro de tareas -->
              <form id="formTask">
                <div class="form-group">
                  <input type="text" id="title" placeholder="Titulo de tu tarea" class="form-control">
                </div>
                <div class="form-group">
                  <textarea id="description" cols="30" rows="10" class="form-control" placeholder="Descripcion de tu tarea"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-block">AGREGAR TAREA</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div id="tasks"></div>
        </div>
      </div>
    </div>
    <!-- scrip-->
    <script src="app.js"></script>
  </body>
</html>