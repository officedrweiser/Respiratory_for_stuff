#!/bin/bash
# Öffnet die Nachrichten-Zusammenfassung in Safari:
#   - jeden Tag um 7:00 Uhr
#   - bei jedem Start/Anmelden am Mac
# Ausführen im Terminal:  bash installieren.sh

set -e

URL="https://ft2vzpkpzb-a11y.github.io/Zusammenfassung_Nachrichten_t-glich/"
LABEL="local.nachrichten.safari"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"

mkdir -p "$HOME/Library/LaunchAgents"

cat > "$PLIST" <<PLIST_EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>$LABEL</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/open</string>
        <string>-a</string>
        <string>Safari</string>
        <string>$URL</string>
    </array>
    <!-- Beim Start bzw. Anmelden am Mac öffnen -->
    <key>RunAtLoad</key>
    <true/>
    <!-- Jeden Tag um 7:00 Uhr öffnen -->
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>7</integer>
        <key>Minute</key>
        <integer>0</integer>
    </dict>
</dict>
</plist>
PLIST_EOF

# Alte Version entfernen (falls schon installiert) und neu laden
launchctl bootout "gui/$(id -u)/$LABEL" 2>/dev/null || true
launchctl bootstrap "gui/$(id -u)" "$PLIST"

echo "Fertig. Safari öffnet die Seite jetzt täglich um 7:00 Uhr und bei jedem Start des Macs."
