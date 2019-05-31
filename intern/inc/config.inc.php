<?php

/**
 * A complete login script with registration and members area.
 *
 * @author: Nils Reimers / http://www.php-einfach.de/experte/php-codebeispiele/loginscript/
 * @license: GNU GPLv3
 * 
 * genutzt für den TCO von Conny Roloff
 * 
 */
 
//Tragt hier eure Verbindungsdaten zur Datenbank ein
// HOSTNAME:DESKTOP-BRGTU5C oder prod?
$localhost = gethostname() == 'DESKTOP-BRGTU5C' ? TRUE : FALSE;

if ($localhost) {
  $db_host = 'localhost';
} else {
  $db_host = 'rdbms.strato.de';
}
// error_log("config.inc.php: ".$db_host);
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
);


?>