#!/bin/bash
# Schaltet das automatische Öffnen wieder ab.
# Ausführen im Terminal:  bash entfernen.sh

LABEL="local.nachrichten.safari"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"

launchctl bootout "gui/$(id -u)/$LABEL" 2>/dev/null || true
rm -f "$PLIST"

echo "Entfernt. Die Seite öffnet sich nicht mehr automatisch."
