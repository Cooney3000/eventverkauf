<?php 
session_start();
require_once("../inc/config.inc.php");
require_once("../inc/functions.inc.php");
require_once("../inc/permissioncheck.inc.php");

//Überprüfe, dass der User eingeloggt und berechtigt ist
$user = check_user();

$title = "Begegnungen";
include("../templates/header.inc.php")
?>
<script>
    document.getElementById("nav-intern").classList.remove("active");
    document.getElementById("nav-einstellungen").classList.remove("active");
    document.getElementById("nav-turnier").classList.add("active");
    document.getElementById("nav-login").classList.remove("active");
    document.getElementById("nav-logout").classList.remove("active");
</script>

<div class="container main-container registration-form">

<?php 
  require_once("turnierheader.inc.php");
?> 

<h1>Begegnungen</h1>
<ul>
  <li><a href="begegnungen.php?order=0">Nach Zeitpunkt</a>                 
  <li><a href="begegnungen.php?order=1">Nach Spieler 1</a>      
  <li><a href="begegnungen.php?order=2">Nach Spieler 2</a>      
  <li><a href="begegnungen.php?order=3">Nach Kategorie, Zeitpunkt</a>                      
</ul>
<?php

$order = [
  "Start", 
  "Spieler_1, Start", 
  "Spieler_2, Start", 
  "Kategorie, Start"
];

if (isset($_GET["order"])) {
  $orderIndex = $_GET["order"];
} else {
  $orderIndex = 0;
}
$orderSQL = $order[$orderIndex];

$sql = <<<EOT
SELECT 
    b.starts_at as Start,
	t1.category AS Kategorie,
    CONCAT(p1.nachname, ' ', p1.vorname) AS Spieler_1,
    CONCAT(p2.nachname, ' ', p2.vorname) AS Spieler_2,
    b.comment AS comment
  FROM bookings AS b 
  LEFT JOIN users AS p1 ON b.player1 = p1.id
  LEFT JOIN users AS p2 ON b.player2 = p2.id
  LEFT JOIN tournament_players AS t1 ON CONCAT(p1.nachname, ' ', p1.vorname) = t1.spielername
  LEFT JOIN tournament_players AS t2 ON CONCAT(p2.nachname, ' ', p2.vorname) = t2.spielername
  WHERE b.booking_type = "ts-turnier"
  ORDER BY $orderSQL
EOT;
// error_log("Begegnungen: ".$sql);
$statement = $pdo->prepare($sql);
$result = $statement->execute();
if($result) {
?>
    <br>
    <div class="mx-3">
    <table class="table table-bordered table-light tbl-small">
      <thead>
        <tr>
          <th>#</th>
          <th>Start</th>
          <th>Kat</th>
          <th>Spieler 1</th>
          <th>Spieler 2</th>
          <th>Kommentar</th>
        </tr>
      </thead>
<?php
  $gw = "";
  $order = ['Start', 'Spieler_1', 'Spieler_2', 'Kategorie'];
  $lfd = 1;
  while($row = $statement->fetch()) {
    if ( ($orderIndex == 3) && ($gw != $row[$order[$orderIndex]]) ) {
      echo '<tr style="background-color: black"><td></td><td></td><td></td><td></td><td></td><td></td><//tr>';
      $gw = $row[$order[$orderIndex]];
      $lfd = 1;
    }
?>
        <tr style="height:1.3rem">
          <td><?=$lfd++?></td>
          <td><?=substr($row['Start'],8,2).'.'.substr($row['Start'],5,2).'.'.substr($row['Start'],0,4).' '.substr($row['Start'],11,5)?></td>
          <td><?=$row['Kategorie']?></td>
          <td><?=$row['Spieler_1']?></td>
          <td><?=$row['Spieler_2']?></td>
          <td><?=$row['comment']?></td>
        </tr>
<?php
  }
  echo '</table>';
} else {
  echo 'Beim Lesen der Daten ist leider ein Fehler aufgetreten. Bitte benachrichtige conny.roloff@tcolching.de<br>';
}

?>
</div>
<?php 
include("../templates/footer.inc.php")
?>