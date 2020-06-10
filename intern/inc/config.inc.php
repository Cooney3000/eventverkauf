<?php

// Msg-Levels
define ("CRITICAL", 10);
define ("ERROR", 20);
define ("WARNING", 30);
define ("INFO", 40);
define ("DBG", 50);

// Verbindungsdaten zur Datenbank
// HOSTNAME:DESKTOP-BRGTU5C oder prod?
$localhost = gethostname() == 'DESKTOP-BRGTU5C' ? TRUE : FALSE;

if ($localhost) {
  $db_host = 'localhost';
  define ("SHOWLOGS", DBG);
  define("DEBUG", true);
  define ("HOSTNAME", "http://localhost");
} else {
  $db_host = 'rdbms.strato.de';
  define ("HOSTNAME", "https://www.tcolching.de");
  define ("SHOWLOGS", ERROR);
  define ("DEBUG", false);
}

$db_name = 'DB3601681';
$db_user = 'U3601681';
$db_password = 'klaP-54#bf';
$pdo = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );

$fehlerMsg = array (
  'dbconnect' => 'Connection zur Datenbank fehlgeschlagen!',
  'platzParam' => 'Parameter für Tag oder Platz fehlen.',
);
$fehlerAction = 'Bitte benachrichtigen Sie conny.roloff@live.de';

$CONFIG = array (
  'webmasterMailAddress' => 'webmaster@tcolching.de',
  'optinLinkDuration' => 72,
  'activeTournament' => 3,
  'turniertyp' => "ts-turnier",
  'gastId' => 1,
  'mitgliedId' => 25,
  'delimiter' => "§§§"
);
?>
