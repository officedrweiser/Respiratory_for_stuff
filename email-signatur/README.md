# E-Mail-Signatur – Kanzlei Dr. Martin Weiser

Neuer Entwurf der E-Mail-Signatur. Die Schrift bleibt **Consolas** wie bisher.
Logo und Schriftzug sehen aus wie auf www.drweiser.at, nur ohne den Hintergrund.

![Vorschau der neuen Signatur](vorschau.png)

## Was ist neu

- Das rote „MW“-Logo mit dem Schriftzug „Dr. Martin Weiser“ wie auf der Website.
  Verwendet werden das Original-Logo und die Website-Schriften (Playfair Display, Inter).
  „Mediator“ steht jetzt mit im Schriftzug.
- Die Telefonnummern stehen so wie auf der Website da: +43 (0)1/205 1003
- Die Signatur ist linksbündig, klarer gegliedert und hat kleine Akzente im Kanzlei-Rot.
- Telefonnummer, E-Mail-Adresse und Website lassen sich anklicken. Am Handy ruft ein Antippen an.
- Im Dunkelmodus steht das Logo auf einer weißen Fläche und bleibt so gut lesbar.
  Am Handy brechen die Zeilen sauber um.

## Dateien

| Datei | Wofür |
| --- | --- |
| `signatur.html` | Signatur für Outlook am PC (klassisches Outlook) |
| `signatur-web.html` | dieselbe Signatur mit eingebautem Logo, für das neue Outlook, Outlook im Web und den Mac |
| `logo-signatur.png` | Logo mit Schriftzug, muss im selben Ordner liegen wie `signatur.html` |
| `vorschau.png` | Vorschau |

## In Outlook einrichten (Windows, klassisches Outlook)

1. Den Ordner `email-signatur` auf den PC laden, z. B. in „Downloads“.
   `signatur.html` und `logo-signatur.png` müssen zusammen im selben Ordner bleiben.
2. `signatur.html` doppelklicken. Die Signatur öffnet sich im Browser.
3. **Strg + A** drücken, dann **Strg + C**.
4. In Outlook auf **Datei → Optionen → E-Mail → Signaturen… → Neu** gehen und einen Namen eingeben, z. B. „Kanzlei“.
5. In das große Bearbeitungsfeld klicken, **Strg + V** drücken und dann auf **Speichern** klicken.
6. Rechts oben bei „Neue Nachrichten“ und „Antworten/Weiterleitungen“ die neue Signatur auswählen und mit **OK** bestätigen.

## Neues Outlook oder Outlook im Web

Die Schritte sind dieselben wie oben, nur mit `signatur-web.html`.
Eingefügt wird unter **Einstellungen (Zahnrad) → Konten → Signaturen**.

## Mac (Apple Mail oder Outlook für Mac)

1. `signatur-web.html` in Safari öffnen.
2. **Cmd + A** drücken, dann **Cmd + C**.
3. Die Signatur im Signatur-Fenster einfügen:
   - Apple Mail: **Mail → Einstellungen → Signaturen**
   - Outlook für Mac: **Outlook → Einstellungen → Signaturen**
4. In Apple Mail unter dem Signaturfeld das Häkchen bei der Standardschrift entfernen.
   Sonst ersetzt Mail die Schrift Consolas.

## Gut zu wissen

- Die Vorschau entstand mit einer Ersatzschrift, die Consolas sehr ähnlich ist.
  In Outlook erscheint die echte Consolas.
- Empfänger ohne Consolas, z. B. am iPhone, sehen automatisch eine ähnliche Schrift.
