<?php
/**
 * A complete login script with registration and members area.
 *
 * @author: Nils Reimers / http://www.php-einfach.de/experte/php-codebeispiele/loginscript/
 * @license: GNU GPLv3
 */

include_once("password.inc.php");

//
// Checkt, ob der User eingeloggt ist und gibt die User-Daten zurück oder macht einen Redirect zur Login-Page
//

function check_user() {

  $user = check_user_silent();

  if ( ! $user ) {
    // neuer, unbekannter Benutzer
    $targetPage = 'Location: ' . HOSTNAME . '/intern/login.php';
    header($targetPage);
    exit; // WICHTIG falls der Browser nicht redirected
  } 
  else 
  {
    return $user;
  }
}

//
// Checkt, ob der User eingeloggt ist und gibt die User-Daten oder false zurück
//
function check_user_silent() {
	global $pdo;
  
  // Serverdatum für die Javascript-App, z. B. zum Überprüfen des aktuellen Tags (Benutzer stellen Ihr Handy-Datum um, um im Voraus buchen zu können)
  //   Javascript-Zeit sind Millisekunden, daher * 1000
  setcookie("servertime", time() * 1000, time() + (3600 * 24 * 365), "/intern/"); //Valid for 1 year
  
  // Testumgebungs-Setting
  $localhost = gethostname() == 'DESKTOP-BRGTU5C' ? TRUE : FALSE;
  
  if (!isset($_SESSION['userid']) && isset($_COOKIE['identifier']) && isset($_COOKIE['securitytoken'])) 
  {
    // Es gibt bereits eine aktive Anmeldung
    $identifier     = $_COOKIE['identifier'];
		$securitytoken  = $_COOKIE['securitytoken'];
		
		$statement = $pdo->prepare("SELECT * FROM securitytokens WHERE identifier = ?");
    $statement->execute(array($identifier));
		$securitytoken_row = $statement->fetch();
    
    
    if (sha1($securitytoken) !== $securitytoken_row['securitytoken']) 
    {
      //Vermutlich wurde der Security Token gestohlen
      return false;
    }
    
    //Setze neuen Token
    $neuer_securitytoken = random_string();
    $insert = $pdo->prepare("UPDATE securitytokens SET securitytoken = :securitytoken WHERE identifier = :identifier");
    $insert->execute(array('securitytoken' => sha1($neuer_securitytoken), 'identifier' => $identifier));
    setcookie("identifier", $identifier, time() + (3600 * 24 * 365), "/intern/"); //1 Jahr Gültigkeit
    setcookie("securitytoken", $neuer_securitytoken, time() + (3600 * 24 * 365), "/intern/"); //1 Jahr Gültigkeit
    
    //Logge den Benutzer ein
    $_SESSION['userid'] = $securitytoken_row['user_id'];
  }
  
	if(!isset($_SESSION['userid'])) {
    return false;
  }
  
  // Hier holen wir jetzt die Userdaten...
  $statement = $pdo->prepare("SELECT * FROM users WHERE id = :id AND NOT (status = 'D' OR status = 'W' OR status = 'X')");
	$statement->execute(array('id' => $_SESSION['userid']));
  $user = $statement->fetch();
  
  //... und welche Berechtigungen er hat
  $statement = $pdo->prepare("SELECT * FROM permissions WHERE user_id = :user_id");
  $statement->execute(array('user_id' => $_SESSION['userid']));
  $permissions = $statement->fetch();

  $_SESSION['permissions'] = $permissions['permissions'];
  // TLOG(DBG, "${permissions['permissions']}", __LINE__);
  
	return $user;
}

/**
 * Returns true when the user is checked in, else false
 */
function is_checked_in() {
  return isset($_SESSION['userid']);
}

/**
 * Returns a random string
 */
function random_string() 
{
  if (function_exists('openssl_random_pseudo_bytes')) 
  {
    $bytes = openssl_random_pseudo_bytes(16);
		$str = bin2hex($bytes); 
  } 
  else 
  {
    //Replace your_secret_string with a string of your choice (>12 characters)
		$str = md5(uniqid('jfkfofd#dfoiriPkJhh', true));
	}	
	return $str;
}

/**
 * Returns the URL to the site without the script name
 */
function getSiteURL() {
  $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
	return $protocol.$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF']).'/';
}

/**
 * Outputs an error message and stops the further exectution of the script.
 */
function error($error_msg) {
  include("templates/header.inc.php");
	include("templates/error.inc.php");
	include("templates/footer.inc.php");
	exit();
}
function endsWith($haystack, $needle)
{
  $length = strlen($needle);
  if ($length == 0) {
    return true;
  }
  
  return (substr($haystack, -$length) === $needle);
}
// function console_log( $data ) {
  //   echo '<script>';
  //   echo 'console.log('. json_encode( $data ) .')';
  //   echo '</script>';
// }

function TLOG($level, $msg, $line)
{
  if ($level <= SHOWLOGS) {
    $page = basename($_SERVER['PHP_SELF']);
    error_log("[$page, $line]: $msg");
  }
}

function TECHO($level, $msg)
{
  if ($level <= SHOWLOGS) {
    $page = basename($_SERVER['PHP_SELF']);
    echo("<code class=\"text-dark\">\r\n[$page]: $msg</code>");
  }
}

function getFilename($fullpath) {

  $delim = '/';
  if (strpos($fullpath, '\\') !== false) {
    $delim = '\\';
  }

  $a = explode($delim, $fullpath);
  $a = array_pop($a);
  $f = explode('.', $a);

  return ($f[0]);


}