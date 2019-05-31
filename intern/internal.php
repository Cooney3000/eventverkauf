<?php
session_start();
require_once("inc/config.inc.php");
require_once("inc/functions.inc.php");
require_once("inc/permissioncheck.inc.php");

// Einstieg in den internen Bereich

//Überprüfe, dass der User eingeloggt und berechtigt ist
//Der Aufruf von check_user() muss in alle internen Seiten eingebaut sein
$user = check_user();

$title = "Intern Startseite";
include("templates/header.inc.php");
?>
<script>
    // var element = document.getElementById("nav-intern");
    // element.classList.add("active");
    document.getElementById("nav-intern").classList.add("active");
    document.getElementById("nav-einstellungen").classList.remove("active");
    document.getElementById("nav-turnier").classList.remove("active");
    document.getElementById("nav-tafel").classList.remove("active");
    document.getElementById("nav-login").classList.remove("active");
    document.getElementById("nav-logout").classList.remove("active");
</script>
<div class="container main-container">
<h2>Interner Bereich - du bist angemeldet als <?= htmlentities(trim($user['vorname']).' '.trim($user['nachname'])) ?></h2>

<?php
if (checkPermissions(PERMISSIONS::VORSTAND) ) {
  if (isset($_POST['activate']) || isset($_POST['deactivate'])) {
    $p = isset($_POST['activate']) ? $_POST['activate'] : (isset($_POST['deactivate']) ? $_POST['deactivate'] : '');
    if ($p != '') {
      $pa = preg_split('/-/', $p);
      $statement = $pdo->prepare("UPDATE users SET status = ? WHERE id = ?");
      $statement->execute([$pa[1], $pa[0]]);
    }
  }
  $statement = $pdo->prepare('(SELECT * FROM users WHERE status <> "T" ORDER BY status DESC, nachname, vorname)');
  $result = $statement->execute();
?>
  <h3>Aktuell registrierte Benutzer (A = Aktiv, P = Passiv, D = Deaktiviert, W = Wartet auf Aktivierung)</h3>
  <div class="mx-3">
    <form action="internal.php" method="post">
      <table class="table table-bordered table-light tbl-small">
        <tr>
          <th>Status</th>
          <th>#</th>
          <th>Vorname</th>
          <th>Nachname</th>
          <th>E-Mail</th>
          <th>Festnetz</th>
          <th>Mobil</th>
          <th>Registriert am</th>
          <th>Aktion</th>
        </tr>
<?php 
  while($row = $statement->fetch()) {
    $danger = ($row['status'] == 'W' || $row['status'] == 'D') ? true : false;
    $classname = $danger ? 'text-danger' : '';
?>
      <tr>
        <td class="<?= $classname ?>"><?= $row['status'] ?></td>
        <td class="<?= $classname ?>"><?=$row['id']?></td>
        <td class="<?= $classname ?>"><?=$row['vorname']?></td>
        <td class="<?= $classname ?>"><?=$row['nachname']?></td>
        <td class="<?= $classname ?>"><a href="mailto:<?=$row['email']?>"><?=$row['email']?></a></td>
        <td class="<?= $classname ?>"><?=$row['festnetz']?></td>
        <td class="<?= $classname ?>"><?=$row['mobil']?></td>
        <td class="<?= $classname ?>"><?=substr($row['created_at'], 0, 10)?>
        <td>
<?php 
/*
if ($danger) { ?>
        <button type="submit" name="activate" value="<?=$row['id']?>-A" class="btn-sm btn-success btn-block py-0">Aktivieren</button>
<?php 
}
*/
      if ($row['status'] == 'A') { ?>
          <button type="submit" name="deactivate" value="<?=$row['id']?>-D" class="btn-sm btn-danger btn-block py-0">Deaktivieren</button>
<?php } ?>
        </td>
      </tr>
<?php
  }
?>
    </table>
  </form>
  </div>
<?php
}
?>


</div>
<?php 
include("templates/footer.inc.php")
?>