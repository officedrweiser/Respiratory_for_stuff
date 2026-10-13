# Mein Uni-Kalender

Ein persönlicher Stundenplan nach dem Vorbild des Kalenders in der Studo-App.
Er ist nur für den Eigengebrauch gedacht. Die App läuft als Web-App auf GitHub Pages
und lässt sich am iPhone wie eine normale App auf den Home-Bildschirm legen.

**Adresse der App:** <https://officedrweiser.github.io/Respiratory_for_stuff/uni-kalender/>
(funktioniert, sobald Schritt 1 unten erledigt ist)

## Was die App kann

- **Stundenplan aus dem Uni-System**, automatisch aktualisiert über GitHub (siehe Schritt 3),
  per iCal-Link oder als .ics-Datei (CAMPUSonline/TUGonline, TISS, u:space, Moodle,
  Google, iCloud, Outlook …)
- **Tag, Woche, Liste**: Zeitraster wie im Hörsaal-Aushang, Wochenleiste mit Punkten,
  rote Jetzt-Linie, Anzeige „Jetzt“ und „Als Nächstes“, Kalenderwoche und Semester (WS/SS)
- **Kurse automatisch erkannt**: jede Lehrveranstaltung bekommt eine eigene Farbe,
  der Typ (VO, UE, VU, SE, PS …) wird erkannt, Kurse lassen sich ausblenden
  (z. B. Parallelgruppen, die du nicht besuchst)
- **Änderungen sichtbar**: verschobene oder verlegte Termine sind als „Geändert“ markiert
  (mit Angabe, was vorher war), abgesagte als „Entfällt“, neue als „Neu“
- **Prüfungen hervorgehoben** (Prüfung, Klausur, Zwischentest, Kolloquium …)
- **Eigene Termine** (Lerngruppe, Prüfung, Abgabe …), auch wöchentlich wiederholt
- **Notizen** zu jedem Uni-Termin, **Raum auf der Karte** öffnen
- **Aufgaben** mit Fälligkeitsdatum und Kurs. Sie erscheinen auch im Kalender.
- **Offline**: Einmal geladen, geht die App auch ohne Internet auf.
- **Sicherung** als Datei, Export als .ics für Apple oder Google Kalender

Bedienung: Am iPhone nach links oder rechts wischen, um zu blättern. Am Mac geht das mit
den Pfeiltasten, `T` springt zu heute, `D`/`W`/`L` wechseln die Ansicht.

## Einrichten

### 1. GitHub Pages einschalten (einmalig, am Computer)

1. Auf github.com das Repository `Respiratory_for_stuff` öffnen.
2. Oben auf **Settings**, dann links in der Seitenleiste auf **Pages**.
3. Bei **Build and deployment → Source** den Eintrag **GitHub Actions** wählen.
   Die darunter vorgeschlagenen Vorlagen (z. B. „Static HTML“, „Jekyll“) **nicht** anklicken.
   Der passende Ablauf liegt schon im Repository.
4. Oben auf **Actions**, links **Uni-Kalender veröffentlichen** anklicken,
   rechts **Run workflow** und nochmals **Run workflow** (Zweig `claude/safari-daily-7am-open-hu1h9t`).
5. Nach etwa einer Minute ist die App unter der Adresse oben erreichbar.

Ab jetzt veröffentlicht GitHub jede Änderung an der App von selbst.

### 2. Auf das iPhone holen

1. Die Adresse oben in **Safari** öffnen.
2. Auf **•••** tippen, dann **Teilen**. Siehst du unten oder oben direkt ein Teilen-Symbol,
   tippe gleich darauf.
3. Nach unten scrollen, **Zu Home-Bildschirm hinzufügen** wählen.
   Fehlt der Eintrag: ganz unten **Aktionen bearbeiten** und ihn dort hinzufügen.
4. **Als Web-App öffnen** eingeschaltet lassen (ab iOS 26), dann **Hinzufügen**.
5. Die App über das neue Symbol öffnen, beim ersten Mal mit Internet.

**Wichtig:** Die App auf dem Home-Bildschirm hat **eigene Daten**, getrennt vom Safari-Tab.
Richte sie deshalb im geöffneten Home-Bildschirm-Symbol ein, nicht im Safari-Tab.
Voraussetzung ist iOS 17.4 oder neuer.

### 3. Stundenplan automatisch holen lassen (empfohlen)

Die meisten Uni-Server erlauben einer Webseite nicht, den Kalender direkt zu laden.
Deshalb übernimmt das GitHub: Alle zwei Stunden holt eine GitHub-Aktion deinen
Stundenplan vom Uni-Server, **verschlüsselt ihn mit deinem Passwort** und legt ihn
neben die App. Die App entschlüsselt ihn auf dem iPhone. So bleibt der Stundenplan
von selbst aktuell, wie bei Studo.

1. **iCal-Link besorgen:** Im Uni-System beim Kalender oder Stundenplan nach „Export“,
   „Abonnieren“, „Veröffentlichen“ oder „iCal“ suchen und den Link kopieren.
   Die App zeigt unter *Quellen → Wo finde ich den Kalender-Link meiner Uni?* Hinweise
   für die gängigen Systeme.
2. **Passwort erzeugen:** In der App unter *Quellen → Automatisch über GitHub →
   So richtest du das ein* auf **Sicheres Passwort erzeugen** tippen und es kopieren.
   Am besten gleich im Passwort-Manager (z. B. iCloud-Schlüsselbund) speichern.
3. **Zwei Secrets bei GitHub anlegen:** *Settings*, links unter „Security“ auf
   *Secrets and variables → Actions*, dann **New repository secret**. Bei *Name* und
   *Secret* eintragen, mit **Add secret** speichern:
   - Name `UNIKAL_ICAL_URL`, Secret: dein iCal-Link
   - Name `UNIKAL_PASSWORT`, Secret: das Passwort aus Schritt 2

   Die Namen genau so schreiben, sonst findet die Aktion sie nicht.
4. **Einmal starten:** *Actions → Uni-Kalender veröffentlichen → Run workflow*.
5. **In der App** (vom Home-Bildschirm aus) unter *Quellen* auf **Jetzt abgleichen** tippen,
   dann das Passwort eingeben und **Entschlüsseln und laden** tippen.
   Danach gleicht die App bei jedem Öffnen ab.

**Was ist öffentlich?** Das Repository ist öffentlich. Der Programmcode und die
verschlüsselte Datei `daten/stundenplan.json` sind für alle abrufbar. Lesbar ist
der Stundenplan nur mit dem Passwort. Dein iCal-Link und das Passwort liegen als
Secrets geschützt bei GitHub und erscheinen nicht in den Protokollen. Auf dem
iPhone liegt das Passwort nur in der App, nicht in Sicherungsdateien.

**Ohne Schritt 3** geht es auch: Lade die .ics-Datei am Mac herunter, importiere sie
unter *Quellen → Datei importieren* und übertrage den Stand per *Sicherung speichern*
und *Sicherung laden* (z. B. über AirDrop oder iCloud Drive) aufs iPhone.

## Gut zu wissen

- **Pause nach 60 Tagen:** GitHub schaltet den Zwei-Stunden-Abgleich in öffentlichen
  Repositories ab, wenn 60 Tage lang nichts im Repository passiert, etwa in den Ferien.
  Die App zeigt dann „Stundenplan nicht aktuell“ und weiter den letzten Stand.
  Wieder einschalten: *Actions → Uni-Kalender veröffentlichen → Enable workflow*.
- **Passwort ändern oder vergessen:** Neues Passwort in der App erzeugen, bei GitHub das
  Secret `UNIKAL_PASSWORT` ändern, *Actions → Uni-Kalender veröffentlichen → Run workflow*
  starten. Danach in der App unter *Quellen* auf **Anderes Passwort eingeben** tippen
  (bzw. nach „Alle Daten löschen“ einfach das neue Passwort eingeben).
- **Fehlermeldung „not allowed to deploy to github-pages“:** *Settings → Environments →
  github-pages → Deployment branches and tags* den Zweig
  `claude/safari-daily-7am-open-hu1h9t` erlauben oder „No restriction“ wählen.
- **Link ungültig:** Ändert die Uni deinen Kalender-Link, schlägt der Ablauf fehl (rot unter
  *Actions*, GitHub meldet fehlgeschlagene Läufe in der Regel per E-Mail). Dann das Secret
  `UNIKAL_ICAL_URL` aktualisieren. Bis dahin bleibt der letzte Stand online.
- **Daten sichern:** Wer das Symbol vom Home-Bildschirm löscht, löscht auch Notizen,
  eigene Termine und Aufgaben. Deshalb ab und zu unter *Quellen* eine Sicherung speichern.
  Den Stundenplan selbst holt die App nach Eingabe des Passworts jederzeit neu von GitHub.
- **Erinnerungen:** Push-Benachrichtigungen vor Lehrveranstaltungen gibt es nicht. Wer
  Erinnerungen will, kann den iCal-Link zusätzlich in Apple Kalender abonnieren
  (*Kalender → Kalender hinzufügen → Kalenderabonnement hinzufügen*) und dort Hinweise einstellen.
- **Andere Wege:** Am Mac lässt sich `index.html` auch direkt in Safari öffnen. Die
  claude.ai-Version speichert im claude.ai-Konto, kann aber nichts automatisch laden.

## Dateien

| Datei | Zweck |
| --- | --- |
| `index.html` | die ganze App (Aussehen, iCal-Leser, Speicher, Entschlüsselung, Bedienung) |
| `sw.js` | Offline-Zwischenspeicher für die Web-App |
| `manifest.webmanifest`, `icon*.png`, `icon.svg` | Name und Symbol für den Home-Bildschirm |
| `../.github/workflows/uni-kalender.yml` | GitHub-Aktion: veröffentlicht die App und holt den Stundenplan |
| `../.github/scripts/stundenplan-verschluesseln.mjs` | verschlüsselt den Stundenplan in der GitHub-Aktion |
