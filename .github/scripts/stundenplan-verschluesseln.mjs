// Verschlüsselt den Stundenplan (iCal-Datei) für die öffentliche GitHub-Pages-Seite.
// Nur wer das Passwort kennt (GitHub-Secret UNIKAL_PASSWORT und die App am Handy),
// kann ihn lesen. Verfahren: PBKDF2-SHA256 (600 000 Runden) → AES-256-GCM,
// passend zu WebCrypto im Browser.
//
// Aufruf: UNIKAL_PASSWORT=… node stundenplan-verschluesseln.mjs eingabe.ics ausgabe.json

import { readFileSync, writeFileSync } from "node:fs";
import { randomBytes, pbkdf2Sync, createCipheriv } from "node:crypto";

const [, , inFile, outFile] = process.argv;
const pass = process.env.UNIKAL_PASSWORT || "";

if (!inFile || !outFile) {
  console.error("Aufruf: node stundenplan-verschluesseln.mjs eingabe.ics ausgabe.json");
  process.exit(2);
}
if (pass.length < 12) {
  console.error("::error::Das Secret UNIKAL_PASSWORT ist kürzer als 12 Zeichen. Erzeuge in der App unter „Quellen“ ein sicheres Passwort.");
  process.exit(1);
}

const plain = readFileSync(inFile);
if (!plain.toString("utf8", 0, Math.min(plain.length, 4096)).includes("BEGIN:VCALENDAR")) {
  console.error("::error::Die heruntergeladene Datei ist kein Kalender (BEGIN:VCALENDAR fehlt). Ist der Link in UNIKAL_ICAL_URL noch gültig?");
  process.exit(1);
}

const ITER = 600000;
const salt = randomBytes(16);
const iv = randomBytes(12);
const key = pbkdf2Sync(Buffer.from(pass, "utf8"), salt, ITER, 32, "sha256");
const cipher = createCipheriv("aes-256-gcm", key, iv);
// WebCrypto erwartet das Authentifizierungs-Tag direkt hinter dem Geheimtext.
const data = Buffer.concat([cipher.update(plain), cipher.final(), cipher.getAuthTag()]);

writeFileSync(outFile, JSON.stringify({
  v: 1,
  kdf: "PBKDF2-SHA256",
  iter: ITER,
  alg: "AES-256-GCM",
  salt: salt.toString("base64"),
  iv: iv.toString("base64"),
  data: data.toString("base64"),
  at: new Date().toISOString()
}));
console.log("Stundenplan verschlüsselt: " + plain.length + " Bytes → " + outFile);
