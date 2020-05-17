<?php
# In der Navigation den aktuellen Menüpunkt auf bold setzen
$_aktuell = "navcurrent";
$_verein="";
$_mannschaften="";
$_jugend="";
$_training="";

include 'header.php';
?>
<?php
	
/* 
	Nachrichtenticker für den Trainer, wenn das Training z. B. in die Halle verlegt wird.
	Die Nachricht kann in der Seite 
				msg.php 
	bearbeitet werden.
*/
	// Die Nachricht nur ausgeben, wenn die Meldung nicht leer und von heute ist
	$file = "work/indexmessages.txt";
	$nachricht = file_get_contents($file);
	$datum = substr($nachricht, 0, 8);
	$nachricht = substr($nachricht, 9);
	
	if (date("d.m.y") != $datum || trim($nachricht) == "" ) 
	{ 
		$smsMsgClass = "hidden";
	} 
?>
		<div id="blattSmsText">
			<section id="sms_Message" class="seite <?=$smsMsgClass?>">
				<h1>Letzte Meldung:</h1><p><?=$nachricht?></p>
			</section>
		</div>
		<div id="blatt1" class="blatt">
			<section id="news" class="seite neues">
        <article class="spalte1">
          <h6>Aktuelle Neuigkeiten</h6>
          <ul class="schlaeger">
            <li>
              <strong>Corona-Regeln!</strong>
              <p>
                Bitte strengstens beachten!
              </p>
              <ul style="font-size: 0.7rem">
                <li><a href="https://www.btv.de/de/aktuelles/corona.html" target="_blank">Alle BTV Corona-News</a><br>NEU: Doppel: Um Punkte spielen nicht erlaubt</li>
                <li><a href="https://www.btv.de/dam/jcr:0be26c7f-e989-4517-ac5c-9040b5428cd7/Hygiene-%20und%20Verhaltensregeln%20des%20BTV%20f%C3%BCr%20Spieler%20Plakat.pdf" target="_blank">Hygiene- und
  Verhaltensregeln des BTV für Spieler und Erziehungsberechtigte</a></li>
              </ul>
          </li>
          </ul>
          <ul class="schlaeger">
            <li><strong>Die Magnettafel gibt es nicht mehr!</strong> <p>Plätze ab jetzt online buchen! <a href="/intern/tafel">Zur Buchung</a></p></li>
          </ul>
          <ul class="schlaeger">
            <li><strong>Mannschaftstraining!</strong> <p>Beginnt ab dem 18.5.2020! <a href="/mannschaften.php#platzbelegung">Zum Plan</a></p></li>
          </ul>
          <ul class="schlaeger">
            <li><strong>Das Clubturnier findet statt!</strong> 
              <p>
              ...in reduzierter Form, Details kommen bald! <a href="/intern/internal.php">Jetzt anmelden</a>
              </p>
            </li>
          </ul>
          <ul class="schlaeger">
            <!-- <li><strong>Players & Friends Night</strong><img class="schlaegerimg" src="images/veranstaltungen/puf.jpg" alt="Players & Friends-Flyer"></li> -->
            <li><strong>Neuer Trainer Michael Görzen</strong> <p><a href="training.php">Zum Trainer</a></p></li>
          </ul>
        </article>
				<article>
					<h3>Unsere Jugend-Sponsoren</h3	>
          <a href="http://www.keller-rolladen.de/"><img src="images/sponsoren/Logo-KR.gif" alt="Keller Rolladen"  class="img-thumbnail"/></a>
          <a href="http://www.hapag-lloyd-reisebuero.de/index.asp?Agnt=48594"><img src="images/sponsoren/hlr_herz_header.png" alt="Hapag-Lloyd Reiseb&uuml;ro"  class="img-thumbnail"/></a>
          <a href="http://www.friseurkosmetik-fuchs.de/"><img src="images/sponsoren/fuchs.jpg" alt="Friseur- und Kosmetik G&uuml;nter Fuchs"  class="img-thumbnail"/></a>
          <a href="http://www.maler-stephan.de/"><img src="images/sponsoren/maler-stephan.gif" alt="Maler Stephan"  class="img-thumbnail"/></a>
        </article>
      </section>
		</div>
		<div id="blatt4" class="blatt">
			<section id="willkommen" class="seite">
				<h2>Herzlich willkommen beim TC Olching!</h2>
				<article class="spalte1">    
					<p>Wir freuen uns, dass du den Weg auf unsere Homepage gefunden hast.
							Hier wollen wir dir Informationen rund um den TC Olching wie die laufende Saison, Angebote, Termine und 
							aktuelle Ereignisse, Ansprechpartner und alles, was von Interesse für die Mitglieder und Freunde des 
							TC Olching ist, anbieten.</p>
					<p>Der TC Olching beim Bayerischen Tennisverband: <br></p>
					<table>
						<tr>
							<td>Vereinsseite:</td><td><a href="http://www.btv.de/BTVToServe/abaxx-?$part=Vereine.content.clubDaten.clubInfo&clubId=02262&$event=displayClubInfoFromMap&prevPath=Vereine.content.promoboxes.googleMaps&singleClub=false&clubStatus=200">Link</a></td>
						</tr>
						<tr>
							<td>Mannschaften:</td><td><a href="mannschaften.php">Link</a></td>
						</tr>
						<tr>
							<td>Mannschaftsbegegnungen:</td><td><a href="http://www.btv.de/BTVToServe/abaxx-?searchTimeRange=1&searchType=1&searchTimeRangeFrom=1.5.2016&searchTimeRangeTo=31.7.2061&club=02262&federation=BTV&%24part=Vereine.content.clubDaten.clubInfoRouter&theLeaguePage=b2sClubMeetings&searchMeetings=Suchen">Link</a></td>
						</tr>
						<tr>
							<td>Namentliche Meldungen (bitte dort die richtige Spielklasse wählen):</td><td><a href="http://www.btv.de/BTVToServe/abaxx-?$part=Vereine.index.menu&docPath=/BTV-Portal/Vereine/Meldungen&nodeSel=4&docId=1034504">Link</a></td>
						</tr>
					</table>
				</article>
			</section>
		</div>

		<div id="blatt5" class="blatt">
			<section id="neumitglieder" class="seite">
				<h2>Neumitglieder und vor allem Mannschaftsspieler gesucht!</h2>
				<div class="spalte1breit">
					<h3>Wir freuen uns über jedes neue Mitglied!</h3>
					<p>
						Vergleiche hierzu unsere besonderen Angebote „Schnuppermitgliedschaft“ und „Comeback-Training“ unter
						<a href="verein.php#schnuppern">Verein</a>.
					</p>
					<p>
						Ganz besonders aber suchen wir Spielerinnen und Spieler, die eine unserer <a href="mannschaften.php">Mannschaften</a> verstärken wollen.
						Wir haben immer Bedarf für folgende Mannschaften:
					</p>
					<ul>
						<li>Damen (Bezirksklasse 2)		      </li>
						<li>Herren (Bezirksklasse 3)		  </li>
						<li>Herren 40 (Bezirksklasse 1)			  </li>
						<li>Herren 50 (Bezirksklasse 1)       </li>
						<li>Herren 50 (Bezirksklasse 2)       </li>
					</ul>
					<p>
						Wer hier Interesse hat, schreibt bitte eine kurze Mail an  <a href="mailto:mail@tcolching.de">mail@tcolching.de</a>.
					</p>
					<p>
					Ach ja: Natürlich können auch Neumitglieder, die in einer Mannschaft spielen wollen, dies über eine Schnuppermitgliedschaft realisieren. 
					</p>
				</div>
				<div class="spalte2">
					<iframe id="lkraceIframe" src="https://mybigpoint.tennis.de/services/?action=lkracenv&verband=BTV&cnt=5&verein=02262"></iframe>
					<p style="font-size:smaller">Siehe hierzu auch <a href="datenschutzerklaerung.php#dsgvolkrace">DSGVO - LK Race</a></p>
				</div>
			</section>
    </div>
    
		<div id="blatt4" class="blatt">
			<section id="olchingopen" class="seite">
        <article class="spalte1">
          <img src="images/oo2019.png" alt="Olching Open" class="breitebilder"/>
        </article>
        <article>
          <a href="https://tennispark-gernlinden.de/"><img alt="Tennispark Gernlinden" src="images/sponsoren/tennispark_gernlinden.gif" class="img-thumbnail"></a>
          <a href="http://www.jgwerbung.de/"><img alt="JG" src="images/sponsoren/JG.jpg" class="img-thumbnail"></a>
          <a href="http://www.sparkasse-ffb.de/"><img alt="SSK" src="images/sponsoren/SSK.jpg" class="img-thumbnail"></a>
          <a href="http://auto-rauscher.de/"><img alt="Rauscher" src="images/sponsoren/rauscher2.png" class="img-thumbnail"></a>
        </article>
        <article class="clean">

					<h3>Top-Tennis im Tennisclub Olching!</h3>
					<p>In Olching wird Tennis der Spitzenklasse <strong>bei freiem Eintritt</strong> präsentiert. 
					Vom <strong>30. August bis 01. September 2019</strong> richtet der TC Olching e.V. nun zum 28. Mal die Olching Open aus. Bei einem 
					Preisgeld von 3.000 € erwarten wir erneut ein hochklassiges Teilnehmerfeld und spannende Matches.</p>

					<p>Gespielt wird auf der Anlage des TC Olching, sowie auf Plätzen der befreundeten Vereine TSV Geiselbullach, 
					TC Gernlinden, TC Puchheim und TC Eichenau.</p>
					<p>
						<strong>Komplette Ausschreibung zum Download</strong>: <a href="/downloads/OlchingOpenAusschreibung19.pdf">Ausschreibung</a>.
					</p>
					<p><strong>Meldeschluss ist der 26.08.2019</strong>. Anmeldung über <a href="https://mybigpoint.tennis.de/">MyBigPoint</a>.</p>
					<p><strong>Übernachtungsmöglichkeiten</strong> in Olching findest du <a href="verein.php#uebernachtung">hier</a>.</p>

					<br>
					<p id="ooschirmherr"><strong>Schirmherrschaft:<br>
						Andreas Magg</Strong><br>
						1. Bürgermeister v. Olching
					</p>
					<br>
					<p>Ermöglicht wird dies durch das Engagement einer  Vielzahl an freiwilligen 
						Helfern und natürlich durch die Unterstützung unserer Sponsoren!
					</p>
					<img src="images/sponsoren/thomas_stief.png" alt="Design Thomas Stief" class="breitebilder"/>
          </article>

			</section>
		</div>

<?php
include 'footer.php';
?>
