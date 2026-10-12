# Nachrichten-Seite automatisch in Safari öffnen

Öffnet https://ft2vzpkpzb-a11y.github.io/Zusammenfassung_Nachrichten_t-glich/ in Safari

- jeden Tag um **7:00 Uhr**
- bei jedem **Start bzw. Anmelden** am Mac

## Einrichten

1. Ordner `safari-nachrichten` auf den Mac laden (z. B. in „Downloads“).
2. Programm **Terminal** öffnen (Spotlight: `Cmd + Leertaste`, „Terminal“ eingeben).
3. Eingeben und mit Enter bestätigen:

   ```bash
   bash ~/Downloads/safari-nachrichten/installieren.sh
   ```

Safari öffnet die Seite dabei sofort einmal – so sieht man, dass es funktioniert.
macOS zeigt eventuell die Meldung „Hintergrundobjekt hinzugefügt“ – das ist in Ordnung.

## Gut zu wissen

- Schläft der Mac um 7:00 Uhr (Deckel zu), öffnet sich die Seite beim Aufwachen.
- Ist der Mac um 7:00 Uhr ausgeschaltet, öffnet sie sich beim nächsten Einschalten.
- Nur Deckel auf- und zuklappen (ohne neu zu starten) öffnet die Seite nicht zusätzlich.

## Wieder abschalten

```bash
bash ~/Downloads/safari-nachrichten/entfernen.sh
```
