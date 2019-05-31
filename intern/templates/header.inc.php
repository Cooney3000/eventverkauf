<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>TC Olching <?= $title ?></title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- Custom styles for this template -->
    <link href="/intern/css/styles.css" rel="stylesheet">

  </head>
  <body>
  
    <nav class="navbar navbar-expand-lg navbar-light">
      
      <div>
        <img src="/images/tcoplain_0,1x.png" alt="TCO Logo">
        <div class="klein">
          <?= isset($user['vorname']) ? htmlentities(trim($user['vorname']).' '.trim($user['nachname'])) : "" ?>
        </div>
      </div>

      <button class="navbar-toggler bg-light border-secondary rounded" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" id="nav-menue">
          <li class="nav-item" id="nav-intern">
            <a class="nav-link" href="/intern/internal.php">Intern</a>
          </li>
          <li class="nav-item" id="nav-turnier">
            <a class="nav-link" href="/intern/turnier/index.php">Turnier</a>
          </li>
          <li class="nav-item" id="nav-tafel">
            <a class="nav-link" href="/intern/tafel/" target="_blank">Platztafel</a>
          </li>
          <li class="nav-item" id="nav-einstellungen">
            <a class="nav-link" href="/intern/settings.php">Einstellungen</a>
          </li>
          <li class="nav-item" id="nav-login">
            <a class="nav-link" href="/intern/login.php">Login</a>
          </li>
          <li class="nav-item" id="nav-logout">
            <a class="nav-link" href="/intern/logout.php">Logout</a>
          </li>
        </ul>
      </div>         
    </nav>