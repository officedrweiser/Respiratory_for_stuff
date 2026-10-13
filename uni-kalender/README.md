# Mein Uni-Kalender

Ein persönlicher Stundenplan nach dem Vorbild des Kalenders in der Studo-App.
Er ist nur für den Eigengebrauch gedacht. Die ganze App steckt in `index.html` und
braucht weder Server noch Konto.

## Was die App kann

- **Stundenplan aus dem Uni-System**: iCal-Link abonnieren oder .ics-Datei importieren
  (CAMPUSonline/TUGonline, TISS, u:space, Moodle, Google, iCloud, Outlook …)
- **Tag, Woche, Liste**: Zeitraster wie im Hörsaal-Aushang, Wochenleiste mit Punkten,
  rote Jetzt-Linie, Anzeige „Jetzt“ und „Als Nächstes“, Kalenderwoche und Semester (WS/SS)
- **Kurse automatisch erkannt**: jede Lehrveranstaltung bekommt eine eigene Farbe,
  der Typ (VO, UE, VU, SE, PS …) wird erkannt, Kurse lassen sich ausblenden
  (z. B. Parallelgruppen, die du nicht besuchst)
- **Änderungen sichtbar**: Beim Aktualisieren werden verschobene oder verlegte Termine
  als „Geändert“ markiert (mit Angabe, was vorher war), abgesagte als „Entfällt“, neue als „Neu“
- **Prüfungen hervorgehoben** (Prüfung, Klausur, Zwischentest, Kolloquium …)
- **Eigene Termine** (Lerngruppe, Prüfung, Abgabe …), auch wöchentlich wiederholt
- **Notizen** zu jedem Uni-Termin, **Raum auf der Karte** öffnen
- **Aufgaben** mit Fälligkeitsdatum und Kurs. Sie erscheinen auch im Kalender.
- **Sicherung** als Datei, Export als .ics für Apple oder Google Kalender
- Funktioniert offline, am iPhone als App auf dem Home-Bildschirm, mit hellem und dunklem Modus

Bedienung: Am Telefon nach links oder rechts wischen, um zu blättern. Am Mac geht das mit
den Pfeiltasten, `T` springt zu heute, `D`/`W`/`L` wechseln die Ansicht.

## So kommst du an deinen Stundenplan

Fast jedes Uni-System kann den persönlichen Kalender als **iCal-Link** ausgeben.
Suche beim Kalender oder Stundenplan nach „Export“, „Abonnieren“, „Veröffentlichen“ oder „iCal“.
In der App unter **Quellen → Wo finde ich den Kalender-Link meiner Uni?** stehen Hinweise
für die gängigen Systeme.

Behandle den Link wie ein Passwort: Wer ihn hat, sieht deinen Stundenplan.

**Wichtig:** Viele Uni-Server erlauben Webseiten nicht, den Link direkt abzurufen
(technisch: CORS-Sperre). Dann zeigt die App das an. Es gibt zwei Auswege:

1. **Datei-Import** (klappt immer): Link im Browser öffnen, die .ics-Datei wird
   heruntergeladen, dann in der App unter *Quellen* importieren. Für ein Update
   bei der Quelle „Datei …“ wählen, dann bleiben Notizen, Farben und
   ausgeblendete Termine erhalten und Änderungen werden markiert.
2. **Proxy** (unter *Quellen → Erweitert*): Ein öffentlicher „CORS-Proxy“ holt die Datei
   stellvertretend. Der Betreiber sieht dabei deinen Kalender-Link. Nimm das nur,
   wenn dich das nicht stört.

## Wo läuft die App?

**Am Mac, sofort:** `index.html` doppelklicken, sie öffnet sich in Safari.
Die Daten bleiben in diesem Browser.

**Am iPhone und Mac als eigene Web-App (empfohlen):** über GitHub Pages veröffentlichen.

1. Den Ordner `uni-kalender` in den Hauptzweig (`main`) bringen.
2. Auf GitHub im Repository: *Settings → Pages → Build and deployment →
   Deploy from a branch*, Zweig `main`, Ordner `/ (root)`, speichern.
3. Nach ein bis zwei Minuten ist die App unter
   `https://<dein-name>.github.io/<repository>/uni-kalender/` erreichbar.
4. Am iPhone in Safari öffnen, *Teilen → Zum Home-Bildschirm*.

Bei einem öffentlichen Repository ist nur der Programmcode öffentlich, nicht deine
Termine. Die bleiben im Browser des jeweiligen Geräts. Für private
Repositories braucht GitHub Pages ein kostenpflichtiges Abo.

**Als claude.ai-Seite:** Die App läuft auch als Artifact in claude.ai. Dort liegen die
Daten in deinem claude.ai-Konto und sind auf allen Geräten gleich, auf denen du
angemeldet bist. Abo-Links kann sie dort nicht laden, nur Dateien importieren.

## Gut zu wissen

- Die Daten liegen im Browser (`localStorage`). Wer die Website-Daten in Safari löscht,
  löscht auch den Kalender. Deshalb ab und zu unter *Quellen* eine Sicherung speichern.
  Mit der Sicherung lassen sich die Daten auch auf ein anderes Gerät übertragen.
- Push-Benachrichtigungen vor Lehrveranstaltungen gibt es nicht. Wer Erinnerungen will,
  kann denselben iCal-Link zusätzlich in Apple Kalender abonnieren
  (*Ablage → Neues Kalenderabonnement*) und dort Hinweise einstellen.
- Abo-Links werden beim Öffnen der App automatisch neu geladen, wenn das letzte Mal
  mehr als 30 Minuten her ist.

## Dateien

| Datei | Zweck |
| --- | --- |
| `index.html` | die ganze App (Aussehen, iCal-Leser, Speicher, Bedienung) |
| `sw.js` | Offline-Zwischenspeicher für die Web-App |
| `manifest.webmanifest`, `icon*.png`, `icon.svg` | Name und Symbol für den Home-Bildschirm |
